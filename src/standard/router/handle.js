import extractArgs from './extractArgs'
import extractBody from './extractBody'
import extractParams from './extractParams'
import findMatchingRoute from './findMatchingRoute'

/**
 * Handle HTTP Request
 *
 * This function handles the incoming HTTP request by matching the requested path and method
 * to the registered route listeners and invoking the corresponding page handler function.
 *
 * @param {Request} request - The incoming HTTP request object.
 * @param {any} env - The environment object.
 * @param {any} ctx - The context object.
 * @returns {Promise<Response|undefined>} The response object or undefined if no matching route is found.
 */
async function handle (request, env, ctx) {
  const { page, path } = findMatchingRoute(request)

  await extractBody(request)
  extractArgs(request)
  extractParams(request, path)

  return page?.(request, env, ctx)
}

export default handle

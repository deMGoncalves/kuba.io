import listeners from './listeners'

/**
 * Find Matching Route
 *
 * This function finds the first route that matches the requested method and path pattern.
 *
 * @param {Request} request - The incoming HTTP request object.
 * @returns {Route|undefined} The matching route object or undefined if no match is found.
 */
function findMatchingRoute(request) {
  const url = new URL(request.url)
  const path = url.pathname.replace(/:\w+/g, '([a-z0-9-_]+)')
  const pattern = new RegExp(`^${path}$`, 'i')
  return listeners[request.method].find(({ path }) => pattern.test(path)) ?? {}
}

export default findMatchingRoute

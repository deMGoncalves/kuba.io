import params from './params'

/**
 * Extract Path Parameters
 *
 * Extracts path parameters from the request URL and stores them in the params object.
 *
 * @param {Request} request - The request object containing the URL.
 * @param {string} path - The path pattern with placeholders for parameters (e.g., '/users/:id').
 */
function extractParams (request, path) {
  const url = new URL(request.url)
  const keys = path?.split('/')
  const values = url.pathname.split('/')
  keys?.forEach((key, i) => /^:/.test(key) && Reflect.set(params, key.slice(1), values[i]))
}

export default extractParams

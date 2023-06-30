import args from './args'

/**
 * Extract Request Arguments
 *
 * Extracts query string parameters from the request URL and stores them in the args object.
 *
 * @param {Request} request - The request object containing the URL with query string parameters.
 */
function extractArgs (request) {
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search)
  Array.from(search.entries()).forEach(([key, value]) => Reflect.set(args, key, value))
}

export default extractArgs

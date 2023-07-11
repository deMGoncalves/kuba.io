import body from './body'

/**
 * Extracts the body from a request object and assigns it to the body object.
 *
 * @param {Request} request - The request object.
 * @returns {Promise<void>} A promise that resolves once the body has been extracted and assigned.
 */
async function extractBody (request) {
  /POST|PUT/i.test(request.method) &&
  /application\/json/i.test(request.headers.get('Content-Type')) && (
    Object.assign(body, await request.json())
  )
}

export default extractBody

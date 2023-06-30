/**
 * Wraps a promise and returns an object containing the resolved data or any encountered error.
 * @param {Promise} promise - The promise to wrap.
 * @returns {Promise<{ data: any, error: any }>} A promise that resolves to an object containing the resolved data or any encountered error.
 */
function outlet (promise) {
  return promise
    .then(data => ({ data, error: null }))
    .catch(error => ({ data: null, error }))
}

export default outlet

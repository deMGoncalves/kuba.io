import outlet from './outlet'

/**
 * HTTP client for making requests.
 * @type {Object}
 */
export default new Proxy({}, {
  /**
   * Proxy handler for intercepting property access.
   * @param {Object} _ - The target object.
   * @param {string} method - The method name being accessed.
   * @returns {Function} The function to handle the method.
   */
  get (_, method) {
    /**
     * Handler function for the method.
     * @param {string} url - The URL to make the request to.
     * @returns {Object} The request builder object.
     */
    return function (url) {
      /**
       * The request initialization options.
       * @type {Object}
       */
      const init = {
        method
      }

      /**
       * The request builder object.
       * @type {Object}
       */
      return {
        /**
         * Sends the request and returns a promise that resolves to the response body as a Blob.
         * @returns {Promise<Blob>} The promise resolving to the response body as a Blob.
         */
        blob () {
          return outlet(
            fetch(url, init).then(response => response.blob())
          )
        },

        /**
         * Sets the request body as JSON.
         * @param {any} body - The request body to be sent as JSON.
         * @returns {Object} The request builder object.
         */
        body (body) {
          Object.assign(init, {
            body: JSON.stringify(body)
          })
          return this
        },

        /**
         * Sets the cache mode for the request.
         * @param {string} cache - The cache mode for the request.
         * @returns {Object} The request builder object.
         */
        cache (cache) {
          Object.assign(init, { cache })
          return this
        },

        /**
         * Sets the headers for the request.
         * @param {Object} headers - The headers object for the request.
         * @returns {Object} The request builder object.
         */
        headers (headers) {
          Object.assign(init, {
            headers: new Headers(headers)
          })
          return this
        },

        /**
         * Sends the request and returns a promise that resolves to the response body as JSON.
         * @returns {Promise<any>} The promise resolving to the response body as JSON.
         */
        json () {
          return outlet(
            fetch(url, init).then(response => response.json())
          )
        },

        /**
         * Sets the mode for the request.
         * @param {string} mode - The mode for the request.
         * @returns {Object} The request builder object.
         */
        mode (mode) {
          Object.assign(init, { mode })
          return this
        },

        /**
         * Sets the signal for the request.
         * @param {AbortSignal} signal - The signal for the request.
         * @returns {Object} The request builder object.
         */
        signal (signal) {
          Object.assign(init, { signal })
          return this
        },

        /**
         * Sends the request and returns a promise that resolves to the response body as text.
         * @returns {Promise<string>} The promise resolving to the response body as text.
         */
        text () {
          return outlet(
            fetch(url, init).then(response => response.text())
          )
        }
      }
    }
  }
})

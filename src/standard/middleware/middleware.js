/**
 * Creates a middleware that wraps a class constructor and adds additional functionality.
 *
 * @param {Function} functionRef - The middleware function to be executed.
 * @returns {Function} The wrapped class constructor.
 */
function middleware (functionRef) {
  return function (ClassRef) {
    return new Proxy(
      /**
       * Creates a new instance of the class and executes the middleware function.
       *
       * @returns {Promise} A promise that resolves to the instance of the class.
       */
      function () {
        return new Promise(async function (resolve) {
          const instance = await new ClassRef(...arguments)
          const next = () => resolve(instance)
          functionRef(instance, next)
        })
      },
      {
        /**
         * Retrieves the value of a property from the class constructor.
         *
         * @param {Object} _ - The target object.
         * @param {string | symbol} key - The property key.
         * @returns {*} The value of the property.
         */
        get: (_, key) => Reflect.get(ClassRef, key),

        /**
         * Sets the value of a property in the class constructor.
         *
         * @param {Object} _ - The target object.
         * @param {string | symbol} key - The property key.
         * @param {*} value - The value to be set.
         * @returns {boolean} A boolean indicating if the assignment was successful.
         */
        set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
  }
}

export default middleware

/**
 * Decorator function for validating methods based on the HTTP request method.
 *
 * @param {object} _target - The target object.
 * @param {string} _prop - The property name.
 * @param {object} descriptor - The method descriptor.
 */
function forMethodsValid (_target, _prop, descriptor) {
  const get = descriptor.get
  Object.assign(descriptor, {
    /**
     * Overrides the original getter and returns the value only if the HTTP request method is "POST" or "PUT".
     *
     * @returns {*} The value returned by the original getter or undefined.
     */
    get () {
      return /POST|PUT/i.test(this.method)
        ? get.call(this)
        : undefined
    }
  })
}

export default forMethodsValid

/**
 * Creates a decorator function that wraps a component class with rendering functionality.
 *
 * @param {Function} component - The rendering function that transforms the component instance.
 * @returns {Function} The decorator function.
 */
function paint(component) {
  /**
   * Decorator function that wraps the provided component class with rendering functionality.
   *
   * @param {Function} ClassRef - The component class to be decorated.
   * @returns {Proxy} The decorated component class wrapped in a Proxy.
   */
  return function (ClassRef) {
    return new Proxy(
      /**
       * Proxy handler function that intercepts the creation and usage of the component instance.
       *
       * @param {Object} attrs - The attributes passed to the component instance.
       * @param {Array} children - The children passed to the component instance.
       * @returns {Object|string} The transformed component instance or its rendered text content.
       */
      async function (attrs, children) {
        const instance = (this instanceof ClassRef)
          ? await new ClassRef(...arguments)
          : await new ClassRef(attrs)

        const textContent = component(instance, children)

        Object.assign(instance, {
          [paint.textContent]: () => textContent
        })

        return (this instanceof ClassRef)
          ? instance
          : textContent
      },
      {
        /**
         * Proxy trap for getting a property from the component class.
         *
         * @param {Object} _ - The target object (unused in this case).
         * @param {string} key - The property key.
         * @returns {*} The value of the property.
         */
        get: (_, key) => Reflect.get(ClassRef, key),

        /**
         * Proxy trap for setting a property on the component class.
         *
         * @param {Object} _ - The target object (unused in this case).
         * @param {string} key - The property key.
         * @param {*} value - The value to be set.
         * @returns {boolean} Returns true indicating the property was successfully set.
         */
        set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
  }
}

Object.assign(paint, {
  /**
   * Symbol used to identify the text content property in the decorated component instance.
   */
  textContent: Symbol('textContent')
})

export default paint

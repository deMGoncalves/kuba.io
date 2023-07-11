/**
 * Proxy object for DOM manipulations.
 *
 * @namespace DOM
 */
const DOM = new Proxy(
  {
    /**
     * Sets the innerHTML property of a target element to the provided text content.
     *
     * @memberof DOM
     * @param {string} textContent - The text content to set.
     * @param {Element} target - The target element.
     */
    innerHTML (textContent, target) {
      target.innerHTML = textContent
    },

    /**
     * A stub function that does nothing.
     *
     * @memberof DOM
     * @returns {undefined}
     */
    stub: () => undefined
  },
  {
    /**
     * Retrieves the specified property from the target object.
     * If the property does not exist, it returns a function that can be used to perform DOM manipulation.
     *
     * @memberof DOM
     * @param {object} target - The target object.
     * @param {string} where - The property name.
     * @returns {function} A function that performs DOM manipulation.
     */
    get (target, where) {
      return target[where] ?? ((textContent, node) => node.insertAdjacentHTML(where, textContent))
    }
  }
)

export default DOM

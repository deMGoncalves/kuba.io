/**
 * Prevents the default behavior of an event.
 *
 * @param {object} _target - The target object.
 * @param {string} _prop - The property name.
 * @param {object} descriptor - The property descriptor.
 * @returns {object} The modified property descriptor.
 */
function preventDefault (_target, _prop, descriptor) {
  const method = descriptor.value
  Object.assign(descriptor, {
    /**
     * Modified event handler that prevents the default behavior before invoking the original method.
     *
     * @param {Event} event - The event object.
     */
    value (event) {
      event.preventDefault()
      method.call(this, event)
    }
  })
}

export default preventDefault

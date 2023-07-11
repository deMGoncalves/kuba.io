/**
 * Decorator function for event matching.
 *
 * @param {object} _target - The target object.
 * @param {string} _prop - The property name.
 * @param {object} descriptor - The method descriptor.
 */
function eventMatching (_target, _prop, descriptor) {
  const method = descriptor.value
  Object.assign(descriptor, {
    /**
     * Overrides the original method and only executes it if the event target matches a specified selector.
     *
     * @param {Event} event - The event object.
     */
    value (event) {
      event.target.matches('[data-action]') && method(event)
    }
  })
}

export default eventMatching

/**
 * Utility class for handling components in JSX.
 */
class Componet {
  /**
   * Executes the given component with the provided attributes and children.
   *
   * @static
   * @param {Function} component - The component function to be executed.
   * @param {Object} attrs - The attributes to be passed to the component.
   * @param {Array} children - The children to be passed to the component.
   * @returns {*} The result of executing the component.
   */
  static execute (component, attrs, children) {
    return component(attrs, children)
  }

  /**
   * Checks if the given value is a valid component.
   *
   * @static
   * @param {*} component - The value to be checked.
   * @returns {boolean} True if the value is a component, false otherwise.
   */
  static is (component) {
    return typeof component === 'function'
  }
}

export default Componet

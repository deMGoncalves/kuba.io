import paint from './paint'

/**
 * Instance is a utility class that provides methods for mapping and manipulating child instances.
 */
class Instance {
  /**
   * Maps and transforms the child instances based on their paint.textContent method.
   *
   * @static
   * @param {Array} children - The array of child instances to be mapped.
   * @returns {Array} The mapped child instances.
   */
  static mapper(children) {
    return children.map((child) => (child[paint.textContent]?.() ?? child))
  }
}

export default Instance

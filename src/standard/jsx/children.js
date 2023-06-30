import Instance from './instance'

/**
 * Utility class for handling JSX children.
 */
class Children {
  /**
   * Maps and filters the JSX children to ensure they are in the proper format.
   *
   * @static
   * @param {Array} children - The JSX children to be mapped and filtered.
   * @returns {Array} The mapped and filtered JSX children.
   */
  static async mapper(children) {
    children = await Promise.all(children)
    children = children.flat(Infinity)
    children = children.filter(Boolean)
    children = Instance.mapper(children)
    return children
  }

  /**
   * Converts the JSX children into a string.
   *
   * @static
   * @param {Array} children - The JSX children to be converted into a string.
   * @returns {string} The string representation of the JSX children.
   */
  static stringify(children) {
    return children.join('')
  }
}

export default Children

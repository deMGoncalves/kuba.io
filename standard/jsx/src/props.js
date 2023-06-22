/**
 * Utility class for handling props (attributes) of JSX elements.
 */
class Props {
  /**
   * Converts an object of props (attributes) into a string representation.
   *
   * @static
   * @param {Object} attrs - The props (attributes) object.
   * @returns {string} The string representation of the props.
   */
  static stringify(attrs) {
    return Object.entries(attrs)
      .map(([key, value]) => `${key}='${value}'`)
      .join(' ')
  }
}

export default Props

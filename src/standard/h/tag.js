/**
 * Utility class for working with tags in JSX elements.
 */
class Tag {
  /**
   * Checks if a tag is a self-closing tag based on the element name.
   *
   * @static
   * @param {string} element - The element tag naame.
   * @returns {boolean} True if the tag is self-closing, false otherwise.
   */
  static isSelfClose (element) {
    return /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i.test(element)
  }
}

export default Tag

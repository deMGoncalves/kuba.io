/**
 * Utility class for working with tags in JSX elements.
 */
class Tag {
  /**
   * Checks if a tag is a self-closing tag based on the presence of children.
   *
   * @static
   * @param {Array} children - The children of the tag.
   * @returns {boolean} True if the tag is self-closing, false otherwise.
   */
  static isSelfClose (children) {
    return (children?.length === 0)
  }
}

export default Tag

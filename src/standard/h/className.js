/**
 * Class representing a utility for mapping class names in attributes.
 */
class ClassName {
  /**
   * Maps class names in the provided attributes object.
   *
   * @param {object} attrs - The attributes object.
   * @returns {object} The updated attributes object with mapped class names.
   */
  static mapper (attrs) {
    attrs.class = []
      .concat(attrs.className)
      .flat(Infinity)
      .join(' ')
    delete attrs.className
    return attrs
  }
}

export default ClassName

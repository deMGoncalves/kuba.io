import Children from './children'
import Props from './props'
import Tag from './tag'

/**
 * Utility class for creating JSX elements.
 */
class Element {
  /**
   * Creates an HTML string representation of the JSX element with the given element type, attributes, and children.
   *
   * @static
   * @param {string} element - The element type.
   * @param {Object} attrs - The attributes for the element.
   * @param {Array} children - The children of the element.
   * @returns {string} The HTML string representation of the JSX element.
   */
  static create(element, attrs, children) {
    const selfClose = Tag.isSelfClose(children)
    const props = Props.stringify(attrs)
    const textContent = Children.stringify(children)

    return selfClose
      ? `<${element} ${props}/>`
      : `<${element} ${props}>${textContent}</${element}>`
  }
}

export default Element

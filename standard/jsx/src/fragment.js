import Children from './children'

/**
 * Fragment is a utility function used as a placeholder for multiple JSX elements.
 *
 * @param {Object} _attrs - The attributes for the Fragment (ignored in this implementation).
 * @param {Array} children - The children of the Fragment.
 * @returns {string} The concatenated string representation of the children.
 */
function Fragment(_attrs, children) {
  return Children.stringify(children)
}

export default Fragment

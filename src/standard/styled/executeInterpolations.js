/**
 * Execute interpolations for CSS-in-JS.
 *
 * This function takes an array of expressions, each representing a CSS-in-JS interpolation,
 * and a `props` object containing the values for the interpolations.
 *
 * @param {Array<Function>} expressions - An array of expressions representing the CSS-in-JS interpolations.
 * @param {Object} props - An object containing the values for the interpolations.
 * @returns {Array} - An array containing the results of executing the interpolations.
 */
function executeInterpolations (expressions, props) {
  return expressions.map((e) => e?.(props))
}

export default executeInterpolations

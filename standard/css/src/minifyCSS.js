import whiteSpaceRegex from './whiteSpaceRegex'

/**
 * Minifies the given CSS by removing white spaces.
 *
 * @param {string} css - The CSS to be minified.
 * @returns {string} The minified CSS.
 */
function minifyCSS (css) {
  return css.replace(whiteSpaceRegex, ' ').trim()
}

export default minifyCSS

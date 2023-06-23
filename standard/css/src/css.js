import minifyCSS from './minifyCSS'
import textContent from './textContent'
import transformCSS from './transformCss'
import zip from './zip'

/**
 * Generates and applies CSS transformations to the provided template literal strings and expressions.
 * Minifies the resulting CSS and adds it to the textContent array.
 * Returns a class map object.
 *
 * @param {TemplateStringsArray} strings - The template literal strings containing CSS code.
 * @param {...any} expressions - The template literal expressions containing dynamic CSS values.
 * @returns {Object} The class map object representing the transformed CSS classes.
 */
function css (strings, ...expressions) {
  const { classMap, transformedCSS } = transformCSS(minifyCSS(zip(strings, expressions)))
  textContent.push(transformedCSS)
  return classMap
}

export default css

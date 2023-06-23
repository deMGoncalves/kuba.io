import classSelectorRegex from './classSelectorRegex'
import generateHash from './generateHash'

/**
 * Transforms CSS by replacing class selectors with generated hashes.
 *
 * @param {string} css - The CSS to transform.
 * @returns {Object} An object containing the class map and the transformed CSS.
 * @property {Object} classMap - A map of class names and their corresponding generated hashes.
 * @property {string} transformedCSS - The CSS with class selectors replaced by hashes.
 */
function transformCSS(css) {
  const classMap = {}
  const transformedCSS = css.replace(classSelectorRegex, (match, className) => {
    const key = className.slice(2)
    const value = generateHash()
    Reflect.set(classMap, key, value)
    return `.${value}`
  })

  return {
    classMap,
    transformedCSS
  }
}

export default transformCSS

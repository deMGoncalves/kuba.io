import classSelectorRegex from './classSelectorRegex'
import generateHash from './generateHash'

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

import textContent from './textContent'
import transformCSS from './transformCss'
import zip from './zip'

function css (strings, ...expressions) {
  const { classMap, transformedCSS } = transformCSS(zip(strings, expressions).flat(Infinity).join('').replace(/[\n ]+/g, ' ').trim())
  textContent.push(transformedCSS)
  return classMap
}

export default css

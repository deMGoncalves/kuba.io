import minifyCSS from './minifyCSS'
import textContent from './textContent'
import transformCSS from './transformCss'
import zip from './zip'

function css (strings, ...expressions) {
  const { classMap, transformedCSS } = transformCSS(minifyCSS(zip(strings, expressions)))
  textContent.push(transformedCSS)
  return classMap
}

export default css

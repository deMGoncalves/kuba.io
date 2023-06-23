import whiteSpaceRegex from './whiteSpaceRegex'

function minifyCSS (css) {
  return css.replace(whiteSpaceRegex, ' ').trim()
}

export default minifyCSS

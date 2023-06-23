/**
 * Expressão regular para selecionar classes em um seletor CSS.
 * @type {RegExp}
 */
const classSelectorRegex = /\.[a-zA-Z0-9_-]+(?![^()]*\))/g

export default classSelectorRegex

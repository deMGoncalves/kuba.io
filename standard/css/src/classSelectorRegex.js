/**
 * Regular expression pattern for matching CSS class selectors.
 *
 * @type {RegExp}
 */
const classSelectorRegex = /\.[a-zA-Z0-9_-]+(?![^()]*\))/g

export default classSelectorRegex

/**
 * Regular expression pattern for matching CSS class selectors.
 *
 * @type {RegExp}
 */
const classSelectorRegex = /\.[a-z_][a-z0-9_-]*(?![^()]*\))/ig

export default classSelectorRegex

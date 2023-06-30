/**
 * Regular expression to match and remove multiple whitespace characters, newlines, and tabs.
 *
 * @type {RegExp}
 */
const whiteSpaceRegex = /[\s]{2,}|[\r\n\t]+/g

export default whiteSpaceRegex

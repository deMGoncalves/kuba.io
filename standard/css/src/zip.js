/**
 * Zips together the strings and expressions into a single string.
 *
 * @param {string[]} strings - An array of strings.
 * @param {...any} expressions - Rest parameters representing the expressions.
 * @returns {string} The zipped string.
 */
function zip (strings, expressions) {
  return Array(Math.max(strings.length, expressions.length))
    .fill()
    .map((_, i) => [strings[i], expressions[i]])
    .flat(Infinity)
    .join('')
}

export default zip

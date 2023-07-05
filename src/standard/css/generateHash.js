/**
 * Generates a random hash string.
 *
 * @returns {string} The generated hash string.
 */
function generateHash () {
  return `_${Math.random().toString(36).slice(2)}`
}

export default generateHash

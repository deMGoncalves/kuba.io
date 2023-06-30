/**
 * Generates a random hash string.
 *
 * @returns {string} The generated hash string.
 */
function generateHash () {
  return Math.random().toString(36)
}

export default generateHash

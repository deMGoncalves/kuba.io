/**
 * Array of allowed alignment modifiers.
 * @type {string[]}
 */
const modifiers = [
  'left',
  'center',
  'right'
]

/**
 * Aligns the content based on the provided props.
 *
 * @param {Object} props - The props object containing alignment modifiers.
 * @returns {string} The calculated alignment. One of: 'left', 'center', 'right', or 'inherit' (default).
 */
function align (props) {
  return modifiers.find((modifier) => props[modifier]) ?? 'inherit'
}

export default align

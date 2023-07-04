/**
 * Array of allowed font weight modifiers.
 * @type {string[]}
 */
const modifiers = [
  'bold',
  'medium',
  'regular'
]

/**
 * Computes the CSS variable representing the desired font weight based on the provided props.
 *
 * @param {Object} props - The props object containing font weight modifier properties.
 * @returns {string} The CSS variable representing the desired font weight.
 */
function weight (props) {
  const modifier = modifiers.find((modifier) => props[modifier]) ?? 'regular'
  return `var(--font-weight-${modifier})`
}

export default weight

/**
 * Array of allowed font family modifiers.
 * @type {string[]}
 */
const modifiers = [
  'base',
  'highlight'
]

/**
 * Computes the CSS variable representing the desired font family based on the provided props.
 *
 * @param {Object} props - The props object containing font family modifier properties.
 * @returns {string} The CSS variable representing the desired font family.
 */
function family (props) {
  const modifier = modifiers.find((modifier) => props[modifier]) ?? 'base'
  return `var(--font-family-${modifier})`
}

export default family

/**
 * Array of allowed font size modifiers.
 * @type {string[]}
 */
const modifiers = [
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'display',
  'giant'
]

/**
 * Computes the CSS variable representing the desired font size based on the provided props.
 *
 * @param {Object} props - The props object containing font size modifier properties.
 * @returns {string} The CSS variable representing the desired font size.
 */
function size (props) {
  const modifier = modifiers.find((modifier) => props[modifier]) ?? 'xs'
  return `var(--font-size-${modifier})`
}

export default size

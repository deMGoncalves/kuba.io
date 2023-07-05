/**
 * Array of allowed color names.
 * @type {string[]}
 */
const colors = [
  'complete',
  'danger',
  'info',
  'primary',
  'success',
  'warning'
]

/**
 * Computes the CSS variable representing the desired color based on the provided props.
 *
 * @param {Object} props - The props object containing color and modifier properties.
 * @returns {string} The CSS variable representing the desired color with the applied modifier (if any).
 */
function color (props) {
  const color = colors.find((color) => props[color]) ?? 'primary'
  return `var(--color-${color})`
}

export default color

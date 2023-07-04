/**
 * Array of allowed color names.
 * @type {string[]}
 */
const colors = [
  'complete',
  'danger',
  'info',
  'master',
  'menu',
  'primary',
  'success',
  'warning'
]

/**
 * Array of allowed color modifiers.
 * @type {string[]}
 */
const modifiers = [
  'darkest',
  'darker',
  'dark',
  'light',
  'lighter',
  'lightest'
]

/**
 * Computes the CSS variable representing the desired color based on the provided props.
 *
 * @param {Object} props - The props object containing color and modifier properties.
 * @returns {string} The CSS variable representing the desired color with the applied modifier (if any).
 */
function color (props) {
  const color = colors.find((color) => props[color]) ?? 'master'
  const modifier = modifiers.find((modifier) => props[modifier])
  return `var(--color-${[color, modifier].filter(Boolean).join('-')})`
}

export default color

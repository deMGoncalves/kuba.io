import executeInterpolations from './executeInterpolations'
import h from '@standard/h'
import minifyCSS from './minifyCSS'
import zip from './zip'

/**
 * Creates a styled component for CSS-in-JS.
 *
 * The `styled` function creates a styled component using CSS-in-JS. It uses template literals
 * to define the styles and allows for dynamic interpolations using expressions. The styled
 * component is returned as a function that can be used to render elements with the specified
 * styles.
 *
 * @param {string[]} strings - The template literal strings containing the CSS styles.
 * @param {...Function} expressions - The dynamic interpolations to be evaluated as part of the styles.
 * @returns {Function} - A function that can be used to render elements with the specified styles.
 */
const styled = new Proxy({}, {
  get (_target, key) {
    return function (strings, ...expressions) {
      return function (props, children) {
        const style = minifyCSS(zip(strings, executeInterpolations(expressions, props)))
        return h(key, { style, ...props }, ...children)
      }
    }
  }
})

export default styled

import * as p from '@standard/polished'
import styled from '@standard/styled'

/**
 * A Proxy object that returns styled text components with dynamic styles based on the properties accessed.
 *
 * @type {Proxy}
 */
const text = new Proxy({}, {
  /**
   * Getter function for the Proxy object.
   *
   * @param {Object} _target - The target object.
   * @param {string} key - The property being accessed.
   * @returns {function} - A styled text component with dynamic styles based on the accessed property.
   */
  get (_target, key) {
    return styled[key]`
      color: ${p.color};
      font-family: ${p.family};
      font-size: ${p.size};
      font-weight: ${p.weight};
      line-height: var(--line-height-md);
      text-align: ${p.align};
    `
  }
})

export default text

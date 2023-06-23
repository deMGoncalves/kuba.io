/**
 * Simulates Python's magic methods in JavaScript by creating unique symbols for method identifiers.
 *
 * @returns {Proxy} A proxy object with overridden get handler.
 */
const magic = new Proxy({}, {
  /**
   * Overrides the get handler of the proxy object.
   *
   * @param {Object} target - The target object.
   * @param {string} prop - The property being accessed.
   * @returns {symbol} The unique symbol corresponding to the method identifier.
   */
  get: (target, prop) => (target[prop] ??= Symbol(prop))
})

export default magic

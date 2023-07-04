import magic from '@standard/magic'

/**
 * Resolves double underscores (dunders) for the given function reference.
 *
 * @param {Function} functionRef - The function reference to be resolved.
 * @returns {Function} A new function that resolves double underscores (dunders) in the input arguments before calling the original function.
 * @throws {TypeError} If 'functionRef' is not a function.
 *
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * const resolvedAdd = resolveDunders(add);
 * const obj = { '__add__': 2, 'b': 3 };
 * console.log(resolvedAdd(obj, 4)); // Output: 6 (2 + 4)
 *
 * @see magic
 */
function resolveDunders (functionRef) {
  /**
   * @param {...*} args - Arguments to be resolved for double underscores (dunders).
   * @returns {*} The result of the original function after resolving the double underscores (dunders).
   */
  return function (...args) {
    const method = magic[functionRef.name]
    const evaluate = (value) => (value?.[method]?.() ?? value)
    return functionRef(...args.map(evaluate))
  }
}

export default resolveDunders

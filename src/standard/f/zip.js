import arity from './arity'
import curry from './curry'
import resolveDunders from './resolveDunders'

/**
 * Combines two arrays into a single array, where each element of the new array is a pair
 * formed by corresponding elements from the original arrays. If the arrays have different
 * sizes, the result will have the size of the larger array, and excess elements from the
 * smaller array will be represented by undefined.
 *
 * @param {Array} x - The first array to be combined.
 * @param {Array} y - The second array to be combined.
 * @returns {Array} A new array containing pairs of corresponding elements from 'x' and 'y'.
 * @throws {TypeError} If 'x' or 'y' are not arrays.
 *
 * @example
 * const x = [1, 2, 3];
 * const y = ['a', 'b', 'c'];
 * const result = zip(x, y); // result: [[1, 'a'], [2, 'b'], [3, 'c']]
 */
function zip (x, y) {
  const n = Math.max(x.length, y.length)
  return Array(n).fill(undefined).map((_, i) => [x[i], y[i]])
}

export default curry(arity(2, resolveDunders(zip)))

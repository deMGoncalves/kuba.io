import __ from './__'
import oneParameter from './oneParameter'

/**
 * Creates an evaluation function that accepts two parameters for the given function reference.
 *
 * @param {Function} functionRef - The function reference to be evaluated.
 * @returns {Function} An evaluation function that accepts two parameters and returns either a new evaluation function or the result of the original function.
 * @throws {TypeError} If 'functionRef' is not a function.
 *
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * const evaluatedAdd = twoParameters(add);
 * console.log(evaluatedAdd(2, 3)); // Output: 5
 *
 * const chainedEvaluatedAdd = evaluatedAdd(2); // Returns a new evaluation function with one remaining parameter.
 * console.log(chainedEvaluatedAdd(3)); // Output: 5
 * console.log(chainedEvaluatedAdd()); // Output: [Function: evaluate]
 *
 * @see __
 * @see oneParameter
 */
function twoParameters (functionRef) {
  return function evaluate (a, b) {
    switch (arguments.length) {
      case 0:
        return evaluate
      case 1:
        return __.is(a)
          ? evaluate
          : oneParameter((...args) => functionRef(a, ...args))
      default:
        return __.is(a) && __.is(b)
          ? evaluate
          : __.is(a)
            ? oneParameter((_a, ...args) => functionRef(_a, b, ...args))
            : __.is(b)
              ? oneParameter((...args) => functionRef(a, ...args))
              : functionRef(...arguments)
    }
  }
}

/**
 * Checks if the provided function reference has an arity of two (accepts two parameters).
 *
 * @param {Function} functionRef - The function reference to be checked.
 * @returns {boolean} True if the function has an arity of two, otherwise false.
 *
 * @example
 * function multiply(a, b) {
 *   return a * b;
 * }
 *
 * const hasTwoParameters = twoParameters.is(multiply); // Returns true
 * const hasThreeParameters = twoParameters.is(function(a, b, c) { return a + b + c; }); // Returns false
 */
Object.assign(twoParameters, {
  is: (functionRef) => functionRef.length === 2
})

export default twoParameters

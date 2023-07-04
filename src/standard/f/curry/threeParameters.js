import __ from './__'
import oneParameter from './oneParameter'
import twoParameters from './twoParameters'

/**
 * Creates an evaluation function that accepts three parameters for the given function reference.
 *
 * @param {Function} functionRef - The function reference to be evaluated.
 * @returns {Function} An evaluation function that accepts three parameters and returns either a new evaluation function or the result of the original function.
 * @throws {TypeError} If 'functionRef' is not a function.
 *
 * @example
 * function addThreeNumbers(a, b, c) {
 *   return a + b + c;
 * }
 *
 * const evaluatedAdd = threeParameters(addThreeNumbers);
 * console.log(evaluatedAdd(2, 3, 4)); // Output: 9
 *
 * const chainedEvaluatedAdd = evaluatedAdd(2); // Returns a new evaluation function with two remaining parameters.
 * console.log(chainedEvaluatedAdd(3, 4)); // Output: 9
 * console.log(chainedEvaluatedAdd(3)); // Output: [Function: evaluate]
 *
 * @see __
 * @see oneParameter
 * @see twoParameters
 */
function threeParameters (functionRef) {
  return function evaluate (a, b, c) {
    switch (arguments.length) {
      case 0:
        return evaluate
      case 1:
        return __.is(a)
          ? evaluate
          : twoParameters((...args) => functionRef(a, ...args))
      case 2:
        return __.is(a) && __.is(b)
          ? evaluate
          : __.is(a)
            ? twoParameters((_a, ...args) => functionRef(_a, b, ...args))
            : __.is(b)
              ? twoParameters((...args) => functionRef(a, ...args))
              : oneParameter((...args) => functionRef(a, b, ...args))
      default:
        return __.is(a) && __.is(b) && __.is(c)
          ? evaluate
          : __.is(a) && __.is(b)
            ? twoParameters((_a, _b, ...args) => functionRef(_a, _b, c, ...args))
            : __.is(a) && __.is(c)
              ? twoParameters((_a, ...args) => functionRef(_a, b, ...args))
              : __.is(b) && __.is(c)
                ? twoParameters((...args) => functionRef(a, ...args))
                : __.is(a)
                  ? oneParameter((_a, ...args) => functionRef(_a, b, c, ...args))
                  : __.is(b)
                    ? oneParameter((_b, ...args) => functionRef(a, _b, c, ...args))
                    : __.is(c)
                      ? oneParameter((...args) => functionRef(a, b, ...args))
                      : functionRef(...arguments)
    }
  }
}

/**
 * Checks if the provided function reference has an arity of three (accepts three parameters).
 *
 * @param {Function} functionRef - The function reference to be checked.
 * @returns {boolean} True if the function has an arity of three, otherwise false.
 *
 * @example
 * function multiplyThreeNumbers(a, b, c) {
 *   return a * b * c;
 * }
 *
 * const hasThreeParameters = threeParameters.is(multiplyThreeNumbers); // Returns true
 * const hasTwoParameters = threeParameters.is(function(a, b) { return a + b; }); // Returns false
 */
Object.assign(threeParameters, {
  is: (functionRef) => functionRef.length === 3
})

export default threeParameters

import __ from './__'

/**
 * Creates an evaluation function that accepts a single parameter for the given function reference.
 *
 * @param {Function} functionRef - The function reference to be evaluated.
 * @returns {Function} An evaluation function that accepts a single parameter and returns either a new evaluation function or the result of the original function.
 * @throws {TypeError} If 'functionRef' is not a function.
 *
 * @example
 * function increment(value) {
 *   return value + 1;
 * }
 *
 * const evaluatedIncrement = oneParameter(increment);
 * console.log(evaluatedIncrement(5)); // Output: 6
 *
 * const chainedEvaluatedIncrement = evaluatedIncrement(); // Returns a new evaluation function with a single parameter.
 * console.log(chainedEvaluatedIncrement(10)); // Output: 11
 * console.log(chainedEvaluatedIncrement()); // Output: [Function: evaluate]
 *
 * @see __
 */
function oneParameter (functionRef) {
  return function evaluate (a) {
    if (arguments.length === 0 || __.is(a)) return evaluate
    return functionRef(...arguments)
  }
}

/**
 * Checks if the provided function reference has an arity of one (accepts a single parameter).
 *
 * @param {Function} functionRef - The function reference to be checked.
 * @returns {boolean} True if the function has an arity of one, otherwise false.
 *
 * @example
 * function sayHello(name) {
 *   console.log(`Hello, ${name}!`);
 * }
 *
 * const hasOneParameter = oneParameter.is(sayHello); // Returns true
 * const hasTwoParameters = oneParameter.is(function(a, b) { return a + b; }); // Returns false
 */
Object.assign(oneParameter, {
  is: (functionRef) => functionRef.length === 1
})

export default oneParameter

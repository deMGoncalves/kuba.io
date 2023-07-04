/**
 * Creates an evaluation function that accepts no parameters for the given function reference.
 *
 * @param {Function} functionRef - The function reference to be evaluated.
 * @returns {Function} An evaluation function that accepts no parameters and returns the result of the original function.
 * @throws {TypeError} If 'functionRef' is not a function.
 *
 * @example
 * function sayHello() {
 *   return 'Hello, world!';
 * }
 *
 * const evaluatedHello = zeroParameter(sayHello);
 * console.log(evaluatedHello()); // Output: 'Hello, world!'
 *
 * @see __
 */
function zeroParameter (functionRef) {
  return function () {
    return functionRef(...arguments)
  }
}

/**
 * Checks if the provided function reference has an arity of zero (accepts no parameters).
 *
 * @param {Function} functionRef - The function reference to be checked.
 * @returns {boolean} True if the function has an arity of zero, otherwise false.
 *
 * @example
 * function sayHello() {
 *   return 'Hello, world!';
 * }
 *
 * const hasZeroParameters = zeroParameter.is(sayHello); // Returns true
 * const hasOneParameter = zeroParameter.is(function(name) { return `Hello, ${name}!`; }); // Returns false
 */
Object.assign(zeroParameter, {
  is: (functionRef) => functionRef.length === 0
})

export default zeroParameter

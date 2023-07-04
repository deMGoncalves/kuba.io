/**
 * Throws an Error indicating that the number of arguments should be a non-negative integer and not greater than three.
 *
 * @throws {Error} Always throws an Error with the specified message.
 *
 * @example
 * // This function is intended to be used in a scenario where the number of parameters is checked before calling it.
 * function processInput(a, b, c) {
 *   if (arguments.length > 3) {
 *     throw throwParameters(); // Throws an Error with the specified message.
 *   }
 *   // Rest of the processing logic...
 * }
 *
 * @see threeParameters
 * @see twoParameters
 * @see oneParameter
 * @see zeroParameter
 */
function throwParameters () {
  throw new Error('A quantidade de argumentos deve ser um número inteiro não negativo e não superior a três')
}

/**
 * Checks if the `throwParameters` function is always true (since it always throws an Error).
 *
 * @returns {boolean} Always returns true.
 *
 * @example
 * const isAlwaysTrue = throwParameters.is(); // Returns true
 */
Object.assign(throwParameters, {
  is: () => true
})

export default throwParameters

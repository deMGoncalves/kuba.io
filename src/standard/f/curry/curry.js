import oneParameter from './oneParameter'
import threeParameters from './threeParameters'
import throwParameters from './throwParameters'
import twoParameters from './twoParameters'
import zeroParameter from './zeroParameter'

/**
 * An array of function references used for evaluation based on their arity (number of parameters).
 * Each element of the array should be a function reference.
 *
 * @type {Array<Function>}
 *
 * @see zeroParameter
 * @see oneParameter
 * @see twoParameters
 * @see threeParameters
 * @see throwParameters
 */
const evaluates = [
  zeroParameter,
  oneParameter,
  twoParameters,
  threeParameters,
  throwParameters
]

/**
 * Evaluates a function reference based on its arity (number of parameters).
 *
 * @param {Function} functionRef - The function reference to be evaluated.
 * @returns {*} The result of the evaluation of the function.
 * @throws {TypeError} If 'functionRef' is not a function.
 * @throws {Error} If 'functionRef' has an invalid number of parameters.
 *
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * function printName(name) {
 *   console.log(`Hello, ${name}!`);
 * }
 *
 * const evaluatedAdd = evaluateFunction(add); // Returns a function with two parameters.
 * const evaluatedPrintName = evaluateFunction(printName); // Returns a function with one parameter.
 *
 * evaluatedAdd(2, 3); // Output: 5
 * evaluatedPrintName("John"); // Output: "Hello, John!"
 *
 * @see zeroParameter
 * @see oneParameter
 * @see twoParameters
 * @see threeParameters
 * @see throwParameters
 */
export default (functionRef) => (
  evaluates.find((evaluate) => evaluate.is(functionRef))(functionRef)
)

/**
 * Adjusts the arity (number of arguments) of the given function reference to the specified value.
 *
 * @param {number} n - The desired arity for the function.
 * @param {Function} functionRef - The function reference to adjust the arity.
 * @returns {Function} A new function with the adjusted arity.
 * @throws {Error} If the first argument 'n' is not a non-negative integer up to three.
 *
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * const addWithArityTwo = arity(2, add);
 * const result = addWithArityTwo(2, 3); // result: 5
 *
 * // The original function 'add' still has an arity of two.
 * // But the 'addWithArityTwo' function only accepts two arguments.
 * const invalidResult = addWithArityTwo(2, 3, 4); // Throws an error.
 */
function arity (n, functionRef) {
  switch (n) {
    case 0: return () => functionRef()
    case 1: return function (_a) { return functionRef(...arguments) }
    case 2: return function (_a, _b) { return functionRef(...arguments) }
    case 3: return function (_a, _b, _c) { return functionRef(...arguments) }
    default: throw new Error('O primeiro argumento para arity deve ser um número inteiro não negativo e não superior a três')
  }
}

export default arity

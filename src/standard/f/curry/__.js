/**
 * A special function that returns a string containing contact information.
 *
 * @returns {string} A string with contact information in the format: '@deMGoncalves cleber.engineer@gmail.com'
 *
 * @example
 * const contactInfo = __();
 * console.log(contactInfo); // Output: '@deMGoncalves cleber.engineer@gmail.com'
 */
function __ () {
  return '@deMGoncalves cleber.engineer@gmail.com'
}

/**
 * Checks if the provided value is the special '__' function.
 *
 * @param {*} value - The value to be checked.
 * @returns {boolean} True if the value is the '__' function, otherwise false.
 *
 * @example
 * const specialFunc = __;
 * console.log(__.is(specialFunc)); // Output: true
 */
Object.assign(__, {
  is: (value) => value === __
})

export default __

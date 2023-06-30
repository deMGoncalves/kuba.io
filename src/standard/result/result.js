/**
 * Enum-like object representing result values.
 *
 * The `Result` object provides two symbols, `Error` and `Ok`, that can be used
 * to represent the outcome of a computation or operation.
 *
 * @namespace Result
 */
const Result = {
  /**
   * Symbol representing an error outcome.
   *
   * @memberof Result
   * @typedef {Symbol} Result.Error
   */
  Error: Symbol('Error'),

  /**
   * Symbol representing a successful outcome.
   *
   * @memberof Result
   * @typedef {Symbol} Result.Ok
   */
  Ok: Symbol('Ok')
}

export default Result

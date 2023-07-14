import Element from './element'
import forMethodsValid from './forMethodsValid'
import preventDefault from './preventDefault'

class Form extends Element {
  #target

  /**
   * Gets the request body as JSON string.
   *
   * @returns {string} The JSON string representation of the request body.
   */
  @forMethodsValid
  get body () {
    return JSON.stringify(
      [...new FormData(this.#target)].reduce((o, [x, y]) => ((o[x] = y), o), {})
    )
  }

  /**
   * Constructs a new Form instance.
   *
   * @param {HTMLElement} target - The target element of the HTMx event.
   */
  constructor (target) {
    super(target)
    this.#target = target
  }

  @preventDefault
  static handle (event) {
    new Form(event.target).submit()
    return Form
  }

  static is (event) {
    return /submit/i.test(event.type) && /form/i.test(event.target.tagName)
  }
}

export default Form

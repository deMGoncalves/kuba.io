import Element from './element'
import forMethodsValid from './forMethodsValid'

class Input extends Element {
  #target

  /**
   * Gets the request body as JSON string.
   *
   * @returns {string} The JSON string representation of the request body.
   */
  @forMethodsValid
  get body () {
    return JSON.stringify({
      [this.#target.name]: this.#target.value
    })
  }

  /**
   * Constructs a new Input instance.
   *
   * @param {HTMLElement} target - The target element of the HTMx event.
   */
  constructor (target) {
    super(target)
    this.#target = target
  }

  static handle (event) {
    new Input(event.target).submit()
    return Input
  }

  static is (event) {
    return /change/i.test(event.type) && /input|select|textarea/i.test(event.target.tagName)
  }
}

export default Input

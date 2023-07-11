import DOM from './dom'
import eventMatching from './eventMatching'
import forMethodsValid from './forMethodsValid'
import preventDefault from './preventDefault'

/**
 * HTMx class for handling HTMx events.
 */
class HTMx {
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
   * Gets the target context element for updating the content.
   *
   * @returns {Element} The target context element.
   */
  get context () {
    return (document.querySelector(this.#target.dataset.target) ?? this.#target)
  }

  /**
   * Gets the request headers.
   *
   * @returns {Headers} The request headers.
   */
  get headers () {
    return new Headers({
      'Content-Type': 'application/json'
    })
  }

  /**
   * Gets the request method.
   *
   * @returns {string} The request method.
   */
  get method () {
    return (this.#target.dataset.method ?? 'GET')
  }

  /**
   * Gets the HTMx operation to perform.
   *
   * @returns {string} The HTMx operation.
   */
  get operation () {
    return (this.#target.dataset.operation ?? 'stub')
  }

  /**
   * Gets the request URL.
   *
   * @returns {string} The request URL.
   */
  get url () {
    return (this.#target.dataset.action ?? location.pathname)
  }

  /**
   * Constructs a new HTMx instance.
   *
   * @param {HTMLElement} target - The target element of the HTMx event.
   */
  constructor (target) {
    this.#target = target
  }

  /**
   * Event handler for handling HTMx events.
   *
   * @param {Event} event - The HTMx event.
   */
  @eventMatching
  @preventDefault
  static async handle (event) {
    const { body, context, headers, method, operation, url } = new HTMx(event.target)
    const response = await fetch(url, { body, headers, method })
    const textContent = await response.text()

    DOM[operation](textContent, context)
  }
}

export default HTMx

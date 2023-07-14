import DOM from './dom'

/**
 * Element class for handling Element events.
 */
class Element {
  #target

  /**
   * Gets the request body as JSON string.
   *
   * @returns {string} The JSON string representation of the request body.
   */
  get body () {
    return undefined
  }

  /**
   * Gets the target context element for updating the content.
   *
   * @returns {Element} The target context element.
   */
  get context () {
    return (document.querySelector(this.#target.dataset.for) ?? this.#target)
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
   * Gets the Element morph to perform.
   *
   * @returns {string} The Element morph.
   */
  get morph () {
    return (this.#target.dataset.morph ?? 'stub')
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
   * Constructs a new Element instance.
   *
   * @param {HTMLElement} target - The target element of the Element event.
   */
  constructor (target) {
    this.#target = target
  }

  async submit () {
    const { body, context, headers, method, morph, url } = this
    const response = await fetch(url, { body, headers, method })
    const textContent = await response.text()
    DOM[morph](textContent, context)
    return this
  }

  static handle (event) {
    new Element(event.target).submit()
    return Element
  }

  static is (event) {
    return /click/i.test(event.type) && !/input|form|select|textarea/i.test(event.target.tagName)
  }
}

export default Element

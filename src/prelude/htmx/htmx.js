import DOM from './dom'

class HTMx {
  #target

  get context () {
    return (document.querySelector(this.#target.dataset.target) ?? this.#target)
  }

  get method () {
    return (this.#target.dataset.method ?? 'GET')
  }

  get operation () {
    return (this.#target.dataset.operation ?? 'stub')
  }

  get url () {
    return (this.#target.dataset.action ?? location.pathname)
  }

  constructor (target) {
    this.#target = target
  }

  static #create (target) {
    return new HTMx(target)
  }

  static #isNotValid (target) {
    return !target.matches('[data-action]')
  }

  static async handle (event) {
    if (HTMx.#isNotValid(event.target)) return

    const { context, method, operation, url } = HTMx.#create(event.target)
    const response = await fetch(url, { method })
    const textContent = await response.text()

    DOM[operation](textContent, context)
  }
}

export default HTMx

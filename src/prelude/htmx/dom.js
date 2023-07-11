const DOM = new Proxy(
  {
    innerHTML (textContent, target) {
      target.innerHTML = textContent
    },

    stub: () => undefined
  },
  {
    get (target, where) {
      return target[where] ?? ((textContent, node) => node.insertAdjacentHTML(where, textContent))
    }
  }
)

export default DOM

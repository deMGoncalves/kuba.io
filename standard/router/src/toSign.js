import listeners from './listeners'

const toSign = new Proxy({}, {
  get (_, method) {
    return function (path, page) {
      listeners[method.toUpperCase()].push({ path, page })
    }
  }
})

export default toSign

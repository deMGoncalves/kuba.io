import listeners from './listeners'

const toSign = new Proxy({}, {
  get (_, method) {
    return function (path, functionRef) {
      return listeners[method] = [ ...(listeners[method] ?? []), { path, functionRef }]
    }
  }
})

export default toSign

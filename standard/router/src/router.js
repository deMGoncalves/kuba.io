import handle from './handle'
import listeners from './listeners'

const router = new Proxy({}, {
  get (_, method) {
    if (/handle/.test(method)) return handle
    return (path, page) => listeners[method.toUpperCase()].push({ path, page })
  }
})

export default router

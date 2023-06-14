import handle from './handle'
import toSign from './toSign'

const router = new Proxy({}, {
  get (_, method) {
    if (/delete|get|post|pub/.test(method)) return toSign[method]
    if (/handle/.test(method)) return handle
  }
})

export default router

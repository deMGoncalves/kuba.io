import handle from './handle'
import listeners from './listeners'

/**
 * Router Proxy
 *
 * The `router` object is a proxy that allows you to define routes and associate them with specific page handlers.
 * It intercepts property accesses to dynamically create route listeners or retrieve the handle function.
 *
 * @type {Proxy}
 */
const router = new Proxy({}, {
  /**
   * Get handler for the proxy.
   *
   * Intercepts property accesses to create route listeners or retrieve the handle function.
   *
   * @param {object} _ - The target object (unused).
   * @param {string} method - The accessed property name (HTTP method).
   * @returns {handle|Function} - The handle function or a function to register a route listener.
   */
  get (_, method) {
    if (/handle/.test(method)) return handle
    return (path, page) => listeners[method.toUpperCase()].push({ path, page })
  }
})

export default router

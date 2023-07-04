import '@pixel/reset'
import '@pixel/tokens'
import '@pages/home'
import router from '@standard/router'

/**
 * The main export object for the application.
 * @namespace
 * @property {function} fetch - A function to handle routing requests.
 * @default router.handle
 */
export default {
  fetch: router.handle
}

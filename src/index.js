import '@pixel/reset'
import '@pixel/tokens'
import '@pages/home'

import asset from '@standard/asset'
import router from '@standard/router'

/**
 * The main export object for the application.
 * @namespace
 * @property {function} fetch - A function to handle routing requests.
 * @default router.handle
 */
export default {
  async fetch (request, env, ctx) {
    return asset.is(request)
      ? await asset.handle(request, env, ctx)
      : await router.handle(request, env, ctx)
  }
}

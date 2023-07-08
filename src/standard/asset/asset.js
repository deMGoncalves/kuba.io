import manifest from '__STATIC_CONTENT_MANIFEST'
import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

/**
 * Asset module for handling static assets.
 *
 * @module asset
 */
const asset = {
  /**
   * Handle the request for a static asset.
   *
   * @param {Request} request - The request object.
   * @param {object} env - The environment variables.
   * @param {object} ctx - The context object.
   * @returns {Promise<Response>} The response containing the requested asset.
   */
  handle (request, env, ctx) {
    return getAssetFromKV(
      {
        request,
        waitUntil: ctx.waitUntil.bind(ctx)
      },
      {
        ASSET_NAMESPACE: env.__STATIC_CONTENT,
        ASSET_MANIFEST: JSON.parse(manifest)
      }
    )
  },

  /**
   * Check if the request matches a static asset.
   * @param {Request} request - The request object.
   * @returns {boolean} true if the request matches a static asset, false otherwise.
   */
  is (request) {
    const url = new URL(request.url)
    const file = url.pathname.slice(1)
    return (file && manifest.includes(file))
  }
}

export default asset

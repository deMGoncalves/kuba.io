import listeners from './listeners'

function handle (request, env, ctx) {
  const url = new URL(request.url)
  const { page } = listeners[request.method].find(({ path }) => (path === url.pathname))
  return page?.(request, env, ctx)
}

export default handle

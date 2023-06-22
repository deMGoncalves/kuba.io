import listeners from './listeners'

function handle (request, env, ctx) {
  const { pathname } = new URL(request.url)
  const path = pathname.replace(/:\w+/g, '([a-z0-9-_]+)')
  const pattern = new RegExp(`^${path}$`, 'i')
  const { page } = listeners[request.method].find(({ path }) => pattern.test(path)) ?? {}
  return page?.(request, env, ctx)
}

export default handle

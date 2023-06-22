import listeners from './listeners'

function handle(request, env, ctx) {
  const route = findMatchingRoute(request)
  return route?.page(request, env, ctx)
}

function findMatchingRoute(request) {
  const url = new URL(request.url)
  const path = url.pathname.replace(/:\w+/g, '([a-z0-9-_]+)')
  const pattern = new RegExp(`^${path}$`, 'i')
  return listeners[request.method].find(({ path }) => pattern.test(path))
}

export default handle


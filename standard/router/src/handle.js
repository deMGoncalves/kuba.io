import listeners from './listeners'

function handle (request, env, ctx) {
  const url = new URL(request.url)
  const { page } = listeners[request.method][0]
  return page(request, env, ctx)
}

export default handle

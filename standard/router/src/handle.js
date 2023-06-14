import listeners from './listeners'

function handle (request, env, ctx) {
  const { method } = request
  return listeners[method.toLowerCase()][0].functionRef(request, env, ctx)
}

export default handle

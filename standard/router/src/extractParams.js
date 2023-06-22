import params from './params'

function extractParams (request, path) {
  const url = new URL(request.url)
  const keys = path?.split('/')
  const values = url.pathname.split('/')
  keys?.forEach((key, i) => /^:/.test(key) && Reflect.set(params, key.slice(1), values[i]))
}

export default extractParams

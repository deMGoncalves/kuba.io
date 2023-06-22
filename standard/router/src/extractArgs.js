import args from './args'

function extractArgs (request) {
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search)
  Array.from(search.entries()).forEach(([key, value]) => Reflect.set(args, key, value))
}

export default extractArgs

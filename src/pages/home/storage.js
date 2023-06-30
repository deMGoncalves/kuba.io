import http from '@standard/http'
import middleware from '@standard/middleware'
import result from '@standard/result'

async function storage (address, next) {
  const url = 'https://viacep.com.br/ws/07135313/json'
  const { data } = await http.get(url).json()
  address[result.Ok]?.(data)
  next()
}

export default middleware(storage)

import http from '@kuba/http'
import middleware from '@kuba/middleware'
import result from '@kuba/result'

async function storage (address, next) {
  const url = 'https://viacep.com.br/ws/07135313/json'
  const { data } = await http.get(url).json()
  address[result.Ok]?.(data)
  next()
}

export default middleware(storage)

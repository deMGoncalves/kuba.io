import middleware from '@kuba/middleware'
import result from '@kuba/result'

async function storage (address, next) {
  const data = await fetch('https://viacep.com.br/ws/01001000/json').then(r => r.json())
  address[result.Ok]?.(data)
  next()
}

export default middleware(storage)

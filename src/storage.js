import middleware from '@kuba/middleware'

async function storage (home, next) {
  const data = await fetch('https://viacep.com.br/ws/01001000/json').then(r => r.json())
  home.changeTitle(data.logradouro)
  next()
}

export default middleware(storage)

import { paint } from '@kuba/jsx'
import result from '@kuba/result'
import storage from './storage'
import view from './view'

@paint(view)
@storage
class Home {
  #data

  get value () {
    return `${this.#data?.logradouro}, ${this.#data?.bairro} - ${this.#data?.localidade}`
  }

  [result.Ok] (data) {
    this.#data = data
    return this
  }
}

export default Home

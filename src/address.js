import { paint } from '@kuba/jsx'
import component from './component'
import result from '@kuba/result'
import storage from './storage'

@paint(component)
@storage
class Address {
  #data

  get value () {
    return `${this.#data?.logradouro}, ${this.#data?.bairro} - ${this.#data?.localidade}`
  }

  [result.Ok] (data) {
    this.#data = data
    return this
  }
}

export default Address

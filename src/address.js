import { paint } from '@kuba/jsx'
import component from './component'
import result from '@kuba/result'
import storage from './storage'

@paint(component)
@storage
class Address {
  #cep
  #logradouro
  #complemento
  #bairro
  #localidade
  #uf
  #ibge
  #gia
  #ddd
  #siafi

  get cep () {
    return (this.#cep ??= '')
  }

  get logradouro () {
    return (this.#logradouro ??= '')
  }

  get complemento () {
    return (this.#complemento ??= '')
  }

  get bairro () {
    return (this.#bairro ??= '')
  }

  get localidade () {
    return (this.#localidade ??= '')
  }

  get uf () {
    return (this.#uf ??= '')
  }

  get ibge () {
    return (this.#ibge ??= '')
  }

  get gia () {
    return (this.#gia ??= '')
  }

  get ddd () {
    return (this.#ddd ??= '')
  }

  get siafi () {
    return (this.#siafi ??= '')
  }

  [result.Ok] (data) {
    this.#cep = data.cep
    this.#logradouro = data.logradouro
    this.#complemento = data.complemento
    this.#bairro = data.bairro
    this.#localidade = data.localidade
    this.#uf = data.uf
    this.#ibge = data.ibge
    this.#gia = data.gia
    this.#ddd = data.ddd
    this.#siafi = data.siafi
    return this
  }
}

export default Address

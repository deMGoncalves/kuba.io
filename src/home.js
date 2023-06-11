import { paint } from '@kuba/jsx'
import component from './component'
import storage from './storage'

@paint(component)
@storage
class Home {
  #title

  get title () {
    return (this.#title ??= ':(')
  }

  changeTitle (value) {
    this.#title = value
    return this
  }
}

export default Home

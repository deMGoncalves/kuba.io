import { paint } from '@kuba/jsx'
import component from './component'

@paint(component)
class Home {
  get title () {
    return 'Hello kuba'
  }
}

export default Home

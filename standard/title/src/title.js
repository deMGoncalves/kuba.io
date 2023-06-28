import { paint } from '@kuba/jsx'
import magic from '@kuba/magic'
import view from './view'

@paint(view)
class Title {
  #content = 'kuba';

  get content () {
    return Title[magic.content] ?? 'Kuba'
  }

  static change (newContent) {
    Title[magic.content] = newContent
    return Title
  }
}

export default Title

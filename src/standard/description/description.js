import { paint } from '@standard/jsx'
import magic from '@standard/magic'
import view from './view'

@paint(view)
class Description {
  #content = 'kuba';

  get content () {
    return Description[magic.content] ?? 'Join the Kuba revolution and experience the next generation of web development. Unlock the full potential of speed, reliability, and simplicity, and let your creativity soar.'
  }

  static change (newContent) {
    Description[magic.content] = newContent
    return Description
  }
}

export default Description

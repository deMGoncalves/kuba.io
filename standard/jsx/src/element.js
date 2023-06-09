import Props from './props'
import Tag from './tag'

class Element {
  static create (element, attrs, children) {
    const selfClose = Tag.isSelfClose(children)
    const props = Props.stringfy(attrs)

    return selfClose
      ? `<${element} ${props}/>`
      : `<${element} ${props}>${children}</${element}>`
  }

  static is (element) {
    return (typeof element === 'string')
  }
}

export default Element
import Children from './children'
import Props from './props'
import Tag from './tag'

class Element {
  static create (element, attrs, children) {
    const selfClose = Tag.isSelfClose(children)
    const props = Props.stringfy(attrs)
    const textContent = Children.stringfy(children)

    return selfClose
      ? `<${element} ${props}/>`
      : `<${element} ${props}>${textContent}</${element}>`
  }
}

export default Element

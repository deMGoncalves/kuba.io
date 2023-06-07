class Tag {
  static isSelfClose (children) {
    return (children?.length == 0)
  }
}

class Props {
  static stringfy (attrs) {
    return Object
      .entries({ ...attrs })
      .map(([key, value]) => `${key}='${value}'`)
      .join(' ')
  }
}

class Element {
  static create (elementName, attrs, children) {
    const selfClose = Tag.isSelfClose(children)
    const props = Props.stringfy(attrs)

    return selfClose
      ? `<${elementName} ${props}/>`
      : `<${elementName} ${props}>${children}</${elementName}>`
  }

  static is (element) {
    return (typeof element === 'string')
  }
}

export default Element

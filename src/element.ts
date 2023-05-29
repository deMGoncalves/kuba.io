class Tag {
  static isSelfClose (children: Child[]): boolean {
    return (children?.length == 0)
  }
}

class Props {
  static stringfy (attrs: Attrs): string {
    return Object
      .entries({ ...attrs })
      .map(([key, value]) => `${key}='${value}'`)
      .join(' ')
  }
}

class Element {
  static create (elementName: string, attrs: Attrs, children: Child[]): string {
    const selfClose: boolean = Tag.isSelfClose(children)
    const props: string = Props.stringfy(attrs)

    return selfClose
      ? `<${elementName} ${props}/>`
      : `<${elementName} ${props}>${children}</${elementName}>`
  }

  static is (target: any): boolean {
    return (typeof target === 'string')
  }
}

export default Element

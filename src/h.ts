function h (elementName: ElementName, attributes: Attributes, ...children: Children): string {
  const selfClose: boolean = (children.length == 0)

  const props: string = Object
    .entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')

  const tag: string = selfClose
    ? `<${elementName} ${props}/>`
    : `<${elementName} ${props}>${children}</${elementName}>`

  return tag
}

export default h

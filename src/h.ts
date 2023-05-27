function h (elementName: ElementName, attributes: Attributes, ...children: Children): string {
  const selfClose: boolean = Boolean(children.length)

  const props: string = Object
    .entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')

  const tag: string = selfClose
    ? `<${elementName} ${props}>${children}</${elementName}>`
    : `<${elementName} ${props}/>`

  return tag
}

export default h

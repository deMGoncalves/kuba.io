declare type ElementName = string

declare type Attributes= {
  [key: string]: string | number
}

declare type Children = string[]

declare function h(elementName: ElementName, attributes: Attributes, ...children: Children): string

declare type Tag = string | Function

declare type Attrs = {
  [key: string]: any
}

declare type Child = string | number

declare function h(target: Tag, attrs: Attrs, ...children: Child[]): string

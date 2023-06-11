import Instance from './instance'

class Children {
  static mapper (children) {
    children = children.flat(Infinity)
    children = children.filter(Boolean)
    children = Instance.mapper(children)
    return children
  }

  static stringfy (children) {
    return children.join('')
  }
}

export default Children

import instance from './instance'

class Componet {
  static execute (component, attrs, children) {
    children = children.flat(Infinity)
    children = children.filter(Boolean)
    children = Instance.mapper(children)
    return component({ ...attrs }, children)
  }

  static is (component) {
    return (typeof component === 'function')
  }
}

export default Componet

class Componet {
  static execute (component, attrs, children) {
    return component(attrs, children)
  }

  static is (component) {
    return (typeof component === 'function')
  }
}

export default Componet

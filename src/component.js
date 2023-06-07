class Componet {
  static execute (component, attributes, children) {
    return component(attributes, children)
  }

  static is (component) {
    return (typeof component === 'function')
  }
}

export default Componet

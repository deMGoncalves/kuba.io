class Componet {
  static execute (component: Function, attributes: Attributes, children: Children): string {
    return component(attributes, children)
  }

  static is (target: any): boolean {
    return (typeof target === 'function')
  }
}

export default Componet

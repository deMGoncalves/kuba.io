function paint (component) {
  return function (ClassRef) {
    return new Proxy(
      async function (attrs, children) {
        const instance = (this instanceof ClassRef)
          ? await new ClassRef(...arguments)
          : await new ClassRef(attrs)

        const textContent = component(instance, children)

        Object.assign(instance, {
          [paint.textContent]: () => textContent
        })

        return (this instanceof ClassRef)
          ? instance
          : textContent
      },
      {
        get: (_, key) => Reflect.get(ClassRef, key),
        set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
  }
}

Object.assign(paint, {
  textContent: Symbol('textContent')
})

export default paint

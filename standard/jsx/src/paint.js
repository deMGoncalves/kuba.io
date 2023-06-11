import magic from './magic'

function paint (component) {
  return function (Klass) {
    return new Proxy(
      function (attrs, children) {
        const instance = (this instanceof Klass)
          ? new Klass(...arguments)
          : new Klass(attrs)

        const textContent = component(instance, children)

        Object.assign(instance, {
          [paint.textContent]: () => textContent
        })

        return (this instanceof Klass)
          ? instance
          : textContent
      },
      {
        get: (_, key) => Reflect.get(Klass, key),
        set: (_, key, value) => (Reflect.set(Klass, key, value), true)
      }
    )
  }
}

Object.assign(paint, {
  textContent: magic.paint_textContent
})

export default paint

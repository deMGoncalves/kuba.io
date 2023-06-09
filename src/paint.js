import magic from './magic'

function paint (component) {
  return function (Klass) {
    return new Proxy(
      function (attrs, children) {
        const instance = (this instanceof Klass)
          ? new Klass(...arguments)
          : new Klass(attrs)

        const domParsed = component(instance, children)

        Object.assign(instance, {
          [paint.domParsed]: () => domParsed
        })

        return (this instanceof Klass)
          ? instance
          : domParsed
      },
      {
        get: (_, key) => Reflect.get(Klass, key),
        set: (_, key, value) => (Reflect.set(Klass, key, value), true)
      }
    )
  }
}

Object.assign(paint, {
  domParsed: magic.paint_domParsed
})

export default paint

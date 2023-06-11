function middleware (functionRef) {
  return function (ClassRef) {
    return new Proxy(
      function () {
        return new Promise(async function (resolve) {
          const instance = await new ClassRef(...arguments)
          functionRef(instance, () => resolve(instance))
        })
      },
      {
        get: (_target, key) => Reflect.get(ClassRef, key),
        set: (_target, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
  }
}

export default middleware

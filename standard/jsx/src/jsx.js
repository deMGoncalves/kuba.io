import Children from './children'
import Componet from './component'
import Element from './element'

function jsx (elementOrComponent, attrs, ...children) {
  attrs = { ...attrs }
  children = Children.mapper(children)

  if (Componet.is(elementOrComponent))
    return Componet.execute(elementOrComponent, attrs, children)

  return Element.create(elementOrComponent, attrs, children)
}

export default jsx

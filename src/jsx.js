import Componet from './component'
import Element from './element'

function jsx (elementOrComponent, attrs, ...children) {
  if (Element.is(elementOrComponent)) return Element.create(elementOrComponent, attrs, children)
  if (Componet.is(elementOrComponent)) return Componet.execute(elementOrComponent, attrs, children)
}

export default jsx

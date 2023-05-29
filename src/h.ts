import Componet from './component'
import Element from './element'

function h (target: Tag, attrs: Attrs, ...children: Child[]): string {
  if (Element.is(target)) return Element.create(target as string, attrs, children)
  if (Componet.is(target)) return Componet.execute(target as Function, attrs, children)
  return ''
}

export default h

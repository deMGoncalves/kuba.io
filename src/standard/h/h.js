import Children from './children'
import Componet from './component'
import Element from './element'

/**
 * Renders a h element based on the provided element or component, attributes, and children.
 *
 * @param {string | Function} elementOrComponent - h element or component to be rendered.
 * @param {Object} attrs - Attributes for the h element or component.
 * @param {Array<string | Function>} children - Children of the h element or component. Can contain strings or h elements.
 * @returns {string} The rendered h element as a string.
 */
async function h(elementOrComponent, attrs, ...children) {
  attrs = { ...attrs }
  children = await Children.mapper(children)

  return (
    Componet.is(elementOrComponent)
      ? Componet.execute
      : Element.create
  )(elementOrComponent, attrs, children)
}

export default h

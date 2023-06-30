import Children from './children'
import Componet from './component'
import Element from './element'

/**
 * Renders a JSX element based on the provided element or component, attributes, and children.
 *
 * @param {string | Function} elementOrComponent - JSX element or component to be rendered.
 * @param {Object} attrs - Attributes for the JSX element or component.
 * @param {Array<string | Function>} children - Children of the JSX element or component. Can contain strings or JSX elements.
 * @returns {string} The rendered JSX element as a string.
 */
async function jsx(elementOrComponent, attrs, ...children) {
  attrs = { ...attrs }
  children = await Children.mapper(children)

  return (
    Componet.is(elementOrComponent)
      ? Componet.execute
      : Element.create
  )(elementOrComponent, attrs, children)
}

export default jsx

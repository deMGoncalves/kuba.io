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
function jsx(elementOrComponent, attrs, ...children) {
  // Copy the attributes to avoid unintended modifications to the original object
  attrs = { ...attrs }

  // Map the children to ensure they are in the proper format
  children = Children.mapper(children)

  // If the element is a component, execute the component with the provided attributes and children
  // Otherwise, create a new JSX element with the provided attributes and children
  return Componet.is(elementOrComponent)
    ? Componet.execute(elementOrComponent, attrs, children)
    : Element.create(elementOrComponent, attrs, children)
}

export default jsx

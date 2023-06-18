import Children from './children'
import Componet from './component'
import Element from './element'

/**
 * Renderiza um elemento JSX com base no elemento ou componente fornecido, atributos e filhos.
 *
 * @param {string | Function} elementOrComponent - Elemento JSX ou componente a ser renderizado.
 * @param {Object} attrs - Atributos para o elemento JSX ou componente.
 * @param {Array<string | Function>} children - Filhos do elemento JSX ou componente. Pode conter strings ou elementos JSX.
 * @returns {string} O elemento JSX renderizado como uma string.
 */
function jsx (elementOrComponent, attrs, ...children) {
  // Copia os atributos para evitar modificações indesejadas no objeto original
  attrs = { ...attrs }

  // Mapeia os filhos para garantir que todos estejam no formato adequado
  children = Children.mapper(children)

  // Se o elemento for um componente, executa o componente com os atributos e filhos fornecidos
  // Caso contrário, cria um novo elemento JSX com os atributos e filhos fornecidos
  return Componet.is(elementOrComponent)
    ? Componet.execute(elementOrComponent, attrs, children)
    : Element.create(elementOrComponent, attrs, children)
}

export default jsx

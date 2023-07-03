import arity from './arity'
import curry from './curry'
import resolveDunders from './resolveDunders'

function zip (x, y) {
  const n = Math.max(x.length, y.length)
  return Array(n).fill(undefined).map((_, i) => [x[i], y[i]])
}

export default curry(arity(2, resolveDunders(zip)))

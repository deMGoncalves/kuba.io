import magic from '@standard/magic'

function resolveDunders (functionRef) {
  return function (...args) {
    const method = magic[functionRef.name]
    const evaluate = (value) => (value?.[method]?.() ?? value)
    return functionRef(...args.map(evaluate))
  }
}

export default resolveDunders

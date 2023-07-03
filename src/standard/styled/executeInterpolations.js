function executeInterpolations (expressions, props) {
  return expressions.map((e) => e?.(props))
}

export default executeInterpolations

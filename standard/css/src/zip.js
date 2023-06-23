function zip (strings, expressions) {
  return Array(Math.max(strings.length, expressions.length)).fill().map((_, i) => [strings[i], expressions[i]]).flat(Infinity).join('')
}

export default zip

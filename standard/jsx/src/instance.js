import paint from './paint'

class Instance {
  static mapper (children) {
    return children.map((child) => child[paint.textContent]?.() ?? child)
  }
}

export default Instance

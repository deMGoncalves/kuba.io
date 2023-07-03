import executeInterpolations from './executeInterpolations'
import h from '@standard/h'
import minifyCSS from './minifyCSS'
import zip from './zip'

const styled = new Proxy({}, {
  get (_target, key) {
    return function (strings, ...expressions) {
      return function (props, children) {
        const style = minifyCSS(zip(strings, executeInterpolations(expressions, props)))
        return h(key, { style, ...props }, ...children)
      }
    }
  }
})

export default styled

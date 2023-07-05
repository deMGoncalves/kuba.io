import h from '@standard/h'
import style from './style'

function button (props, children) {
  return (
    <button {...props} className={[style.button, props.className]}>{children}</button>
  )
}

export default button

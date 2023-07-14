import Element from './element'
import Form from './form'
// import Input from './input'

class HTMx {
  static handle (event) {
    if (Element.is(event)) Element.handle(event)
    // else if (Input.is(event)) Input.handle(event)
    else if (Form.is(event)) Form.handle(event)
  }
}

export default HTMx

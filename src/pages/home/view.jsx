import h from '@standard/h'
import Master from '@standard/master'
import text from '@elements/text'

function component (address) {
  return (
    <Master>
      <address>
        <text.P>{address.value}</text.P>
      </address>
    </Master>
  )
}

export default component

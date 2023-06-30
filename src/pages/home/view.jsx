import jsx from '@standard/jsx'
import Master from '@standard/master'

function component (address) {
  return (
    <Master>
      <address>
        <p>{address.value}</p>
      </address>
    </Master>
  )
}

export default component

import jsx from '@kuba/jsx'
import Master from '@kuba/master'

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

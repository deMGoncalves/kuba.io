import Button from '@elements/button'
import h from '@standard/h'
import Master from '@standard/master'
import text from '@elements/text'

function component (address) {
  return (
    <Master>
      <address>
        <text.P>{address.value}</text.P>
      </address>
      <Button action='/api/click-me'>Click Me</Button>
    </Master>
  )
}

export default component

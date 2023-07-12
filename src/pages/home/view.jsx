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
      <Button data-action='/api/click-me' data-for='#shelf' data-morph='afterbegin'>Click Me</Button>
      <div id='shelf' />
    </Master>
  )
}

export default component

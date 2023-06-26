import { Style } from '@kuba/css'
import jsx from '@kuba/jsx'

function component (_props, children) {
  return (
    <html lang='en-US'>
      <head>
        <title>Kuba.io</title>
        <meta name='description' content='Join the Kuba revolution and experience the next generation of web development. Unlock the full potential of speed, reliability, and simplicity, and let your creativity soar.' />
        <meta charset='UTF-8' />
        <Style />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default component

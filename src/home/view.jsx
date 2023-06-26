import jsx, { Fragment } from '@kuba/jsx'

function component (address) {
  return (
    <>
      <head>
        <meta charset='utf-8' />
        <title>Kuba</title>
      </head>
      <body>
        <address>
          <p>{address.value}</p>
        </address>
      </body>
    </>
  )
}

export default component

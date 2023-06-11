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
          <p>cep: {address.cep}</p>
          <p>logradouro: {address.logradouro}</p>
          <p>complemento: {address.complemento}</p>
          <p>bairro: {address.bairro}</p>
          <p>localidade: {address.localidade}</p>
          <p>uf: {address.uf}</p>
          <p>ibge: {address.ibge}</p>
          <p>gia: {address.gia}</p>
          <p>ddd: {address.ddd}</p>
          <p>siafi: {address.siafi}</p>
        </address>
      </body>
    </>
  )
}

export default component

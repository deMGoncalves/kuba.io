import { Style } from '@standard/css'
import Desciption from '@standard/description'
import h from '@standard/h'
import Title from '@standard/title'

/**
 * Represents the master template for the Kuba website.
 *
 * @param {Object} _props - The component props (unused).
 * @param {Array} children - The child components to be rendered inside the body of the template.
 * @returns {JSX.Element} - The JSX element representing the master template.
 */
function component (_props, children) {
  return (
    <html lang='en-US'>
      <head>
        <Title />
        <Desciption />
        <Style />
      </head>
      <body>
        {children}
        <script src='prelude/htmx.js' async />
      </body>
    </html>
  )
}

export default component

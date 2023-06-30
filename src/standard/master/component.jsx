import { Style } from '@standard/css'
import jsx from '@standard/jsx'
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

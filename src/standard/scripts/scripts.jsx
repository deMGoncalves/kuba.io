import h, { Fragment } from '@standard/h'

/**
 * Renders the scripts to be imported on the page.
 *
 * @function component
 * @returns {string} The rendered <script> elements as a string.
 */
function component () {
  return (
    <>
      <script src='prelude/htmx.js' async />
    </>
  )
}

export default component

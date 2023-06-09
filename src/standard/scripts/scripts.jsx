import h, { Fragment } from '@standard/h'

/**
 * Renders the scripts to be imported on the page.
 *
 * @function component
 * @returns {JSX.Element} The rendered <script> elements.
 */
function component () {
  return (
    <>
      <script src='prelude/htmx.js' async />
    </>
  )
}

export default component

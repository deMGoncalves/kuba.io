import h from '@standard/h'
import textContent from './textContent'

/**
 * Renders a component that represents CSS styles.
 *
 * @returns {JSX.Element} The JSX element representing the CSS component.
 */
function component () {
  return (
    <style>{textContent.join(' ')}</style>
  )
}

export default component

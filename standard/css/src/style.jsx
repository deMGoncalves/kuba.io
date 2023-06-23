import jsx from '@kuba/jsx'
import textContent from './textContent'

function component () {
  return (
    <style>{textContent.join(' ')}</style>
  )
}

export default component

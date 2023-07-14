import events from './events'
import HTMx from './htmx'

events.forEach(event => window.addEventListener(event, HTMx.handle))

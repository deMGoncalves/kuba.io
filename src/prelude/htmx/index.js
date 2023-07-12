import HTMx from './htmx'

['click', 'change', 'submit'].forEach(event => window.addEventListener(event, HTMx.handle))

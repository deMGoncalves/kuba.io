import jsx from '@kuba/jsx'
import Address from './address'
import router from '@kuba/router'

router.get('/', async () => new Response(await <Address />, { headers: { 'Content-type': 'text/html' } }))

export default {
	fetch: router.handle
}

import jsx from '@kuba/jsx'
import Address from './address'

export default {
	async fetch(request, env, ctx) {
		return new Response(await <Address />, { headers: { 'Content-type': 'text/html' } })
	}
}

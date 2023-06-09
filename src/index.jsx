import jsx from '@kuba/jsx'
import Home from './home'

export default {
	async fetch(request, env, ctx) {
		return new Response(<Home />, { headers: { 'Content-type': 'text/html' } })
	}
}
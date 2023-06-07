import home from './home'

export default {
	async fetch(request, env, ctx) {
		return new Response(home(), { headers: { 'Content-type': 'text/html' } })
	}
}

/// <reference path="h.d.ts" />
/// <reference path="jsx.d.ts" />

import home from './home'

type Env = {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return new Response(home(), { headers: { 'Content-type': 'text/html' } })
	}
}

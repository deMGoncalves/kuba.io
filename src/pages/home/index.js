import Home from './home'
import router from '@standard/router'

router.get('/', async function home () {
  const body = await Home()
  const init = {
    headers: {
      'Content-Type': 'text/html'
    }
  }
  return new Response(body, init)
})

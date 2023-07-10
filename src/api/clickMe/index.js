import router from '@standard/router'

router.get('/api/click-me', async function clickMe () {
  const body = Math.random().toString(36).slice(2)
  const init = {
    headers: {
      'Content-Type': 'text/plain'
    }
  }
  return new Response(body, init)
})

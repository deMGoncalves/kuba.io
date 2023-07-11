import router from '@standard/router'

router.get('/api/click-me', async function clickMe () {
  const body = `<div>${Math.random().toString(36).slice(2)}</div>`
  const init = {
    headers: {
      'Content-Type': 'text/plain'
    }
  }
  return new Response(body, init)
})

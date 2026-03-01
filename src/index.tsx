import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { whitepaperPage } from './pages/whitepaper'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Home page
app.get('/', (c) => {
  return c.html(homePage())
})

// Whitepaper page
app.get('/whitepaper', (c) => {
  return c.html(whitepaperPage())
})

// Health check
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', project: 'AILINK', version: '1.0.0' })
})

export default app

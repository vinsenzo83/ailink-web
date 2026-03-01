import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { whitepaperPage } from './pages/whitepaper'
import { loginPage } from './pages/login'
import { mypagePage } from './pages/mypage'
import { vestingPage } from './pages/vesting'
import { privacyPage, termsPage, disclaimerPage } from './pages/legal'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// ─── Main Pages ───────────────────────────────────────────────────────────────
app.get('/', (c) => c.html(homePage()))
app.get('/whitepaper', (c) => c.html(whitepaperPage()))
app.get('/login', (c) => c.html(loginPage()))
app.get('/mypage', (c) => c.html(mypagePage()))
app.get('/vesting', (c) => c.html(vestingPage()))

// ─── Legal Pages ──────────────────────────────────────────────────────────────
app.get('/legal', (c) => c.redirect('/legal/privacy', 301))
app.get('/legal/privacy', (c) => c.html(privacyPage()))
app.get('/legal/terms', (c) => c.html(termsPage()))
app.get('/legal/disclaimer', (c) => c.html(disclaimerPage()))

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/api/health', (c) =>
  c.json({ status: 'ok', project: 'AILINK', version: '2.0.0', pages: 8 })
)

export default app

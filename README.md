# AILINK — Intelligence, Connected.

**Project Name:** AILINK  
**Code Name:** ailink-web  
**Version:** v1.0.0  
**Status:** ✅ Active — Development  

---

## 🚀 Project Overview

**AILINK** is an intelligent, decentralized interaction network that merges AI-powered content creation with accessible Web3 engagement. Designed for speed, simplicity, and ownership.

**Core Slogans:**
- *"Intelligence, Connected."*
- *"Build. Link. Empower."*
- *"AI Network for the Next Web."*
- *"Where Users Shape the Algorithm."*

---

## 🌐 URLs

| Type | URL |
|---|---|
| **Live Sandbox** | https://3000-ifclimfdh50ocesbammad-cbeee0f9.sandbox.novita.ai |
| **X / Twitter** | https://x.com/AiLink_Official |
| **Telegram** | https://t.me/AiLink_Official |

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Full landing page with all sections |
| Whitepaper | `/whitepaper` | Full technical & economic whitepaper v1.1 |
| Health Check | `/api/health` | API status endpoint |

---

## 🏠 Homepage Sections (14 total)

1. **Hero** — Main banner with live activity feed card, stats row, CTA buttons
2. **Trust Bar** — 6-column quick stats (AI Engine, Micro-Games, AI Media, 10B supply, DAO, BNB Chain)
3. **Features** — 6 feature cards (Micro-Games, AI Media Suite, Point System, NFT Minting, Rewards, DAO)
4. **Ecosystem** — 4-step flow diagram + 4 ecosystem pillars
5. **Tokenomics** — Token info grid, 5-category allocation bars, donut chart
6. **Vesting Table** — Allocation table (TGE/Cliff/Vesting) per category
7. **Vesting Chart** — 60-month cumulative supply line chart (Month 1 → 53 → 100%)
8. **Roadmap** — 4 phases (Q3 2025 ✅ → Q4 2025 🔄 → 2026 → 2027+)
9. **Team** — 3 core members + full team structure
10. **Partners** — 8 partner cards (BNB Chain, Chainlink, OKX, Google Cloud, RunwayML, CertiK, AWS, Stability AI)
11. **CTA** — Final call-to-action section

---

## 💰 Tokenomics

| Item | Value |
|---|---|
| Token Name | AILINK |
| Ticker | ALINK |
| Total Supply | 10,000,000,000 |
| Network | BNB Chain |
| Standard | BEP-20 |
| TGE | Q4 2025 |

| Category | % | Tokens | TGE | Cliff | Vesting |
|---|---|---|---|---|---|
| Ecosystem Rewards | 45% | 4.5B | 150M | 0 mo | 48 mo |
| Team & Contributors | 15% | 1.5B | — | 12 mo | 36 mo |
| Partnerships & Expansion | 15% | 1.5B | 75M | 3 mo | 30 mo |
| Private Sale (Strategic) | 15% | 1.5B | 225M | 6 mo | 18 mo |
| Protocol Reserve | 10% | 1.0B | — | 6 mo | 48 mo |

Vesting completes at **Month 53 (100%)**.

---

## 👥 Core Team

| Name | Role | Background |
|---|---|---|
| Alex Kim | CEO & Co-Founder | 8+ years blockchain product development |
| Sophia Nguyen | CTO & Co-Founder | 10+ years AI systems engineering |
| Daniel Park | CMO | GameFi/SocialFi growth strategist |

---

## 🤝 Partners & Investors

BNB Chain · Chainlink · OKX Web3 · Google Cloud AI · RunwayML · CertiK · AWS ML · Stability AI

---

## 🎨 Brand Identity

| Element | Value |
|---|---|
| Primary Color | Deep Tech Blue `#003BFF` |
| Secondary Color | Cyber Mint Green `#31F2C3` |
| Background | Dark Graphite `#0D0F14` |
| Fonts | Inter, Manrope |

---

## 🗂️ Project Structure

```
ailink-web/
├── src/
│   ├── index.tsx          # Hono app entry (routes)
│   └── pages/
│       ├── layout.ts      # HTML layout, navbar, footer, global CSS
│       ├── home.ts        # Full homepage (all 11 sections)
│       └── whitepaper.ts  # Whitepaper v1.1 page
├── public/
│   └── static/
│       └── favicon.svg    # AILINK favicon
├── dist/                  # Build output
├── ecosystem.config.cjs   # PM2 config
├── wrangler.jsonc         # Cloudflare config
├── vite.config.ts         # Vite build config
└── package.json
```

---

## 🛠️ Tech Stack

- **Framework:** Hono v4 (Cloudflare Workers)
- **Build:** Vite + @hono/vite-build
- **Runtime:** Cloudflare Pages (Edge)
- **Frontend:** Tailwind CSS CDN, Chart.js, Font Awesome, Google Fonts (Inter, Manrope)
- **Charts:** Chart.js (Donut tokenomics + Line vesting)

---

## 🚀 Development

```bash
# Install
npm install

# Build
npm run build

# Start (PM2)
pm2 start ecosystem.config.cjs

# Deploy to Cloudflare
npm run deploy
```

---

## 📅 Roadmap

| Phase | Period | Status |
|---|---|---|
| Foundation | Q3 2025 | ✅ Completed |
| TGE Launch | Q4 2025 | 🔄 In Progress |
| Expansion | 2026 | ⏳ Upcoming |
| Decentralization | 2027+ | 🔮 Future |

---

## ⚠️ Legal

ALINK is a utility token, not an investment product. Does not represent equity or guaranteed returns. Users must comply with regional regulations. All smart contracts will undergo professional audits before mainnet deployment.

---

*© 2025 AILINK. All rights reserved.*

# AILINK — Intelligence, Connected.

**Project Name:** AILINK  
**Code Name:** ailink-web  
**Version:** v2.0.0  
**Status:** ✅ Active — Production Live  

---

## 🌐 Live URLs

| Type | URL |
|---|---|
| **Production (Cloudflare Pages)** | https://ailink-web.pages.dev |
| **Sandbox (Dev)** | https://3000-ifclimfdh50ocesbammad-cbeee0f9.sandbox.novita.ai |
| **GitHub** | https://github.com/vinsenzo83/ailink-web |
| **X / Twitter** | https://x.com/AiLink_Official |
| **Telegram** | https://t.me/AiLink_Official |
| **BSCScan (Contract)** | https://bscscan.com/token/0x33c5502261c589a2EC4B1a6C4350aBF60ef47254 |

---

## 📄 Pages (10 routes)

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Live |
| Whitepaper | `/whitepaper` | ✅ Live |
| Login | `/login` | ✅ Live |
| Sign Up | `/signup` | ✅ Live |
| My Dashboard | `/mypage` | ✅ Live |
| Vesting Schedule | `/vesting` | ✅ Live |
| Privacy Policy | `/legal/privacy` | ✅ Live |
| Terms of Service | `/legal/terms` | ✅ Live |
| Disclaimer | `/legal/disclaimer` | ✅ Live |
| Logout | `/logout` | ✅ Live |

---

## 🔐 Login (Demo Mode)

| Method | Credentials |
|---|---|
| **Email** | `demo@ailink.io` / `Demo1234!` |
| **Wallet** | MetaMask / Trust Wallet / WalletConnect / OKX (시뮬레이션) |

- 로그인 후 navbar → **My Page + Logout** 버튼으로 자동 전환
- `localStorage` 기반 세션 유지 (브라우저 닫아도 유지)
- Full auth는 TGE (Q4 2025) 런칭 예정

---

## 💰 Tokenomics

| Item | Value |
|---|---|
| Token Name | AILINK |
| Ticker | ALINK |
| Total Supply | 20,000,000,000 |
| Network | BNB Chain (BEP-20) |
| Contract | 0x33c5502261c589a2EC4B1a6C4350aBF60ef47254 |
| TGE | Q4 2025 |

| Category | % | Tokens | TGE | Cliff | Vesting |
|---|---|---|---|---|---|
| Ecosystem Rewards | 45% | 9B | 300M | 0 mo | 48 mo |
| Team & Advisors | 15% | 3B | — | 12 mo | 36 mo |
| Partnerships & Marketing | 15% | 3B | — | 3 mo | 30 mo |
| Private Sale | 15% | 3B | 450M | 6 mo | 18 mo |
| Protocol Reserve | 10% | 2B | — | 6 mo | 48 mo |

---

## 🛠️ Tech Stack

- **Framework:** Hono v4 (Cloudflare Workers)
- **Build:** Vite + @hono/vite-cloudflare-pages
- **Runtime:** Cloudflare Pages (Edge)
- **Frontend:** Tailwind CSS CDN, Chart.js, Font Awesome 6.6, Google Fonts
- **Auth:** localStorage 기반 데모 인증

---

## ☁️ Cloudflare Deployment

| Item | Value |
|---|---|
| Platform | Cloudflare Pages |
| Project Name | ailink-web |
| Production Branch | main |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| URL | https://ailink-web.pages.dev |

```bash
# 배포 명령
npm run build
npx wrangler pages deploy dist --project-name ailink-web
```

---

## 🚀 Development

```bash
npm install
npm run build
pm2 start ecosystem.config.cjs
```

---

*© 2025 AILINK. All rights reserved. | Last updated: 2026-03-01 | v2.0.0*

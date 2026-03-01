export function layout(title: string, content: string, extraHead: string = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="AILINK — Intelligence, Connected. AI-powered Web3 platform combining on-chain AI engine, decentralized data layer, and reward-based user engagement." />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="Intelligence, Connected. Build. Link. Empower. The AI Network for the Next Web." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ailinkofficial.io" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@AiLink_Official" />
  <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/css/all.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
  ${extraHead}
  <style>
    :root {
      --blue: #003BFF;
      --blue-light: #1a52ff;
      --blue-dark: #0028cc;
      --mint: #31F2C3;
      --mint-dark: #20c9a0;
      --bg: #0D0F14;
      --bg-card: #111318;
      --bg-card2: #161920;
      --border: rgba(49,242,195,0.12);
      --border-blue: rgba(0,59,255,0.2);
      --text: #E8EAF0;
      --text-muted: #8891A5;
      --text-dim: #5A6278;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Inter', 'Manrope', sans-serif;
      font-size: 16px;
      line-height: 1.6;
      overflow-x: hidden;
    }
    
    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--blue); border-radius: 3px; }

    /* ===== TYPOGRAPHY ===== */
    .gradient-text {
      background: linear-gradient(135deg, #003BFF 0%, #31F2C3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .gradient-text-mint {
      background: linear-gradient(135deg, #31F2C3 0%, #003BFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .text-mint { color: var(--mint); }
    .text-blue { color: var(--blue); }

    /* ===== BUTTONS ===== */
    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      background: linear-gradient(135deg, #003BFF, #1a52ff);
      color: #fff; font-weight: 600; font-size: 15px;
      padding: 14px 28px; border-radius: 12px; border: none;
      cursor: pointer; text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0,59,255,0.35);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0,59,255,0.55);
      background: linear-gradient(135deg, #1a52ff, #003BFF);
    }
    .btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      background: transparent; color: var(--mint);
      font-weight: 600; font-size: 15px;
      padding: 13px 28px; border-radius: 12px;
      border: 1.5px solid var(--mint); cursor: pointer;
      text-decoration: none; transition: all 0.3s ease;
    }
    .btn-outline:hover {
      background: rgba(49,242,195,0.1);
      box-shadow: 0 4px 24px rgba(49,242,195,0.25);
      transform: translateY(-2px);
    }
    .btn-ghost {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.05); color: var(--text);
      font-weight: 500; font-size: 14px;
      padding: 10px 20px; border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.08); cursor: pointer;
      text-decoration: none; transition: all 0.3s ease;
    }
    .btn-ghost:hover {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.15);
    }

    /* ===== CARDS ===== */
    .glass-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 20px;
      backdrop-filter: blur(20px);
      transition: all 0.3s ease;
    }
    .glass-card:hover {
      border-color: rgba(49,242,195,0.25);
      box-shadow: 0 8px 40px rgba(0,59,255,0.15);
      transform: translateY(-3px);
    }
    .card-glow {
      position: relative;
      overflow: hidden;
    }
    .card-glow::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--blue), var(--mint), transparent);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .card-glow:hover::before { opacity: 1; }

    /* ===== NAVBAR ===== */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      padding: 18px 0;
      transition: all 0.3s ease;
    }
    .navbar.scrolled {
      background: rgba(13,15,20,0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
      padding: 12px 0;
    }
    .nav-inner {
      max-width: 1280px; margin: 0 auto;
      padding: 0 32px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .nav-logo {
      display: flex; align-items: center; gap: 10px;
      text-decoration: none;
    }
    .nav-logo-icon {
      width: 36px; height: 36px;
      background: linear-gradient(135deg, #003BFF, #31F2C3);
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; color: #fff; font-weight: 900;
    }
    .nav-logo-text {
      font-size: 20px; font-weight: 800;
      font-family: 'Manrope', sans-serif; letter-spacing: -0.5px;
    }
    .nav-links {
      display: flex; align-items: center; gap: 4px;
    }
    .nav-links a {
      color: var(--text-muted); font-size: 14px; font-weight: 500;
      padding: 8px 14px; border-radius: 8px;
      text-decoration: none; transition: all 0.2s;
    }
    .nav-links a:hover { color: var(--text); background: rgba(255,255,255,0.06); }
    .nav-links a.active { color: var(--mint); }
    .nav-cta {
      display: flex; align-items: center; gap: 10px;
    }
    .nav-social { display: flex; align-items: center; gap: 8px; }
    .nav-social a {
      width: 32px; height: 32px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px; display: flex; align-items: center; justify-content: center;
      color: var(--text-muted); font-size: 13px; text-decoration: none;
      transition: all 0.2s;
    }
    .nav-social a:hover { color: var(--mint); border-color: var(--mint); background: rgba(49,242,195,0.08); }
    
    /* Mobile menu */
    .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
    .hamburger span { width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: all 0.3s; }
    .mobile-menu {
      display: none; position: fixed; top: 65px; left: 0; right: 0;
      background: rgba(13,15,20,0.98); backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
      padding: 20px 24px; z-index: 999;
      flex-direction: column; gap: 4px;
    }
    .mobile-menu.open { display: flex; }
    .mobile-menu a {
      color: var(--text-muted); font-size: 15px; font-weight: 500;
      padding: 12px 16px; border-radius: 10px; text-decoration: none;
      transition: all 0.2s;
    }
    .mobile-menu a:hover { color: var(--text); background: rgba(255,255,255,0.06); }

    /* ===== SECTION ===== */
    .section { padding: clamp(70px,8vw,110px) 0; position: relative; }
    .section-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px,4vw,48px); }
    .section-label {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(0,59,255,0.1); border: 1px solid rgba(0,59,255,0.2);
      color: var(--mint); font-size: 12px; font-weight: 700;
      padding: 6px 14px; border-radius: 20px; letter-spacing: 1.5px;
      text-transform: uppercase; margin-bottom: 20px;
    }
    .section-title {
      font-size: clamp(32px,4vw,52px); font-weight: 800;
      line-height: 1.15; letter-spacing: -1px;
      font-family: 'Manrope', sans-serif;
      margin-bottom: 16px;
    }
    .section-subtitle {
      font-size: clamp(16px,2vw,18px); color: var(--text-muted);
      max-width: 580px; line-height: 1.7;
    }

    /* ===== BADGE ===== */
    .badge {
      display: inline-flex; align-items: center; gap: 5px;
      font-size: 11px; font-weight: 700; letter-spacing: 0.8px;
      text-transform: uppercase; padding: 4px 10px; border-radius: 6px;
    }
    .badge-mint { background: rgba(49,242,195,0.12); color: var(--mint); border: 1px solid rgba(49,242,195,0.2); }
    .badge-blue { background: rgba(0,59,255,0.12); color: #6B8FFF; border: 1px solid rgba(0,59,255,0.2); }
    .badge-gold { background: rgba(255,180,0,0.1); color: #FFB400; border: 1px solid rgba(255,180,0,0.2); }

    /* ===== DIVIDER ===== */
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--border), transparent);
      margin: 0;
    }

    /* ===== GLOW EFFECTS ===== */
    .glow-blue { box-shadow: 0 0 40px rgba(0,59,255,0.2); }
    .glow-mint { box-shadow: 0 0 40px rgba(49,242,195,0.15); }

    /* ===== ANIMATIONS ===== */
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    .fade-up { animation: slide-up 0.7s ease both; }
    .float-anim { animation: float 4s ease-in-out infinite; }

    /* ===== GRID NOISE BACKGROUND ===== */
    .grid-bg {
      background-image: 
        linear-gradient(rgba(0,59,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,59,255,0.04) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    /* ===== FOOTER ===== */
    footer {
      background: #090B0F;
      border-top: 1px solid var(--border);
      padding: 70px 0 30px;
    }
    .footer-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px,4vw,48px); }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 48px; margin-bottom: 60px;
    }
    .footer-brand p { color: var(--text-muted); font-size: 14px; line-height: 1.8; margin: 16px 0 24px; max-width: 300px; }
    .footer-social { display: flex; gap: 10px; }
    .footer-social a {
      width: 38px; height: 38px;
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px; display: flex; align-items: center; justify-content: center;
      color: var(--text-muted); font-size: 14px; text-decoration: none;
      transition: all 0.25s;
    }
    .footer-social a:hover { color: var(--mint); border-color: var(--mint); background: rgba(49,242,195,0.08); }
    .footer-col h4 { font-size: 13px; font-weight: 700; color: var(--text); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
    .footer-col ul li a { color: var(--text-muted); font-size: 14px; text-decoration: none; transition: color 0.2s; }
    .footer-col ul li a:hover { color: var(--mint); }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.05);
      padding-top: 28px;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 12px;
    }
    .footer-bottom p { color: var(--text-dim); font-size: 13px; }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
      .nav-links { display: none; }
      .hamburger { display: flex; }
    }
    @media (max-width: 768px) {
      .nav-cta .btn-primary { display: none; }
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
    }
    @media (max-width: 480px) {
      .footer-grid { grid-template-columns: 1fr; }
      .footer-bottom { flex-direction: column; text-align: center; }
    }
  </style>
</head>
<body>
  <!-- NAVBAR -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <div class="nav-logo-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="3" fill="white"/>
            <line x1="10" y1="1" x2="10" y2="7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="10" y1="13" x2="10" y2="19" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="1" y1="10" x2="7" y2="10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="13" y1="10" x2="19" y2="10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="3.2" y1="3.2" x2="7.2" y2="7.2" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="12.8" y1="12.8" x2="16.8" y2="16.8" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="16.8" y1="3.2" x2="12.8" y2="7.2" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="7.2" y1="12.8" x2="3.2" y2="16.8" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="nav-logo-text gradient-text">AILINK</span>
      </a>

      <div class="nav-links">
        <a href="/#features">Features</a>
        <a href="/#ecosystem">Ecosystem</a>
        <a href="/#tokenomics">Tokenomics</a>
        <a href="/#roadmap">Roadmap</a>
        <a href="/#team">Team</a>
        <a href="/whitepaper">Whitepaper</a>
        <a href="/vesting">Vesting</a>
      </div>

      <div class="nav-cta">
        <div class="nav-social">
          <a href="https://x.com/AiLink_Official" target="_blank" rel="noopener" title="X / Twitter">
            <i class="fab fa-x-twitter"></i>
          </a>
          <a href="https://t.me/AiLink_Official" target="_blank" rel="noopener" title="Telegram">
            <i class="fab fa-telegram"></i>
          </a>
        </div>
        <div id="nav-auth-btn">
          <a href="/login" class="btn-primary" style="padding:10px 20px;font-size:13px;">
            <i class="fas fa-user"></i> Sign In
          </a>
        </div>
      </div>

      <div class="hamburger" id="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>

  <!-- MOBILE MENU -->
  <div class="mobile-menu" id="mobileMenu">
    <a href="/#features" onclick="toggleMenu()">Features</a>
    <a href="/#ecosystem" onclick="toggleMenu()">Ecosystem</a>
    <a href="/#tokenomics" onclick="toggleMenu()">Tokenomics</a>
    <a href="/#roadmap" onclick="toggleMenu()">Roadmap</a>
    <a href="/#team" onclick="toggleMenu()">Team</a>
    <a href="/whitepaper" onclick="toggleMenu()">Whitepaper</a>
    <a href="/vesting" onclick="toggleMenu()">Vesting</a>
    <a href="/login" id="mobile-signin-link" onclick="toggleMenu()">Sign In</a>
    <a href="/mypage" id="mobile-mypage-link" onclick="toggleMenu()" style="display:none;">My Dashboard</a>
    <div style="display:flex;gap:10px;padding:8px 16px;margin-top:8px;">
      <a href="https://x.com/AiLink_Official" target="_blank" class="btn-ghost" style="flex:1;justify-content:center;">
        <i class="fab fa-x-twitter"></i> X / Twitter
      </a>
      <a href="https://t.me/AiLink_Official" target="_blank" class="btn-ghost" style="flex:1;justify-content:center;">
        <i class="fab fa-telegram"></i> Telegram
      </a>
    </div>
    <div id="mobile-auth-btn">
      <a href="/login" class="btn-primary" style="margin:8px 16px;justify-content:center;">
        <i class="fas fa-user"></i> Sign In
      </a>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main>
    ${content}
  </main>

  <!-- FOOTER -->
  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="nav-logo" style="text-decoration:none;">
            <div class="nav-logo-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3" fill="white"/>
                <line x1="10" y1="1" x2="10" y2="7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="10" y1="13" x2="10" y2="19" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="1" y1="10" x2="7" y2="10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="13" y1="10" x2="19" y2="10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="3.2" y1="3.2" x2="7.2" y2="7.2" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                <line x1="12.8" y1="12.8" x2="16.8" y2="16.8" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                <line x1="16.8" y1="3.2" x2="12.8" y2="7.2" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                <line x1="7.2" y1="12.8" x2="3.2" y2="16.8" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="nav-logo-text gradient-text">AILINK</span>
          </a>
          <p>Intelligence, Connected. The next-generation AI-driven Web3 platform merging on-chain AI, decentralized data, and reward-based user engagement.</p>
          <div class="footer-social">
            <a href="https://x.com/AiLink_Official" target="_blank" title="X/Twitter"><i class="fab fa-x-twitter"></i></a>
            <a href="https://t.me/AiLink_Official" target="_blank" title="Telegram"><i class="fab fa-telegram"></i></a>
            <a href="#" title="Discord"><i class="fab fa-discord"></i></a>
            <a href="#" title="GitHub"><i class="fab fa-github"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#ecosystem">Ecosystem</a></li>
            <li><a href="/#tokenomics">Tokenomics</a></li>
            <li><a href="/#roadmap">Roadmap</a></li>
            <li><a href="/#team">Team</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/whitepaper">Whitepaper</a></li>
            <li><a href="/vesting">Vesting Schedule</a></li>
            <li><a href="https://bscscan.com/token/0x33c5502261c589a2EC4B1a6C4350aBF60ef47254" target="_blank">Token Contract</a></li>
            <li><a href="/legal/disclaimer">Legal Disclaimer</a></li>
            <li><a href="/login">Dashboard</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Community</h4>
          <ul>
            <li><a href="https://x.com/AiLink_Official" target="_blank">X / Twitter</a></li>
            <li><a href="https://t.me/AiLink_Official" target="_blank">Telegram</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Medium</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 AILINK. All rights reserved. ALINK is a utility token, not an investment.</p>
        <div style="display:flex;gap:20px;">
          <a href="/legal/privacy" style="color:var(--text-dim);font-size:13px;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--mint)'" onmouseout="this.style.color='var(--text-dim)'">Privacy Policy</a>
          <a href="/legal/terms" style="color:var(--text-dim);font-size:13px;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--mint)'" onmouseout="this.style.color='var(--text-dim)'">Terms of Service</a>
          <a href="/legal/disclaimer" style="color:var(--text-dim);font-size:13px;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--mint)'" onmouseout="this.style.color='var(--text-dim)'">Legal Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('open');
    }

    // Fade-up animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.observe').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

  </script>

  <script>
    // ── 로그인 상태에 따라 navbar 버튼 교체 ──────────────────────
    function updateNavAuth() {
      try {
        var raw = localStorage.getItem('ailink_user');
        if (!raw) return;
        var user = JSON.parse(raw);
        if (!user) return;

        var displayName = user.name || user.email || 'My Page';
        var shortName = displayName.length > 14 ? displayName.slice(0,12) + '…' : displayName;

        // 데스크탑 버튼 교체
        var navBtn = document.getElementById('nav-auth-btn');
        if (navBtn) {
          navBtn.innerHTML =
            '<div style="display:flex;align-items:center;gap:8px;">' +
            '<a href="/mypage" class="btn-primary" style="padding:9px 16px;font-size:13px;">' +
            '<i class="fas fa-user-check" style="margin-right:6px;"></i>' + shortName +
            '</a>' +
            '<a href="/logout" title="Logout" style="padding:9px 12px;border-radius:10px;background:rgba(255,80,80,0.1);border:1px solid rgba(255,80,80,0.3);color:#FF8080;font-size:13px;text-decoration:none;display:inline-flex;align-items:center;">' +
            '<i class="fas fa-sign-out-alt"></i>' +
            '</a>' +
            '</div>';
        }

        // 모바일 Sign In 링크 → My Dashboard
        var mSignin = document.getElementById('mobile-signin-link');
        var mMypage = document.getElementById('mobile-mypage-link');
        if (mSignin) mSignin.style.display = 'none';
        if (mMypage) mMypage.style.display = 'block';

        // 모바일 Sign In 버튼 → Logout
        var mAuthBtn = document.getElementById('mobile-auth-btn');
        if (mAuthBtn) {
          mAuthBtn.innerHTML =
            '<a href="/logout" class="btn-ghost" style="margin:8px 16px;justify-content:center;color:#FF8080;border-color:rgba(255,80,80,0.3);">' +
            '<i class="fas fa-sign-out-alt" style="margin-right:6px;"></i>Logout' +
            '</a>';
        }
      } catch(e) { console.error('nav auth error:', e); }
    }

    // DOM 완료 후 + 즉시 실행 (둘 다)
    updateNavAuth();
    document.addEventListener('DOMContentLoaded', updateNavAuth);
  </script>
</body>
</html>`
}

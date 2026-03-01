import { layout } from './layout'

const CONTRACT = '0x33c5502261c589a2EC4B1a6C4350aBF60ef47254'

export function loginPage(): string {
  const content = `
  <section style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:100px 20px 60px;position:relative;overflow:hidden;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.4;"></div>
    <div style="position:absolute;top:20%;left:10%;width:400px;height:400px;background:radial-gradient(circle,rgba(0,59,255,0.15) 0%,transparent 70%);border-radius:50%;filter:blur(60px);animation:pulse-glow 7s ease-in-out infinite;pointer-events:none;"></div>
    <div style="position:absolute;bottom:20%;right:10%;width:350px;height:350px;background:radial-gradient(circle,rgba(49,242,195,0.1) 0%,transparent 70%);border-radius:50%;filter:blur(60px);animation:pulse-glow 9s ease-in-out infinite 2s;pointer-events:none;"></div>

    <div style="position:relative;z-index:1;width:100%;max-width:460px;">

      <!-- Logo -->
      <div style="text-align:center;margin-bottom:32px;">
        <a href="/" style="display:inline-flex;align-items:center;gap:10px;text-decoration:none;margin-bottom:14px;">
          <div style="width:44px;height:44px;background:linear-gradient(135deg,#003BFF,#31F2C3);border-radius:14px;display:flex;align-items:center;justify-content:center;">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
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
          <span style="font-size:24px;font-weight:900;font-family:'Manrope',sans-serif;background:linear-gradient(135deg,#003BFF,#31F2C3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">AILINK</span>
        </a>
        <h1 style="font-size:26px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;margin-bottom:6px;">Welcome Back</h1>
        <p style="font-size:14px;color:var(--text-muted);">Sign in to access your AILINK dashboard</p>
      </div>

      <!-- Main Card -->
      <div class="glass-card" id="login-card" style="padding:36px;border-radius:24px;border:1px solid rgba(49,242,195,0.15);">

        <!-- Tab Switch -->
        <div style="display:grid;grid-template-columns:1fr 1fr;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px;margin-bottom:28px;gap:4px;" id="tab-bar">
          <button id="tab-wallet" onclick="switchTab('wallet')"
            style="padding:10px;border-radius:9px;border:none;cursor:pointer;font-size:13px;font-weight:700;font-family:'Inter',sans-serif;background:linear-gradient(135deg,#003BFF,#1a52ff);color:#fff;transition:all 0.25s;">
            <i class="fas fa-wallet" style="margin-right:6px;"></i>Wallet Connect
          </button>
          <button id="tab-email" onclick="switchTab('email')"
            style="padding:10px;border-radius:9px;border:none;cursor:pointer;font-size:13px;font-weight:700;font-family:'Inter',sans-serif;background:transparent;color:var(--text-muted);transition:all 0.25s;">
            <i class="fas fa-envelope" style="margin-right:6px;"></i>Email Sign In
          </button>
        </div>

        <!-- ── WALLET PANEL ── -->
        <div id="panel-wallet">
          <p style="font-size:13px;color:var(--text-muted);text-align:center;margin-bottom:20px;line-height:1.6;">
            Connect your Web3 wallet to access your AILINK dashboard, points, and ALINK token balance.
          </p>

          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px;" id="wallet-list">
            ${[
              {name:'MetaMask',   icon:'fab fa-ethereum',      color:'#E8831D', desc:'Browser extension wallet', popular:true},
              {name:'Trust Wallet',icon:'fas fa-shield-alt',   color:'#3375BB', desc:'Mobile & desktop wallet',  popular:false},
              {name:'WalletConnect',icon:'fas fa-qrcode',      color:'#3B99FC', desc:'QR code connection',       popular:false},
              {name:'OKX Wallet', icon:'fas fa-exchange-alt',  color:'#00CCFF', desc:'OKX Web3 wallet',          popular:false},
            ].map(w => `
            <button onclick="connectWallet('${w.name}')"
              style="display:flex;align-items:center;gap:14px;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:14px;cursor:pointer;transition:all 0.25s;width:100%;text-align:left;"
              onmouseover="this.style.background='rgba(255,255,255,0.08)';this.style.borderColor='rgba(49,242,195,0.3)'"
              onmouseout="this.style.background='rgba(255,255,255,0.04)';this.style.borderColor='rgba(255,255,255,0.09)'">
              <div style="width:42px;height:42px;background:${w.color}20;border:1px solid ${w.color}40;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${w.icon}" style="font-size:18px;color:${w.color};"></i>
              </div>
              <div style="flex:1;">
                <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:2px;">${w.name}</div>
                <div style="font-size:12px;color:var(--text-muted);">${w.desc}</div>
              </div>
              ${w.popular
                ? `<span style="font-size:10px;font-weight:700;padding:3px 8px;background:rgba(49,242,195,0.12);border:1px solid rgba(49,242,195,0.2);border-radius:5px;color:var(--mint);">Popular</span>`
                : `<i class="fas fa-chevron-right" style="color:var(--text-dim);font-size:11px;"></i>`}
            </button>`).join('')}
          </div>

          <!-- Wallet connecting spinner -->
          <div id="wallet-connecting" style="display:none;text-align:center;padding:24px 0;">
            <div style="width:52px;height:52px;border:3px solid rgba(49,242,195,0.15);border-top-color:var(--mint);border-radius:50%;animation:rotate 0.9s linear infinite;margin:0 auto 14px;"></div>
            <p style="font-size:14px;color:#fff;font-weight:600;" id="wc-label">Connecting...</p>
            <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">Please approve the request in your wallet</p>
          </div>

          <!-- Network Notice -->
          <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(255,180,0,0.07);border:1px solid rgba(255,180,0,0.18);border-radius:12px;padding:14px 16px;" id="network-notice">
            <i class="fas fa-exclamation-triangle" style="color:#FFB400;font-size:13px;margin-top:1px;flex-shrink:0;"></i>
            <p style="font-size:12px;color:var(--text-muted);line-height:1.65;margin:0;">
              Make sure you are on <strong style="color:#FFB400;">BNB Chain (BSC)</strong>.
              Verified contract: <code style="font-size:11px;color:var(--mint);word-break:break-all;">${CONTRACT}</code>
            </p>
          </div>
        </div>

        <!-- ── EMAIL PANEL ── -->
        <div id="panel-email" style="display:none;">

          <!-- Error banner -->
          <div id="login-error" style="display:none;background:rgba(255,80,80,0.08);border:1px solid rgba(255,80,80,0.25);border-radius:10px;padding:12px 16px;margin-bottom:16px;align-items:center;gap:10px;">
            <i class="fas fa-times-circle" style="color:#FF5050;flex-shrink:0;"></i>
            <span id="login-error-msg" style="font-size:13px;color:#FF8080;"></span>
          </div>

          <form id="email-form" onsubmit="handleEmailLogin(event)" novalidate>
            <!-- Email -->
            <div style="margin-bottom:16px;">
              <label style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;display:block;margin-bottom:8px;">Email Address</label>
              <div style="position:relative;">
                <i class="fas fa-envelope" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:14px;pointer-events:none;"></i>
                <input type="email" id="email-input" name="email" placeholder="you@example.com"
                  required autocomplete="email"
                  style="width:100%;padding:13px 14px 13px 40px;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
                  onfocus="this.style.borderColor='rgba(49,242,195,0.45)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
              </div>
              <p id="email-err" style="display:none;font-size:11px;color:#FF8080;margin-top:5px;padding-left:2px;"></p>
            </div>

            <!-- Password -->
            <div style="margin-bottom:6px;">
              <label style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;display:block;margin-bottom:8px;">Password</label>
              <div style="position:relative;">
                <i class="fas fa-lock" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:14px;pointer-events:none;"></i>
                <input type="password" id="pw-input" name="password" placeholder="Enter your password"
                  required autocomplete="current-password"
                  style="width:100%;padding:13px 42px 13px 40px;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
                  onfocus="this.style.borderColor='rgba(49,242,195,0.45)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
                <button type="button" id="pw-toggle" onclick="togglePw()"
                  style="position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:14px;padding:4px;">
                  <i class="fas fa-eye"></i>
                </button>
              </div>
              <p id="pw-err" style="display:none;font-size:11px;color:#FF8080;margin-top:5px;padding-left:2px;"></p>
            </div>

            <div style="text-align:right;margin-bottom:22px;">
              <a href="/login" style="font-size:12px;color:var(--mint);text-decoration:none;font-weight:500;">Forgot password?</a>
            </div>

            <!-- Submit -->
            <button type="submit" id="login-btn" class="btn-primary" style="width:100%;justify-content:center;padding:14px;font-size:15px;position:relative;">
              <span id="login-btn-label"><i class="fas fa-sign-in-alt"></i> Sign In</span>
              <span id="login-btn-loading" style="display:none;">
                <i class="fas fa-spinner fa-spin"></i> Signing in...
              </span>
            </button>
          </form>

          <!-- Divider -->
          <div style="position:relative;text-align:center;margin:22px 0;">
            <div style="height:1px;background:rgba(255,255,255,0.08);"></div>
            <span style="position:absolute;top:-9px;left:50%;transform:translateX(-50%);background:var(--bg-card);padding:0 12px;font-size:12px;color:var(--text-dim);">or continue with</span>
          </div>

          <!-- OAuth -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <button onclick="handleOAuth('Google')"
              style="display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:11px;cursor:pointer;color:var(--text-muted);font-size:13px;font-weight:600;font-family:'Inter',sans-serif;transition:all 0.2s;"
              onmouseover="this.style.background='rgba(255,255,255,0.09)';this.style.borderColor='rgba(66,133,244,0.4)'"
              onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)'">
              <i class="fab fa-google" style="color:#4285F4;"></i> Google
            </button>
            <button onclick="handleOAuth('X')"
              style="display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:11px;cursor:pointer;color:var(--text-muted);font-size:13px;font-weight:600;font-family:'Inter',sans-serif;transition:all 0.2s;"
              onmouseover="this.style.background='rgba(255,255,255,0.09)';this.style.borderColor='rgba(255,255,255,0.3)'"
              onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)'">
              <i class="fab fa-x-twitter" style="color:#fff;"></i> X (Twitter)
            </button>
          </div>

          <p style="text-align:center;font-size:13px;color:var(--text-muted);margin-top:18px;">
            Don't have an account?
            <a href="/signup" style="color:var(--mint);text-decoration:none;font-weight:600;">Sign Up Free</a>
          </p>
        </div>
      </div>

      <!-- Demo notice -->
      <div style="background:rgba(0,59,255,0.06);border:1px solid rgba(0,59,255,0.18);border-radius:12px;padding:12px 16px;margin-top:16px;display:flex;align-items:flex-start;gap:10px;">
        <i class="fas fa-info-circle" style="color:#6B8FFF;flex-shrink:0;margin-top:1px;"></i>
        <p style="font-size:12px;color:var(--text-muted);line-height:1.65;margin:0;">
          <strong style="color:#6B8FFF;">Demo Mode:</strong>
          Use <code style="color:var(--mint);">demo@ailink.io</code> / <code style="color:var(--mint);">Demo1234!</code> to try the dashboard.
          Full authentication launches at TGE (Q4 2025).
        </p>
      </div>

      <!-- Legal -->
      <p style="text-align:center;font-size:12px;color:var(--text-dim);margin-top:16px;line-height:1.7;">
        By signing in you agree to our
        <a href="/legal/terms" style="color:var(--mint);text-decoration:none;">Terms of Service</a> and
        <a href="/legal/privacy" style="color:var(--mint);text-decoration:none;">Privacy Policy</a>
      </p>
    </div>
  </section>

  <script>
  // ── 이미 로그인된 경우 즉시 마이페이지로 ──────────────────────
  (function() {
    try {
      var u = localStorage.getItem('ailink_user');
      if (u && JSON.parse(u)) {
        window.location.replace('/mypage');
      }
    } catch(e) {}
  })();

  // ── Tab switch ────────────────────────────────────────────────
  function switchTab(tab) {
    var isWallet = tab === 'wallet';
    document.getElementById('panel-wallet').style.display = isWallet ? 'block' : 'none';
    document.getElementById('panel-email').style.display  = isWallet ? 'none'  : 'block';
    var tw = document.getElementById('tab-wallet');
    var te = document.getElementById('tab-email');
    tw.style.background = isWallet ? 'linear-gradient(135deg,#003BFF,#1a52ff)' : 'transparent';
    tw.style.color       = isWallet ? '#fff' : 'var(--text-muted)';
    te.style.background  = !isWallet ? 'linear-gradient(135deg,#003BFF,#1a52ff)' : 'transparent';
    te.style.color        = !isWallet ? '#fff' : 'var(--text-muted)';
  }

  // ── Field error helpers ───────────────────────────────────────
  function showFieldError(id, msg) {
    var el = document.getElementById(id);
    el.textContent = msg; el.style.display = 'block';
  }
  function clearFieldError(id) {
    var el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.textContent = ''; }
  }
  function showBanner(msg) {
    var el = document.getElementById('login-error');
    document.getElementById('login-error-msg').textContent = msg;
    el.style.display = 'flex';
    setTimeout(function(){ el.style.display = 'none'; }, 4500);
  }
  function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  // ── Email Login ───────────────────────────────────────────────
  function handleEmailLogin(e) {
    e.preventDefault();
    clearFieldError('email-err');
    clearFieldError('pw-err');

    var email = document.getElementById('email-input').value.trim();
    var pw    = document.getElementById('pw-input').value;
    var valid = true;

    if (!email) {
      showFieldError('email-err', 'Email address is required.'); valid = false;
    } else if (!isValidEmail(email)) {
      showFieldError('email-err', 'Please enter a valid email address.'); valid = false;
    }
    if (!pw) {
      showFieldError('pw-err', 'Password is required.'); valid = false;
    } else if (pw.length < 6) {
      showFieldError('pw-err', 'Password must be at least 6 characters.'); valid = false;
    }
    if (!valid) return;

    // Loading state
    document.getElementById('login-btn-label').style.display   = 'none';
    document.getElementById('login-btn-loading').style.display = 'inline-flex';
    document.getElementById('login-btn').disabled = true;

    setTimeout(function() {
      var DEMO_EMAIL = 'demo@ailink.io';
      var DEMO_PW    = 'Demo1234!';

      if (email === DEMO_EMAIL && pw === DEMO_PW) {
        saveUserAndRedirect({
          email: email,
          name: 'AILINK Demo User',
          wallet: '0x742d35Cc6634C0532925a3b844Bc454e4438F4e2',
          loginAt: Date.now(),
          type: 'email'
        });
      } else if (email !== DEMO_EMAIL) {
        resetLoginBtn();
        showBanner('No account found. Try demo@ailink.io / Demo1234!');
        document.getElementById('email-input').style.borderColor = 'rgba(255,80,80,0.5)';
      } else {
        resetLoginBtn();
        showFieldError('pw-err', 'Incorrect password. Hint: Demo1234!');
        document.getElementById('pw-input').style.borderColor = 'rgba(255,80,80,0.5)';
      }
    }, 1200);
  }

  function resetLoginBtn() {
    document.getElementById('login-btn-label').style.display   = 'inline';
    document.getElementById('login-btn-loading').style.display = 'none';
    document.getElementById('login-btn').disabled = false;
  }

  // ── Wallet Connect ────────────────────────────────────────────
  function connectWallet(name) {
    document.getElementById('wallet-list').style.display    = 'none';
    document.getElementById('network-notice').style.display = 'none';
    document.getElementById('wc-label').textContent = 'Connecting to ' + name + '...';
    document.getElementById('wallet-connecting').style.display = 'block';

    setTimeout(function() {
      var addr = '0x' + Array.from({length:40}, function(){ return '0123456789abcdef'[Math.floor(Math.random()*16)]; }).join('');
      saveUserAndRedirect({
        email: '',
        name: addr.slice(0,6) + '...' + addr.slice(-4),
        wallet: addr,
        loginAt: Date.now(),
        type: 'wallet',
        walletProvider: name
      });
    }, 2000);
  }

  // ── OAuth ─────────────────────────────────────────────────────
  function handleOAuth(provider) {
    showToast('Connecting ' + provider + '...', 'fas fa-spinner fa-spin', 'var(--mint)');
    setTimeout(function() {
      showToast(provider + ' OAuth launches at TGE (Q4 2025)', 'fas fa-clock', '#FFB400');
    }, 1500);
  }

  // ── Save to localStorage & redirect ──────────────────────────
  function saveUserAndRedirect(user) {
    try {
      localStorage.setItem('ailink_user', JSON.stringify(user));
    } catch(e) {}

    // Show success UI
    var card = document.getElementById('login-card');
    document.getElementById('tab-bar').style.display = 'none';
    card.innerHTML =
      '<div style="text-align:center;padding:32px 0;">' +
        '<div style="width:64px;height:64px;background:rgba(49,242,195,0.12);border:2px solid var(--mint);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;">' +
          '<i class="fas fa-check" style="color:var(--mint);font-size:26px;"></i>' +
        '</div>' +
        '<h3 style="font-size:20px;font-weight:800;font-family:Manrope,sans-serif;color:#fff;margin-bottom:8px;">Logged In!</h3>' +
        '<p style="font-size:13px;color:var(--text-muted);">Redirecting to your dashboard...</p>' +
        '<div style="margin-top:20px;height:3px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;">' +
          '<div id="rbar" style="height:100%;width:0%;background:linear-gradient(90deg,#003BFF,#31F2C3);border-radius:2px;transition:width 1.5s ease;"></div>' +
        '</div>' +
      '</div>';
    setTimeout(function(){ document.getElementById('rbar').style.width = '100%'; }, 50);
    setTimeout(function(){ window.location.href = '/mypage'; }, 1700);
  }

  // ── Toast ─────────────────────────────────────────────────────
  function showToast(msg, icon, color) {
    var toast = document.getElementById('__toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = '__toast';
      toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);background:#161920;border:1px solid rgba(49,242,195,0.2);border-radius:12px;padding:13px 20px;font-size:13px;color:#fff;display:flex;align-items:center;gap:10px;z-index:9999;white-space:nowrap;transition:transform 0.4s ease;';
      document.body.appendChild(toast);
    }
    toast.innerHTML = '<i class="' + icon + '" style="color:' + color + ';"></i> <span>' + msg + '</span>';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(toast._t);
    toast._t = setTimeout(function(){ toast.style.transform = 'translateX(-50%) translateY(80px)'; }, 3200);
  }

  // ── Password toggle ───────────────────────────────────────────
  function togglePw() {
    var inp = document.getElementById('pw-input');
    var btn = document.getElementById('pw-toggle');
    if (inp.type === 'password') {
      inp.type = 'text';
      btn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      inp.type = 'password';
      btn.innerHTML = '<i class="fas fa-eye"></i>';
    }
  }

  // ── Clear field errors on input ───────────────────────────────
  document.addEventListener('DOMContentLoaded', function() {
    ['email-input','pw-input'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('input', function() {
        el.style.borderColor = 'rgba(255,255,255,0.1)';
        clearFieldError(id === 'email-input' ? 'email-err' : 'pw-err');
        document.getElementById('login-error').style.display = 'none';
      });
    });
  });
  </script>
  `
  return layout('Login — AILINK | Sign In', content)
}

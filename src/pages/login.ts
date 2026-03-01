import { layout } from './layout'

const CONTRACT = '0x33c5502261c589a2EC4B1a6C4350aBF60ef47254'

export function loginPage(): string {
  const content = `
  <section style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:100px 20px 60px;position:relative;overflow:hidden;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.4;"></div>
    <div style="position:absolute;top:20%;left:10%;width:400px;height:400px;background:radial-gradient(circle,rgba(0,59,255,0.15) 0%,transparent 70%);border-radius:50%;filter:blur(60px);animation:pulse-glow 7s ease-in-out infinite;"></div>
    <div style="position:absolute;bottom:20%;right:10%;width:350px;height:350px;background:radial-gradient(circle,rgba(49,242,195,0.1) 0%,transparent 70%);border-radius:50%;filter:blur(60px);animation:pulse-glow 9s ease-in-out infinite 2s;"></div>

    <div style="position:relative;z-index:1;width:100%;max-width:460px;">
      <!-- Logo -->
      <div style="text-align:center;margin-bottom:36px;">
        <a href="/" style="display:inline-flex;align-items:center;gap:10px;text-decoration:none;margin-bottom:12px;">
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
        <p style="font-size:14px;color:var(--text-muted);">Connect your wallet or sign in to access your dashboard</p>
      </div>

      <!-- Main Card -->
      <div class="glass-card" style="padding:36px;border-radius:24px;border:1px solid rgba(49,242,195,0.15);">

        <!-- Tab Switch -->
        <div style="display:grid;grid-template-columns:1fr 1fr;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px;margin-bottom:28px;gap:4px;">
          <button id="tab-wallet" onclick="switchTab('wallet')" style="padding:10px;border-radius:9px;border:none;cursor:pointer;font-size:13px;font-weight:700;font-family:'Inter',sans-serif;background:linear-gradient(135deg,#003BFF,#1a52ff);color:#fff;transition:all 0.25s;">
            <i class="fas fa-wallet" style="margin-right:6px;"></i>Wallet Connect
          </button>
          <button id="tab-email" onclick="switchTab('email')" style="padding:10px;border-radius:9px;border:none;cursor:pointer;font-size:13px;font-weight:700;font-family:'Inter',sans-serif;background:transparent;color:var(--text-muted);transition:all 0.25s;">
            <i class="fas fa-envelope" style="margin-right:6px;"></i>Email Sign In
          </button>
        </div>

        <!-- Wallet Connect Panel -->
        <div id="panel-wallet">
          <p style="font-size:13px;color:var(--text-muted);text-align:center;margin-bottom:20px;line-height:1.6;">Connect your Web3 wallet to access your AILINK dashboard, points, and ALINK token balance.</p>
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px;">
            ${[
              {name:'MetaMask',icon:'fab fa-ethereum',color:'#E8831D',desc:'Browser extension wallet',popular:true},
              {name:'Trust Wallet',icon:'fas fa-shield-alt',color:'#3375BB',desc:'Mobile & desktop wallet',popular:false},
              {name:'WalletConnect',icon:'fas fa-qrcode',color:'#3B99FC',desc:'QR code connection',popular:false},
              {name:'OKX Wallet',icon:'fas fa-exchange-alt',color:'#00CCFF',desc:'OKX Web3 wallet',popular:false},
            ].map(w=>`
            <button onclick="connectWallet('${w.name}')" style="display:flex;align-items:center;gap:14px;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:14px;cursor:pointer;transition:all 0.25s;width:100%;text-align:left;position:relative;"
              onmouseover="this.style.background='rgba(255,255,255,0.08)';this.style.borderColor='rgba(49,242,195,0.25)'"
              onmouseout="this.style.background='rgba(255,255,255,0.04)';this.style.borderColor='rgba(255,255,255,0.09)'">
              <div style="width:42px;height:42px;background:${w.color}20;border:1px solid ${w.color}40;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${w.icon}" style="font-size:18px;color:${w.color};"></i>
              </div>
              <div style="flex:1;">
                <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:2px;">${w.name}</div>
                <div style="font-size:12px;color:var(--text-muted);">${w.desc}</div>
              </div>
              ${w.popular?`<span style="font-size:10px;font-weight:700;padding:3px 8px;background:rgba(49,242,195,0.12);border:1px solid rgba(49,242,195,0.2);border-radius:5px;color:var(--mint);">Popular</span>`:'<i class="fas fa-chevron-right" style="color:var(--text-dim);font-size:11px;"></i>'}
            </button>`).join('')}
          </div>
          <!-- Network Notice -->
          <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(255,180,0,0.07);border:1px solid rgba(255,180,0,0.18);border-radius:12px;padding:14px 16px;">
            <i class="fas fa-exclamation-triangle" style="color:#FFB400;font-size:13px;margin-top:1px;flex-shrink:0;"></i>
            <p style="font-size:12px;color:var(--text-muted);line-height:1.65;">Make sure you are connected to <strong style="color:#FFB400;">BNB Chain (BSC)</strong> and using the verified contract: <code style="font-size:11px;color:var(--mint);word-break:break-all;">${CONTRACT}</code></p>
          </div>
        </div>

        <!-- Email Panel (hidden) -->
        <div id="panel-email" style="display:none;">
          <form onsubmit="handleEmailLogin(event)">
            <div style="margin-bottom:16px;">
              <label style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;display:block;margin-bottom:8px;">Email Address</label>
              <div style="position:relative;">
                <i class="fas fa-envelope" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:14px;"></i>
                <input type="email" id="email-input" placeholder="you@example.com" required style="width:100%;padding:13px 14px 13px 40px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
                  onfocus="this.style.borderColor='rgba(49,242,195,0.4)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
              </div>
            </div>
            <div style="margin-bottom:22px;">
              <label style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;display:block;margin-bottom:8px;">Password</label>
              <div style="position:relative;">
                <i class="fas fa-lock" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:14px;"></i>
                <input type="password" id="pw-input" placeholder="Enter your password" required style="width:100%;padding:13px 14px 13px 40px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
                  onfocus="this.style.borderColor='rgba(49,242,195,0.4)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
                <button type="button" onclick="togglePw()" style="position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-dim);" id="pw-toggle"><i class="fas fa-eye"></i></button>
              </div>
              <div style="text-align:right;margin-top:7px;"><a href="#" style="font-size:12px;color:var(--mint);text-decoration:none;">Forgot password?</a></div>
            </div>
            <button type="submit" class="btn-primary" style="width:100%;justify-content:center;padding:14px;font-size:15px;">
              <i class="fas fa-sign-in-alt"></i> Sign In
            </button>
          </form>
          <div style="position:relative;text-align:center;margin:20px 0;">
            <div style="height:1px;background:rgba(255,255,255,0.08);"></div>
            <span style="position:absolute;top:-9px;left:50%;transform:translateX(-50%);background:var(--bg-card);padding:0 12px;font-size:12px;color:var(--text-dim);">or continue with</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <button onclick="handleOAuth('Google')" style="display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:11px;cursor:pointer;color:var(--text-muted);font-size:13px;font-weight:600;font-family:'Inter',sans-serif;transition:all 0.2s;"
              onmouseover="this.style.background='rgba(255,255,255,0.09)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
              <i class="fab fa-google" style="color:#4285F4;"></i> Google
            </button>
            <button onclick="handleOAuth('X')" style="display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:11px;cursor:pointer;color:var(--text-muted);font-size:13px;font-weight:600;font-family:'Inter',sans-serif;transition:all 0.2s;"
              onmouseover="this.style.background='rgba(255,255,255,0.09)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
              <i class="fab fa-x-twitter" style="color:#fff;"></i> X (Twitter)
            </button>
          </div>
          <p style="text-align:center;font-size:13px;color:var(--text-muted);margin-top:18px;">
            Don't have an account? <a href="#" style="color:var(--mint);text-decoration:none;font-weight:600;">Sign Up</a>
          </p>
        </div>
      </div>

      <!-- Legal Notice -->
      <p style="text-align:center;font-size:12px;color:var(--text-dim);margin-top:20px;line-height:1.7;">
        By connecting, you agree to our 
        <a href="/legal/terms" style="color:var(--mint);text-decoration:none;">Terms of Service</a> and 
        <a href="/legal/privacy" style="color:var(--mint);text-decoration:none;">Privacy Policy</a>
      </p>

      <!-- Toast notification -->
      <div id="toast" style="position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);background:#161920;border:1px solid rgba(49,242,195,0.2);border-radius:12px;padding:14px 20px;font-size:13px;color:#fff;display:flex;align-items:center;gap:10px;transition:transform 0.4s ease;z-index:9999;white-space:nowrap;">
        <i id="toast-icon" class="fas fa-spinner fa-spin" style="color:var(--mint);"></i>
        <span id="toast-msg">Connecting...</span>
      </div>
    </div>
  </section>

  <script>
    function switchTab(tab) {
      const isWallet = tab === 'wallet';
      document.getElementById('panel-wallet').style.display = isWallet ? 'block' : 'none';
      document.getElementById('panel-email').style.display = isWallet ? 'none' : 'block';
      document.getElementById('tab-wallet').style.background = isWallet ? 'linear-gradient(135deg,#003BFF,#1a52ff)' : 'transparent';
      document.getElementById('tab-wallet').style.color = isWallet ? '#fff' : 'var(--text-muted)';
      document.getElementById('tab-email').style.background = !isWallet ? 'linear-gradient(135deg,#003BFF,#1a52ff)' : 'transparent';
      document.getElementById('tab-email').style.color = !isWallet ? '#fff' : 'var(--text-muted)';
    }

    function showToast(msg, icon='fas fa-check-circle', color='var(--mint)') {
      const toast = document.getElementById('toast');
      document.getElementById('toast-msg').textContent = msg;
      document.getElementById('toast-icon').className = icon;
      document.getElementById('toast-icon').style.color = color;
      toast.style.transform = 'translateX(-50%) translateY(0)';
      setTimeout(() => { toast.style.transform = 'translateX(-50%) translateY(80px)'; }, 3200);
    }

    function connectWallet(name) {
      showToast('Connecting to ' + name + '...', 'fas fa-spinner fa-spin', 'var(--mint)');
      setTimeout(() => {
        showToast(name + ' — Feature coming at TGE launch (Q4 2025)', 'fas fa-clock', '#FFB400');
      }, 1800);
    }

    function handleEmailLogin(e) {
      e.preventDefault();
      showToast('Signing in...', 'fas fa-spinner fa-spin', 'var(--mint)');
      setTimeout(() => {
        showToast('Email login coming at TGE launch (Q4 2025)', 'fas fa-clock', '#FFB400');
      }, 1800);
    }

    function handleOAuth(provider) {
      showToast('Connecting ' + provider + '...', 'fas fa-spinner fa-spin', 'var(--mint)');
      setTimeout(() => {
        showToast(provider + ' login coming soon', 'fas fa-clock', '#FFB400');
      }, 1500);
    }

    function togglePw() {
      const inp = document.getElementById('pw-input');
      const btn = document.getElementById('pw-toggle');
      if(inp.type==='password'){inp.type='text';btn.innerHTML='<i class="fas fa-eye-slash"></i>';}
      else{inp.type='password';btn.innerHTML='<i class="fas fa-eye"></i>';}
    }
  </script>
  `
  return layout('Login — AILINK | Connect Your Wallet', content)
}

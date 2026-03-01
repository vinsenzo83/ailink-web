import { layout } from './layout'

export function signupPage(): string {
  const content = `
  <section style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:100px 20px 60px;position:relative;overflow:hidden;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.4;"></div>
    <div style="position:absolute;top:15%;right:8%;width:420px;height:420px;background:radial-gradient(circle,rgba(49,242,195,0.12) 0%,transparent 70%);border-radius:50%;filter:blur(60px);animation:pulse-glow 8s ease-in-out infinite;pointer-events:none;"></div>
    <div style="position:absolute;bottom:15%;left:8%;width:360px;height:360px;background:radial-gradient(circle,rgba(0,59,255,0.12) 0%,transparent 70%);border-radius:50%;filter:blur(60px);animation:pulse-glow 10s ease-in-out infinite 2s;pointer-events:none;"></div>

    <div style="position:relative;z-index:1;width:100%;max-width:480px;">

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
        <h1 style="font-size:26px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;margin-bottom:6px;">Create Your Account</h1>
        <p style="font-size:14px;color:var(--text-muted);">Join AILINK — earn points, generate AI content, and own your creations</p>
      </div>

      <!-- Perks bar -->
      <div style="display:flex;justify-content:center;gap:18px;margin-bottom:24px;flex-wrap:wrap;">
        ${[
          {icon:'fas fa-star',color:'#FFB400',text:'Bonus Points'},
          {icon:'fas fa-key',color:'#31F2C3',text:'Whitelist Access'},
          {icon:'fas fa-medal',color:'#6B8FFF',text:'Early Supporter Badge'},
        ].map(p=>`
        <div style="display:flex;align-items:center;gap:6px;">
          <i class="${p.icon}" style="color:${p.color};font-size:12px;"></i>
          <span style="font-size:12px;color:var(--text-muted);">${p.text}</span>
        </div>`).join('')}
      </div>

      <!-- Main Card -->
      <div class="glass-card" style="padding:36px;border-radius:24px;border:1px solid rgba(49,242,195,0.15);">

        <!-- Error banner -->
        <div id="signup-error" style="display:none;background:rgba(255,80,80,0.08);border:1px solid rgba(255,80,80,0.25);border-radius:10px;padding:12px 16px;margin-bottom:16px;align-items:center;gap:10px;">
          <i class="fas fa-times-circle" style="color:#FF5050;flex-shrink:0;"></i>
          <span id="signup-error-msg" style="font-size:13px;color:#FF8080;"></span>
        </div>

        <form id="signup-form" onsubmit="handleSignup(event)" novalidate>

          <!-- Full Name -->
          <div style="margin-bottom:16px;">
            <label style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;display:block;margin-bottom:8px;">Full Name</label>
            <div style="position:relative;">
              <i class="fas fa-user" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:13px;pointer-events:none;"></i>
              <input type="text" id="name-input" name="name" placeholder="Your display name"
                required autocomplete="name"
                style="width:100%;padding:13px 14px 13px 40px;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
                onfocus="this.style.borderColor='rgba(49,242,195,0.45)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
            </div>
            <p id="name-err" style="display:none;font-size:11px;color:#FF8080;margin-top:5px;padding-left:2px;"></p>
          </div>

          <!-- Email -->
          <div style="margin-bottom:16px;">
            <label style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;display:block;margin-bottom:8px;">Email Address</label>
            <div style="position:relative;">
              <i class="fas fa-envelope" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:13px;pointer-events:none;"></i>
              <input type="email" id="su-email" name="email" placeholder="you@example.com"
                required autocomplete="email"
                style="width:100%;padding:13px 14px 13px 40px;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
                onfocus="this.style.borderColor='rgba(49,242,195,0.45)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
            </div>
            <p id="su-email-err" style="display:none;font-size:11px;color:#FF8080;margin-top:5px;padding-left:2px;"></p>
          </div>

          <!-- Password -->
          <div style="margin-bottom:16px;">
            <label style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;display:block;margin-bottom:8px;">Password</label>
            <div style="position:relative;">
              <i class="fas fa-lock" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:13px;pointer-events:none;"></i>
              <input type="password" id="su-pw" name="password" placeholder="At least 8 characters"
                required autocomplete="new-password"
                style="width:100%;padding:13px 42px 13px 40px;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
                onfocus="this.style.borderColor='rgba(49,242,195,0.45)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" oninput="checkPwStrength(this.value)" />
              <button type="button" onclick="togglePw('su-pw','su-pw-toggle')"
                id="su-pw-toggle"
                style="position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:14px;padding:4px;">
                <i class="fas fa-eye"></i>
              </button>
            </div>
            <!-- Password strength bar -->
            <div style="margin-top:8px;height:3px;background:rgba(255,255,255,0.07);border-radius:2px;overflow:hidden;">
              <div id="pw-strength-bar" style="height:100%;width:0%;border-radius:2px;transition:width 0.3s,background 0.3s;"></div>
            </div>
            <p id="pw-strength-label" style="font-size:11px;color:var(--text-dim);margin-top:4px;"></p>
            <p id="su-pw-err" style="display:none;font-size:11px;color:#FF8080;margin-top:5px;padding-left:2px;"></p>
          </div>

          <!-- Confirm Password -->
          <div style="margin-bottom:22px;">
            <label style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;display:block;margin-bottom:8px;">Confirm Password</label>
            <div style="position:relative;">
              <i class="fas fa-lock-open" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:13px;pointer-events:none;"></i>
              <input type="password" id="su-pw2" name="confirm_password" placeholder="Re-enter your password"
                required autocomplete="new-password"
                style="width:100%;padding:13px 42px 13px 40px;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color 0.2s;box-sizing:border-box;"
                onfocus="this.style.borderColor='rgba(49,242,195,0.45)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
              <button type="button" onclick="togglePw('su-pw2','su-pw2-toggle')"
                id="su-pw2-toggle"
                style="position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:14px;padding:4px;">
                <i class="fas fa-eye"></i>
              </button>
            </div>
            <p id="su-pw2-err" style="display:none;font-size:11px;color:#FF8080;margin-top:5px;padding-left:2px;"></p>
          </div>

          <!-- Referral (optional) -->
          <div style="margin-bottom:22px;">
            <label style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;display:block;margin-bottom:8px;">
              Referral Code <span style="font-size:10px;font-weight:400;text-transform:none;letter-spacing:0;color:var(--text-dim);">(optional)</span>
            </label>
            <div style="position:relative;">
              <i class="fas fa-gift" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:13px;pointer-events:none;"></i>
              <input type="text" id="ref-code" name="referral" placeholder="e.g. AILINK2025"
                autocomplete="off"
                style="width:100%;padding:13px 14px 13px 40px;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);border-radius:12px;color:#fff;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color 0.2s;box-sizing:border-box;text-transform:uppercase;"
                onfocus="this.style.borderColor='rgba(49,242,195,0.45)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
            </div>
          </div>

          <!-- Terms checkbox -->
          <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:22px;">
            <input type="checkbox" id="terms-check" required
              style="margin-top:2px;accent-color:var(--mint);width:15px;height:15px;flex-shrink:0;cursor:pointer;" />
            <label for="terms-check" style="font-size:13px;color:var(--text-muted);line-height:1.6;cursor:pointer;">
              I agree to the
              <a href="/legal/terms" target="_blank" style="color:var(--mint);text-decoration:none;">Terms of Service</a>
              and
              <a href="/legal/privacy" target="_blank" style="color:var(--mint);text-decoration:none;">Privacy Policy</a>
            </label>
          </div>
          <p id="terms-err" style="display:none;font-size:11px;color:#FF8080;margin-top:-16px;margin-bottom:16px;"></p>

          <!-- Submit button -->
          <button type="submit" id="signup-btn" class="btn-primary" style="width:100%;justify-content:center;padding:14px;font-size:15px;">
            <span id="signup-btn-label"><i class="fas fa-user-plus"></i> Create Account</span>
            <span id="signup-btn-loading" style="display:none;"><i class="fas fa-spinner fa-spin"></i> Creating account...</span>
          </button>
        </form>

        <p style="text-align:center;font-size:13px;color:var(--text-muted);margin-top:20px;">
          Already have an account?
          <a href="/login" style="color:var(--mint);text-decoration:none;font-weight:600;">Sign In</a>
        </p>
      </div>

      <!-- Demo notice -->
      <div style="background:rgba(0,59,255,0.06);border:1px solid rgba(0,59,255,0.18);border-radius:12px;padding:12px 16px;margin-top:16px;display:flex;align-items:flex-start;gap:10px;">
        <i class="fas fa-info-circle" style="color:#6B8FFF;flex-shrink:0;margin-top:1px;"></i>
        <p style="font-size:12px;color:var(--text-muted);line-height:1.65;margin:0;">
          <strong style="color:#6B8FFF;">Demo Mode:</strong>
          Full sign-up & authentication launches at TGE (Q4 2025).
          For now, your account is saved locally in this session.
        </p>
      </div>
    </div>
  </section>

  <script>
  // ── Field helpers ────────────────────────────────────────────
  function showErr(id, msg) {
    const el = document.getElementById(id);
    if (el) { el.textContent = msg; el.style.display = 'block'; }
  }
  function clearErr(id) {
    const el = document.getElementById(id);
    if (el) { el.textContent = ''; el.style.display = 'none'; }
  }
  function isValidEmail(v) { return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v); }

  // ── Password strength ─────────────────────────────────────────
  function checkPwStrength(pw) {
    const bar   = document.getElementById('pw-strength-bar');
    const label = document.getElementById('pw-strength-label');
    if (!bar || !label) return;

    let score = 0;
    if (pw.length >= 8)  score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;

    const configs = [
      {w:'0%',   bg:'transparent',  txt:''},
      {w:'25%',  bg:'#FF5050',      txt:'Weak'},
      {w:'50%',  bg:'#FFB400',      txt:'Fair'},
      {w:'75%',  bg:'#6B8FFF',      txt:'Good'},
      {w:'100%', bg:'#31F2C3',      txt:'Strong'},
    ];
    const c = configs[score];
    bar.style.width      = c.w;
    bar.style.background = c.bg;
    label.textContent    = c.txt;
    label.style.color    = c.bg;
  }

  // ── Password visibility toggle ────────────────────────────────
  function togglePw(inputId, btnId) {
    const inp = document.getElementById(inputId);
    const btn = document.getElementById(btnId);
    if (!inp || !btn) return;
    if (inp.type === 'password') {
      inp.type = 'text';
      btn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      inp.type = 'password';
      btn.innerHTML = '<i class="fas fa-eye"></i>';
    }
  }

  // ── Sign Up handler ───────────────────────────────────────────
  function handleSignup(e) {
    e.preventDefault();
    ['name-err','su-email-err','su-pw-err','su-pw2-err','terms-err'].forEach(clearErr);
    document.getElementById('signup-error').style.display = 'none';

    const name   = document.getElementById('name-input').value.trim();
    const email  = document.getElementById('su-email').value.trim();
    const pw     = document.getElementById('su-pw').value;
    const pw2    = document.getElementById('su-pw2').value;
    const terms  = document.getElementById('terms-check').checked;
    let valid    = true;

    if (!name || name.length < 2) {
      showErr('name-err', 'Please enter your display name (min 2 characters).');
      document.getElementById('name-input').style.borderColor = 'rgba(255,80,80,0.5)';
      valid = false;
    }
    if (!email || !isValidEmail(email)) {
      showErr('su-email-err', 'Please enter a valid email address.');
      document.getElementById('su-email').style.borderColor = 'rgba(255,80,80,0.5)';
      valid = false;
    }
    if (!pw || pw.length < 8) {
      showErr('su-pw-err', 'Password must be at least 8 characters.');
      document.getElementById('su-pw').style.borderColor = 'rgba(255,80,80,0.5)';
      valid = false;
    }
    if (pw !== pw2) {
      showErr('su-pw2-err', 'Passwords do not match.');
      document.getElementById('su-pw2').style.borderColor = 'rgba(255,80,80,0.5)';
      valid = false;
    }
    if (!terms) {
      showErr('terms-err', 'You must agree to the Terms of Service to continue.');
      valid = false;
    }
    if (!valid) return;

    // Loading state
    document.getElementById('signup-btn-label').style.display   = 'none';
    document.getElementById('signup-btn-loading').style.display = 'inline-flex';
    document.getElementById('signup-btn').disabled = true;

    // Simulate registration (1.4s)
    setTimeout(() => {
      const mockWallet = '0x' + Array.from({length:40}, () => '0123456789abcdef'[Math.floor(Math.random()*16)]).join('');

      // Save user to sessionStorage
      localStorage.setItem('ailink_user', JSON.stringify({
        email: email,
        name: name,
        wallet: mockWallet,
        loginAt: Date.now(),
        type: 'email',
        isNew: true,
        referral: document.getElementById('ref-code').value.trim().toUpperCase() || null,
      }));

      // Show success state
      const card = document.querySelector('.glass-card');
      card.innerHTML = \`
        <div style="text-align:center;padding:28px 0;">
          <div style="width:64px;height:64px;background:rgba(49,242,195,0.12);border:2px solid var(--mint);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;animation:pulse-glow 2s ease-in-out infinite;">
            <i class="fas fa-user-check" style="color:var(--mint);font-size:26px;"></i>
          </div>
          <h3 style="font-size:20px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;margin-bottom:8px;">Welcome, \${name}!</h3>
          <p style="font-size:13px;color:var(--text-muted);">Account created. Redirecting to your dashboard...</p>
          <div style="margin-top:18px;height:3px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;">
            <div id="su-redirect-bar" style="height:100%;width:0%;background:linear-gradient(90deg,#003BFF,#31F2C3);border-radius:2px;transition:width 1.4s ease;"></div>
          </div>
        </div>
      \`;
      setTimeout(() => { document.getElementById('su-redirect-bar').style.width = '100%'; }, 50);
      setTimeout(() => { window.location.href = '/mypage'; }, 1600);
    }, 1400);
  }

  // ── Auto-redirect if already logged in ────────────────────────
  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('ailink_user')) {
      window.location.href = '/mypage';
    }
    // Clear error on input change
    const fields = [
      {input:'name-input', err:'name-err'},
      {input:'su-email',   err:'su-email-err'},
      {input:'su-pw',      err:'su-pw-err'},
      {input:'su-pw2',     err:'su-pw2-err'},
    ];
    fields.forEach(({input, err}) => {
      const el = document.getElementById(input);
      if (el) el.addEventListener('input', () => {
        el.style.borderColor = 'rgba(255,255,255,0.1)';
        clearErr(err);
      });
    });
  });
  </script>
  `
  return layout('Sign Up — AILINK | Create Account', content)
}

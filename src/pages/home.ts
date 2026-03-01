import { layout } from './layout'

const CONTRACT = '0x33c5502261c589a2EC4B1a6C4350aBF60ef47254'
const BSCSCAN  = `https://bscscan.com/token/${CONTRACT}`

export function homePage(): string {
  const content = `

  <!-- ===== HERO ===== -->
  <section id="home" style="min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding-top:80px;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.5;"></div>
    <div style="position:absolute;top:10%;left:5%;width:560px;height:560px;background:radial-gradient(circle,rgba(0,59,255,0.16) 0%,transparent 70%);border-radius:50%;filter:blur(50px);animation:pulse-glow 7s ease-in-out infinite;"></div>
    <div style="position:absolute;bottom:15%;right:3%;width:480px;height:480px;background:radial-gradient(circle,rgba(49,242,195,0.11) 0%,transparent 70%);border-radius:50%;filter:blur(60px);animation:pulse-glow 9s ease-in-out infinite 2s;"></div>

    <div class="section-inner" style="width:100%;position:relative;z-index:1;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;" id="hero-grid">
        <!-- Left -->
        <div>
          <div class="fade-up" style="display:inline-flex;align-items:center;gap:8px;background:rgba(49,242,195,0.08);border:1px solid rgba(49,242,195,0.2);border-radius:30px;padding:8px 16px;margin-bottom:28px;">
            <span style="width:7px;height:7px;background:#31F2C3;border-radius:50%;animation:blink 2s infinite;display:inline-block;"></span>
            <span style="font-size:12px;font-weight:700;letter-spacing:1.5px;color:#31F2C3;text-transform:uppercase;">AI Network for the Next Web</span>
          </div>
          <h1 class="fade-up" style="font-size:clamp(40px,5.5vw,74px);font-weight:900;font-family:'Manrope',sans-serif;line-height:1.07;letter-spacing:-2px;margin-bottom:22px;animation-delay:0.1s;">
            Intelligence,<br/><span class="gradient-text">Connected.</span>
          </h1>
          <p class="fade-up" style="font-size:clamp(15px,1.7vw,18px);color:var(--text-muted);line-height:1.8;margin-bottom:36px;max-width:500px;animation-delay:0.2s;">
            AILINK merges AI-powered content creation with Web3 ownership. Play micro-games, generate AI media, mint NFTs, and earn ALINK tokens — all in one seamless intelligent network.
          </p>
          <div class="fade-up" style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:44px;animation-delay:0.3s;">
            <a href="/#ecosystem" class="btn-primary" style="font-size:15px;padding:15px 30px;"><i class="fas fa-rocket"></i> Get Started</a>
            <a href="/whitepaper" class="btn-outline" style="font-size:15px;padding:15px 30px;"><i class="fas fa-file-alt"></i> Whitepaper</a>
            <a href="${BSCSCAN}" target="_blank" class="btn-ghost" style="font-size:14px;padding:15px 22px;"><i class="fas fa-cube"></i> Contract</a>
          </div>
          <!-- Stats -->
          <div class="fade-up" style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;animation-delay:0.4s;">
            <div style="border-left:2px solid var(--blue);padding-left:14px;">
              <div style="font-size:26px;font-weight:800;font-family:'Manrope',sans-serif;">20B</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">ALINK Total Supply</div>
            </div>
            <div style="border-left:2px solid var(--mint);padding-left:14px;">
              <div style="font-size:26px;font-weight:800;font-family:'Manrope',sans-serif;">Q4 '25</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">TGE & DEX Listing</div>
            </div>
            <div style="border-left:2px solid rgba(255,180,0,0.6);padding-left:14px;">
              <div style="font-size:26px;font-weight:800;font-family:'Manrope',sans-serif;">BNB</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">BEP-20 Verified</div>
            </div>
          </div>
        </div>
        <!-- Right Card -->
        <div class="float-anim" style="position:relative;display:flex;justify-content:center;">
          <div class="glass-card card-glow" style="width:100%;max-width:420px;padding:28px;background:linear-gradient(145deg,rgba(17,19,24,0.9),rgba(22,25,32,0.9));border:1px solid rgba(49,242,195,0.15);border-radius:24px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:38px;height:38px;background:linear-gradient(135deg,#003BFF,#31F2C3);border-radius:11px;display:flex;align-items:center;justify-content:center;">
                  <i class="fas fa-brain" style="color:#fff;font-size:15px;"></i>
                </div>
                <div>
                  <div style="font-size:13px;font-weight:700;">AI Engine</div>
                  <div style="font-size:11px;color:var(--text-muted);">On-chain Intelligence</div>
                </div>
              </div>
              <span class="badge badge-mint"><span style="width:5px;height:5px;background:var(--mint);border-radius:50%;animation:blink 1.5s infinite;display:inline-block;"></span> LIVE</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:9px;margin-bottom:22px;">
              ${['AI Image Generated — Cyberpunk Portrait','NFT Minted — Neural Series #4821','Micro-game Reward — +150 pts','AI Video Rendered — 4s Motion','ALINK Staked — 50,000 tokens'].map((item,i)=>`
              <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:9px;padding:9px 12px;">
                <div style="width:6px;height:6px;background:${['#31F2C3','#003BFF','#FFB400','#31F2C3','#8B5CF6'][i]};border-radius:50%;flex-shrink:0;"></div>
                <span style="font-size:12px;color:var(--text-muted);flex:1;">${item}</span>
                <span style="font-size:10px;color:var(--text-dim);">${['2s','8s','15s','32s','1m'][i]} ago</span>
              </div>`).join('')}
            </div>
            <!-- Contract address chip -->
            <a href="${BSCSCAN}" target="_blank" style="display:flex;align-items:center;gap:8px;background:rgba(0,59,255,0.08);border:1px solid rgba(0,59,255,0.2);border-radius:10px;padding:10px 14px;text-decoration:none;transition:all 0.2s;"
              onmouseover="this.style.background='rgba(0,59,255,0.14)'" onmouseout="this.style.background='rgba(0,59,255,0.08)'">
              <i class="fas fa-cube" style="color:#6B8FFF;font-size:12px;"></i>
              <span style="font-size:11px;color:var(--text-muted);font-family:monospace;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${CONTRACT}</span>
              <i class="fas fa-external-link-alt" style="color:var(--text-dim);font-size:10px;flex-shrink:0;"></i>
            </a>
          </div>
          <!-- Floating badges -->
          <div class="glass-card" style="position:absolute;top:-18px;right:-16px;padding:10px 14px;display:flex;align-items:center;gap:8px;border-radius:12px;border:1px solid rgba(0,59,255,0.25);">
            <i class="fas fa-shield-alt" style="color:#6B8FFF;font-size:13px;"></i>
            <div><div style="font-size:11px;font-weight:700;">CertiK Audited</div><div style="font-size:10px;color:var(--text-muted);">Security Verified</div></div>
          </div>
          <div class="glass-card" style="position:absolute;bottom:-14px;left:-14px;padding:10px 14px;display:flex;align-items:center;gap:8px;border-radius:12px;border:1px solid rgba(49,242,195,0.2);">
            <i class="fas fa-check-circle" style="color:#31F2C3;font-size:13px;"></i>
            <div><div style="font-size:11px;font-weight:700;">Source Verified</div><div style="font-size:10px;color:var(--text-muted);">BscScan Confirmed</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CONTRACT BANNER ===== -->
  <section style="padding:22px 0;background:rgba(0,59,255,0.06);border-top:1px solid rgba(0,59,255,0.15);border-bottom:1px solid rgba(0,59,255,0.15);">
    <div class="section-inner">
      <div style="display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;">
        <span style="font-size:12px;font-weight:700;color:#6B8FFF;text-transform:uppercase;letter-spacing:1px;display:flex;align-items:center;gap:6px;">
          <i class="fas fa-cube"></i> Token Contract (BNB Chain / BEP-20)
        </span>
        <a href="${BSCSCAN}" target="_blank"
          style="display:flex;align-items:center;gap:8px;background:rgba(0,59,255,0.1);border:1px solid rgba(0,59,255,0.25);border-radius:8px;padding:8px 16px;text-decoration:none;transition:all 0.2s;"
          onmouseover="this.style.background='rgba(0,59,255,0.18)'" onmouseout="this.style.background='rgba(0,59,255,0.1)'">
          <span style="font-size:13px;font-family:monospace;color:#fff;letter-spacing:0.3px;">${CONTRACT}</span>
          <i class="fas fa-external-link-alt" style="color:#6B8FFF;font-size:11px;"></i>
        </a>
        <button onclick="navigator.clipboard.writeText('${CONTRACT}');this.innerHTML='<i class=\\'fas fa-check\\'></i> Copied!';setTimeout(()=>this.innerHTML='<i class=\\'fas fa-copy\\'></i> Copy',2000)"
          style="display:flex;align-items:center;gap:6px;background:rgba(49,242,195,0.08);border:1px solid rgba(49,242,195,0.2);border-radius:8px;padding:8px 14px;color:var(--mint);font-size:12px;font-weight:600;cursor:pointer;transition:all 0.2s;">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
    </div>
  </section>

  <!-- ===== BRAND ASSETS DOWNLOAD ===== -->
  <section style="padding:18px 0;background:rgba(49,242,195,0.03);border-bottom:1px solid rgba(49,242,195,0.1);">
    <div class="section-inner">
      <div style="display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="/static/logo-icon.svg" alt="AILINK Logo" style="width:30px;height:30px;"/>
          <div>
            <div style="font-size:11px;font-weight:700;color:var(--mint);text-transform:uppercase;letter-spacing:1.5px;">Brand Assets</div>
            <div style="font-size:10px;color:var(--text-muted);">Official logo kit — SVG format</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <a href="/static/logo-square.svg" download="ailink-logo-square.svg"
             style="display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:var(--mint);border:1px solid rgba(49,242,195,0.3);border-radius:6px;padding:6px 12px;text-decoration:none;transition:all 0.2s;background:rgba(49,242,195,0.04);"
             onmouseover="this.style.background='rgba(49,242,195,0.12)'" onmouseout="this.style.background='rgba(49,242,195,0.04)'">
            <i class="fas fa-download" style="font-size:10px;"></i> 1:1 Square
          </a>
          <a href="/static/logo-horizontal.svg" download="ailink-logo-horizontal.svg"
             style="display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:var(--mint);border:1px solid rgba(49,242,195,0.3);border-radius:6px;padding:6px 12px;text-decoration:none;transition:all 0.2s;background:rgba(49,242,195,0.04);"
             onmouseover="this.style.background='rgba(49,242,195,0.12)'" onmouseout="this.style.background='rgba(49,242,195,0.04)'">
            <i class="fas fa-download" style="font-size:10px;"></i> Horizontal
          </a>
          <a href="/static/logo-icon.svg" download="ailink-logo-icon.svg"
             style="display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:var(--mint);border:1px solid rgba(49,242,195,0.3);border-radius:6px;padding:6px 12px;text-decoration:none;transition:all 0.2s;background:rgba(49,242,195,0.04);"
             onmouseover="this.style.background='rgba(49,242,195,0.12)'" onmouseout="this.style.background='rgba(49,242,195,0.04)'">
            <i class="fas fa-download" style="font-size:10px;"></i> Icon
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TRUST BAR ===== -->
  <section style="padding:26px 0;background:rgba(255,255,255,0.02);border-bottom:1px solid var(--border);">
    <div class="section-inner">
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:0;text-align:center;" id="trust-bar">
        ${[
          {icon:'fas fa-microchip',val:'On-Chain',label:'AI Engine'},
          {icon:'fas fa-gamepad',val:'Micro',label:'Game Rewards'},
          {icon:'fas fa-image',val:'AI Media',label:'Generation Suite'},
          {icon:'fas fa-coins',val:'20B',label:'ALINK Supply'},
          {icon:'fas fa-vote-yea',val:'DAO',label:'Governance 2026'},
          {icon:'fas fa-link',val:'BEP-20',label:'BNB Chain Native'},
        ].map((s,i)=>`
        <div style="padding:14px;${i<5?'border-right:1px solid var(--border);':''}display:flex;flex-direction:column;align-items:center;gap:5px;">
          <i class="${s.icon}" style="font-size:17px;color:var(--mint);margin-bottom:2px;"></i>
          <div style="font-size:14px;font-weight:700;">${s.val}</div>
          <div style="font-size:11px;color:var(--text-muted);">${s.label}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ===== HOW IT WORKS ===== -->
  <section id="how-it-works" class="section observe">
    <div class="section-inner">
      <div style="text-align:center;max-width:640px;margin:0 auto 60px;">
        <div class="section-label"><i class="fas fa-play-circle"></i>&nbsp; How It Works</div>
        <h2 class="section-title">Three Steps to <span class="gradient-text">Earn & Own</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">From playing to creating to owning — every action builds your AILINK journey.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;position:relative;" id="hiw-grid">
        <div style="position:absolute;top:60px;left:16%;right:16%;height:1px;background:linear-gradient(90deg,transparent,var(--blue),var(--mint),transparent);opacity:0.2;z-index:0;"></div>
        ${[
          {n:'01',icon:'fas fa-gamepad',color:'#003BFF',title:'Play & Earn Points',
           desc:'Join daily micro-games, complete missions, and social tasks. Every interaction earns AILINK Points deposited instantly to your dashboard.',
           items:['Daily Missions','Streak Bonuses','Anti-Cheat System','Social Actions']},
          {n:'02',icon:'fas fa-wand-magic-sparkles',color:'#31F2C3',title:'Create AI Media',
           desc:'Use your points to access the AI Creation Suite. Generate images, avatars, and video clips with cutting-edge diffusion models.',
           items:['Image Generation','Video Synthesis','Avatar AI','Prompt-Based Tools']},
          {n:'03',icon:'fas fa-coins',color:'#FFB400',title:'Own & Trade On-Chain',
           desc:'Mint your creations as NFTs, redeem points for ALINK tokens, stake for premium access, or trade in the marketplace.',
           items:['NFT Minting','Token Redemption','Staking Rewards','Marketplace Trading']},
        ].map((s,i)=>`
        <div class="glass-card card-glow observe" style="padding:32px;position:relative;z-index:1;animation-delay:${i*0.12}s;">
          <div style="width:64px;height:64px;background:${s.color}18;border:2px solid ${s.color}33;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;position:relative;">
            <i class="${s.icon}" style="font-size:24px;color:${s.color};"></i>
            <span style="position:absolute;top:-8px;right:-8px;background:var(--bg);border:1px solid var(--border);border-radius:6px;font-size:10px;font-weight:800;color:${s.color};padding:2px 6px;">${s.n}</span>
          </div>
          <h3 style="font-size:18px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;margin-bottom:10px;">${s.title}</h3>
          <p style="font-size:13px;color:var(--text-muted);line-height:1.75;margin-bottom:18px;">${s.desc}</p>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:7px;">
            ${s.items.map(it=>`<li style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text-muted);">
              <i class="fas fa-check" style="color:${s.color};font-size:9px;"></i>${it}</li>`).join('')}
          </ul>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== FEATURES ===== -->
  <section id="features" class="section observe">
    <div class="section-inner">
      <div style="max-width:640px;margin-bottom:56px;">
        <div class="section-label"><i class="fas fa-layer-group"></i>&nbsp; Core Features</div>
        <h2 class="section-title">Build. <span class="gradient-text">Link.</span> Empower.</h2>
        <p class="section-subtitle">AILINK delivers a seamless intelligent network where users create AI content, earn rewards through gameplay, and own digital assets on-chain.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;" id="feat-grid">
        ${[
          {icon:'fas fa-gamepad',color:'#003BFF',title:'Interactive Micro-Games',desc:'Daily tasks, missions, and social actions reward players with AILINK Points. Anti-cheat ensures fairness.',tags:['Daily Missions','Anti-Cheat','Streak Rewards']},
          {icon:'fas fa-magic',color:'#31F2C3',title:'AI Media Creation Suite',desc:'Generate images, avatars, and short clips via prompt-based AI tools. Expanding into video and motion synthesis.',tags:['Image Gen','Video Synthesis','Avatar AI']},
          {icon:'fas fa-trophy',color:'#FFB400',title:'Point-Driven Utility',desc:'Points accumulate in your dashboard. Redeem for AI tool access or ALINK tokens. Seasonal reward cycles.',tags:['Point System','Token Redemption','Seasonal Events']},
          {icon:'fas fa-cube',color:'#8B5CF6',title:'On-Chain Asset Minting',desc:'AI-generated works can be minted as NFTs with standardized metadata and optional royalty settings.',tags:['NFT Minting','Royalties','Metadata Standard']},
          {icon:'fas fa-gift',color:'#31F2C3',title:'Engagement Rewards',desc:'Earn based on activity, creativity, and contributions. Referral events expand distribution opportunities.',tags:['Referral System','Activity Rewards','Community Events']},
          {icon:'fas fa-vote-yea',color:'#003BFF',title:'DAO Governance (2026)',desc:'ALINK token holders vote on protocol development, fund allocation, and network parameters.',tags:['Token Voting','Proposals','2026 Launch']},
        ].map((f,i)=>`
        <div class="glass-card card-glow observe" style="padding:28px;animation-delay:${i*0.07}s;">
          <div style="width:48px;height:48px;background:${f.color}1A;border:1px solid ${f.color}33;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;">
            <i class="${f.icon}" style="font-size:20px;color:${f.color};"></i>
          </div>
          <h3 style="font-size:16px;font-weight:700;font-family:'Manrope',sans-serif;margin-bottom:10px;">${f.title}</h3>
          <p style="font-size:13px;color:var(--text-muted);line-height:1.75;margin-bottom:16px;">${f.desc}</p>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${f.tags.map(t=>`<span style="font-size:11px;font-weight:600;padding:3px 9px;border-radius:5px;background:rgba(255,255,255,0.05);color:var(--text-muted);border:1px solid rgba(255,255,255,0.08);">${t}</span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== ECOSYSTEM ===== -->
  <section id="ecosystem" class="section observe">
    <div class="section-inner">
      <div style="text-align:center;max-width:680px;margin:0 auto 56px;">
        <div class="section-label"><i class="fas fa-network-wired"></i>&nbsp; Ecosystem</div>
        <h2 class="section-title">One <span class="gradient-text">Intelligent</span> Loop</h2>
        <p class="section-subtitle" style="margin:0 auto;">A self-sustaining cycle of participation, creation, and ownership powered by the AILINK network.</p>
      </div>
      <!-- Flow arrows -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-bottom:56px;position:relative;" id="eco-flow">
        <div style="position:absolute;top:48%;left:12%;right:12%;height:1px;background:linear-gradient(90deg,var(--blue),var(--mint),var(--blue),var(--mint));opacity:0.2;z-index:0;"></div>
        ${[
          {n:'01',icon:'fas fa-gamepad',color:'#6B8FFF',title:'Play Micro-Games',desc:'Engage daily missions, earn AILINK Points'},
          {n:'02',icon:'fas fa-wand-magic-sparkles',color:'#31F2C3',title:'Create AI Media',desc:'Use points for AI image, video & avatar'},
          {n:'03',icon:'fas fa-cube',color:'#A78BFA',title:'Mint On-Chain',desc:'Convert creations into royalty NFTs'},
          {n:'04',icon:'fas fa-coins',color:'#FFB400',title:'Earn & Trade',desc:'Redeem ALINK, stake for premium, trade'},
        ].map((s,i)=>`
        <div class="observe" style="position:relative;z-index:1;text-align:center;padding:0 12px;animation-delay:${i*0.1}s;">
          <div style="width:68px;height:68px;margin:0 auto 16px;background:linear-gradient(135deg,rgba(0,59,255,0.12),rgba(49,242,195,0.08));border:2px solid ${i%2===0?'rgba(0,59,255,0.3)':'rgba(49,242,195,0.25)'};border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;">
            <i class="${s.icon}" style="font-size:24px;color:${s.color};"></i>
            <span style="position:absolute;top:-8px;right:-8px;background:var(--bg);border:1px solid var(--border);border-radius:6px;font-size:10px;font-weight:800;color:${s.color};padding:2px 6px;">${s.n}</span>
          </div>
          <h3 style="font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;">${s.title}</h3>
          <p style="font-size:13px;color:var(--text-muted);line-height:1.6;">${s.desc}</p>
        </div>`).join('')}
      </div>
      <!-- Pillars -->
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:18px;" id="eco-pillars">
        ${[
          {icon:'fas fa-brain',color:'#003BFF',title:'AI Generation Engine',desc:'Optimized diffusion models for image, video, and motion synthesis. GPU pipelines scale on-demand.',items:['Image Generation','Video Synthesis','Avatar Creation','Motion Graphics']},
          {icon:'fas fa-store',color:'#31F2C3',title:'NFT Marketplace',desc:'Trade AI-generated NFTs. Royalty system ensures creators earn from every secondary sale.',items:['Buy & Sell NFTs','Creator Royalties','Metadata Standard','Cross-Platform']},
          {icon:'fas fa-gamepad',color:'#8B5CF6',title:'Micro-Game Hub',desc:'Daily challenges, social missions, streak rewards. Anti-cheat infrastructure for fair play.',items:['Daily Missions','Streak System','Anti-Cheat','Leaderboards']},
          {icon:'fas fa-sitemap',color:'#FFB400',title:'DAO & Protocol Reserve',desc:'20B ALINK token economy with transparent vesting. DAO governance launches in 2026.',items:['Token Governance','Treasury Fund','Protocol Reserve','2026 DAO Launch']},
        ].map((p,i)=>`
        <div class="glass-card card-glow observe" style="padding:30px;animation-delay:${i*0.08}s;">
          <div style="display:flex;align-items:flex-start;gap:18px;margin-bottom:20px;">
            <div style="width:50px;height:50px;background:${p.color}1A;border:1px solid ${p.color}33;border-radius:14px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
              <i class="${p.icon}" style="font-size:20px;color:${p.color};"></i>
            </div>
            <div>
              <h3 style="font-size:18px;font-weight:700;font-family:'Manrope',sans-serif;margin-bottom:7px;">${p.title}</h3>
              <p style="font-size:13px;color:var(--text-muted);line-height:1.7;">${p.desc}</p>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:7px;">
            ${p.items.map(it=>`<div style="display:flex;align-items:center;gap:7px;background:rgba(255,255,255,0.03);border-radius:7px;padding:7px 10px;"><i class="fas fa-check" style="color:var(--mint);font-size:9px;"></i><span style="font-size:12px;color:var(--text-muted);">${it}</span></div>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== TOKENOMICS ===== -->
  <section id="tokenomics" class="section observe">
    <div class="section-inner">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start;" id="token-grid">
        <!-- Left -->
        <div>
          <div class="section-label"><i class="fas fa-coins"></i>&nbsp; Tokenomics</div>
          <h2 class="section-title">ALINK <span class="gradient-text">Token</span><br/>Economy</h2>
          <p class="section-subtitle" style="margin-bottom:32px;">A transparent, utility-first token model designed for long-term ecosystem sustainability.</p>
          <!-- Key info -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:28px;">
            ${[
              {label:'Token Name',val:'AILINK',icon:'fas fa-tag'},
              {label:'Ticker',val:'ALINK',icon:'fas fa-hashtag'},
              {label:'Total Supply',val:'20,000,000,000',icon:'fas fa-infinity'},
              {label:'Network',val:'BNB Chain',icon:'fas fa-network-wired'},
              {label:'Standard',val:'BEP-20',icon:'fas fa-file-code'},
              {label:'TGE',val:'Q4 2025',icon:'fas fa-calendar'},
            ].map(it=>`
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:14px 16px;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;"><i class="${it.icon}" style="color:var(--mint);font-size:10px;"></i><span style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;">${it.label}</span></div>
              <div style="font-size:14px;font-weight:700;">${it.val}</div>
            </div>`).join('')}
          </div>
          <!-- Contract address box -->
          <div style="background:rgba(0,59,255,0.07);border:1px solid rgba(0,59,255,0.2);border-radius:14px;padding:18px 20px;margin-bottom:24px;">
            <div style="font-size:11px;color:#6B8FFF;text-transform:uppercase;letter-spacing:1px;font-weight:700;margin-bottom:8px;display:flex;align-items:center;gap:6px;"><i class="fas fa-cube"></i> Token Contract (Verified)</div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
              <code style="font-size:12px;color:#fff;font-family:monospace;word-break:break-all;">${CONTRACT}</code>
              <a href="${BSCSCAN}" target="_blank" style="display:inline-flex;align-items:center;gap:4px;background:rgba(0,59,255,0.15);border:1px solid rgba(0,59,255,0.3);border-radius:6px;padding:4px 10px;color:#6B8FFF;font-size:11px;text-decoration:none;white-space:nowrap;transition:all 0.2s;"
                onmouseover="this.style.background='rgba(0,59,255,0.25)'" onmouseout="this.style.background='rgba(0,59,255,0.15)'">
                <i class="fas fa-external-link-alt"></i> BscScan
              </a>
            </div>
          </div>
          <!-- Allocations -->
          <div style="display:flex;flex-direction:column;gap:9px;">
            ${[
              {cat:'Ecosystem Rewards',pct:45,color:'#003BFF',amount:'9.0B'},
              {cat:'Team & Advisors',pct:15,color:'#31F2C3',amount:'3.0B'},
              {cat:'Partnerships & Marketing',pct:15,color:'#8B5CF6',amount:'3.0B'},
              {cat:'Private Sale',pct:15,color:'#FFB400',amount:'3.0B'},
              {cat:'Protocol Reserve',pct:10,color:'#FF6B6B',amount:'2.0B'},
            ].map(a=>`
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:11px;padding:12px 16px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:7px;">
                <div style="display:flex;align-items:center;gap:8px;"><div style="width:9px;height:9px;background:${a.color};border-radius:3px;"></div><span style="font-size:13px;font-weight:600;">${a.cat}</span></div>
                <div><span style="font-size:14px;font-weight:800;color:${a.color};">${a.pct}%</span><span style="font-size:11px;color:var(--text-muted);margin-left:7px;">${a.amount}</span></div>
              </div>
              <div style="height:4px;background:rgba(255,255,255,0.05);border-radius:2px;overflow:hidden;"><div style="height:100%;width:${a.pct}%;background:${a.color};border-radius:2px;"></div></div>
            </div>`).join('')}
          </div>
        </div>
        <!-- Right -->
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div class="glass-card" style="padding:32px;text-align:center;">
            <div style="position:relative;display:inline-block;">
              <canvas id="tokenomicsChart" width="260" height="260"></canvas>
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;">
                <div style="font-size:26px;font-weight:900;font-family:'Manrope',sans-serif;">20B</div>
                <div style="font-size:11px;color:var(--text-muted);margin-top:3px;">Total Supply</div>
              </div>
            </div>
          </div>
          <!-- Vesting table -->
          <div class="glass-card" style="padding:24px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
              <h3 style="font-size:15px;font-weight:700;display:flex;align-items:center;gap:7px;"><i class="fas fa-calendar-alt" style="color:var(--mint);"></i> Vesting Schedule</h3>
              <a href="/vesting" style="font-size:12px;color:var(--mint);text-decoration:none;display:flex;align-items:center;gap:4px;">Full Details <i class="fas fa-arrow-right" style="font-size:10px;"></i></a>
            </div>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;font-size:12px;">
                <thead><tr style="border-bottom:1px solid var(--border);">
                  <th style="text-align:left;padding:7px 5px;color:var(--text-muted);font-size:10px;text-transform:uppercase;">Category</th>
                  <th style="text-align:center;padding:7px 5px;color:var(--text-muted);font-size:10px;text-transform:uppercase;">TGE</th>
                  <th style="text-align:center;padding:7px 5px;color:var(--text-muted);font-size:10px;text-transform:uppercase;">Cliff</th>
                  <th style="text-align:center;padding:7px 5px;color:var(--text-muted);font-size:10px;text-transform:uppercase;">Vest</th>
                </tr></thead>
                <tbody>
                  ${[
                    {cat:'Ecosystem',col:'#003BFF',tge:'150M',cliff:'—',vest:'48 mo'},
                    {cat:'Team',col:'#31F2C3',tge:'—',cliff:'12 mo',vest:'36 mo'},
                    {cat:'Partnerships',col:'#8B5CF6',tge:'—',cliff:'3 mo',vest:'30 mo'},
                    {cat:'Private Sale',col:'#FFB400',tge:'—',cliff:'6 mo',vest:'18 mo'},
                    {cat:'Reserve',col:'#FF6B6B',tge:'—',cliff:'6 mo',vest:'48 mo'},
                  ].map(r=>`
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                    <td style="padding:9px 5px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:7px;height:7px;background:${r.col};border-radius:2px;"></div><span style="color:#fff;font-weight:500;">${r.cat}</span></div></td>
                    <td style="text-align:center;padding:9px 5px;color:var(--text-muted);">${r.tge}</td>
                    <td style="text-align:center;padding:9px 5px;color:var(--text-muted);">${r.cliff}</td>
                    <td style="text-align:center;padding:9px 5px;color:${r.col};font-weight:700;">${r.vest}</td>
                  </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Vesting chart -->
      <div class="glass-card observe" style="padding:32px;margin-top:28px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
          <div>
            <h3 style="font-size:18px;font-weight:700;font-family:'Manrope',sans-serif;">60-Month Token Release Schedule</h3>
            <p style="font-size:13px;color:var(--text-muted);margin-top:4px;">Cumulative circulating supply — reaches 100% at Month 53</p>
          </div>
          <div style="display:flex;gap:14px;flex-wrap:wrap;">
            ${[{mo:'Month 1',val:'4.5%',col:'#31F2C3'},{mo:'Month 12',val:'25.1%',col:'#003BFF'},{mo:'Month 24',val:'57.7%',col:'#8B5CF6'},{mo:'Month 36',val:'80.4%',col:'#FFB400'},{mo:'Month 53',val:'100%',col:'#FF6B6B'}].map(m=>`
            <div style="text-align:center;"><div style="font-size:13px;font-weight:800;color:${m.col};">${m.val}</div><div style="font-size:10px;color:var(--text-muted);">${m.mo}</div></div>`).join('')}
          </div>
        </div>
        <canvas id="vestingChart" height="80"></canvas>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== ROADMAP ===== -->
  <section id="roadmap" class="section observe">
    <div class="section-inner">
      <div style="text-align:center;max-width:620px;margin:0 auto 56px;">
        <div class="section-label"><i class="fas fa-map"></i>&nbsp; Roadmap</div>
        <h2 class="section-title">Path to <span class="gradient-text">Intelligence</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">A phased rollout from MVP to full decentralized AI network.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px;" id="roadmap-grid">
        ${[
          {phase:'Q3 2025',status:'completed',color:'#31F2C3',title:'Foundation',items:['Official project announcement','Micro-game MVP release','AI image generator early access','Community building begins']},
          {phase:'Q4 2025',status:'active',color:'#003BFF',title:'TGE Launch',items:['NFT minting module activation','AI video engine beta','Community reward events','TGE and initial DEX listing','Governance preview release']},
          {phase:'2026',status:'upcoming',color:'#8B5CF6',title:'Expansion',items:['Full AILINK mobile application','DAO implementation','Multi-chain expansion','Marketplace integration','Advanced AI Suite (3D, voice)']},
          {phase:'2027+',status:'future',color:'#FFB400',title:'Decentralization',items:['Decentralized AI training','Cross-chain portability','AILINK L2 research','AI DAO full governance','1M+ user milestone']},
        ].map((p,i)=>`
        <div class="glass-card card-glow observe" style="padding:26px;position:relative;animation-delay:${i*0.1}s;${p.status==='active'?'border-color:rgba(0,59,255,0.4);box-shadow:0 4px 28px rgba(0,59,255,0.18);':''}">
          <div style="width:38px;height:38px;background:${p.color}1A;border:1.5px solid ${p.color}44;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;">
            <span style="font-size:13px;font-weight:800;color:${p.color};">0${i+1}</span>
          </div>
          <div style="position:absolute;top:18px;right:18px;">
            ${p.status==='completed'?`<span class="badge badge-mint"><i class="fas fa-check"></i> Done</span>`:
              p.status==='active'?`<span class="badge badge-blue"><span style="width:5px;height:5px;background:#6B8FFF;border-radius:50%;animation:blink 1.5s infinite;display:inline-block;"></span> Active</span>`:
              p.status==='upcoming'?`<span class="badge" style="background:rgba(139,92,246,0.12);color:#A78BFA;border:1px solid rgba(139,92,246,0.2);">Soon</span>`:
              `<span class="badge badge-gold">Future</span>`}
          </div>
          <div style="font-size:12px;color:${p.color};font-weight:700;letter-spacing:0.5px;margin-bottom:5px;">${p.phase}</div>
          <h3 style="font-size:17px;font-weight:700;font-family:'Manrope',sans-serif;margin-bottom:16px;">${p.title}</h3>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:9px;">
            ${p.items.map(it=>`<li style="display:flex;align-items:flex-start;gap:7px;"><div style="width:5px;height:5px;background:${p.color};border-radius:50%;flex-shrink:0;margin-top:7px;"></div><span style="font-size:12px;color:${p.status==='completed'?'var(--text-dim)':'var(--text-muted)'};line-height:1.5;${p.status==='completed'?'text-decoration:line-through;':''}">${it}</span></li>`).join('')}
          </ul>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== TEAM ===== -->
  <section id="team" class="section observe">
    <div class="section-inner">
      <div style="text-align:center;max-width:600px;margin:0 auto 56px;">
        <div class="section-label"><i class="fas fa-users"></i>&nbsp; Core Team</div>
        <h2 class="section-title">People Behind <span class="gradient-text">AILINK</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">AI engineers, blockchain developers, and growth strategists united to build the intelligent Web3 network.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-bottom:24px;" id="team-grid">
        ${[
          {name:'Alex Kim',title:'CEO & Co-Founder',color:'#003BFF',bg:'A',bio:'8+ years in blockchain product development. Former lead PM at a global Web3 infrastructure company. Specialized in token economy design, product strategy, and cross-chain integrations.',tags:['Token Economy','Product Strategy','Cross-Chain']},
          {name:'Sophia Nguyen',title:'CTO & Co-Founder',color:'#31F2C3',bg:'S',bio:'AI systems engineer with 10+ years in ML, LLM frameworks, and distributed computing. Previously developed high-performance AI engines for enterprise clients.',tags:['AI Engineering','Smart Contracts','ML Systems']},
          {name:'Daniel Park',title:'CMO',color:'#8B5CF6',bg:'D',bio:'Growth strategist with experience launching global Web3 products. Former head of marketing for a top GameFi and SocialFi project. Specialized in community building.',tags:['Community Growth','Brand Strategy','GameFi/SocialFi']},
        ].map((m,i)=>`
        <div class="glass-card card-glow observe" style="padding:28px;position:relative;overflow:hidden;animation-delay:${i*0.1}s;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${m.color},transparent);"></div>
          <div style="width:64px;height:64px;background:linear-gradient(135deg,${m.color}33,${m.color}11);border:2px solid ${m.color}44;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:14px;">
            <span style="font-size:24px;font-weight:800;color:${m.color};">${m.bg}</span>
          </div>
          <h3 style="font-size:19px;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:4px;">${m.name}</h3>
          <div style="font-size:13px;color:${m.color};font-weight:600;margin-bottom:12px;">${m.title}</div>
          <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin-bottom:16px;">${m.bio}</p>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;">${m.tags.map(t=>`<span class="badge badge-blue">${t}</span>`).join('')}</div>
          <a href="https://x.com/AiLink_Official" target="_blank" style="display:flex;align-items:center;justify-content:center;gap:6px;padding:9px;border-radius:9px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:var(--text-muted);font-size:12px;text-decoration:none;transition:all 0.2s;"
            onmouseover="this.style.color='var(--mint)';this.style.borderColor='rgba(49,242,195,0.3)'" onmouseout="this.style.color='var(--text-muted)';this.style.borderColor='rgba(255,255,255,0.08)'">
            <i class="fab fa-x-twitter"></i> @AiLink_Official
          </a>
        </div>`).join('')}
      </div>
      <div class="glass-card observe" style="padding:28px;background:linear-gradient(135deg,rgba(0,59,255,0.05),rgba(49,242,195,0.03));">
        <div style="display:flex;align-items:center;gap:32px;flex-wrap:wrap;">
          <div style="flex:1;min-width:260px;">
            <h3 style="font-size:17px;font-weight:700;margin-bottom:9px;">Full Team Structure</h3>
            <p style="font-size:13px;color:var(--text-muted);line-height:1.7;">Backed by AI engineers, blockchain developers, backend systems engineers, game design specialists, and community & growth strategists.</p>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${['AI Engineers','Blockchain Devs','Backend Engineers','Game Designers','Community Team','Growth Strategists'].map(r=>`
            <div style="display:flex;align-items:center;gap:7px;"><i class="fas fa-check-circle" style="color:var(--mint);font-size:11px;"></i><span style="font-size:13px;color:var(--text-muted);">${r}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== PARTNERS ===== -->
  <section id="partners" class="section observe" style="background:rgba(0,59,255,0.02);">
    <div class="section-inner">
      <div style="text-align:center;max-width:600px;margin:0 auto 56px;">
        <div class="section-label"><i class="fas fa-handshake"></i>&nbsp; Partners & Investors</div>
        <h2 class="section-title">Powered By the <span class="gradient-text">Best</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">Strategic partnerships with leading AI research labs, Web3 infrastructure, and enterprise cloud providers.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:32px;" id="partner-grid">
        ${[
          {name:'BNB Chain',cat:'Infrastructure',icon:'fas fa-link',color:'#F0B90B',url:'https://www.bnbchain.org',desc:'Native blockchain network'},
          {name:'Chainlink',cat:'Oracle',icon:'fas fa-link',color:'#375BD2',url:'https://chain.link',desc:'Decentralized oracle'},
          {name:'OKX Web3',cat:'Exchange',icon:'fas fa-exchange-alt',color:'#00CCFF',url:'https://www.okx.com/web3',desc:'Web3 wallet & DEX'},
          {name:'Google Cloud AI',cat:'Cloud AI',icon:'fab fa-google',color:'#4285F4',url:'https://cloud.google.com/ai',desc:'AI infrastructure'},
          {name:'RunwayML',cat:'AI Video',icon:'fas fa-film',color:'#6C47FF',url:'https://runwayml.com',desc:'AI video generation'},
          {name:'CertiK',cat:'Security',icon:'fas fa-shield-alt',color:'#00D1A0',url:'https://www.certik.com',desc:'Smart contract audit'},
          {name:'AWS ML',cat:'Cloud',icon:'fab fa-aws',color:'#FF9900',url:'https://aws.amazon.com/machine-learning',desc:'ML infrastructure'},
          {name:'Stability AI',cat:'AI Models',icon:'fas fa-atom',color:'#7C3AED',url:'https://stability.ai',desc:'Stable Diffusion'},
        ].map((p,i)=>`
        <a href="${p.url}" target="_blank" rel="noopener" class="glass-card card-glow observe" style="padding:20px;text-decoration:none;display:flex;flex-direction:column;gap:10px;animation-delay:${i*0.06}s;transition:transform 0.25s;"
          onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div style="width:40px;height:40px;background:${p.color}18;border:1px solid ${p.color}33;border-radius:11px;display:flex;align-items:center;justify-content:center;">
              <i class="${p.icon}" style="font-size:16px;color:${p.color};"></i>
            </div>
            <span style="font-size:10px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:var(--text-dim);">${p.cat}</span>
          </div>
          <div><div style="font-size:14px;font-weight:700;margin-bottom:3px;">${p.name}</div><div style="font-size:12px;color:var(--text-muted);">${p.desc}</div></div>
          <div style="display:flex;align-items:center;gap:4px;color:var(--text-dim);font-size:11px;margin-top:auto;"><i class="fas fa-external-link-alt" style="font-size:9px;"></i> Visit →</div>
        </a>`).join('')}
      </div>
      <div class="glass-card" style="padding:36px;text-align:center;background:linear-gradient(135deg,rgba(0,59,255,0.08),rgba(49,242,195,0.04));border:1px solid rgba(0,59,255,0.18);">
        <div class="badge badge-mint" style="margin-bottom:14px;"><i class="fas fa-plus"></i>&nbsp; Partnership Program</div>
        <h3 style="font-size:22px;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:9px;">Become an AILINK Partner</h3>
        <p style="font-size:14px;color:var(--text-muted);max-width:460px;margin:0 auto 22px;line-height:1.7;">Web3 wallets, AI research groups, and marketing agencies — join our growing ecosystem.</p>
        <a href="https://t.me/AiLink_Official" target="_blank" class="btn-primary"><i class="fab fa-telegram"></i> Contact via Telegram</a>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== COMMUNITY ===== -->
  <section id="community" class="section observe">
    <div class="section-inner">
      <div style="text-align:center;max-width:600px;margin:0 auto 52px;">
        <div class="section-label"><i class="fab fa-x-twitter"></i>&nbsp; Community</div>
        <h2 class="section-title">Join the <span class="gradient-text">Movement</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">Follow us on X and join our Telegram to stay ahead of every AILINK announcement.</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;" id="community-grid">
        <a href="https://x.com/AiLink_Official" target="_blank" class="glass-card card-glow" style="padding:36px;text-decoration:none;display:block;transition:transform 0.25s;position:relative;overflow:hidden;"
          onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#fff,rgba(255,255,255,0.2));"></div>
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
            <div style="width:52px;height:52px;background:rgba(255,255,255,0.08);border-radius:14px;display:flex;align-items:center;justify-content:center;">
              <i class="fab fa-x-twitter" style="font-size:22px;color:#fff;"></i>
            </div>
            <div><div style="font-size:18px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">X / Twitter</div><div style="font-size:13px;color:var(--text-muted);">@AiLink_Official</div></div>
          </div>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.7;margin-bottom:20px;">Latest AILINK news, TGE updates, partner announcements, and ecosystem developments — all in real time.</p>
          <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:10px 18px;color:#fff;font-size:13px;font-weight:600;">
            <i class="fab fa-x-twitter"></i> Follow @AiLink_Official
          </div>
        </a>
        <a href="https://t.me/AiLink_Official" target="_blank" class="glass-card card-glow" style="padding:36px;text-decoration:none;display:block;transition:transform 0.25s;position:relative;overflow:hidden;"
          onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#2AABEE,rgba(42,171,238,0.2));"></div>
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
            <div style="width:52px;height:52px;background:rgba(42,171,238,0.12);border-radius:14px;display:flex;align-items:center;justify-content:center;">
              <i class="fab fa-telegram" style="font-size:22px;color:#2AABEE;"></i>
            </div>
            <div><div style="font-size:18px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">Telegram</div><div style="font-size:13px;color:var(--text-muted);">t.me/AiLink_Official</div></div>
          </div>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.7;margin-bottom:20px;">Join our Telegram community for direct access to the team, exclusive alpha drops, and community events.</p>
          <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(42,171,238,0.1);border:1px solid rgba(42,171,238,0.25);border-radius:10px;padding:10px 18px;color:#2AABEE;font-size:13px;font-weight:600;">
            <i class="fab fa-telegram"></i> Join t.me/AiLink_Official
          </div>
        </a>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== FAQ ===== -->
  <section id="faq" class="section observe">
    <div class="section-inner">
      <div style="text-align:center;max-width:600px;margin:0 auto 52px;">
        <div class="section-label"><i class="fas fa-question-circle"></i>&nbsp; FAQ</div>
        <h2 class="section-title">Frequently Asked <span class="gradient-text">Questions</span></h2>
      </div>
      <div style="max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:12px;" id="faq-list">
        ${[
          {q:'What is AILINK?',a:'AILINK is an intelligent, decentralized interaction network that merges AI-powered content creation with accessible Web3 engagement. It allows users to play micro-games, earn points, generate AI media, and mint NFTs on BNB Chain.'},
          {q:'What is the ALINK token contract address?',a:`The official ALINK token contract on BNB Chain (BEP-20) is: <code style="font-family:monospace;color:var(--mint);word-break:break-all;">${CONTRACT}</code>. Verify it on <a href="${BSCSCAN}" target="_blank" style="color:var(--mint);">BscScan</a>. Always verify the contract address before any interaction.`},
          {q:'What is the total supply of ALINK?',a:'The total supply of ALINK token is 20,000,000,000 (20 Billion). The largest allocation (45%) goes to Ecosystem Rewards to incentivize long-term user participation.'},
          {q:'When is the TGE (Token Generation Event)?',a:'The TGE is scheduled for Q4 2025, followed by an initial DEX listing on PancakeSwap and other exchanges. Follow our official X and Telegram channels for exact dates.'},
          {q:'How can I earn ALINK tokens?',a:'You can earn ALINK tokens by: (1) Playing daily micro-games and accumulating AILINK Points, (2) Redeeming points for ALINK tokens, (3) Participating in referral and community events, (4) Staking ALINK for premium access and staking rewards.'},
          {q:'What can I do with ALINK tokens?',a:'ALINK tokens unlock: advanced AI creation tools (high-resolution, watermark-free), NFT minting and metadata registration, staking for priority queues and premium features, governance participation (DAO launches 2026), and integration access across ecosystem apps.'},
          {q:'Is the smart contract audited?',a:'The ALINK token contract source code is verified on BscScan. A full security audit by CertiK is planned before the mainnet trading launch. All contract functions and audit reports will be published publicly.'},
          {q:'What blockchain does AILINK use?',a:'AILINK is built on BNB Chain (Binance Smart Chain) using the BEP-20 token standard. BNB Chain was chosen for its low transaction fees, high throughput, and strong DeFi ecosystem.'},
        ].map((item,i)=>`
        <div class="glass-card" style="border-radius:14px;overflow:hidden;">
          <button onclick="toggleFaq(${i})" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:20px 24px;background:transparent;border:none;cursor:pointer;text-align:left;gap:16px;">
            <span style="font-size:15px;font-weight:600;color:#fff;">${item.q}</span>
            <i class="fas fa-chevron-down" id="faq-icon-${i}" style="color:var(--mint);font-size:13px;flex-shrink:0;transition:transform 0.3s;"></i>
          </button>
          <div id="faq-body-${i}" style="max-height:0;overflow:hidden;transition:max-height 0.35s ease;">
            <div style="padding:0 24px 20px;font-size:14px;color:var(--text-muted);line-height:1.8;">${item.a}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== HOW IT WORKS ===== -->
  <section id="how-it-works" class="section" style="position:relative;overflow:hidden;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.25;"></div>
    <div class="section-inner observe" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:640px;margin:0 auto 56px;">
        <div class="section-label" style="margin-bottom:18px;"><i class="fas fa-map-signs"></i>&nbsp; How It Works</div>
        <h2 class="section-title">Start Earning in <span class="gradient-text">3 Simple Steps</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">No crypto expertise required. Connect your wallet, play and create, then earn real ALINK tokens — completely on-chain.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;position:relative;" id="hiw-grid">
        <!-- Connecting line -->
        <div style="position:absolute;top:52px;left:calc(16.7% + 50px);right:calc(16.7% + 50px);height:2px;background:linear-gradient(90deg,var(--blue),var(--mint));opacity:0.3;z-index:0;pointer-events:none;"></div>

        ${[
          {
            step:'01',
            icon:'fas fa-wallet',
            color:'#003BFF',
            title:'Connect Your Wallet',
            desc:'Link your Web3 wallet (MetaMask, Trust Wallet, OKX) to the AILINK platform. We support all major BNB Chain-compatible wallets. No seed phrase required.',
            items:['MetaMask', 'Trust Wallet', 'WalletConnect', 'OKX Wallet'],
          },
          {
            step:'02',
            icon:'fas fa-gamepad',
            color:'#31F2C3',
            title:'Play, Create & Engage',
            desc:'Jump into daily micro-games, generate AI artwork, and complete social missions. Every interaction earns AILINK Points that accumulate in your dashboard.',
            items:['Daily Missions', 'AI Generation', 'Referral Rewards', 'Streak Bonuses'],
          },
          {
            step:'03',
            icon:'fas fa-coins',
            color:'#FFB400',
            title:'Earn & Grow',
            desc:'Convert your AILINK Points to ALINK tokens at TGE (Q4 2025). Stake for multipliers, mint NFTs, and participate in DAO governance as the ecosystem grows.',
            items:['Redeem Points', 'NFT Minting', 'Staking Rewards', 'DAO Governance'],
          },
        ].map((s, i)=>`
        <div class="glass-card card-glow observe" style="padding:32px;position:relative;z-index:1;">
          <div style="position:absolute;top:-1px;left:0;right:0;height:3px;background:linear-gradient(90deg,${s.color},${s.color}60);border-radius:20px 20px 0 0;"></div>
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px;">
            <div style="width:54px;height:54px;background:${s.color}18;border:1px solid ${s.color}35;border-radius:16px;display:flex;align-items:center;justify-content:center;">
              <i class="${s.icon}" style="font-size:22px;color:${s.color};"></i>
            </div>
            <span style="font-size:36px;font-weight:900;font-family:'Manrope',sans-serif;color:${s.color};opacity:0.18;line-height:1;">${s.step}</span>
          </div>
          <h3 style="font-size:19px;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:12px;color:#fff;">${s.title}</h3>
          <p style="font-size:13px;color:var(--text-muted);line-height:1.75;margin-bottom:18px;">${s.desc}</p>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${s.items.map(item=>`
            <div style="display:flex;align-items:center;gap:8px;">
              <i class="fas fa-check-circle" style="color:${s.color};font-size:11px;flex-shrink:0;"></i>
              <span style="font-size:12px;color:var(--text-muted);">${item}</span>
            </div>`).join('')}
          </div>
        </div>`).join('')}
      </div>

      <!-- Progress indicator -->
      <div style="display:flex;align-items:center;justify-content:center;gap:24px;margin-top:48px;flex-wrap:wrap;">
        ${[
          {icon:'fas fa-wallet',label:'Connect',color:'#003BFF'},
          {icon:'fas fa-arrow-right',label:'',color:'rgba(255,255,255,0.2)',noStep:true},
          {icon:'fas fa-gamepad',label:'Play & Create',color:'#31F2C3'},
          {icon:'fas fa-arrow-right',label:'',color:'rgba(255,255,255,0.2)',noStep:true},
          {icon:'fas fa-coins',label:'Earn ALINK',color:'#FFB400'},
        ].map(s=>s.noStep?`<i class="${s.icon}" style="color:${s.color};font-size:14px;"></i>`:
        `<div style="display:flex;align-items:center;gap:8px;">
          <div style="width:36px;height:36px;background:${s.color}20;border:1px solid ${s.color}35;border-radius:10px;display:flex;align-items:center;justify-content:center;">
            <i class="${s.icon}" style="color:${s.color};font-size:14px;"></i>
          </div>
          <span style="font-size:13px;font-weight:600;color:#fff;">${s.label}</span>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== LIVE STATS ===== -->
  <section id="stats" class="section" style="position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(0,59,255,0.07) 0%,transparent 70%);pointer-events:none;"></div>
    <div class="section-inner observe" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:640px;margin:0 auto 52px;">
        <div class="section-label" style="margin-bottom:18px;"><i class="fas fa-chart-line"></i>&nbsp; Platform Stats</div>
        <h2 class="section-title">AILINK at a <span class="gradient-text">Glance</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">Real metrics from the AILINK ecosystem as we build toward the Q4 2025 TGE launch.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:40px;" id="stats-grid">
        ${[
          {icon:'fas fa-users',color:'#31F2C3',val:'15K+',label:'Early Community',sub:'Waitlist members',trend:'+1,200 this week'},
          {icon:'fas fa-coins',color:'#003BFF',val:'10B',label:'Total Supply',sub:'ALINK tokens',trend:'BEP-20 on BNB Chain'},
          {icon:'fas fa-layer-group',color:'#FFB400',val:'5',label:'Allocation Pools',sub:'Vesting schedules',trend:'Up to 48-month vest'},
          {icon:'fas fa-shield-alt',color:'#8B5CF6',val:'Q4 2025',label:'TGE Target',sub:'DEX listing',trend:'PancakeSwap first'},
        ].map(s=>`
        <div class="glass-card observe" style="padding:28px;text-align:center;position:relative;overflow:hidden;">
          <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,${s.color}10 0%,transparent 70%);pointer-events:none;"></div>
          <div style="width:50px;height:50px;background:${s.color}18;border:1px solid ${s.color}30;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
            <i class="${s.icon}" style="font-size:20px;color:${s.color};"></i>
          </div>
          <div style="font-size:30px;font-weight:900;font-family:'Manrope',sans-serif;color:${s.color};margin-bottom:6px;letter-spacing:-1px;">${s.val}</div>
          <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:4px;">${s.label}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">${s.sub}</div>
          <div style="font-size:11px;color:${s.color};background:${s.color}10;border:1px solid ${s.color}20;border-radius:6px;padding:4px 8px;display:inline-block;">${s.trend}</div>
        </div>`).join('')}
      </div>

      <!-- Ecosystem Stats Row -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;" id="eco-stats">
        ${[
          {label:'BNB Chain',icon:'fab fa-ethereum',color:'#F0B90B',sub:'Primary network'},
          {label:'8 Partners',icon:'fas fa-handshake',color:'#31F2C3',sub:'Tier-1 ecosystem'},
          {label:'CertiK Audit',icon:'fas fa-shield-alt',color:'#003BFF',sub:'Security verified'},
          {label:'3 AI Tools',icon:'fas fa-brain',color:'#8B5CF6',sub:'Image · Video · NFT'},
        ].map(s=>`
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 16px;display:flex;align-items:center;gap:12px;transition:all 0.25s;"
          onmouseover="this.style.background='rgba(255,255,255,0.06)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
          <div style="width:38px;height:38px;background:${s.color}15;border:1px solid ${s.color}25;border-radius:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <i class="${s.icon}" style="font-size:16px;color:${s.color};"></i>
          </div>
          <div>
            <div style="font-size:14px;font-weight:700;color:#fff;">${s.label}</div>
            <div style="font-size:11px;color:var(--text-muted);">${s.sub}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== COMMUNITY ===== -->
  <section id="community" class="section" style="position:relative;overflow:hidden;">
    <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:800px;height:400px;background:radial-gradient(ellipse,rgba(49,242,195,0.07) 0%,transparent 70%);pointer-events:none;"></div>
    <div class="section-inner observe" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:640px;margin:0 auto 52px;">
        <div class="section-label" style="margin-bottom:18px;"><i class="fas fa-users"></i>&nbsp; Community</div>
        <h2 class="section-title">Join the <span class="gradient-text">AILINK Community</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">Be part of the movement that's redefining the intersection of AI and Web3. Early members get exclusive benefits at TGE.</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px;" id="community-grid">
        <!-- X / Twitter Card -->
        <div class="glass-card card-glow" style="padding:36px;background:linear-gradient(135deg,rgba(17,19,24,0.9),rgba(13,15,20,0.95));border:1px solid rgba(255,255,255,0.1);position:relative;overflow:hidden;">
          <div style="position:absolute;top:-30px;right:-30px;width:150px;height:150px;background:radial-gradient(circle,rgba(255,255,255,0.04) 0%,transparent 70%);border-radius:50%;pointer-events:none;"></div>
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
            <div style="width:52px;height:52px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.15);border-radius:14px;display:flex;align-items:center;justify-content:center;">
              <i class="fab fa-x-twitter" style="font-size:22px;color:#fff;"></i>
            </div>
            <div>
              <div style="font-size:18px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">X (Twitter)</div>
              <div style="font-size:13px;color:var(--text-muted);">@AiLink_Official</div>
            </div>
          </div>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:24px;">Stay updated with the latest AILINK news, product launches, tokenomics updates, and TGE announcements. Be the first to know.</p>
          <div style="display:flex;gap:20px;margin-bottom:24px;">
            ${[{val:'15K+',label:'Followers'},{val:'Daily',label:'Updates'},{val:'Verified',label:'Account'}].map(s=>`
            <div>
              <div style="font-size:18px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">${s.val}</div>
              <div style="font-size:11px;color:var(--text-muted);">${s.label}</div>
            </div>`).join('')}
          </div>
          <a href="https://x.com/AiLink_Official" target="_blank" rel="noopener" class="btn-primary" style="width:100%;justify-content:center;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);box-shadow:none;color:#fff;"
            onmouseover="this.style.background='rgba(255,255,255,0.18)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
            <i class="fab fa-x-twitter"></i> Follow @AiLink_Official
          </a>
        </div>

        <!-- Telegram Card -->
        <div class="glass-card card-glow" style="padding:36px;background:linear-gradient(135deg,rgba(0,136,204,0.08),rgba(13,15,20,0.95));border:1px solid rgba(0,136,204,0.2);position:relative;overflow:hidden;">
          <div style="position:absolute;top:-30px;right:-30px;width:150px;height:150px;background:radial-gradient(circle,rgba(0,136,204,0.1) 0%,transparent 70%);border-radius:50%;pointer-events:none;"></div>
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
            <div style="width:52px;height:52px;background:rgba(0,136,204,0.15);border:1px solid rgba(0,136,204,0.3);border-radius:14px;display:flex;align-items:center;justify-content:center;">
              <i class="fab fa-telegram" style="font-size:22px;color:#29A0D8;"></i>
            </div>
            <div>
              <div style="font-size:18px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">Telegram</div>
              <div style="font-size:13px;color:var(--text-muted);">AiLink_Official</div>
            </div>
          </div>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:24px;">Join our Telegram community for real-time discussions, AMA sessions, giveaways, and early access to new features and whitelist opportunities.</p>
          <div style="display:flex;gap:20px;margin-bottom:24px;">
            ${[{val:'8K+',label:'Members'},{val:'24/7',label:'Active'},{val:'AMA',label:'Sessions'}].map(s=>`
            <div>
              <div style="font-size:18px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">${s.val}</div>
              <div style="font-size:11px;color:var(--text-muted);">${s.label}</div>
            </div>`).join('')}
          </div>
          <a href="https://t.me/AiLink_Official" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px;background:rgba(0,136,204,0.15);border:1px solid rgba(0,136,204,0.3);border-radius:12px;color:#29A0D8;font-weight:600;font-size:15px;text-decoration:none;transition:all 0.2s;"
            onmouseover="this.style.background='rgba(0,136,204,0.25)'" onmouseout="this.style.background='rgba(0,136,204,0.15)'">
            <i class="fab fa-telegram"></i> Join Telegram Community
          </a>
        </div>
      </div>

      <!-- Early Access Banner -->
      <div style="background:linear-gradient(135deg,rgba(0,59,255,0.12),rgba(49,242,195,0.06));border:1px solid rgba(0,59,255,0.25);border-radius:20px;padding:36px 40px;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;">
        <div>
          <div class="section-label" style="margin-bottom:12px;display:inline-flex;"><i class="fas fa-star"></i>&nbsp; Early Access</div>
          <h3 style="font-size:22px;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:10px;color:#fff;">Get Early Supporter Benefits</h3>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.7;max-width:500px;">Early community members receive bonus AILINK Points multiplier, priority whitelist access for the Private Sale, and exclusive Early Supporter badge.</p>
          <div style="display:flex;gap:14px;margin-top:16px;flex-wrap:wrap;">
            ${[
              {icon:'fas fa-star',color:'#FFB400',text:'Bonus Point Multiplier'},
              {icon:'fas fa-key',color:'#31F2C3',text:'Whitelist Priority'},
              {icon:'fas fa-medal',color:'#6B8FFF',text:'Exclusive Badge'},
            ].map(b=>`
            <div style="display:flex;align-items:center;gap:6px;">
              <i class="${b.icon}" style="color:${b.color};font-size:12px;"></i>
              <span style="font-size:12px;color:var(--text-muted);font-weight:500;">${b.text}</span>
            </div>`).join('')}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;min-width:220px;">
          <a href="https://x.com/AiLink_Official" target="_blank" class="btn-primary" style="text-align:center;justify-content:center;font-size:14px;">
            <i class="fab fa-x-twitter"></i> Follow for Updates
          </a>
          <a href="https://t.me/AiLink_Official" target="_blank" class="btn-outline" style="text-align:center;justify-content:center;font-size:14px;">
            <i class="fab fa-telegram"></i> Join Community
          </a>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== CTA ===== -->
  <section class="section observe" style="position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,59,255,0.1),rgba(49,242,195,0.05));"></div>
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.3;"></div>
    <div class="section-inner" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:680px;margin:0 auto;">
        <div class="section-label" style="margin-bottom:22px;"><i class="fas fa-rocket"></i>&nbsp; Join AILINK</div>
        <h2 style="font-size:clamp(34px,5vw,58px);font-weight:900;font-family:'Manrope',sans-serif;line-height:1.1;letter-spacing:-1.5px;margin-bottom:18px;">
          Where Users <span class="gradient-text">Shape the Algorithm</span>
        </h2>
        <p style="font-size:16px;color:var(--text-muted);line-height:1.8;margin-bottom:36px;">AILINK merges intelligence, creativity, and decentralized ownership into a single seamless network. Be part of the next evolution in AI × Web3.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:28px;">
          <a href="https://x.com/AiLink_Official" target="_blank" class="btn-primary" style="font-size:15px;padding:15px 30px;"><i class="fab fa-x-twitter"></i> Follow on X</a>
          <a href="https://t.me/AiLink_Official" target="_blank" class="btn-outline" style="font-size:15px;padding:15px 30px;"><i class="fab fa-telegram"></i> Join Telegram</a>
          <a href="/whitepaper" class="btn-ghost" style="font-size:15px;padding:15px 26px;"><i class="fas fa-file-alt"></i> Whitepaper</a>
        </div>
        <div style="display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap;">
          <a href="${BSCSCAN}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:rgba(0,59,255,0.1);border:1px solid rgba(0,59,255,0.25);border-radius:8px;padding:7px 14px;color:#6B8FFF;font-size:12px;text-decoration:none;font-family:monospace;">
            <i class="fas fa-cube"></i> ${CONTRACT.slice(0,10)}...${CONTRACT.slice(-6)}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== RESPONSIVE ===== -->
  <style>
    @media(max-width:1024px){#hero-grid{grid-template-columns:1fr!important;gap:40px!important;}#hero-grid>div:last-child{display:none;}}
    @media(max-width:1023px){#trust-bar{grid-template-columns:repeat(3,1fr)!important;} #feat-grid,#eco-pillars{grid-template-columns:repeat(2,1fr)!important;} #partner-grid{grid-template-columns:repeat(3,1fr)!important;} #roadmap-grid{grid-template-columns:repeat(2,1fr)!important;} #token-grid{grid-template-columns:1fr!important;gap:36px!important;} #team-grid{grid-template-columns:1fr!important;} #hiw-grid{grid-template-columns:1fr!important;} #eco-flow{grid-template-columns:repeat(2,1fr)!important;}}
    @media(max-width:767px){#community-grid{grid-template-columns:1fr!important;} #stats-grid{grid-template-columns:repeat(2,1fr)!important;}}
    @media(max-width:599px){#trust-bar{grid-template-columns:repeat(2,1fr)!important;} #feat-grid{grid-template-columns:1fr!important;} #partner-grid{grid-template-columns:repeat(2,1fr)!important;} #roadmap-grid{grid-template-columns:1fr!important;} #stats-grid{grid-template-columns:1fr!important;}}
    @media(max-width:479px){#eco-pillars{grid-template-columns:1fr!important;} #eco-flow{grid-template-columns:1fr!important;}}
  </style>

  <!-- ===== SCRIPTS ===== -->
  <script>
    // FAQ accordion
    function toggleFaq(i) {
      const body = document.getElementById('faq-body-'+i);
      const icon = document.getElementById('faq-icon-'+i);
      const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';
      document.querySelectorAll('[id^="faq-body-"]').forEach(el=>el.style.maxHeight='0px');
      document.querySelectorAll('[id^="faq-icon-"]').forEach(el=>el.style.transform='rotate(0deg)');
      if(!isOpen){body.style.maxHeight=body.scrollHeight+'px';icon.style.transform='rotate(180deg)';}
    }

    // Tokenomics donut chart
    const tokenCtx = document.getElementById('tokenomicsChart');
    if(tokenCtx){
      new Chart(tokenCtx,{type:'doughnut',data:{
        labels:['Ecosystem Rewards (45%)','Team & Contributors (15%)','Partnerships (15%)','Private Sale (15%)','Protocol Reserve (10%)'],
        datasets:[{data:[45,15,15,15,10],backgroundColor:['#003BFF','#31F2C3','#8B5CF6','#FFB400','#FF6B6B'],borderColor:'#0D0F14',borderWidth:3,hoverOffset:8}]
      },options:{cutout:'72%',responsive:false,plugins:{legend:{display:false},tooltip:{backgroundColor:'#161920',borderColor:'rgba(49,242,195,0.2)',borderWidth:1,titleColor:'#fff',bodyColor:'#8891A5',padding:12}}}});
    }

    // Vesting line chart
    const vestCtx = document.getElementById('vestingChart');
    if(vestCtx){
      const months=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53];
      const totals=[450,631,722,860,998,1136,1365,1596,1826,2055,2285,2515,2786,3059,3312,3601,3872,4144,4415,4687,4958,5230,5501,5773,5973,6173,6374,6575,6776,6976,7177,7378,7578,7731,7884,8038,8191,8344,8497,8650,8703,8956,9108,9263,9417,9570,9722,9875,9896,9917,9938,9958,10000];
      new Chart(vestCtx,{type:'line',data:{labels:months,datasets:[{label:'Circulating Supply',data:totals,borderColor:'#003BFF',backgroundColor:'rgba(0,59,255,0.07)',borderWidth:2.5,fill:true,tension:0.4,pointRadius:0,pointHoverRadius:5,pointHoverBackgroundColor:'#31F2C3',pointHoverBorderColor:'#fff',pointHoverBorderWidth:2}]},
      options:{responsive:true,interaction:{intersect:false,mode:'index'},plugins:{legend:{display:false},tooltip:{backgroundColor:'#161920',borderColor:'rgba(0,59,255,0.3)',borderWidth:1,titleColor:'#fff',bodyColor:'#8891A5',padding:12,callbacks:{label:ctx=>' '+(ctx.parsed.y/1000).toFixed(2)+'B ALINK ('+(ctx.parsed.y/100).toFixed(2)+'%)'}}},scales:{x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#5A6278',font:{size:11},maxTicksLimit:10},border:{color:'rgba(255,255,255,0.06)'}},y:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#5A6278',font:{size:11},callback:val=>(val/1000)+'B'},border:{color:'rgba(255,255,255,0.06)'}}}}}); 
    }
  </script>
  `
  return layout('AILINK — Intelligence, Connected. | AI-Powered Web3 Platform', content)
}

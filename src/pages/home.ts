import { layout } from './layout'

export function homePage(): string {
  const content = `

  <!-- ===== HERO SECTION ===== -->
  <section id="home" style="min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding-top:80px;">
    <!-- Background grid -->
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.6;"></div>
    
    <!-- Glow orbs -->
    <div style="position:absolute;top:15%;left:8%;width:500px;height:500px;
      background:radial-gradient(circle,rgba(0,59,255,0.18) 0%,transparent 70%);
      border-radius:50%;filter:blur(40px);animation:pulse-glow 6s ease-in-out infinite;"></div>
    <div style="position:absolute;bottom:20%;right:5%;width:450px;height:450px;
      background:radial-gradient(circle,rgba(49,242,195,0.12) 0%,transparent 70%);
      border-radius:50%;filter:blur(50px);animation:pulse-glow 8s ease-in-out infinite 2s;"></div>
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:700px;
      background:radial-gradient(circle,rgba(0,59,255,0.06) 0%,transparent 65%);
      border-radius:50%;"></div>

    <!-- Network lines decoration -->
    <div style="position:absolute;inset:0;overflow:hidden;pointer-events:none;">
      <svg width="100%" height="100%" style="position:absolute;top:0;left:0;opacity:0.06;">
        <defs>
          <radialGradient id="lineGrad" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#003BFF"/>
            <stop offset="100%" stop-color="#31F2C3"/>
          </radialGradient>
        </defs>
        <line x1="0" y1="200" x2="400" y2="350" stroke="url(#lineGrad)" stroke-width="1"/>
        <line x1="400" y1="350" x2="800" y2="150" stroke="url(#lineGrad)" stroke-width="1"/>
        <line x1="800" y1="150" x2="1200" y2="400" stroke="url(#lineGrad)" stroke-width="1"/>
        <line x1="200" y1="0" x2="400" y2="350" stroke="url(#lineGrad)" stroke-width="1"/>
        <line x1="600" y1="500" x2="400" y2="350" stroke="url(#lineGrad)" stroke-width="1"/>
        <line x1="1000" y1="0" x2="800" y2="150" stroke="url(#lineGrad)" stroke-width="1"/>
        <circle cx="400" cy="350" r="4" fill="#003BFF"/>
        <circle cx="800" cy="150" r="4" fill="#31F2C3"/>
        <circle cx="200" cy="200" r="3" fill="#003BFF" opacity="0.5"/>
        <circle cx="1100" cy="300" r="3" fill="#31F2C3" opacity="0.5"/>
      </svg>
    </div>

    <div class="section-inner" style="width:100%;position:relative;z-index:1;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
        <!-- Left: Text content -->
        <div>
          <div class="fade-up" style="display:inline-flex;align-items:center;gap:8px;
            background:rgba(49,242,195,0.08);border:1px solid rgba(49,242,195,0.2);
            border-radius:30px;padding:8px 16px;margin-bottom:32px;">
            <span style="width:6px;height:6px;background:#31F2C3;border-radius:50%;animation:blink 2s infinite;"></span>
            <span style="font-size:12px;font-weight:700;letter-spacing:1.5px;color:#31F2C3;text-transform:uppercase;">AI Network for the Next Web</span>
          </div>

          <h1 class="fade-up" style="font-size:clamp(42px,5vw,72px);font-weight:900;
            font-family:'Manrope',sans-serif;line-height:1.08;letter-spacing:-2px;margin-bottom:24px;
            animation-delay:0.1s;">
            Intelligence,<br/>
            <span class="gradient-text">Connected.</span>
          </h1>

          <p class="fade-up" style="font-size:clamp(16px,1.8vw,19px);color:var(--text-muted);
            line-height:1.75;margin-bottom:40px;max-width:520px;animation-delay:0.2s;">
            AILINK merges AI-powered content creation with Web3 ownership. Play micro-games, generate AI media, mint NFTs, and earn ALINK tokens — all in one seamless intelligent network.
          </p>

          <div class="fade-up" style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:52px;animation-delay:0.3s;">
            <a href="/#ecosystem" class="btn-primary" style="font-size:16px;padding:16px 32px;">
              <i class="fas fa-rocket"></i> Get Started
            </a>
            <a href="/whitepaper" class="btn-outline" style="font-size:16px;padding:16px 32px;">
              <i class="fas fa-file-alt"></i> Whitepaper
            </a>
            <a href="https://x.com/AiLink_Official" target="_blank" class="btn-ghost" style="font-size:16px;padding:16px 24px;">
              <i class="fab fa-x-twitter"></i> Follow
            </a>
          </div>

          <!-- Stats row -->
          <div class="fade-up" style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;animation-delay:0.4s;">
            <div style="border-left:2px solid var(--blue);padding-left:16px;">
              <div style="font-size:28px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">10B</div>
              <div style="font-size:12px;color:var(--text-muted);letter-spacing:0.5px;margin-top:2px;">ALINK Total Supply</div>
            </div>
            <div style="border-left:2px solid var(--mint);padding-left:16px;">
              <div style="font-size:28px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">Q4 '25</div>
              <div style="font-size:12px;color:var(--text-muted);letter-spacing:0.5px;margin-top:2px;">TGE & DEX Listing</div>
            </div>
            <div style="border-left:2px solid rgba(255,180,0,0.6);padding-left:16px;">
              <div style="font-size:28px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">5+</div>
              <div style="font-size:12px;color:var(--text-muted);letter-spacing:0.5px;margin-top:2px;">Ecosystem Pillars</div>
            </div>
          </div>
        </div>

        <!-- Right: Visual card -->
        <div class="float-anim" style="position:relative;display:flex;justify-content:center;">
          <!-- Main card -->
          <div class="glass-card card-glow" style="width:100%;max-width:440px;padding:32px;position:relative;
            background:linear-gradient(145deg,rgba(17,19,24,0.9),rgba(22,25,32,0.9));
            border:1px solid rgba(49,242,195,0.15);border-radius:24px;">
            
            <!-- Card header -->
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:40px;height:40px;background:linear-gradient(135deg,#003BFF,#31F2C3);
                  border-radius:12px;display:flex;align-items:center;justify-content:center;">
                  <i class="fas fa-brain" style="color:#fff;font-size:16px;"></i>
                </div>
                <div>
                  <div style="font-size:14px;font-weight:700;color:#fff;">AI Engine</div>
                  <div style="font-size:11px;color:var(--text-muted);">On-chain Intelligence</div>
                </div>
              </div>
              <span class="badge badge-mint">
                <span style="width:5px;height:5px;background:var(--mint);border-radius:50%;animation:blink 1.5s infinite;"></span>
                LIVE
              </span>
            </div>

            <!-- Activity feed -->
            <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
              ${['AI Image Generated — Cyberpunk Portrait', 'NFT Minted — Neural Series #4821', 'Micro-game Reward Claimed — +150 pts', 'AI Video Rendered — 4s Motion Clip', 'ALINK Staked — 50,000 tokens locked'].map((item, i) => `
              <div style="display:flex;align-items:center;gap:12px;
                background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);
                border-radius:10px;padding:10px 14px;
                animation:slide-up 0.5s ease both;animation-delay:${0.5 + i * 0.08}s;">
                <div style="width:6px;height:6px;background:${['#31F2C3','#003BFF','#FFB400','#31F2C3','#8B5CF6'][i]};border-radius:50%;flex-shrink:0;"></div>
                <span style="font-size:12px;color:var(--text-muted);flex:1;">${item}</span>
                <span style="font-size:10px;color:var(--text-dim);">${['2s ago','8s ago','15s ago','32s ago','1m ago'][i]}</span>
              </div>`).join('')}
            </div>

            <!-- Progress bar -->
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                <span style="font-size:12px;color:var(--text-muted);">Network Activity</span>
                <span style="font-size:12px;color:var(--mint);font-weight:600;">89.4%</span>
              </div>
              <div style="height:6px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;">
                <div style="height:100%;width:89.4%;background:linear-gradient(90deg,#003BFF,#31F2C3);
                  border-radius:3px;"></div>
              </div>
            </div>
          </div>

          <!-- Floating badges -->
          <div class="glass-card" style="position:absolute;top:-20px;right:-20px;padding:12px 16px;
            display:flex;align-items:center;gap:8px;border-radius:14px;
            border:1px solid rgba(0,59,255,0.25);">
            <i class="fas fa-shield-alt" style="color:#6B8FFF;font-size:14px;"></i>
            <div>
              <div style="font-size:11px;font-weight:700;color:#fff;">CertiK Audited</div>
              <div style="font-size:10px;color:var(--text-muted);">Security Verified</div>
            </div>
          </div>

          <div class="glass-card" style="position:absolute;bottom:-16px;left:-16px;padding:12px 16px;
            display:flex;align-items:center;gap:8px;border-radius:14px;
            border:1px solid rgba(49,242,195,0.2);">
            <i class="fab fa-ethereum" style="color:#31F2C3;font-size:14px;"></i>
            <div>
              <div style="font-size:11px;font-weight:700;color:#fff;">BNB Chain</div>
              <div style="font-size:10px;color:var(--text-muted);">BEP-20 Token</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div style="position:absolute;bottom:-60px;left:50%;transform:translateX(-50%);
        display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0.4;">
        <span style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text-muted);">Scroll</span>
        <div style="width:1px;height:40px;background:linear-gradient(to bottom,var(--mint),transparent);"></div>
      </div>
    </div>
  </section>

  <!-- ===== TRUST BAR ===== -->
  <section style="padding:28px 0;background:rgba(0,59,255,0.04);border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
    <div class="section-inner">
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:0;text-align:center;">
        ${[
          {icon:'fas fa-microchip', val:'On-Chain', label:'AI Engine'},
          {icon:'fas fa-gamepad', val:'Micro', label:'Game Rewards'},
          {icon:'fas fa-image', val:'AI Media', label:'Generation'},
          {icon:'fas fa-coins', val:'10B', label:'ALINK Supply'},
          {icon:'fas fa-vote-yea', val:'DAO', label:'Governance (2026)'},
          {icon:'fas fa-link', val:'BNB Chain', label:'BEP-20 Native'},
        ].map((s,i) => `
        <div style="padding:16px;${i < 5 ? 'border-right:1px solid var(--border);' : ''}display:flex;flex-direction:column;align-items:center;gap:6px;">
          <i class="${s.icon}" style="font-size:18px;color:var(--mint);margin-bottom:2px;"></i>
          <div style="font-size:15px;font-weight:700;color:#fff;">${s.val}</div>
          <div style="font-size:11px;color:var(--text-muted);">${s.label}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ===== FEATURES ===== -->
  <section id="features" class="section observe">
    <div class="section-inner">
      <div style="max-width:680px;margin-bottom:60px;">
        <div class="section-label"><i class="fas fa-layer-group"></i>&nbsp; Core Features</div>
        <h2 class="section-title">Build. <span class="gradient-text">Link.</span> Empower.</h2>
        <p class="section-subtitle">AILINK delivers a seamless intelligent network where users create AI content, earn rewards through gameplay, and own their digital assets on-chain.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
        ${[
          {
            icon: 'fas fa-gamepad', color: '#003BFF',
            title: 'Interactive Micro-Games',
            desc: 'Simple, lightweight games designed for instant engagement. Daily tasks, missions, and social actions reward players with AILINK Points. Automated anti-cheat ensures fairness.',
            tags: ['Daily Missions', 'Anti-Cheat', 'Streak Rewards']
          },
          {
            icon: 'fas fa-magic', color: '#31F2C3',
            title: 'AI Media Creation Suite',
            desc: 'Generate images, avatars, or short clips through prompt-based AI tools. Powered by optimized diffusion models — expanding into video and motion synthesis.',
            tags: ['Image Gen', 'Video Synthesis', 'Avatar AI']
          },
          {
            icon: 'fas fa-trophy', color: '#FFB400',
            title: 'Point-Driven Utility',
            desc: 'Points earned through gameplay accumulate securely in your dashboard. Redeem for AI tool access, higher generation tiers, or ALINK tokens. Seasonal reward cycles.',
            tags: ['Point System', 'Token Redemption', 'Seasonal Events']
          },
          {
            icon: 'fas fa-cube', color: '#8B5CF6',
            title: 'On-Chain Asset Minting',
            desc: 'AI-generated works can be minted as NFTs with standardized metadata formats. Optional royalty settings allow creators to earn from secondary sales indefinitely.',
            tags: ['NFT Minting', 'Royalties', 'Metadata Standard']
          },
          {
            icon: 'fas fa-gift', color: '#31F2C3',
            title: 'Engagement-Based Rewards',
            desc: 'Earn rewards based on activity, creativity, and contribution levels. Referral events and community participation expand distribution opportunities across the network.',
            tags: ['Referral System', 'Activity Rewards', 'Community Events']
          },
          {
            icon: 'fas fa-vote-yea', color: '#003BFF',
            title: 'DAO Governance',
            desc: 'ALINK token holders participate in protocol governance. Vote on development priorities, ecosystem fund allocation, and network parameter upgrades (launching 2026).',
            tags: ['Token Voting', 'Proposals', '2026 Launch']
          }
        ].map((f, i) => `
        <div class="glass-card card-glow observe" style="padding:32px;animation-delay:${i * 0.08}s;">
          <div style="width:52px;height:52px;background:${f.color}1A;border:1px solid ${f.color}33;
            border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:22px;">
            <i class="${f.icon}" style="font-size:22px;color:${f.color};"></i>
          </div>
          <h3 style="font-size:18px;font-weight:700;font-family:'Manrope',sans-serif;margin-bottom:12px;color:#fff;">${f.title}</h3>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:20px;">${f.desc}</p>
          <div style="display:flex;flex-wrap:wrap;gap:7px;">
            ${f.tags.map(t => `<span style="font-size:11px;font-weight:600;padding:4px 10px;border-radius:6px;
              background:rgba(255,255,255,0.05);color:var(--text-muted);border:1px solid rgba(255,255,255,0.08);">${t}</span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== ECOSYSTEM ===== -->
  <section id="ecosystem" class="section observe">
    <div class="section-inner">
      <div style="text-align:center;max-width:700px;margin:0 auto 64px;">
        <div class="section-label"><i class="fas fa-network-wired"></i>&nbsp; Ecosystem Architecture</div>
        <h2 class="section-title">One <span class="gradient-text">Intelligent</span> Loop</h2>
        <p class="section-subtitle" style="margin:0 auto;">A self-sustaining cycle of participation, creation, and ownership — all powered by the AILINK network.</p>
      </div>

      <!-- Flow diagram -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-bottom:64px;position:relative;">
        <div style="position:absolute;top:50%;left:12%;right:12%;height:1px;
          background:linear-gradient(90deg,var(--blue),var(--mint),var(--blue),var(--mint));
          opacity:0.25;z-index:0;transform:translateY(-50%);"></div>
        ${[
          {step:'01', icon:'fas fa-gamepad', title:'Play Micro-Games', desc:'Engage with daily missions and earn AILINK Points'},
          {step:'02', icon:'fas fa-wand-magic-sparkles', title:'Create AI Media', desc:'Use points to access AI image, video & avatar tools'},
          {step:'03', icon:'fas fa-cube', title:'Mint On-Chain', desc:'Convert creations into NFTs with royalty settings'},
          {step:'04', icon:'fas fa-coins', title:'Earn & Trade', desc:'Redeem ALINK tokens, stake for premium, trade assets'},
        ].map((s,i) => `
        <div class="observe" style="position:relative;z-index:1;text-align:center;padding:0 16px;animation-delay:${i*0.1}s;">
          <div style="width:72px;height:72px;margin:0 auto 20px;
            background:linear-gradient(135deg,rgba(0,59,255,0.15),rgba(49,242,195,0.1));
            border:2px solid ${i%2===0?'rgba(0,59,255,0.35)':'rgba(49,242,195,0.25)'};
            border-radius:50%;display:flex;align-items:center;justify-content:center;
            position:relative;">
            <i class="${s.icon}" style="font-size:26px;color:${i%2===0?'#6B8FFF':'#31F2C3'};"></i>
            <span style="position:absolute;top:-8px;right:-8px;background:var(--bg);
              border:1px solid var(--border);border-radius:6px;
              font-size:10px;font-weight:800;color:var(--mint);padding:2px 6px;">${s.step}</span>
          </div>
          <h3 style="font-size:16px;font-weight:700;color:#fff;margin-bottom:8px;">${s.title}</h3>
          <p style="font-size:13px;color:var(--text-muted);line-height:1.6;">${s.desc}</p>
        </div>`).join('')}
      </div>

      <!-- Ecosystem pillars -->
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px;">
        ${[
          {
            icon:'fas fa-brain', color:'#003BFF',
            title:'AI Generation Engine',
            desc:'Optimized diffusion models for image, video, and motion synthesis. GPU pipelines scale on-demand to handle thousands of concurrent generation requests.',
            items:['Image Generation', 'Video Synthesis', 'Avatar Creation', 'Motion Graphics']
          },
          {
            icon:'fas fa-store', color:'#31F2C3',
            title:'NFT Marketplace',
            desc:'Trade and collect AI-generated NFTs. Royalty system ensures creators earn from every secondary sale. Compatible with major NFT marketplaces.',
            items:['Buy & Sell NFTs', 'Creator Royalties', 'Metadata Standard', 'Cross-Platform']
          },
          {
            icon:'fas fa-gamepad', color:'#8B5CF6',
            title:'Micro-Game Hub',
            desc:'Daily challenges, social missions, and streak rewards. Anti-cheat infrastructure ensures fair competition and transparent reward distribution.',
            items:['Daily Missions', 'Streak System', 'Anti-Cheat', 'Leaderboards']
          },
          {
            icon:'fas fa-sitemap', color:'#FFB400',
            title:'DAO & Protocol Reserve',
            desc:'10B ALINK token economy with transparent vesting schedules. DAO governance launches in 2026, giving community control over protocol decisions.',
            items:['Token Governance', 'Treasury Fund', 'Protocol Reserve', '2026 DAO Launch']
          }
        ].map((p,i) => `
        <div class="glass-card card-glow observe" style="padding:36px;animation-delay:${i*0.1}s;">
          <div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:24px;">
            <div style="width:56px;height:56px;background:${p.color}1A;border:1px solid ${p.color}33;
              border-radius:16px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
              <i class="${p.icon}" style="font-size:22px;color:${p.color};"></i>
            </div>
            <div>
              <h3 style="font-size:20px;font-weight:700;font-family:'Manrope',sans-serif;color:#fff;margin-bottom:8px;">${p.title}</h3>
              <p style="font-size:14px;color:var(--text-muted);line-height:1.7;">${p.desc}</p>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
            ${p.items.map(item => `
            <div style="display:flex;align-items:center;gap:8px;
              background:rgba(255,255,255,0.03);border-radius:8px;padding:8px 12px;">
              <i class="fas fa-check" style="color:var(--mint);font-size:10px;"></i>
              <span style="font-size:13px;color:var(--text-muted);">${item}</span>
            </div>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== TOKENOMICS ===== -->
  <section id="tokenomics" class="section observe">
    <div class="section-inner">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;">
        <!-- Left: info -->
        <div>
          <div class="section-label"><i class="fas fa-coins"></i>&nbsp; Tokenomics</div>
          <h2 class="section-title">ALINK <span class="gradient-text">Token</span><br/>Economy</h2>
          <p class="section-subtitle" style="margin-bottom:36px;">A transparent, utility-first token model designed for long-term ecosystem sustainability and community ownership.</p>

          <!-- Token info grid -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:36px;">
            ${[
              {label:'Token Name', val:'AILINK', icon:'fas fa-tag'},
              {label:'Ticker', val:'ALINK', icon:'fas fa-hashtag'},
              {label:'Total Supply', val:'10,000,000,000', icon:'fas fa-infinity'},
              {label:'Network', val:'BNB Chain', icon:'fas fa-network-wired'},
              {label:'Standard', val:'BEP-20', icon:'fas fa-file-code'},
              {label:'TGE', val:'Q4 2025', icon:'fas fa-calendar'},
            ].map(item => `
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:14px;padding:16px 18px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
                <i class="${item.icon}" style="color:var(--mint);font-size:11px;"></i>
                <span style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;">${item.label}</span>
              </div>
              <div style="font-size:15px;font-weight:700;color:#fff;">${item.val}</div>
            </div>`).join('')}
          </div>

          <!-- Allocation list -->
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${[
              {cat:'Ecosystem Rewards', pct:45, color:'#003BFF', amount:'4.5B'},
              {cat:'Team & Contributors', pct:15, color:'#31F2C3', amount:'1.5B'},
              {cat:'Partnerships & Expansion', pct:15, color:'#8B5CF6', amount:'1.5B'},
              {cat:'Private Sale (Strategic)', pct:15, color:'#FFB400', amount:'1.5B'},
              {cat:'Protocol Reserve', pct:10, color:'#FF6B6B', amount:'1.0B'},
            ].map(a => `
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:14px 18px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:10px;height:10px;background:${a.color};border-radius:3px;"></div>
                  <span style="font-size:14px;font-weight:600;color:#fff;">${a.cat}</span>
                </div>
                <div style="text-align:right;">
                  <span style="font-size:15px;font-weight:800;color:${a.color};">${a.pct}%</span>
                  <span style="font-size:11px;color:var(--text-muted);margin-left:8px;">${a.amount}</span>
                </div>
              </div>
              <div style="height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;">
                <div style="height:100%;width:${a.pct}%;background:${a.color};border-radius:2px;"></div>
              </div>
            </div>`).join('')}
          </div>
        </div>

        <!-- Right: Chart -->
        <div style="display:flex;flex-direction:column;gap:28px;">
          <!-- Donut chart -->
          <div class="glass-card" style="padding:36px;text-align:center;">
            <div style="position:relative;display:inline-block;">
              <canvas id="tokenomicsChart" width="280" height="280"></canvas>
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;">
                <div style="font-size:28px;font-weight:900;font-family:'Manrope',sans-serif;color:#fff;line-height:1;">10B</div>
                <div style="font-size:11px;color:var(--text-muted);margin-top:4px;">Total Supply</div>
              </div>
            </div>
          </div>

          <!-- Vesting schedule table -->
          <div class="glass-card" style="padding:28px;">
            <h3 style="font-size:16px;font-weight:700;color:#fff;margin-bottom:18px;display:flex;align-items:center;gap:8px;">
              <i class="fas fa-calendar-alt" style="color:var(--mint);"></i> Vesting Schedule
            </h3>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;font-size:12px;">
                <thead>
                  <tr style="border-bottom:1px solid var(--border);">
                    <th style="text-align:left;padding:8px 6px;color:var(--text-muted);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Category</th>
                    <th style="text-align:center;padding:8px 6px;color:var(--text-muted);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">TGE</th>
                    <th style="text-align:center;padding:8px 6px;color:var(--text-muted);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Cliff</th>
                    <th style="text-align:center;padding:8px 6px;color:var(--text-muted);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Vesting</th>
                  </tr>
                </thead>
                <tbody>
                  ${[
                    {cat:'Ecosystem', color:'#003BFF', tge:'150M', cliff:'0 mo', vest:'48 mo'},
                    {cat:'Team', color:'#31F2C3', tge:'—', cliff:'12 mo', vest:'36 mo'},
                    {cat:'Partnerships', color:'#8B5CF6', tge:'75M', cliff:'3 mo', vest:'30 mo'},
                    {cat:'Private Sale', color:'#FFB400', tge:'225M', cliff:'6 mo', vest:'18 mo'},
                    {cat:'Protocol Reserve', color:'#FF6B6B', tge:'—', cliff:'6 mo', vest:'48 mo'},
                  ].map((row, i) => `
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                    <td style="padding:10px 6px;">
                      <div style="display:flex;align-items:center;gap:7px;">
                        <div style="width:8px;height:8px;background:${row.color};border-radius:2px;"></div>
                        <span style="color:#fff;font-weight:500;">${row.cat}</span>
                      </div>
                    </td>
                    <td style="text-align:center;padding:10px 6px;color:var(--text-muted);">${row.tge}</td>
                    <td style="text-align:center;padding:10px 6px;color:var(--text-muted);">${row.cliff}</td>
                    <td style="text-align:center;padding:10px 6px;color:${row.color};font-weight:700;">${row.vest}</td>
                  </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Vesting Chart -->
      <div class="glass-card observe" style="padding:36px;margin-top:32px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;flex-wrap:wrap;gap:16px;">
          <div>
            <h3 style="font-size:20px;font-weight:700;font-family:'Manrope',sans-serif;color:#fff;">60-Month Token Release Schedule</h3>
            <p style="font-size:13px;color:var(--text-muted);margin-top:4px;">Cumulative circulating supply reaching 100% by Month 53</p>
          </div>
          <div style="display:flex;gap:16px;flex-wrap:wrap;">
            ${[
              {mo:'Month 1', val:'4.5%',col:'#31F2C3'},
              {mo:'Month 12', val:'25.15%',col:'#003BFF'},
              {mo:'Month 24', val:'57.72%',col:'#8B5CF6'},
              {mo:'Month 36', val:'80.38%',col:'#FFB400'},
              {mo:'Month 53', val:'100%',col:'#FF6B6B'},
            ].map(m => `
            <div style="text-align:center;">
              <div style="font-size:14px;font-weight:800;color:${m.col};">${m.val}</div>
              <div style="font-size:10px;color:var(--text-muted);">${m.mo}</div>
            </div>`).join('')}
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
      <div style="text-align:center;max-width:680px;margin:0 auto 64px;">
        <div class="section-label"><i class="fas fa-map"></i>&nbsp; Roadmap</div>
        <h2 class="section-title">Path to <span class="gradient-text">Intelligence</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">A phased rollout from MVP to full decentralized AI network.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;">
        ${[
          {
            phase:'Q3 2025', status:'completed', color:'#31F2C3',
            title:'Foundation',
            items:['Official project announcement','Micro-game MVP release','AI image generator early access','Community building begins']
          },
          {
            phase:'Q4 2025', status:'active', color:'#003BFF',
            title:'TGE Launch',
            items:['NFT minting module activation','AI video engine beta','Community reward events','TGE and initial DEX listing','Governance preview release']
          },
          {
            phase:'2026', status:'upcoming', color:'#8B5CF6',
            title:'Expansion',
            items:['Full AILINK mobile application','DAO implementation','Multi-chain expansion','Marketplace integration','Advanced AI Suite (3D, voice, motion)']
          },
          {
            phase:'2027+', status:'future', color:'#FFB400',
            title:'Decentralization',
            items:['Decentralized AI training layer','Cross-chain agent portability','AILINK L2 research','AI DAO full governance','1M+ user milestone']
          }
        ].map((phase, i) => `
        <div class="glass-card card-glow observe" style="padding:28px;position:relative;animation-delay:${i*0.1}s;
          ${phase.status === 'active' ? 'border-color:rgba(0,59,255,0.4);box-shadow:0 4px 30px rgba(0,59,255,0.2);' : ''}">
          <!-- Phase number -->
          <div style="width:40px;height:40px;background:${phase.color}1A;border:1.5px solid ${phase.color}44;
            border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
            <span style="font-size:14px;font-weight:800;color:${phase.color};">0${i+1}</span>
          </div>
          
          <!-- Status badge -->
          <div style="position:absolute;top:20px;right:20px;">
            ${phase.status === 'completed' ? `<span class="badge badge-mint"><i class="fas fa-check"></i> Done</span>` :
              phase.status === 'active' ? `<span class="badge badge-blue"><span style="width:5px;height:5px;background:#6B8FFF;border-radius:50%;animation:blink 1.5s infinite;"></span> Active</span>` :
              phase.status === 'upcoming' ? `<span class="badge" style="background:rgba(139,92,246,0.12);color:#A78BFA;border:1px solid rgba(139,92,246,0.2);">Soon</span>` :
              `<span class="badge badge-gold">Future</span>`}
          </div>

          <div style="font-size:13px;color:${phase.color};font-weight:700;letter-spacing:0.5px;margin-bottom:6px;">${phase.phase}</div>
          <h3 style="font-size:18px;font-weight:700;font-family:'Manrope',sans-serif;color:#fff;margin-bottom:18px;">${phase.title}</h3>
          
          <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;">
            ${phase.items.map(item => `
            <li style="display:flex;align-items:flex-start;gap:8px;">
              <div style="width:5px;height:5px;background:${phase.color};border-radius:50%;flex-shrink:0;margin-top:7px;"></div>
              <span style="font-size:13px;color:${phase.status === 'completed' ? 'var(--text-muted)' : 'var(--text)'};line-height:1.5;
                ${phase.status === 'completed' ? 'text-decoration:line-through;opacity:0.7;' : ''}">${item}</span>
            </li>`).join('')}
          </ul>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== TEAM ===== -->
  <section id="team" class="section observe">
    <div class="section-inner">
      <div style="text-align:center;max-width:640px;margin:0 auto 64px;">
        <div class="section-label"><i class="fas fa-users"></i>&nbsp; Core Team</div>
        <h2 class="section-title">People Behind <span class="gradient-text">AILINK</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">AI engineers, blockchain developers, and growth strategists united to build the intelligent Web3 network.</p>
      </div>

      <!-- Core 3 team members -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:32px;">
        ${[
          {
            name:'Alex Kim', title:'CEO & Co-Founder', color:'#003BFF',
            icon:'fas fa-chess-king',
            bg:'A',
            bio:'8+ years in blockchain product development. Former lead PM at a global Web3 infrastructure company. Specialized in token economy design, product strategy, and cross-chain integrations.',
            tags:['Token Economy', 'Product Strategy', 'Cross-Chain', 'Partnerships'],
            role:'Oversees overall project vision, manages partnerships, investor relations, and sets the execution roadmap.'
          },
          {
            name:'Sophia Nguyen', title:'CTO & Co-Founder', color:'#31F2C3',
            icon:'fas fa-microchip',
            bg:'S',
            bio:'AI systems engineer with 10+ years in machine learning, LLM frameworks, and distributed computing. Previously developed high-performance AI engines for enterprise clients.',
            tags:['AI Engineering', 'Smart Contracts', 'ML Systems', 'Distributed Compute'],
            role:'Leads development of AI generation modules. Oversees smart contract architecture and system infrastructure.'
          },
          {
            name:'Daniel Park', title:'CMO', color:'#8B5CF6',
            icon:'fas fa-bullhorn',
            bg:'D',
            bio:'Growth strategist with experience launching global Web3 products. Former head of marketing for a top GameFi and SocialFi project. Specialized in community building and data-driven campaigns.',
            tags:['Community Growth', 'Brand Strategy', 'GameFi/SocialFi', 'Data-Driven'],
            role:'Manages global marketing, brand direction, user acquisition, community programs, and influencer partnerships.'
          }
        ].map((m, i) => `
        <div class="glass-card card-glow observe" style="padding:32px;animation-delay:${i*0.1}s;position:relative;overflow:hidden;">
          <!-- Top accent bar -->
          <div style="position:absolute;top:0;left:0;right:0;height:3px;
            background:linear-gradient(90deg,${m.color},transparent);"></div>
          
          <!-- Avatar -->
          <div style="margin-bottom:20px;">
            <div style="width:72px;height:72px;background:linear-gradient(135deg,${m.color}33,${m.color}11);
              border:2px solid ${m.color}44;border-radius:50%;
              display:flex;align-items:center;justify-content:center;margin-bottom:12px;">
              <span style="font-size:26px;font-weight:800;color:${m.color};">${m.bg}</span>
            </div>
            <h3 style="font-size:20px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;margin-bottom:4px;">${m.name}</h3>
            <div style="font-size:13px;color:${m.color};font-weight:600;">${m.title}</div>
          </div>

          <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin-bottom:16px;">${m.bio}</p>
          
          <div style="background:rgba(255,255,255,0.03);border-radius:10px;padding:12px 14px;margin-bottom:18px;border:1px solid rgba(255,255,255,0.06);">
            <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Role at AILINK</div>
            <p style="font-size:12px;color:var(--text-muted);line-height:1.65;">${m.role}</p>
          </div>

          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${m.tags.map(t => `<span class="badge badge-blue">${t}</span>`).join('')}
          </div>

          <a href="https://x.com/AiLink_Official" target="_blank"
            style="display:flex;align-items:center;justify-content:center;gap:6px;margin-top:20px;
            padding:10px;border-radius:10px;background:rgba(255,255,255,0.04);
            border:1px solid rgba(255,255,255,0.08);color:var(--text-muted);font-size:12px;
            text-decoration:none;transition:all 0.2s;"
            onmouseover="this.style.color='var(--mint)';this.style.borderColor='rgba(49,242,195,0.3)'"
            onmouseout="this.style.color='var(--text-muted)';this.style.borderColor='rgba(255,255,255,0.08)'">
            <i class="fab fa-x-twitter"></i> @AiLink_Official
          </a>
        </div>`).join('')}
      </div>

      <!-- Team structure note -->
      <div class="glass-card observe" style="padding:32px;background:linear-gradient(135deg,rgba(0,59,255,0.05),rgba(49,242,195,0.03));">
        <div style="display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center;">
          <div>
            <h3 style="font-size:18px;font-weight:700;color:#fff;margin-bottom:10px;">Full Team Structure</h3>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.7;max-width:600px;">
              Beyond the core leadership, AILINK is backed by a dedicated team of AI engineers (generative & multimodal models), blockchain developers (smart contracts & dApps), backend and systems engineers, game design specialists, and community & growth strategists.
            </p>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;flex-shrink:0;">
            ${['AI Engineers','Blockchain Devs','Backend Engineers','Game Designers','Community Team','Growth Strategists'].map(r => `
            <div style="display:flex;align-items:center;gap:8px;">
              <i class="fas fa-check-circle" style="color:var(--mint);font-size:12px;"></i>
              <span style="font-size:13px;color:var(--text-muted);">${r}</span>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== PARTNERS ===== -->
  <section id="partners" class="section observe" style="background:rgba(0,59,255,0.02);">
    <div class="section-inner">
      <div style="text-align:center;max-width:640px;margin:0 auto 64px;">
        <div class="section-label"><i class="fas fa-handshake"></i>&nbsp; Partners & Investors</div>
        <h2 class="section-title">Powered By the <span class="gradient-text">Best</span></h2>
        <p class="section-subtitle" style="margin:0 auto;">Strategic partnerships with leading AI research labs, Web3 infrastructure, and enterprise cloud providers.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:40px;">
        ${[
          {name:'BNB Chain', cat:'Infrastructure', icon:'fab fa-ethereum', color:'#F0B90B', url:'https://www.bnbchain.org', desc:'Native blockchain network'},
          {name:'Chainlink', cat:'Oracle', icon:'fas fa-link', color:'#375BD2', url:'https://chain.link', desc:'Decentralized oracle network'},
          {name:'OKX Web3', cat:'Exchange', icon:'fas fa-exchange-alt', color:'#00CCFF', url:'https://www.okx.com/web3', desc:'Web3 wallet & DEX'},
          {name:'Google Cloud AI', cat:'Cloud AI', icon:'fab fa-google', color:'#4285F4', url:'https://cloud.google.com/ai', desc:'AI infrastructure partner'},
          {name:'RunwayML', cat:'AI Video', icon:'fas fa-film', color:'#6C47FF', url:'https://runwayml.com', desc:'AI video generation'},
          {name:'CertiK', cat:'Security', icon:'fas fa-shield-alt', color:'#00D1A0', url:'https://www.certik.com', desc:'Smart contract audit'},
          {name:'AWS ML', cat:'Cloud', icon:'fab fa-aws', color:'#FF9900', url:'https://aws.amazon.com/machine-learning', desc:'ML infrastructure'},
          {name:'Stability AI', cat:'AI Models', icon:'fas fa-atom', color:'#7C3AED', url:'https://stability.ai', desc:'Stable Diffusion models'},
        ].map((p, i) => `
        <a href="${p.url}" target="_blank" rel="noopener"
          class="glass-card card-glow observe" style="padding:24px;text-decoration:none;
          display:flex;flex-direction:column;gap:12px;animation-delay:${i*0.06}s;"
          onmouseover="this.style.transform='translateY(-4px)'"
          onmouseout="this.style.transform='translateY(0)'">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div style="width:44px;height:44px;background:${p.color}18;border:1px solid ${p.color}33;
              border-radius:12px;display:flex;align-items:center;justify-content:center;">
              <i class="${p.icon}" style="font-size:18px;color:${p.color};"></i>
            </div>
            <span style="font-size:10px;font-weight:700;letter-spacing:0.8px;
              text-transform:uppercase;color:var(--text-dim);">${p.cat}</span>
          </div>
          <div>
            <div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:4px;">${p.name}</div>
            <div style="font-size:12px;color:var(--text-muted);">${p.desc}</div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;color:var(--text-dim);font-size:11px;margin-top:auto;">
            <i class="fas fa-external-link-alt" style="font-size:9px;"></i>
            Visit →
          </div>
        </a>`).join('')}
      </div>

      <!-- Partnership CTA -->
      <div class="glass-card" style="padding:40px;text-align:center;
        background:linear-gradient(135deg,rgba(0,59,255,0.08),rgba(49,242,195,0.05));
        border:1px solid rgba(0,59,255,0.2);">
        <div class="badge badge-mint" style="margin-bottom:16px;"><i class="fas fa-plus"></i>&nbsp; Partnership Program</div>
        <h3 style="font-size:24px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;margin-bottom:10px;">
          Become an AILINK Partner
        </h3>
        <p style="font-size:15px;color:var(--text-muted);max-width:500px;margin:0 auto 24px;line-height:1.7;">
          Join our partner ecosystem. We're actively onboarding Web3 wallets, AI research groups, and marketing agencies.
        </p>
        <a href="https://t.me/AiLink_Official" target="_blank" class="btn-primary">
          <i class="fab fa-telegram"></i> Contact via Telegram
        </a>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- ===== CTA SECTION ===== -->
  <section class="section observe" style="position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,59,255,0.12),rgba(49,242,195,0.06));"></div>
      <div class="grid-bg" style="position:absolute;inset:0;opacity:0.4;"></div>
    </div>
    <div class="section-inner" style="position:relative;z-index:1;">
      <div style="text-align:center;max-width:700px;margin:0 auto;">
        <div class="section-label" style="margin-bottom:24px;"><i class="fas fa-rocket"></i>&nbsp; Join AILINK</div>
        <h2 style="font-size:clamp(36px,5vw,60px);font-weight:900;font-family:'Manrope',sans-serif;
          line-height:1.1;letter-spacing:-1.5px;margin-bottom:20px;">
          Where Users <span class="gradient-text">Shape the Algorithm</span>
        </h2>
        <p style="font-size:17px;color:var(--text-muted);line-height:1.75;margin-bottom:40px;">
          AILINK merges intelligence, creativity, and decentralized ownership into a single seamless network. Be part of the next evolution in AI × Web3.
        </p>
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:36px;">
          <a href="https://x.com/AiLink_Official" target="_blank" class="btn-primary" style="font-size:16px;padding:16px 32px;">
            <i class="fab fa-x-twitter"></i> Follow on X
          </a>
          <a href="https://t.me/AiLink_Official" target="_blank" class="btn-outline" style="font-size:16px;padding:16px 32px;">
            <i class="fab fa-telegram"></i> Join Telegram
          </a>
          <a href="/whitepaper" class="btn-ghost" style="font-size:16px;padding:16px 28px;">
            <i class="fas fa-file-alt"></i> Whitepaper
          </a>
        </div>
        
        <!-- Social proof -->
        <div style="display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;">
          ${[
            {icon:'fab fa-x-twitter', label:'@AiLink_Official', col:'#fff'},
            {icon:'fab fa-telegram', label:'t.me/AiLink_Official', col:'#31F2C3'},
          ].map(s => `
          <div style="display:flex;align-items:center;gap:8px;">
            <i class="${s.icon}" style="color:${s.col};font-size:14px;"></i>
            <span style="font-size:13px;color:var(--text-muted);">${s.label}</span>
          </div>`).join('')}
          <div style="display:flex;align-items:center;gap:8px;">
            <i class="fas fa-shield-alt" style="color:#6B8FFF;font-size:14px;"></i>
            <span style="font-size:13px;color:var(--text-muted);">Audit by CertiK (pending)</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <style>
    /* Hero responsive */
    @media (max-width: 1024px) {
      #home .section-inner > div { grid-template-columns: 1fr !important; gap: 48px !important; }
      #home .section-inner > div > div:last-child { display: none; }
    }
    /* Trust bar responsive */
    @media (max-width: 1023px) {
      #home + section .section-inner > div { grid-template-columns: repeat(3, 1fr) !important; }
    }
    @media (max-width: 600px) {
      #home + section .section-inner > div { grid-template-columns: repeat(2, 1fr) !important; }
    }
    /* Features grid */
    @media (max-width: 1023px) {
      #features .section-inner > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 639px) {
      #features .section-inner > div:last-child { grid-template-columns: 1fr !important; }
    }
    /* Tokenomics */
    @media (max-width: 900px) {
      #tokenomics .section-inner > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
    }
    /* Roadmap */
    @media (max-width: 900px) {
      #roadmap .section-inner > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 600px) {
      #roadmap .section-inner > div:last-child { grid-template-columns: 1fr !important; }
    }
    /* Team */
    @media (max-width: 900px) {
      #team .section-inner > div:first-child { grid-template-columns: 1fr !important; }
    }
    @media (max-width: 767px) {
      #team .section-inner > div:nth-child(2) > div:last-child { grid-template-columns: 1fr !important; }
    }
    /* Partners */
    @media (max-width: 1023px) {
      #partners .section-inner > div:nth-child(2) { grid-template-columns: repeat(3, 1fr) !important; }
    }
    @media (max-width: 639px) {
      #partners .section-inner > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
    }
    /* Ecosystem flow */
    @media (max-width: 767px) {
      #ecosystem .section-inner > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 479px) {
      #ecosystem .section-inner > div:nth-child(2) { grid-template-columns: 1fr !important; }
      #ecosystem .section-inner > div:last-child { grid-template-columns: 1fr !important; }
    }
  </style>

  <script>
    // Tokenomics donut chart
    const tokenCtx = document.getElementById('tokenomicsChart');
    if (tokenCtx) {
      new Chart(tokenCtx, {
        type: 'doughnut',
        data: {
          labels: ['Ecosystem Rewards (45%)', 'Team & Contributors (15%)', 'Partnerships (15%)', 'Private Sale (15%)', 'Protocol Reserve (10%)'],
          datasets: [{
            data: [45, 15, 15, 15, 10],
            backgroundColor: ['#003BFF', '#31F2C3', '#8B5CF6', '#FFB400', '#FF6B6B'],
            borderColor: '#0D0F14',
            borderWidth: 3,
            hoverOffset: 8
          }]
        },
        options: {
          cutout: '72%',
          responsive: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#161920',
              borderColor: 'rgba(49,242,195,0.2)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#8891A5',
              padding: 12
            }
          }
        }
      });
    }

    // Vesting line chart
    const vestCtx = document.getElementById('vestingChart');
    if (vestCtx) {
      const months = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53];
      const totals = [450,631,722,860,998,1136,1365,1596,1826,2055,2285,2515,2786,3059,3312,3601,3872,4144,4415,4687,4958,5230,5501,5773,5973,6173,6374,6575,6776,6976,7177,7378,7578,7731,7884,8038,8191,8344,8497,8650,8703,8956,9108,9263,9417,9570,9722,9875,9896,9917,9938,9958,10000];
      new Chart(vestCtx, {
        type: 'line',
        data: {
          labels: months,
          datasets: [{
            label: 'Circulating Supply (M)',
            data: totals,
            borderColor: '#003BFF',
            backgroundColor: 'rgba(0,59,255,0.08)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#31F2C3',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2
          }]
        },
        options: {
          responsive: true,
          interaction: { intersect: false, mode: 'index' },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#161920',
              borderColor: 'rgba(0,59,255,0.3)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#8891A5',
              padding: 12,
              callbacks: {
                label: ctx => ' ' + (ctx.parsed.y / 1000).toFixed(2) + 'B ALINK (' + (ctx.parsed.y / 100).toFixed(2) + '%)'
              }
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.04)' },
              ticks: { color: '#5A6278', font: { size: 11 }, maxTicksLimit: 10 },
              border: { color: 'rgba(255,255,255,0.06)' }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.04)' },
              ticks: {
                color: '#5A6278', font: { size: 11 },
                callback: val => (val / 1000) + 'B'
              },
              border: { color: 'rgba(255,255,255,0.06)' }
            }
          }
        }
      });
    }
  </script>
  `

  return layout('AILINK — Intelligence, Connected. | AI-Powered Web3 Platform', content)
}

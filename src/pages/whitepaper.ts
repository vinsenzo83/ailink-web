import { layout } from './layout'

export function whitepaperPage(): string {
  const content = `
  <section style="padding-top:100px;min-height:100vh;background:var(--bg);">
    <div class="section-inner" style="max-width:860px;">

      <!-- Header -->
      <div style="text-align:center;margin-bottom:64px;">
        <div class="section-label"><i class="fas fa-file-alt"></i>&nbsp; Whitepaper v1.1</div>
        <h1 class="section-title">AILINK <span class="gradient-text">Whitepaper</span></h1>
        <p class="section-subtitle" style="margin:0 auto;">Intelligence, Connected. — The technical and economic foundation of the AILINK network.</p>
        <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:24px;flex-wrap:wrap;">
          <span class="badge badge-mint"><i class="fas fa-check"></i> Version 1.1</span>
          <span class="badge badge-blue"><i class="fas fa-calendar"></i> 2025</span>
          <span class="badge badge-gold"><i class="fas fa-clock"></i> ~15 min read</span>
        </div>
      </div>

      <!-- TOC -->
      <div class="glass-card" style="padding:28px;margin-bottom:40px;">
        <h3 style="font-size:14px;font-weight:700;color:#fff;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;">Table of Contents</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          ${[
            '1. Introduction','2. Vision & Mission','3. Core Features','4. Ecosystem Architecture',
            '5. Revenue Model','6. Tokenomics','7. Technical Overview','8. Roadmap',
            '9. Team & Partners','10. Legal Disclaimer'
          ].map((item, i) => `
          <a href="#wp-${i+1}" style="display:flex;align-items:center;gap:10px;padding:10px 14px;
            border-radius:9px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);
            color:var(--text-muted);font-size:13px;text-decoration:none;transition:all 0.2s;"
            onmouseover="this.style.color='var(--mint)';this.style.background='rgba(49,242,195,0.05)'"
            onmouseout="this.style.color='var(--text-muted)';this.style.background='rgba(255,255,255,0.03)'">
            <span style="width:20px;height:20px;background:rgba(0,59,255,0.15);border-radius:5px;
              display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;
              color:#6B8FFF;flex-shrink:0;">${i+1}</span>
            ${item.replace(/^\d+\. /, '')}
          </a>`).join('')}
        </div>
      </div>

      <!-- Sections -->
      ${[
        {
          id:'wp-1', title:'1. Introduction', icon:'fas fa-rocket',
          content:`<p>AILINK is an intelligent, decentralized interaction network that merges AI-powered content creation with accessible Web3 engagement. Designed for speed, simplicity, and ownership, AILINK allows users to play micro-games, earn utility points, generate AI-driven multimedia, and convert their creations into on-chain assets.</p>
          <p style="margin-top:14px;">By linking intelligence, creativity, and blockchain incentives, AILINK delivers a seamless environment where anyone can create, connect, and evolve.</p>`
        },
        {
          id:'wp-2', title:'2. Vision & Mission', icon:'fas fa-eye',
          content:`<p><strong style="color:#fff;">Vision:</strong> To become the most reliable AI-driven interaction layer in Web3—where every user can create, connect, and own digital intelligence.</p>
          <ul style="margin-top:14px;list-style:none;display:flex;flex-direction:column;gap:10px;">
            <li style="display:flex;gap:10px;"><i class="fas fa-check" style="color:var(--mint);margin-top:3px;"></i><span>Make AI-generated media accessible through intuitive, gamified user experiences.</span></li>
            <li style="display:flex;gap:10px;"><i class="fas fa-check" style="color:var(--mint);margin-top:3px;"></i><span>Empower the community with point-based rewards, token utility, and user-owned digital assets.</span></li>
            <li style="display:flex;gap:10px;"><i class="fas fa-check" style="color:var(--mint);margin-top:3px;"></i><span>Build a long-term creator economy supported by decentralized intelligence and transparent incentives.</span></li>
          </ul>`
        },
        {
          id:'wp-3', title:'3. Core Features', icon:'fas fa-layer-group',
          content:`<div style="display:flex;flex-direction:column;gap:16px;">
            ${[
              {title:'Interactive Micro-Games', icon:'fas fa-gamepad', desc:'Simple, lightweight games for instant fun and engagement. Daily tasks, missions, and social actions reward players with AILINK Points. Automated anti-cheat systems ensure fairness.'},
              {title:'AI Media Creation Suite', icon:'fas fa-magic', desc:'Users can generate images, avatars, or short clips through prompt-based AI tools. Powered by optimized diffusion models and expanding into video and motion synthesis. Output compatible with minting, sharing, or reusing.'},
              {title:'Point-Driven Utility System', icon:'fas fa-trophy', desc:'Points earned through gameplay accumulate securely in the user dashboard. Points can be redeemed for AI tool access, higher generation tiers, or ALINK tokens. Seasonal reward cycles incentivize active contributors.'},
              {title:'On-Chain Asset Minting', icon:'fas fa-cube', desc:'AI-generated works can be minted as NFTs. NFTs follow standardized metadata formats to remain compatible across marketplaces. Optional royalty settings allow creators to earn from secondary sales.'},
              {title:'Engagement-Based Rewards', icon:'fas fa-gift', desc:'Earn rewards based on activity, creativity, and contribution levels. Referral events and community participation expand distribution opportunities.'},
            ].map(f => `
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px 20px;display:flex;gap:16px;">
              <div style="width:40px;height:40px;background:rgba(0,59,255,0.12);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${f.icon}" style="color:#6B8FFF;font-size:16px;"></i>
              </div>
              <div>
                <div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;">${f.title}</div>
                <div style="font-size:13px;color:var(--text-muted);line-height:1.7;">${f.desc}</div>
              </div>
            </div>`).join('')}
          </div>`
        },
        {
          id:'wp-4', title:'4. Ecosystem Architecture', icon:'fas fa-network-wired',
          content:`<div style="background:rgba(0,59,255,0.08);border:1px solid rgba(0,59,255,0.2);border-radius:14px;padding:24px;font-family:monospace;font-size:14px;color:var(--mint);line-height:2;margin-bottom:16px;">
            User → Micro-Games → Earn Points<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
            Use Points → AI Creation Tools<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
            Mint NFTs (optional) / Redeem ALINK Tokens<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
            Trade / Stake / Access Premium AI Modules
          </div>
          <p>This flow creates a self-sustaining cycle of participation, creation, and ownership — forming the core loop of the AILINK economy.</p>`
        },
        {
          id:'wp-5', title:'5. Revenue Model', icon:'fas fa-chart-line',
          content:`<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            ${[
              {title:'Premium AI Tools', icon:'fas fa-wand-magic-sparkles', desc:'ALINK tokens unlock high-resolution generation, batch processing, advanced modes, and commercial licensing.'},
              {title:'NFT Transaction Fees', icon:'fas fa-cube', desc:'A minimal protocol fee on NFT mints and marketplace interactions involving platform-generated content.'},
              {title:'Boosters & Enhancements', icon:'fas fa-bolt', desc:'Optional upgrades such as multipliers, streak extenders, and rare-asset chances designed to boost engagement.'},
              {title:'Brand Integrations', icon:'fas fa-building', desc:'External partners run missions, sponsor reward pools, or promote themed creative events on the platform.'},
            ].map(r => `
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:16px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <i class="${r.icon}" style="color:var(--mint);font-size:13px;"></i>
                <span style="font-size:14px;font-weight:700;color:#fff;">${r.title}</span>
              </div>
              <p style="font-size:13px;color:var(--text-muted);line-height:1.65;">${r.desc}</p>
            </div>`).join('')}
          </div>
          <div style="margin-top:12px;background:rgba(255,180,0,0.06);border:1px solid rgba(255,180,0,0.2);border-radius:12px;padding:16px 20px;display:flex;gap:12px;align-items:flex-start;">
            <i class="fas fa-circle-info" style="color:#FFB400;margin-top:2px;"></i>
            <p style="font-size:13px;color:var(--text-muted);line-height:1.65;"><strong style="color:#FFB400;">Treasury Flywheel:</strong> A percentage of all fees contributes to the protocol treasury, fueling governance, development, and ecosystem sustainability.</p>
          </div>`
        },
        {
          id:'wp-6', title:'6. Tokenomics', icon:'fas fa-coins',
          content:`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px;">
            ${[
              {label:'Token Name', val:'AILINK'},
              {label:'Ticker', val:'ALINK'},
              {label:'Total Supply', val:'10,000,000,000'},
              {label:'Network', val:'BNB Chain'},
              {label:'Standard', val:'BEP-20'},
              {label:'TGE', val:'Q4 2025'},
            ].map(i => `
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:14px 16px;">
              <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:5px;">${i.label}</div>
              <div style="font-size:15px;font-weight:700;color:#fff;">${i.val}</div>
            </div>`).join('')}
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:13px;">
            <thead>
              <tr style="border-bottom:1px solid var(--border);">
                <th style="text-align:left;padding:10px 12px;color:var(--text-muted);font-size:11px;text-transform:uppercase;">Category</th>
                <th style="text-align:center;padding:10px 12px;color:var(--text-muted);font-size:11px;text-transform:uppercase;">%</th>
                <th style="text-align:right;padding:10px 12px;color:var(--text-muted);font-size:11px;text-transform:uppercase;">Tokens</th>
                <th style="text-align:center;padding:10px 12px;color:var(--text-muted);font-size:11px;text-transform:uppercase;">TGE</th>
                <th style="text-align:center;padding:10px 12px;color:var(--text-muted);font-size:11px;text-transform:uppercase;">Cliff</th>
                <th style="text-align:center;padding:10px 12px;color:var(--text-muted);font-size:11px;text-transform:uppercase;">Vesting</th>
              </tr>
            </thead>
            <tbody>
              ${[
                {cat:'Ecosystem Rewards', pct:'45%', tok:'4,500,000,000', tge:'150M', cliff:'0 mo', vest:'48 mo', col:'#003BFF'},
                {cat:'Team & Contributors', pct:'15%', tok:'1,500,000,000', tge:'—', cliff:'12 mo', vest:'36 mo', col:'#31F2C3'},
                {cat:'Partnerships & Expansion', pct:'15%', tok:'1,500,000,000', tge:'75M', cliff:'3 mo', vest:'30 mo', col:'#8B5CF6'},
                {cat:'Private Sale (Strategic)', pct:'15%', tok:'1,500,000,000', tge:'225M', cliff:'6 mo', vest:'18 mo', col:'#FFB400'},
                {cat:'Protocol Reserve', pct:'10%', tok:'1,000,000,000', tge:'—', cliff:'6 mo', vest:'48 mo', col:'#FF6B6B'},
              ].map((r,i) => `
              <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                <td style="padding:12px;"><div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;background:${r.col};border-radius:2px;"></div><span style="color:#fff;font-weight:500;">${r.cat}</span></div></td>
                <td style="text-align:center;padding:12px;color:${r.col};font-weight:800;">${r.pct}</td>
                <td style="text-align:right;padding:12px;color:var(--text-muted);">${r.tok}</td>
                <td style="text-align:center;padding:12px;color:var(--text-muted);">${r.tge}</td>
                <td style="text-align:center;padding:12px;color:var(--text-muted);">${r.cliff}</td>
                <td style="text-align:center;padding:12px;color:var(--text-muted);font-weight:600;">${r.vest}</td>
              </tr>`).join('')}
            </tbody>
          </table>
          <p style="margin-top:14px;"><strong style="color:#fff;">Token Utility:</strong> Access to advanced AI creation tools, NFT minting and metadata registration, staking for priority queues and premium features, governance participation (future DAO), and fuel for integrations across ecosystem applications.</p>`
        },
        {
          id:'wp-7', title:'7. Technical Overview', icon:'fas fa-server',
          content:`<div style="display:flex;flex-direction:column;gap:14px;">
            ${[
              {title:'Interaction & Game Layer', icon:'fas fa-gamepad', desc:'Built using lightweight Node.js/Python frameworks. Real-time score tracking and anti-cheat logic. Reward queues optimized for high throughput.'},
              {title:'AI Engine', icon:'fas fa-brain', desc:'Image generation powered by optimized diffusion models. Planned expansion into video synthesis, motion graphics, and voice AI. Scalable on-demand GPU pipelines.'},
              {title:'Backend Services', icon:'fas fa-server', desc:'Secure, encrypted off-chain point ledger. User hashing to prevent duplication or abuse. High-availability infrastructure for real-time performance.'},
              {title:'Smart Contracts', icon:'fas fa-file-code', desc:'ALINK Token Contract: Built on a secure, widely supported BEP-20 standard. NFT Contract: Supports royalties, creator verification, and persistent metadata. DAO Contract: Scheduled for 2026 governance rollout.'},
              {title:'Security & Compliance', icon:'fas fa-shield-alt', desc:'Smart contract audits by certified security firms (CertiK). Redemption and activity-limit mechanisms. Encrypted data channels across all services.'},
            ].map(t => `
            <div style="display:flex;gap:16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px 20px;">
              <div style="width:40px;height:40px;background:rgba(0,59,255,0.12);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${t.icon}" style="color:#6B8FFF;font-size:16px;"></i>
              </div>
              <div>
                <div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;">${t.title}</div>
                <div style="font-size:13px;color:var(--text-muted);line-height:1.7;">${t.desc}</div>
              </div>
            </div>`).join('')}
          </div>`
        },
        {
          id:'wp-8', title:'8. Roadmap', icon:'fas fa-map',
          content:`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">
            ${[
              {phase:'Q3 2025', status:'Completed', color:'#31F2C3', items:['Official project announcement','Micro-game MVP release','AI image generator early access']},
              {phase:'Q4 2025', status:'In Progress', color:'#003BFF', items:['NFT minting module activation','AI video engine beta','Community reward events','TGE and initial DEX listing','Governance preview release']},
              {phase:'2026+', status:'Upcoming', color:'#8B5CF6', items:['Full AILINK mobile application','DAO implementation','Multi-chain expansion & marketplace','Advanced AI Suite (3D, voice, motion, dynamic creatives)']},
            ].map(p => `
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:20px;">
              <div style="font-size:12px;color:${p.color};font-weight:700;margin-bottom:4px;">${p.phase}</div>
              <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:14px;">${p.status}</div>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
                ${p.items.map(i => `<li style="display:flex;gap:8px;font-size:13px;color:var(--text-muted);"><i class="fas fa-arrow-right" style="color:${p.color};margin-top:2px;font-size:10px;flex-shrink:0;"></i>${i}</li>`).join('')}
              </ul>
            </div>`).join('')}
          </div>`
        },
        {
          id:'wp-9', title:'9. Team & Partners', icon:'fas fa-users',
          content:`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:20px;">
            ${[
              {name:'Alex Kim', role:'CEO & Co-Founder', desc:'8+ years blockchain product development. Former lead PM at a global Web3 infrastructure company.'},
              {name:'Sophia Nguyen', role:'CTO & Co-Founder', desc:'AI systems engineer with 10+ years in machine learning, LLM frameworks, and distributed computing.'},
              {name:'Daniel Park', role:'CMO', desc:'Growth strategist. Former head of marketing for a top GameFi and SocialFi project.'},
            ].map(m => `
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:16px;">
              <div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:4px;">${m.name}</div>
              <div style="font-size:12px;color:var(--mint);margin-bottom:10px;">${m.role}</div>
              <div style="font-size:13px;color:var(--text-muted);line-height:1.6;">${m.desc}</div>
            </div>`).join('')}
          </div>
          <p style="margin-bottom:14px;"><strong style="color:#fff;">Partners & Investors:</strong> BNB Chain, Chainlink, OKX Web3, Google Cloud AI, RunwayML, CertiK, AWS Machine Learning, Stability AI (Stable Diffusion).</p>
          <p>Additionally, AILINK's partnership pipeline includes Web3 wallets and infrastructure providers, AI research groups and model developers, and marketing and digital innovation agencies.</p>`
        },
        {
          id:'wp-10', title:'10. Legal Disclaimer', icon:'fas fa-balance-scale',
          content:`<div style="background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);border-radius:14px;padding:24px;">
            <p style="color:var(--text-muted);line-height:1.8;">ALINK is a utility token designed for platform access, creative tools, and participation within the AILINK ecosystem. It does <strong style="color:#FF6B6B;">not</strong> represent equity, investment contracts, or guaranteed returns. Users must follow regional regulations. All contracts will undergo professional audits before mainnet deployment.</p>
          </div>`
        },
      ].map(sec => `
      <div id="${sec.id}" class="glass-card observe" style="padding:36px;margin-bottom:24px;">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid var(--border);">
          <div style="width:44px;height:44px;background:rgba(0,59,255,0.12);border:1px solid rgba(0,59,255,0.2);
            border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <i class="${sec.icon}" style="font-size:18px;color:#6B8FFF;"></i>
          </div>
          <h2 style="font-size:22px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;">${sec.title}</h2>
        </div>
        <div style="font-size:14px;color:var(--text-muted);line-height:1.8;">
          ${sec.content}
        </div>
      </div>`).join('')}

      <!-- Download CTA -->
      <div class="glass-card" style="padding:36px;text-align:center;margin-bottom:60px;
        background:linear-gradient(135deg,rgba(0,59,255,0.08),rgba(49,242,195,0.04));">
        <h3 style="font-size:20px;font-weight:800;color:#fff;margin-bottom:10px;">Stay Updated</h3>
        <p style="font-size:14px;color:var(--text-muted);margin-bottom:24px;max-width:400px;margin-left:auto;margin-right:auto;">
          Follow our official channels for whitepaper updates, TGE announcements, and ecosystem news.
        </p>
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <a href="https://x.com/AiLink_Official" target="_blank" class="btn-primary">
            <i class="fab fa-x-twitter"></i> Follow on X
          </a>
          <a href="https://t.me/AiLink_Official" target="_blank" class="btn-outline">
            <i class="fab fa-telegram"></i> Join Telegram
          </a>
        </div>
      </div>
    </div>
  </section>
  `

  return layout('Whitepaper — AILINK | Intelligence, Connected.', content)
}

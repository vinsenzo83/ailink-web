import { layout } from './layout'

const CONTRACT = '0x33c5502261c589a2EC4B1a6C4350aBF60ef47254'
const BSCSCAN  = `https://bscscan.com/token/${CONTRACT}`

// Vesting schedule data
const CATEGORIES = [
  {
    id: 'ecosystem',
    name: 'Ecosystem Rewards',
    color: '#31F2C3',
    total: 4_500_000_000,
    pct: 45,
    tge: 150_000_000,
    cliff: 0,
    vestMonths: 48,
    description: 'Rewards distributed to platform users, game participants, AI content creators, and stakers.',
    icon: 'fas fa-layer-group',
  },
  {
    id: 'team',
    name: 'Team & Advisors',
    color: '#6B8FFF',
    total: 1_500_000_000,
    pct: 15,
    tge: 0,
    cliff: 12,
    vestMonths: 36,
    description: 'Core team and advisor compensation, unlocked after 12-month cliff then linearly over 36 months.',
    icon: 'fas fa-users',
  },
  {
    id: 'partnerships',
    name: 'Partnerships & Marketing',
    color: '#003BFF',
    total: 1_500_000_000,
    pct: 15,
    tge: 0,
    cliff: 3,
    vestMonths: 30,
    description: 'Strategic partnership deals, marketing campaigns, exchange listings and co-marketing.',
    icon: 'fas fa-handshake',
  },
  {
    id: 'private',
    name: 'Private Sale',
    color: '#FFB400',
    total: 1_500_000_000,
    pct: 15,
    tge: 0,
    cliff: 6,
    vestMonths: 18,
    description: 'Early private round investors with 6-month cliff and 18-month linear vesting.',
    icon: 'fas fa-user-tie',
  },
  {
    id: 'reserve',
    name: 'Protocol Reserve',
    color: '#FF6B9D',
    total: 1_000_000_000,
    pct: 10,
    tge: 0,
    cliff: 6,
    vestMonths: 48,
    description: 'Treasury reserve for future protocol development, emergency fund, and DAO governance.',
    icon: 'fas fa-vault',
  },
]

function fmt(n: number): string {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(2) + 'B'
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(0) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K'
  return n.toString()
}

function buildMonthlyTable(cat: typeof CATEGORIES[0]): string {
  const rows: string[] = []
  let cumulative = cat.tge
  for (let m = 0; m <= 60; m++) {
    let unlock = 0
    let status = ''
    if (m === 0) {
      unlock = cat.tge
      status = cat.tge > 0 ? 'TGE' : 'Pre-TGE'
    } else if (m < cat.cliff) {
      unlock = 0
      status = 'Cliff'
    } else if (m === cat.cliff && cat.cliff > 0) {
      unlock = 0
      status = 'Cliff End'
    } else {
      const vestStart = cat.cliff > 0 ? cat.cliff : 0
      const monthlyVest = (cat.total - cat.tge) / cat.vestMonths
      if (m >= vestStart + 1 && m <= vestStart + cat.vestMonths) {
        unlock = monthlyVest
        status = 'Vesting'
      } else if (m > vestStart + cat.vestMonths) {
        unlock = 0
        status = 'Complete'
      }
    }
    cumulative += unlock
    const pctDone = ((cumulative / cat.total) * 100).toFixed(1)
    const statusColor = status === 'TGE' ? '#31F2C3' : status === 'Vesting' ? '#6B8FFF' : status === 'Complete' ? '#31F2C3' : status === 'Cliff' || status === 'Cliff End' ? '#FFB400' : '#5A6278'

    rows.push(`
    <tr style="border-bottom:1px solid rgba(255,255,255,0.04);transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.03)'" onmouseout="this.style.background='transparent'">
      <td style="padding:10px 14px;font-size:13px;color:var(--text-muted);font-weight:500;">M${m}</td>
      <td style="padding:10px 14px;font-size:13px;color:#fff;font-weight:600;">${unlock > 0 ? fmt(unlock) : '—'}</td>
      <td style="padding:10px 14px;font-size:13px;color:${cat.color};font-weight:700;">${fmt(cumulative)}</td>
      <td style="padding:10px 14px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="flex:1;max-width:80px;height:4px;background:rgba(255,255,255,0.07);border-radius:2px;overflow:hidden;">
            <div style="height:100%;width:${pctDone}%;background:${cat.color};border-radius:2px;"></div>
          </div>
          <span style="font-size:11px;color:var(--text-muted);min-width:35px;">${pctDone}%</span>
        </div>
      </td>
      <td style="padding:10px 14px;"><span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:5px;background:${statusColor}18;color:${statusColor};">${status}</span></td>
    </tr>`)
  }
  return rows.join('')
}

export function vestingPage(): string {
  const totalSupply = 10_000_000_000
  const tgeTotal = CATEGORIES.reduce((s, c) => s + c.tge, 0)

  const content = `
  <section style="min-height:100vh;padding:100px 0 60px;position:relative;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.25;"></div>
    <div style="position:absolute;top:10%;left:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(0,59,255,0.1) 0%,transparent 70%);border-radius:50%;filter:blur(80px);animation:pulse-glow 10s ease-in-out infinite;pointer-events:none;"></div>
    <div style="position:absolute;bottom:15%;right:5%;width:400px;height:400px;background:radial-gradient(circle,rgba(49,242,195,0.08) 0%,transparent 70%);border-radius:50%;filter:blur(80px);animation:pulse-glow 12s ease-in-out infinite 3s;pointer-events:none;"></div>

    <div class="section-inner" style="position:relative;z-index:1;">

      <!-- Page Header -->
      <div style="margin-bottom:48px;" class="observe">
        <div class="section-label"><i class="fas fa-clock"></i>&nbsp; TOKENOMICS</div>
        <h1 class="section-title">ALINK <span class="gradient-text">Vesting</span> Schedule</h1>
        <p class="section-subtitle">Full 60-month unlock transparency for every allocation category. Token: <strong style="color:var(--mint);">ALINK</strong> · Network: <strong style="color:#F0B90B;">BNB Chain</strong></p>
        <div style="display:flex;align-items:center;gap:10px;margin-top:16px;flex-wrap:wrap;">
          <a href="${BSCSCAN}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:7px;background:rgba(240,185,11,0.08);border:1px solid rgba(240,185,11,0.2);border-radius:10px;padding:8px 14px;color:#F0B90B;text-decoration:none;font-size:12px;font-weight:700;transition:all 0.2s;"
            onmouseover="this.style.background='rgba(240,185,11,0.14)'" onmouseout="this.style.background='rgba(240,185,11,0.08)'">
            <i class="fas fa-external-link-alt"></i> View on BscScan
          </a>
          <code style="font-size:11px;color:var(--text-muted);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:7px 12px;font-family:monospace;">${CONTRACT}</code>
        </div>
      </div>

      <!-- Summary KPI Row -->
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:40px;" id="kpi-vest">
        ${[
          {label:'Total Supply',val:'10B',sub:'ALINK tokens',color:'var(--text)',icon:'fas fa-coins'},
          {label:'TGE Unlock',val:fmt(tgeTotal),sub:'Day 1 circulating',color:'#31F2C3',icon:'fas fa-rocket'},
          {label:'Vesting Period',val:'60mo',sub:'Full schedule',color:'#6B8FFF',icon:'fas fa-calendar-alt'},
          {label:'Categories',val:'5',sub:'Allocation pools',color:'#FFB400',icon:'fas fa-layer-group'},
          {label:'Network',val:'BNB Chain',sub:'BEP-20 standard',color:'#F0B90B',icon:'fab fa-ethereum'},
        ].map(k=>`
        <div class="glass-card" style="padding:20px 18px;text-align:center;" class="observe">
          <div style="width:36px;height:36px;background:${k.color}18;border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;">
            <i class="${k.icon}" style="color:${k.color};font-size:15px;"></i>
          </div>
          <div style="font-size:22px;font-weight:900;font-family:'Manrope',sans-serif;color:${k.color};margin-bottom:4px;">${k.val}</div>
          <div style="font-size:12px;font-weight:600;color:#fff;margin-bottom:2px;">${k.label}</div>
          <div style="font-size:11px;color:var(--text-muted);">${k.sub}</div>
        </div>`).join('')}
      </div>

      <!-- Charts Row -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:40px;" id="chart-row">
        <!-- Allocation Donut -->
        <div class="glass-card" style="padding:32px;">
          <h3 style="font-size:17px;font-weight:700;margin-bottom:24px;display:flex;align-items:center;gap:8px;"><i class="fas fa-chart-pie" style="color:var(--mint);font-size:15px;"></i> Token Allocation</h3>
          <div style="display:flex;align-items:center;gap:28px;flex-wrap:wrap;">
            <div style="position:relative;width:180px;height:180px;flex-shrink:0;">
              <canvas id="allocChart" width="180" height="180"></canvas>
              <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;">
                <div style="font-size:22px;font-weight:900;font-family:'Manrope',sans-serif;color:#fff;">10B</div>
                <div style="font-size:11px;color:var(--text-muted);">Total</div>
              </div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;gap:10px;min-width:150px;">
              ${CATEGORIES.map(c=>`
              <div style="display:flex;align-items:center;gap:9px;">
                <div style="width:10px;height:10px;border-radius:2px;background:${c.color};flex-shrink:0;"></div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:12px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.name}</div>
                </div>
                <div style="font-size:12px;font-weight:700;color:${c.color};flex-shrink:0;">${c.pct}%</div>
              </div>`).join('')}
            </div>
          </div>
        </div>

        <!-- Cumulative Unlock Line Chart -->
        <div class="glass-card" style="padding:32px;">
          <h3 style="font-size:17px;font-weight:700;margin-bottom:24px;display:flex;align-items:center;gap:8px;"><i class="fas fa-chart-line" style="color:var(--blue);font-size:15px;"></i> Cumulative Unlock (60 Months)</h3>
          <canvas id="unlockChart" height="180"></canvas>
        </div>
      </div>

      <!-- Category Cards with Tab Tables -->
      <div style="margin-bottom:40px;" class="observe">
        <h2 style="font-size:24px;font-weight:800;font-family:'Manrope',sans-serif;margin-bottom:20px;">Allocation <span class="gradient-text">Details</span></h2>

        <!-- Category Tabs -->
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;" id="cat-tabs">
          ${CATEGORIES.map((c, i)=>`
          <button onclick="showCategory('${c.id}')" id="tab-${c.id}" style="display:flex;align-items:center;gap:7px;padding:9px 16px;border-radius:10px;border:1px solid ${i===0?c.color:'rgba(255,255,255,0.1)'};background:${i===0?c.color+'18':'transparent'};color:${i===0?c.color:'var(--text-muted)'};font-size:13px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;transition:all 0.2s;">
            <i class="${c.icon}" style="font-size:11px;"></i> ${c.name}
          </button>`).join('')}
        </div>

        <!-- Category Panels -->
        ${CATEGORIES.map((c, i)=>`
        <div id="panel-${c.id}" style="${i!==0?'display:none;':''}">
          <div style="display:grid;grid-template-columns:2fr 1fr;gap:24px;margin-bottom:24px;" class="cat-info-grid">

            <!-- Info Card -->
            <div class="glass-card" style="padding:28px;border-left:3px solid ${c.color};">
              <div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
                <div style="width:52px;height:52px;background:${c.color}18;border:1px solid ${c.color}30;border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <i class="${c.icon}" style="font-size:22px;color:${c.color};"></i>
                </div>
                <div style="flex:1;">
                  <h3 style="font-size:20px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;margin-bottom:5px;">${c.name}</h3>
                  <p style="font-size:13px;color:var(--text-muted);line-height:1.65;">${c.description}</p>
                </div>
              </div>
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">
                ${[
                  {l:'Total Allocation',v:fmt(c.total),sub:c.pct+'% of supply',col:c.color},
                  {l:'TGE Release',v:c.tge>0?fmt(c.tge):'None',sub:c.tge>0?'At launch':'0% at TGE',col:c.tge>0?'#31F2C3':'var(--text-muted)'},
                  {l:'Cliff Period',v:c.cliff>0?c.cliff+'mo':'None',sub:c.cliff>0?'Lock before vesting':'Immediate start',col:c.cliff>0?'#FFB400':'var(--text-muted)'},
                  {l:'Vesting Duration',v:c.vestMonths+'mo',sub:'Linear monthly',col:'#6B8FFF'},
                ].map(s=>`
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px;text-align:center;">
                  <div style="font-size:18px;font-weight:800;font-family:'Manrope',sans-serif;color:${s.col};margin-bottom:4px;">${s.v}</div>
                  <div style="font-size:11px;font-weight:600;color:#fff;margin-bottom:2px;">${s.l}</div>
                  <div style="font-size:10px;color:var(--text-muted);">${s.sub}</div>
                </div>`).join('')}
              </div>
            </div>

            <!-- Monthly Unlock Chart for this category -->
            <div class="glass-card" style="padding:24px;">
              <h4 style="font-size:14px;font-weight:700;margin-bottom:14px;color:${c.color};display:flex;align-items:center;gap:6px;"><i class="fas fa-chart-bar" style="font-size:12px;"></i> Monthly Releases</h4>
              <canvas id="cat-chart-${c.id}" height="160"></canvas>
            </div>
          </div>

          <!-- Detailed Monthly Table -->
          <div class="glass-card" style="padding:0;overflow:hidden;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <h4 style="font-size:15px;font-weight:700;display:flex;align-items:center;gap:8px;"><i class="fas fa-table" style="color:${c.color};font-size:13px;"></i> Month-by-Month Unlock Table</h4>
              <span class="badge" style="background:${c.color}15;color:${c.color};border:1px solid ${c.color}30;">60 Months</span>
            </div>
            <div style="overflow-x:auto;max-height:380px;overflow-y:auto;">
              <table style="width:100%;border-collapse:collapse;">
                <thead style="position:sticky;top:0;z-index:1;">
                  <tr style="background:rgba(13,15,20,0.95);">
                    <th style="padding:12px 14px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:left;">Month</th>
                    <th style="padding:12px 14px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:left;">Unlock</th>
                    <th style="padding:12px 14px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:left;">Cumulative</th>
                    <th style="padding:12px 14px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:left;">Progress</th>
                    <th style="padding:12px 14px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:left;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${buildMonthlyTable(c)}
                </tbody>
              </table>
            </div>
          </div>
        </div>`).join('')}
      </div>

      <!-- All Categories Combined Table (Summary) -->
      <div class="glass-card observe" style="padding:0;overflow:hidden;margin-bottom:40px;">
        <div style="padding:24px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
          <h2 style="font-size:20px;font-weight:800;font-family:'Manrope',sans-serif;display:flex;align-items:center;gap:8px;"><i class="fas fa-list-alt" style="color:var(--mint);font-size:16px;"></i> Summary — All Allocations</h2>
          <a href="${BSCSCAN}" target="_blank" style="display:inline-flex;align-items:center;gap:7px;font-size:12px;color:#F0B90B;background:rgba(240,185,11,0.08);border:1px solid rgba(240,185,11,0.2);border-radius:8px;padding:7px 14px;text-decoration:none;transition:all 0.2s;"
            onmouseover="this.style.background='rgba(240,185,11,0.15)'" onmouseout="this.style.background='rgba(240,185,11,0.08)'">
            <i class="fas fa-external-link-alt"></i> BscScan
          </a>
        </div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;min-width:700px;">
            <thead>
              <tr style="background:rgba(255,255,255,0.03);">
                <th style="padding:14px 20px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:left;">Allocation</th>
                <th style="padding:14px 20px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:right;">Total Tokens</th>
                <th style="padding:14px 20px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:right;">%</th>
                <th style="padding:14px 20px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:right;">TGE</th>
                <th style="padding:14px 20px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:right;">Cliff</th>
                <th style="padding:14px 20px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:right;">Vesting</th>
                <th style="padding:14px 20px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;text-align:center;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${CATEGORIES.map(c=>`
              <tr style="border-bottom:1px solid rgba(255,255,255,0.05);transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.025)'" onmouseout="this.style.background='transparent'">
                <td style="padding:16px 20px;">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <div style="width:32px;height:32px;background:${c.color}18;border:1px solid ${c.color}30;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                      <i class="${c.icon}" style="font-size:13px;color:${c.color};"></i>
                    </div>
                    <div>
                      <div style="font-size:14px;font-weight:700;color:#fff;">${c.name}</div>
                    </div>
                  </div>
                </td>
                <td style="padding:16px 20px;font-size:14px;font-weight:700;color:${c.color};text-align:right;">${fmt(c.total)}</td>
                <td style="padding:16px 20px;text-align:right;">
                  <span class="badge" style="background:${c.color}15;color:${c.color};border:1px solid ${c.color}30;">${c.pct}%</span>
                </td>
                <td style="padding:16px 20px;font-size:13px;color:${c.tge>0?'#31F2C3':'var(--text-muted)'};text-align:right;font-weight:600;">${c.tge>0?fmt(c.tge):'—'}</td>
                <td style="padding:16px 20px;font-size:13px;color:${c.cliff>0?'#FFB400':'var(--text-muted)'};text-align:right;font-weight:600;">${c.cliff>0?c.cliff+' mo':'None'}</td>
                <td style="padding:16px 20px;font-size:13px;color:#6B8FFF;text-align:right;font-weight:600;">${c.vestMonths} mo</td>
                <td style="padding:16px 20px;text-align:center;"><span class="badge badge-gold">Scheduled</span></td>
              </tr>`).join('')}
              <tr style="background:rgba(0,59,255,0.05);border-top:2px solid rgba(0,59,255,0.2);">
                <td style="padding:16px 20px;font-size:14px;font-weight:800;color:#fff;" colspan="1"><strong>TOTAL</strong></td>
                <td style="padding:16px 20px;font-size:15px;font-weight:900;color:var(--mint);text-align:right;font-family:'Manrope',sans-serif;">${fmt(totalSupply)}</td>
                <td style="padding:16px 20px;font-size:14px;font-weight:800;color:#fff;text-align:right;">100%</td>
                <td style="padding:16px 20px;font-size:13px;color:'#31F2C3';text-align:right;font-weight:700;">${fmt(tgeTotal)}</td>
                <td colspan="3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="glass-card observe" style="padding:40px;text-align:center;background:linear-gradient(135deg,rgba(0,59,255,0.08),rgba(49,242,195,0.04));border:1px solid rgba(0,59,255,0.2);">
        <div class="section-label" style="margin:0 auto 16px;display:inline-flex;"><i class="fas fa-rocket"></i>&nbsp; TGE Launch</div>
        <h2 style="font-size:28px;font-weight:900;font-family:'Manrope',sans-serif;margin-bottom:12px;">ALINK TGE — <span class="gradient-text">Q4 2025</span></h2>
        <p style="font-size:15px;color:var(--text-muted);max-width:540px;margin:0 auto 28px;line-height:1.7;">Token generation event is scheduled for Q4 2025. Follow official channels for the exact date, DEX listing details, and early access opportunities.</p>
        <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
          <a href="https://x.com/AiLink_Official" target="_blank" class="btn-primary"><i class="fab fa-x-twitter"></i> Follow on X</a>
          <a href="https://t.me/AiLink_Official" target="_blank" class="btn-outline"><i class="fab fa-telegram"></i> Join Telegram</a>
          <a href="/whitepaper" class="btn-ghost"><i class="fas fa-file-alt"></i> Whitepaper</a>
        </div>
      </div>
    </div>
  </section>

  <style>
    @media(max-width:1023px){
      #kpi-vest{grid-template-columns:repeat(3,1fr)!important;}
      #chart-row{grid-template-columns:1fr!important;}
      .cat-info-grid{grid-template-columns:1fr!important;}
    }
    @media(max-width:640px){
      #kpi-vest{grid-template-columns:repeat(2,1fr)!important;}
    }
    @media(max-width:480px){
      #kpi-vest{grid-template-columns:1fr!important;}
    }
  </style>

  <script>
  function showCategory(id) {
    const cats = ${JSON.stringify(CATEGORIES.map(c=>c.id))};
    cats.forEach(cid => {
      const panel = document.getElementById('panel-'+cid);
      const tab = document.getElementById('tab-'+cid);
      const cat = ${JSON.stringify(CATEGORIES.map(c=>({id:c.id,color:c.color})))}.find(x=>x.id===cid);
      if(panel) panel.style.display = cid===id ? '' : 'none';
      if(tab && cat) {
        if(cid===id){
          tab.style.background = cat.color+'18';
          tab.style.color = cat.color;
          tab.style.borderColor = cat.color;
        } else {
          tab.style.background = 'transparent';
          tab.style.color = 'var(--text-muted)';
          tab.style.borderColor = 'rgba(255,255,255,0.1)';
        }
      }
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Allocation Donut Chart
    const allocCtx = document.getElementById('allocChart')?.getContext('2d');
    if(allocCtx) {
      new Chart(allocCtx, {
        type: 'doughnut',
        data: {
          labels: ${JSON.stringify(CATEGORIES.map(c=>c.name))},
          datasets: [{
            data: ${JSON.stringify(CATEGORIES.map(c=>c.pct))},
            backgroundColor: ${JSON.stringify(CATEGORIES.map(c=>c.color+'CC'))},
            borderColor: ${JSON.stringify(CATEGORIES.map(c=>c.color))},
            borderWidth: 1.5,
            hoverOffset: 6,
          }]
        },
        options: {
          cutout: '68%',
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ctx.label + ': ' + ctx.parsed + '%' } } }
        }
      });
    }

    // Cumulative Unlock Line Chart (total across all categories)
    const unlockCtx = document.getElementById('unlockChart')?.getContext('2d');
    if(unlockCtx) {
      const months = Array.from({length:61},(_,i)=>i);
      const cats = ${JSON.stringify(CATEGORIES)};
      
      const datasets = cats.map(cat => {
        const data = [];
        let cum = cat.tge;
        for(let m=0;m<=60;m++){
          if(m===0){ data.push(cum); continue; }
          if(m < cat.cliff){ data.push(cum); continue; }
          const vestStart = cat.cliff>0?cat.cliff:0;
          const monthlyVest = (cat.total-cat.tge)/cat.vestMonths;
          if(m>=vestStart+1 && m<=vestStart+cat.vestMonths){ cum+=monthlyVest; }
          data.push(cum);
        }
        return {
          label: cat.name,
          data: data.map(v=>v/1e9),
          borderColor: cat.color,
          backgroundColor: cat.color+'20',
          fill: false,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 4,
        };
      });

      new Chart(unlockCtx, {
        type: 'line',
        data: { labels: months.map(m=>'M'+m), datasets },
        options: {
          responsive: true, maintainAspectRatio: true,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ctx.dataset.label+': '+ctx.parsed.y.toFixed(2)+'B ALINK' } }
          },
          scales: {
            x: { ticks: { color: '#5A6278', maxTicksLimit: 10, font:{size:10} }, grid: { color: 'rgba(255,255,255,0.04)' } },
            y: { ticks: { color: '#5A6278', callback: v=>v+'B', font:{size:10} }, grid: { color: 'rgba(255,255,255,0.04)' } }
          }
        }
      });
    }

    // Per-category mini bar charts
    const cats = ${JSON.stringify(CATEGORIES)};
    cats.forEach(cat => {
      const ctx = document.getElementById('cat-chart-'+cat.id)?.getContext('2d');
      if(!ctx) return;
      
      // Build monthly unlock data (not cumulative)
      const data = [];
      for(let m=0;m<=60;m++){
        if(m===0){ data.push(cat.tge/1e6); continue; }
        if(m < cat.cliff){ data.push(0); continue; }
        const vestStart = cat.cliff>0?cat.cliff:0;
        const monthlyVest = (cat.total-cat.tge)/cat.vestMonths;
        if(m>=vestStart+1 && m<=vestStart+cat.vestMonths){ data.push(monthlyVest/1e6); }
        else { data.push(0); }
      }

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map((_,i)=>'M'+i),
          datasets: [{
            data,
            backgroundColor: cat.color+'55',
            borderColor: cat.color,
            borderWidth: 1,
            borderRadius: 2,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: true,
          plugins: { legend:{display:false}, tooltip:{ callbacks:{label:ctx=>ctx.parsed.y.toFixed(0)+'M ALINK'} } },
          scales: {
            x: { display: false },
            y: { ticks: { color:'#5A6278', callback:v=>v+'M', font:{size:9} }, grid:{color:'rgba(255,255,255,0.04)'} }
          }
        }
      });
    });
  });
  </script>
  `
  return layout('Vesting Schedule — AILINK | ALINK Token Unlock', content)
}

import { layout } from './layout'

const CONTRACT = '0x33c5502261c589a2EC4B1a6C4350aBF60ef47254'
const BSCSCAN  = `https://bscscan.com/token/${CONTRACT}`

export function mypagePage(): string {
  const content = `
  <section style="min-height:100vh;padding:100px 0 60px;position:relative;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.3;"></div>
    <div class="section-inner" style="position:relative;z-index:1;">

      <!-- Page Header -->
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:36px;">
        <div>
          <div class="section-label" style="margin-bottom:10px;"><i class="fas fa-user-circle"></i>&nbsp; My Dashboard</div>
          <h1 style="font-size:clamp(26px,3vw,38px);font-weight:900;font-family:'Manrope',sans-serif;">Welcome, <span class="gradient-text">AILINK User</span></h1>
          <p style="font-size:14px;color:var(--text-muted);margin-top:6px;">Manage your points, assets, vesting, and account settings</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
          <span class="badge badge-mint" style="padding:7px 14px;font-size:12px;"><span style="width:6px;height:6px;background:var(--mint);border-radius:50%;display:inline-block;animation:blink 2s infinite;margin-right:4px;"></span> BNB Chain</span>
          <a href="/login" class="btn-ghost" style="font-size:13px;padding:10px 18px;"><i class="fas fa-sign-out-alt"></i> Disconnect</a>
        </div>
      </div>

      <!-- Wallet Address Bar -->
      <div style="background:rgba(0,59,255,0.07);border:1px solid rgba(0,59,255,0.18);border-radius:14px;padding:16px 22px;margin-bottom:28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#003BFF,#31F2C3);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <i class="fas fa-wallet" style="color:#fff;font-size:14px;"></i>
          </div>
          <div>
            <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:3px;">Connected Wallet</div>
            <code id="wallet-addr" style="font-size:13px;color:#fff;font-family:monospace;">0x742d...F4e2</code>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button onclick="copyWallet()" style="display:flex;align-items:center;gap:5px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:7px 12px;color:var(--text-muted);font-size:12px;cursor:pointer;font-family:'Inter',sans-serif;transition:all 0.2s;"
            onmouseover="this.style.color='var(--mint)'" onmouseout="this.style.color='var(--text-muted)'">
            <i class="fas fa-copy"></i> Copy
          </button>
          <a href="${BSCSCAN}" target="_blank" style="display:flex;align-items:center;gap:5px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:7px 12px;color:var(--text-muted);font-size:12px;text-decoration:none;transition:all 0.2s;"
            onmouseover="this.style.color='var(--mint)'" onmouseout="this.style.color='var(--text-muted)'">
            <i class="fas fa-external-link-alt"></i> BscScan
          </a>
        </div>
      </div>

      <!-- Top KPI Cards -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:28px;" id="kpi-grid">
        ${[
          {icon:'fas fa-star',color:'#FFB400',label:'AILINK Points',val:'—',sub:'Earn by playing games',action:{text:'Earn Points',href:'/#how-it-works'}},
          {icon:'fas fa-coins',color:'#31F2C3',label:'ALINK Balance',val:'—',sub:'Available after TGE',action:{text:'View Vesting',href:'/vesting'}},
          {icon:'fas fa-cube',color:'#8B5CF6',label:'NFTs Owned',val:'0',sub:'Mint AI creations',action:{text:'Explore',href:'/#ecosystem'}},
          {icon:'fas fa-lock',color:'#003BFF',label:'Staked ALINK',val:'—',sub:'Staking opens Q4 2025',action:{text:'Learn More',href:'/whitepaper'}},
        ].map(k=>`
        <div class="glass-card card-glow" style="padding:24px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:2px;background:${k.color};opacity:0.6;"></div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
            <div style="width:42px;height:42px;background:${k.color}18;border:1px solid ${k.color}30;border-radius:12px;display:flex;align-items:center;justify-content:center;">
              <i class="${k.icon}" style="font-size:18px;color:${k.color};"></i>
            </div>
            <a href="${k.action.href}" style="font-size:11px;color:var(--mint);text-decoration:none;font-weight:600;display:flex;align-items:center;gap:4px;">${k.action.text} <i class="fas fa-arrow-right" style="font-size:9px;"></i></a>
          </div>
          <div style="font-size:28px;font-weight:900;font-family:'Manrope',sans-serif;margin-bottom:4px;">${k.val}</div>
          <div style="font-size:13px;font-weight:600;color:#fff;margin-bottom:3px;">${k.label}</div>
          <div style="font-size:11px;color:var(--text-muted);">${k.sub}</div>
        </div>`).join('')}
      </div>

      <!-- Main content grid -->
      <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px;margin-bottom:20px;" id="main-grid">

        <!-- Left Column -->
        <div style="display:flex;flex-direction:column;gap:20px;">

          <!-- Activity Feed -->
          <div class="glass-card" style="padding:28px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
              <h3 style="font-size:17px;font-weight:700;display:flex;align-items:center;gap:8px;"><i class="fas fa-history" style="color:var(--mint);font-size:14px;"></i> Recent Activity</h3>
              <span class="badge badge-blue">Coming Soon</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              ${[
                {icon:'fas fa-gamepad',color:'#31F2C3',title:'Daily Mission Completed',sub:'Micro-game reward earned',time:'Today · 09:14',val:'+50 pts',valColor:'#31F2C3'},
                {icon:'fas fa-magic',color:'#003BFF',title:'AI Image Generated',sub:'Neural Portrait v2',time:'Today · 08:32',val:'Used 30 pts',valColor:'#6B8FFF'},
                {icon:'fas fa-cube',color:'#8B5CF6',title:'NFT Minted',sub:'Neural Series #0001',time:'Yesterday',val:'— ALINK',valColor:'#A78BFA'},
                {icon:'fas fa-gift',color:'#FFB400',title:'Referral Reward',sub:'Friend joined via your link',time:'2 days ago',val:'+100 pts',valColor:'#FFB400'},
                {icon:'fas fa-star',color:'#FF6B6B',title:'Streak Bonus',sub:'7-day login streak',time:'3 days ago',val:'+200 pts',valColor:'#FF6B6B'},
              ].map(a=>`
              <div style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;">
                <div style="width:36px;height:36px;background:${a.color}15;border:1px solid ${a.color}30;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <i class="${a.icon}" style="font-size:14px;color:${a.color};"></i>
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:13px;font-weight:600;color:#fff;">${a.title}</div>
                  <div style="font-size:11px;color:var(--text-muted);margin-top:1px;">${a.sub}</div>
                </div>
                <div style="text-align:right;flex-shrink:0;">
                  <div style="font-size:13px;font-weight:700;color:${a.valColor};">${a.val}</div>
                  <div style="font-size:10px;color:var(--text-dim);margin-top:1px;">${a.time}</div>
                </div>
              </div>`).join('')}
            </div>
            <div style="text-align:center;margin-top:16px;">
              <button style="font-size:12px;color:var(--text-muted);background:none;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:8px 18px;cursor:pointer;transition:all 0.2s;font-family:'Inter',sans-serif;"
                onmouseover="this.style.color='var(--mint)';this.style.borderColor='rgba(49,242,195,0.3)'" onmouseout="this.style.color='var(--text-muted)';this.style.borderColor='rgba(255,255,255,0.08)'">
                View All Activity <i class="fas fa-arrow-right" style="font-size:10px;margin-left:4px;"></i>
              </button>
            </div>
          </div>

          <!-- Vesting Overview -->
          <div class="glass-card" style="padding:28px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
              <h3 style="font-size:17px;font-weight:700;display:flex;align-items:center;gap:8px;"><i class="fas fa-clock" style="color:var(--mint);font-size:14px;"></i> My Vesting Overview</h3>
              <a href="/vesting" style="font-size:12px;color:var(--mint);text-decoration:none;display:flex;align-items:center;gap:4px;">Full Schedule <i class="fas fa-arrow-right" style="font-size:10px;"></i></a>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px;">
              ${[
                {label:'Total Allocated',val:'—',sub:'Your ALINK allocation',col:'#003BFF'},
                {label:'Claimable Now',val:'—',sub:'Available to claim',col:'#31F2C3'},
                {label:'Still Vesting',val:'—',sub:'Locked until schedule',col:'#FFB400'},
              ].map(v=>`
              <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:16px;text-align:center;">
                <div style="font-size:20px;font-weight:800;font-family:'Manrope',sans-serif;color:${v.col};margin-bottom:5px;">${v.val}</div>
                <div style="font-size:12px;font-weight:600;color:#fff;margin-bottom:3px;">${v.label}</div>
                <div style="font-size:11px;color:var(--text-muted);">${v.sub}</div>
              </div>`).join('')}
            </div>
            <div style="background:rgba(255,180,0,0.06);border:1px solid rgba(255,180,0,0.15);border-radius:12px;padding:14px 16px;display:flex;align-items:flex-start;gap:10px;">
              <i class="fas fa-info-circle" style="color:#FFB400;margin-top:1px;flex-shrink:0;"></i>
              <p style="font-size:12px;color:var(--text-muted);line-height:1.65;">Vesting schedules are activated at TGE (Q4 2025). Connect your wallet to see your personalized allocation after the token launch. <a href="/vesting" style="color:var(--mint);">View full 60-month schedule →</a></p>
            </div>
          </div>

          <!-- NFT Gallery -->
          <div class="glass-card" style="padding:28px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
              <h3 style="font-size:17px;font-weight:700;display:flex;align-items:center;gap:8px;"><i class="fas fa-images" style="color:var(--mint);font-size:14px;"></i> My NFT Collection</h3>
              <span class="badge badge-blue">Beta — Q4 2025</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
              ${[...Array(3)].map((_,i)=>`
              <div style="background:rgba(255,255,255,0.03);border:1px dashed rgba(255,255,255,0.1);border-radius:14px;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;cursor:pointer;transition:all 0.25s;"
                onmouseover="this.style.borderColor='rgba(49,242,195,0.3)';this.style.background='rgba(49,242,195,0.04)'"
                onmouseout="this.style.borderColor='rgba(255,255,255,0.1)';this.style.background='rgba(255,255,255,0.03)'">
                <i class="fas fa-plus" style="font-size:20px;color:var(--text-dim);"></i>
                <span style="font-size:11px;color:var(--text-dim);">Mint NFT</span>
              </div>`).join('')}
            </div>
            <p style="font-size:12px;color:var(--text-muted);text-align:center;margin-top:14px;">AI-generated NFT minting launches with TGE in Q4 2025. Start generating AI media now!</p>
          </div>
        </div>

        <!-- Right Column -->
        <div style="display:flex;flex-direction:column;gap:20px;">

          <!-- Profile Card -->
          <div class="glass-card" style="padding:24px;text-align:center;">
            <div style="width:72px;height:72px;background:linear-gradient(135deg,#003BFF,#31F2C3);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;">
              <i class="fas fa-user" style="font-size:28px;color:#fff;"></i>
            </div>
            <div style="font-size:16px;font-weight:700;color:#fff;margin-bottom:4px;">AILINK User</div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px;font-family:monospace;">0x742d...F4e2</div>
            <div style="display:flex;justify-content:center;gap:10px;margin-bottom:16px;">
              <span class="badge badge-mint">Early Supporter</span>
              <span class="badge badge-blue">BNB Chain</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div style="background:rgba(255,255,255,0.03);border-radius:10px;padding:12px;">
                <div style="font-size:16px;font-weight:800;color:var(--mint);">—</div>
                <div style="font-size:11px;color:var(--text-muted);">Total Points</div>
              </div>
              <div style="background:rgba(255,255,255,0.03);border-radius:10px;padding:12px;">
                <div style="font-size:16px;font-weight:800;color:#6B8FFF;">—</div>
                <div style="font-size:11px;color:var(--text-muted);">Day Streak</div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="glass-card" style="padding:24px;">
            <h3 style="font-size:15px;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:7px;"><i class="fas fa-bolt" style="color:#FFB400;font-size:13px;"></i> Quick Actions</h3>
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${[
                {icon:'fas fa-gamepad',color:'#31F2C3',label:'Play Daily Games',href:'/#how-it-works'},
                {icon:'fas fa-magic',color:'#003BFF',label:'Generate AI Media',href:'/#ecosystem'},
                {icon:'fas fa-cube',color:'#8B5CF6',label:'Mint NFT',href:'/#ecosystem'},
                {icon:'fas fa-clock',color:'#FFB400',label:'Vesting Schedule',href:'/vesting'},
                {icon:'fas fa-file-alt',color:'#6B8FFF',label:'Read Whitepaper',href:'/whitepaper'},
              ].map(a=>`
              <a href="${a.href}" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;text-decoration:none;transition:all 0.2s;"
                onmouseover="this.style.background='rgba(255,255,255,0.07)';this.style.borderColor='rgba(49,242,195,0.2)'"
                onmouseout="this.style.background='rgba(255,255,255,0.03)';this.style.borderColor='rgba(255,255,255,0.07)'">
                <div style="width:30px;height:30px;background:${a.color}18;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <i class="${a.icon}" style="font-size:12px;color:${a.color};"></i>
                </div>
                <span style="font-size:13px;color:var(--text-muted);flex:1;">${a.label}</span>
                <i class="fas fa-chevron-right" style="color:var(--text-dim);font-size:10px;"></i>
              </a>`).join('')}
            </div>
          </div>

          <!-- Referral -->
          <div class="glass-card" style="padding:24px;">
            <h3 style="font-size:15px;font-weight:700;margin-bottom:5px;display:flex;align-items:center;gap:7px;"><i class="fas fa-user-plus" style="color:var(--mint);font-size:13px;"></i> Referral Program</h3>
            <p style="font-size:12px;color:var(--text-muted);line-height:1.6;margin-bottom:14px;">Earn <strong style="color:var(--mint);">+100 AILINK Points</strong> for every friend you invite.</p>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <code id="ref-link" style="font-size:11px;color:var(--text-muted);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">ailink.io/ref/0x742d...F4e2</code>
              <button onclick="copyRef()" style="background:none;border:none;cursor:pointer;color:var(--mint);font-size:12px;white-space:nowrap;font-family:'Inter',sans-serif;font-weight:600;">Copy</button>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:center;">
              <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px;">
                <div style="font-size:18px;font-weight:800;color:var(--mint);">0</div>
                <div style="font-size:11px;color:var(--text-muted);">Referrals</div>
              </div>
              <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px;">
                <div style="font-size:18px;font-weight:800;color:#FFB400;">0</div>
                <div style="font-size:11px;color:var(--text-muted);">Bonus pts</div>
              </div>
            </div>
          </div>

          <!-- Contract Info -->
          <div class="glass-card" style="padding:20px;">
            <h3 style="font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:12px;display:flex;align-items:center;gap:6px;"><i class="fas fa-cube"></i> Token Contract</h3>
            <a href="${BSCSCAN}" target="_blank" style="display:flex;align-items:center;gap:8px;background:rgba(0,59,255,0.08);border:1px solid rgba(0,59,255,0.2);border-radius:10px;padding:10px 12px;text-decoration:none;transition:all 0.2s;"
              onmouseover="this.style.background='rgba(0,59,255,0.14)'" onmouseout="this.style.background='rgba(0,59,255,0.08)'">
              <i class="fas fa-external-link-alt" style="color:#6B8FFF;font-size:11px;flex-shrink:0;"></i>
              <code style="font-size:11px;color:#fff;font-family:monospace;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${CONTRACT}</code>
            </a>
            <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;">
              <span style="font-size:11px;padding:3px 8px;background:rgba(240,185,11,0.1);border-radius:5px;color:#F0B90B;">BNB Chain</span>
              <span style="font-size:11px;padding:3px 8px;background:rgba(49,242,195,0.08);border-radius:5px;color:var(--mint);">BEP-20</span>
              <span style="font-size:11px;padding:3px 8px;background:rgba(0,59,255,0.1);border-radius:5px;color:#6B8FFF;">Verified</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Staking Section -->
      <div class="glass-card" style="padding:32px;background:linear-gradient(135deg,rgba(0,59,255,0.07),rgba(49,242,195,0.03));border:1px solid rgba(0,59,255,0.2);">
        <div style="display:grid;grid-template-columns:1fr auto;gap:28px;align-items:center;flex-wrap:wrap;">
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <div style="width:40px;height:40px;background:rgba(0,59,255,0.15);border-radius:11px;display:flex;align-items:center;justify-content:center;">
                <i class="fas fa-lock" style="color:#6B8FFF;font-size:16px;"></i>
              </div>
              <div>
                <h3 style="font-size:18px;font-weight:800;font-family:'Manrope',sans-serif;">ALINK Staking</h3>
                <span class="badge badge-gold" style="margin-top:4px;">Launching Q4 2025</span>
              </div>
            </div>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.7;max-width:560px;">Stake your ALINK tokens to unlock priority AI generation queues, premium features, higher point multipliers, and earn staking rewards. DAO governance participation also requires staked tokens.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;min-width:200px;">
            <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:16px;text-align:center;">
              <div style="font-size:22px;font-weight:800;color:var(--mint);">—</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:3px;">Est. APY</div>
            </div>
            <a href="/whitepaper" class="btn-primary" style="text-align:center;justify-content:center;">
              <i class="fas fa-file-alt"></i> Read Whitepaper
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <style>
    @media(max-width:1023px){#kpi-grid{grid-template-columns:repeat(2,1fr)!important;} #main-grid{grid-template-columns:1fr!important;}}
    @media(max-width:599px){#kpi-grid{grid-template-columns:1fr!important;}}
  </style>

  <script>
    function copyWallet(){
      navigator.clipboard.writeText('0x742d35Cc6634C0532925a3b844Bc454e4438F4e2');
      showToast('Wallet address copied!');
    }
    function copyRef(){
      navigator.clipboard.writeText('https://ailink.io/ref/0x742d');
      showToast('Referral link copied!');
    }
    function showToast(msg){
      const d=document.createElement('div');
      d.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#161920;border:1px solid rgba(49,242,195,0.2);border-radius:12px;padding:12px 20px;font-size:13px;color:#fff;z-index:9999;display:flex;align-items:center;gap:8px;white-space:nowrap;transition:opacity 0.4s;';
      d.innerHTML='<i class="fas fa-check-circle" style="color:var(--mint);"></i> '+msg;
      document.body.appendChild(d);
      setTimeout(()=>{d.style.opacity='0';setTimeout(()=>d.remove(),400);},2400);
    }
  </script>
  `
  return layout('My Dashboard — AILINK', content)
}

import { layout } from './layout'

const LAST_UPDATED = 'March 1, 2025'
const CONTRACT = '0x33c5502261c589a2EC4B1a6C4350aBF60ef47254'

// ─── Shared Styles & Nav ─────────────────────────────────────────────────────
function legalWrapper(activePage: string, title: string, content: string): string {
  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: 'fas fa-shield-alt', href: '/legal/privacy' },
    { id: 'terms', label: 'Terms of Service', icon: 'fas fa-file-contract', href: '/legal/terms' },
    { id: 'disclaimer', label: 'Legal Disclaimer', icon: 'fas fa-balance-scale', href: '/legal/disclaimer' },
  ]

  return `
  <section style="min-height:100vh;padding:100px 0 80px;position:relative;">
    <div class="grid-bg" style="position:absolute;inset:0;opacity:0.2;"></div>
    <div class="section-inner" style="position:relative;z-index:1;">

      <!-- Header -->
      <div style="margin-bottom:40px;text-align:center;" class="observe">
        <div class="section-label" style="margin:0 auto 14px;display:inline-flex;"><i class="fas fa-gavel"></i>&nbsp; Legal Documents</div>
        <h1 class="section-title" style="text-align:center;">${title}</h1>
        <p style="font-size:14px;color:var(--text-muted);margin-top:8px;">Last Updated: <strong style="color:#fff;">${LAST_UPDATED}</strong></p>
      </div>

      <!-- Tab Navigation -->
      <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-bottom:40px;">
        ${tabs.map(t=>`
        <a href="${t.href}" style="display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:12px;border:1px solid ${t.id===activePage?'rgba(49,242,195,0.35)':'rgba(255,255,255,0.1)'};background:${t.id===activePage?'rgba(49,242,195,0.08)':'transparent'};color:${t.id===activePage?'var(--mint)':'var(--text-muted)'};font-size:13px;font-weight:700;text-decoration:none;transition:all 0.2s;"
          onmouseover="if('${t.id}'!=='${activePage}'){this.style.color='var(--text)';this.style.background='rgba(255,255,255,0.05)';}" onmouseout="if('${t.id}'!=='${activePage}'){this.style.color='var(--text-muted)';this.style.background='transparent';}">
          <i class="${t.icon}" style="font-size:12px;"></i> ${t.label}
        </a>`).join('')}
      </div>

      <!-- Content Card -->
      <div class="glass-card observe" style="padding:clamp(24px,4vw,56px);max-width:860px;margin:0 auto;line-height:1.8;">
        <style>
          .legal-h2 { font-size:20px;font-weight:800;font-family:'Manrope',sans-serif;color:#fff;margin:36px 0 12px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.07);display:flex;align-items:center;gap:8px; }
          .legal-h2:first-child { margin-top:0; }
          .legal-p { font-size:14px;color:var(--text-muted);line-height:1.85;margin-bottom:14px; }
          .legal-ul { margin:10px 0 16px 0;padding-left:0;list-style:none;display:flex;flex-direction:column;gap:7px; }
          .legal-ul li { font-size:14px;color:var(--text-muted);padding-left:20px;position:relative;line-height:1.7; }
          .legal-ul li::before { content:'';position:absolute;left:0;top:9px;width:6px;height:6px;border-radius:50%;background:var(--mint);opacity:0.6; }
          .legal-box { background:rgba(255,180,0,0.06);border:1px solid rgba(255,180,0,0.18);border-radius:12px;padding:16px 18px;margin:16px 0;display:flex;gap:12px;align-items:flex-start; }
          .legal-info { background:rgba(0,59,255,0.07);border:1px solid rgba(0,59,255,0.18);border-radius:12px;padding:16px 18px;margin:16px 0;display:flex;gap:12px;align-items:flex-start; }
          .legal-highlight { color:#fff;font-weight:600; }
          .legal-mint { color:var(--mint); }
          .legal-link { color:var(--mint);text-decoration:none;font-weight:600; }
          .legal-link:hover { text-decoration:underline; }
          .legal-contract { font-family:monospace;font-size:12px;color:var(--mint);word-break:break-all;background:rgba(49,242,195,0.06);padding:8px 12px;border-radius:8px;border:1px solid rgba(49,242,195,0.15);display:block;margin:8px 0; }
        </style>
        ${content}
      </div>

      <!-- Navigation Links -->
      <div style="display:flex;justify-content:center;gap:12px;margin-top:32px;flex-wrap:wrap;">
        <a href="/" class="btn-ghost"><i class="fas fa-home"></i> Back to Home</a>
        <a href="/whitepaper" class="btn-ghost"><i class="fas fa-file-alt"></i> Whitepaper</a>
        <a href="https://t.me/AiLink_Official" target="_blank" class="btn-ghost"><i class="fab fa-telegram"></i> Contact Us</a>
      </div>
    </div>
  </section>
  `
}

// ─── Privacy Policy ──────────────────────────────────────────────────────────
export function privacyPage(): string {
  const content = `
    <h2 class="legal-h2"><i class="fas fa-shield-alt" style="color:var(--mint);font-size:16px;"></i> Privacy Policy</h2>

    <div class="legal-box">
      <i class="fas fa-exclamation-triangle" style="color:#FFB400;flex-shrink:0;margin-top:2px;"></i>
      <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin:0;">This Privacy Policy applies to the AILINK platform and its associated services. By using our services, you consent to the practices described herein.</p>
    </div>

    <h2 class="legal-h2"><i class="fas fa-info-circle" style="color:#6B8FFF;font-size:16px;"></i> 1. Information We Collect</h2>
    <p class="legal-p">AILINK collects certain information to provide and improve our platform services. This may include:</p>
    <ul class="legal-ul">
      <li><span class="legal-highlight">Wallet Addresses:</span> Public blockchain addresses when you connect your Web3 wallet. These are publicly visible on-chain and are not considered private data.</li>
      <li><span class="legal-highlight">Usage Data:</span> Information about how you interact with the AILINK platform, including pages visited, features used, and session duration.</li>
      <li><span class="legal-highlight">Device Information:</span> Browser type, operating system, IP address, and device identifiers for security and analytics purposes.</li>
      <li><span class="legal-highlight">Transaction Data:</span> On-chain transaction records associated with ALINK token usage, which are publicly recorded on BNB Chain.</li>
      <li><span class="legal-highlight">Communications:</span> If you contact us via email or social media, we may retain those communications to respond to inquiries.</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-cogs" style="color:#6B8FFF;font-size:16px;"></i> 2. How We Use Your Information</h2>
    <p class="legal-p">We use collected information for the following purposes:</p>
    <ul class="legal-ul">
      <li>To operate, maintain, and improve the AILINK platform and services</li>
      <li>To distribute ALINK token rewards and process point allocations</li>
      <li>To detect, prevent, and address technical issues or fraudulent activities</li>
      <li>To send platform updates, security alerts, and administrative messages</li>
      <li>To analyze usage trends and improve user experience</li>
      <li>To comply with legal obligations and enforce our Terms of Service</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-share-alt" style="color:#6B8FFF;font-size:16px;"></i> 3. Information Sharing & Disclosure</h2>
    <p class="legal-p">AILINK does <span class="legal-highlight">not sell your personal information</span> to third parties. We may share information in the following limited circumstances:</p>
    <ul class="legal-ul">
      <li><span class="legal-highlight">Service Providers:</span> Trusted third-party providers who assist in platform operations, subject to confidentiality agreements.</li>
      <li><span class="legal-highlight">Legal Requirements:</span> When required by law, court order, or governmental authority.</li>
      <li><span class="legal-highlight">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets, with appropriate notice.</li>
      <li><span class="legal-highlight">Blockchain Data:</span> All on-chain transactions are publicly visible on BNB Chain and cannot be made private.</li>
    </ul>

    <div class="legal-info">
      <i class="fas fa-info-circle" style="color:#6B8FFF;flex-shrink:0;margin-top:2px;"></i>
      <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin:0;"><span class="legal-highlight">Blockchain Transparency Notice:</span> By nature of blockchain technology, all ALINK token transactions on BNB Chain (Contract: <span class="legal-mint">${CONTRACT}</span>) are permanently recorded and publicly accessible.</p>
    </div>

    <h2 class="legal-h2"><i class="fas fa-cookie-bite" style="color:#6B8FFF;font-size:16px;"></i> 4. Cookies & Tracking Technologies</h2>
    <p class="legal-p">We use cookies and similar tracking technologies to enhance your experience. This includes:</p>
    <ul class="legal-ul">
      <li><span class="legal-highlight">Essential Cookies:</span> Required for platform functionality and security</li>
      <li><span class="legal-highlight">Analytics Cookies:</span> Help us understand how users interact with our platform</li>
      <li><span class="legal-highlight">Preference Cookies:</span> Remember your settings and preferences</li>
    </ul>
    <p class="legal-p">You can control cookie preferences through your browser settings, though disabling certain cookies may affect platform functionality.</p>

    <h2 class="legal-h2"><i class="fas fa-lock" style="color:#6B8FFF;font-size:16px;"></i> 5. Data Security</h2>
    <p class="legal-p">We implement industry-standard security measures to protect your information, including:</p>
    <ul class="legal-ul">
      <li>SSL/TLS encryption for data transmission</li>
      <li>Regular security audits (smart contracts audited by <span class="legal-highlight">CertiK</span>)</li>
      <li>Access controls and authentication mechanisms</li>
      <li>Monitoring for unauthorized access attempts</li>
    </ul>
    <p class="legal-p">However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of information.</p>

    <h2 class="legal-h2"><i class="fas fa-user-shield" style="color:#6B8FFF;font-size:16px;"></i> 6. Your Rights</h2>
    <p class="legal-p">Depending on your jurisdiction, you may have the following rights:</p>
    <ul class="legal-ul">
      <li><span class="legal-highlight">Access:</span> Request a copy of personal data we hold about you</li>
      <li><span class="legal-highlight">Correction:</span> Request correction of inaccurate personal data</li>
      <li><span class="legal-highlight">Deletion:</span> Request deletion of your personal data (subject to legal retention requirements)</li>
      <li><span class="legal-highlight">Objection:</span> Object to processing of your personal data in certain circumstances</li>
      <li><span class="legal-highlight">Portability:</span> Request transfer of your data to another service provider</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-globe" style="color:#6B8FFF;font-size:16px;"></i> 7. International Data Transfers</h2>
    <p class="legal-p">AILINK operates globally and may transfer your information to servers located outside your country of residence. By using our services, you consent to such transfers. We ensure appropriate safeguards are in place for cross-border data transfers.</p>

    <h2 class="legal-h2"><i class="fas fa-child" style="color:#6B8FFF;font-size:16px;"></i> 8. Children's Privacy</h2>
    <p class="legal-p">The AILINK platform is not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal information, please contact us immediately.</p>

    <h2 class="legal-h2"><i class="fas fa-edit" style="color:#6B8FFF;font-size:16px;"></i> 9. Changes to This Policy</h2>
    <p class="legal-p">We may update this Privacy Policy periodically. We will notify users of material changes through the platform or official social channels. Continued use of the platform after changes constitutes acceptance of the updated policy.</p>

    <h2 class="legal-h2"><i class="fas fa-envelope" style="color:#6B8FFF;font-size:16px;"></i> 10. Contact Us</h2>
    <p class="legal-p">For privacy-related inquiries, please contact us through our official channels:</p>
    <ul class="legal-ul">
      <li>Telegram: <a href="https://t.me/AiLink_Official" target="_blank" class="legal-link">t.me/AiLink_Official</a></li>
      <li>X (Twitter): <a href="https://x.com/AiLink_Official" target="_blank" class="legal-link">@AiLink_Official</a></li>
    </ul>
  `
  return layout('Privacy Policy — AILINK', legalWrapper('privacy', 'Privacy Policy', content))
}

// ─── Terms of Service ────────────────────────────────────────────────────────
export function termsPage(): string {
  const content = `
    <h2 class="legal-h2"><i class="fas fa-file-contract" style="color:var(--mint);font-size:16px;"></i> Terms of Service</h2>

    <div class="legal-box">
      <i class="fas fa-exclamation-triangle" style="color:#FFB400;flex-shrink:0;margin-top:2px;"></i>
      <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin:0;"><span style="color:#FFB400;font-weight:700;">Please read these terms carefully.</span> By accessing or using the AILINK platform, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.</p>
    </div>

    <h2 class="legal-h2"><i class="fas fa-check-circle" style="color:#6B8FFF;font-size:16px;"></i> 1. Acceptance of Terms</h2>
    <p class="legal-p">By accessing or using the AILINK platform, website, smart contracts, or related services ("Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations. AILINK reserves the right to modify these terms at any time.</p>

    <h2 class="legal-h2"><i class="fas fa-user-check" style="color:#6B8FFF;font-size:16px;"></i> 2. Eligibility</h2>
    <p class="legal-p">To use AILINK services, you must:</p>
    <ul class="legal-ul">
      <li>Be at least 18 years of age or the legal age of majority in your jurisdiction</li>
      <li>Have the legal capacity to enter into binding agreements</li>
      <li>Not be located in a jurisdiction where use of cryptocurrency services is prohibited</li>
      <li>Not be subject to any sanctions lists (OFAC, EU, UN, or equivalent)</li>
      <li>Agree to comply with all applicable laws in your jurisdiction</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-concierge-bell" style="color:#6B8FFF;font-size:16px;"></i> 3. Platform Services</h2>
    <p class="legal-p">AILINK provides a Web3 platform combining AI generation tools, blockchain-based rewards, and digital asset management. Our services include:</p>
    <ul class="legal-ul">
      <li><span class="legal-highlight">AI Content Generation:</span> AI-powered image, video, and creative content tools</li>
      <li><span class="legal-highlight">Micro-Games:</span> Skill-based games with AILINK Point rewards</li>
      <li><span class="legal-highlight">NFT Minting:</span> Creation and ownership of AI-generated digital assets on BNB Chain</li>
      <li><span class="legal-highlight">ALINK Token:</span> Utility token for platform access and rewards</li>
      <li><span class="legal-highlight">Staking:</span> Token staking for platform benefits (launching Q4 2025)</li>
    </ul>

    <div class="legal-info">
      <i class="fas fa-info-circle" style="color:#6B8FFF;flex-shrink:0;margin-top:2px;"></i>
      <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin:0;"><span class="legal-highlight">ALINK Token Contract (BNB Chain):</span><code class="legal-contract">${CONTRACT}</code>Verify all transactions on <a href="https://bscscan.com/token/${CONTRACT}" target="_blank" class="legal-link">BscScan</a> before interacting with smart contracts.</p>
    </div>

    <h2 class="legal-h2"><i class="fas fa-coins" style="color:#6B8FFF;font-size:16px;"></i> 4. ALINK Token & Tokenomics</h2>
    <p class="legal-p">The ALINK token is a <span class="legal-highlight">utility token</span> designed for use within the AILINK ecosystem:</p>
    <ul class="legal-ul">
      <li>Total supply: 20,000,000,000 ALINK (20 Billion)</li>
      <li>Network: BNB Chain (BEP-20 standard)</li>
      <li>TGE (Token Generation Event) scheduled for Q4 2025</li>
      <li>Vesting schedules apply to all allocation categories — see full schedule at <a href="/vesting" class="legal-link">/vesting</a></li>
    </ul>
    <p class="legal-p"><span class="legal-highlight">ALINK is not an investment product.</span> It does not represent equity, ownership, profit-sharing rights, or any financial instrument. Holding ALINK does not guarantee any financial return.</p>

    <h2 class="legal-h2"><i class="fas fa-paint-brush" style="color:#6B8FFF;font-size:16px;"></i> 5. User-Generated Content & AI Tools</h2>
    <p class="legal-p">When using AILINK's AI generation tools, you agree that:</p>
    <ul class="legal-ul">
      <li>You will not generate content that is illegal, harmful, deceptive, or violates third-party rights</li>
      <li>You will not use AI tools to create deepfakes or impersonations without consent</li>
      <li>Content generated using AILINK tools may be subject to AI content policies</li>
      <li>You retain responsibility for how you use AI-generated content</li>
      <li>AILINK reserves the right to remove violating content without notice</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-ban" style="color:#6B8FFF;font-size:16px;"></i> 6. Prohibited Activities</h2>
    <p class="legal-p">Users are strictly prohibited from:</p>
    <ul class="legal-ul">
      <li>Using the platform for money laundering, fraud, or illegal activities</li>
      <li>Attempting to hack, disrupt, or exploit the platform or its smart contracts</li>
      <li>Creating bot accounts or using automated tools to farm rewards unfairly</li>
      <li>Impersonating AILINK team members or official communications</li>
      <li>Engaging in wash trading, pump-and-dump, or market manipulation</li>
      <li>Violating intellectual property rights of AILINK or third parties</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-cube" style="color:#6B8FFF;font-size:16px;"></i> 7. NFTs & Digital Assets</h2>
    <p class="legal-p">Regarding NFTs created or traded on the AILINK platform:</p>
    <ul class="legal-ul">
      <li>NFTs are recorded on BNB Chain and ownership is determined by blockchain records</li>
      <li>AILINK is not responsible for the value of NFTs, which can decrease to zero</li>
      <li>Smart contract interactions are irreversible — verify all transactions before signing</li>
      <li>Gas fees and network costs are borne by the user</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-exclamation-circle" style="color:#6B8FFF;font-size:16px;"></i> 8. Disclaimers & Limitation of Liability</h2>
    <p class="legal-p">AILINK services are provided "AS IS" without warranties of any kind. To the maximum extent permitted by law:</p>
    <ul class="legal-ul">
      <li>AILINK is not liable for any loss of funds due to user error or market fluctuations</li>
      <li>AILINK does not guarantee uninterrupted or error-free service</li>
      <li>Smart contract bugs or exploits may result in loss of funds — audit reports are available</li>
      <li>AILINK's total liability is limited to the value of services directly attributable to our actions</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-gavel" style="color:#6B8FFF;font-size:16px;"></i> 9. Governing Law & Dispute Resolution</h2>
    <p class="legal-p">These Terms shall be governed by applicable law. Any disputes arising from use of AILINK services shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes may be submitted to binding arbitration in accordance with applicable arbitration rules.</p>

    <h2 class="legal-h2"><i class="fas fa-edit" style="color:#6B8FFF;font-size:16px;"></i> 10. Modifications</h2>
    <p class="legal-p">AILINK reserves the right to modify these Terms at any time. Material changes will be announced via official channels (X/Twitter, Telegram). Continued use of the platform after changes take effect constitutes acceptance of the revised Terms.</p>

    <h2 class="legal-h2"><i class="fas fa-envelope" style="color:#6B8FFF;font-size:16px;"></i> 11. Contact</h2>
    <p class="legal-p">For questions regarding these Terms, contact us through official channels:</p>
    <ul class="legal-ul">
      <li>Telegram: <a href="https://t.me/AiLink_Official" target="_blank" class="legal-link">t.me/AiLink_Official</a></li>
      <li>X (Twitter): <a href="https://x.com/AiLink_Official" target="_blank" class="legal-link">@AiLink_Official</a></li>
    </ul>
  `
  return layout('Terms of Service — AILINK', legalWrapper('terms', 'Terms of Service', content))
}

// ─── Legal Disclaimer ────────────────────────────────────────────────────────
export function disclaimerPage(): string {
  const content = `
    <h2 class="legal-h2"><i class="fas fa-balance-scale" style="color:var(--mint);font-size:16px;"></i> Legal Disclaimer</h2>

    <div class="legal-box">
      <i class="fas fa-exclamation-triangle" style="color:#FFB400;flex-shrink:0;margin-top:3px;"></i>
      <div>
        <p style="font-size:13px;color:#FFB400;font-weight:700;margin-bottom:6px;">IMPORTANT RISK WARNING</p>
        <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin:0;">Cryptocurrency and digital assets involve substantial risk of loss. The value of ALINK tokens and related assets can go to zero. Only participate with funds you can afford to lose entirely. This document does not constitute financial, legal, or investment advice.</p>
      </div>
    </div>

    <h2 class="legal-h2"><i class="fas fa-ban" style="color:#6B8FFF;font-size:16px;"></i> 1. Not Financial or Investment Advice</h2>
    <p class="legal-p">Nothing contained on the AILINK website, whitepaper, social media channels, or any other communication constitutes:</p>
    <ul class="legal-ul">
      <li>Financial advice, investment advice, or trading advice</li>
      <li>A solicitation or offer to buy or sell any security or financial instrument</li>
      <li>A recommendation to buy, sell, or hold ALINK tokens or any digital asset</li>
      <li>An offer to participate in any investment scheme</li>
    </ul>
    <p class="legal-p">You should consult with a qualified financial advisor before making any investment decisions. AILINK team members and advisors are not registered investment advisors.</p>

    <h2 class="legal-h2"><i class="fas fa-coins" style="color:#6B8FFF;font-size:16px;"></i> 2. ALINK Token — Utility Only</h2>
    <p class="legal-p">The <span class="legal-highlight">ALINK token is strictly a utility token</span> with the following characteristics:</p>
    <ul class="legal-ul">
      <li>Used to access platform features, pay for AI generation services, and participate in the ecosystem</li>
      <li>Does <strong>NOT</strong> represent equity, debt, ownership, or any interest in AILINK or any related entity</li>
      <li>Does <strong>NOT</strong> entitle holders to dividends, profit sharing, or any financial return</li>
      <li>Does <strong>NOT</strong> grant voting rights over AILINK corporate decisions (DAO governance is separate)</li>
      <li>Is <strong>NOT</strong> redeemable for cash or fiat currency by AILINK</li>
    </ul>
    <p class="legal-p">ALINK token information: <code class="legal-contract">${CONTRACT}</code></p>

    <h2 class="legal-h2"><i class="fas fa-chart-line" style="color:#6B8FFF;font-size:16px;"></i> 3. Market Risk & Volatility</h2>
    <p class="legal-p">Digital asset markets are highly volatile. You acknowledge and accept that:</p>
    <ul class="legal-ul">
      <li>The value of ALINK tokens may fluctuate significantly and without warning</li>
      <li>Cryptocurrency markets can experience extreme price swings of 50-100% or more</li>
      <li>Past performance does not indicate future results</li>
      <li>Market manipulation, low liquidity, and speculation can affect token prices</li>
      <li>Token prices may drop to zero and never recover</li>
      <li>Secondary market trading of ALINK may not always be available</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-code" style="color:#6B8FFF;font-size:16px;"></i> 4. Smart Contract & Technical Risk</h2>
    <p class="legal-p">Blockchain and smart contract technology carries inherent risks:</p>
    <ul class="legal-ul">
      <li><span class="legal-highlight">Smart Contract Bugs:</span> Despite audits by CertiK, smart contracts may contain undiscovered vulnerabilities</li>
      <li><span class="legal-highlight">Network Issues:</span> BNB Chain may experience congestion, outages, or protocol changes</li>
      <li><span class="legal-highlight">Irreversibility:</span> Blockchain transactions cannot be reversed once confirmed</li>
      <li><span class="legal-highlight">Wallet Security:</span> Loss of private keys means permanent loss of access to funds</li>
      <li><span class="legal-highlight">Front-running:</span> Miners/validators may reorder transactions to their advantage</li>
    </ul>

    <div class="legal-info">
      <i class="fas fa-info-circle" style="color:#6B8FFF;flex-shrink:0;margin-top:2px;"></i>
      <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin:0;"><span class="legal-highlight">Audit Notice:</span> AILINK smart contracts have been audited by CertiK. However, an audit does not guarantee absence of all vulnerabilities. Always review audit reports before interacting with smart contracts.</p>
    </div>

    <h2 class="legal-h2"><i class="fas fa-globe-americas" style="color:#6B8FFF;font-size:16px;"></i> 5. Regulatory Risk & Jurisdictional Restrictions</h2>
    <p class="legal-p">The regulatory environment for cryptocurrency and digital assets is rapidly evolving:</p>
    <ul class="legal-ul">
      <li>Cryptocurrency regulations vary by country and may change without notice</li>
      <li>AILINK services may not be available in all jurisdictions</li>
      <li>Users are solely responsible for ensuring compliance with local laws</li>
      <li>Regulatory changes may adversely affect the ALINK token and platform operations</li>
    </ul>
    <p class="legal-p"><span class="legal-highlight">Restricted Jurisdictions:</span> AILINK services are not available to residents of jurisdictions where such services are prohibited, including but not limited to the United States (for certain activities), North Korea, Iran, Cuba, Syria, and other OFAC-sanctioned regions.</p>

    <h2 class="legal-h2"><i class="fas fa-project-diagram" style="color:#6B8FFF;font-size:16px;"></i> 6. Project Risk & Development</h2>
    <p class="legal-p">As an early-stage blockchain project, AILINK carries additional risks:</p>
    <ul class="legal-ul">
      <li><span class="legal-highlight">Development Risk:</span> Features described in the roadmap may be delayed, modified, or cancelled</li>
      <li><span class="legal-highlight">Competition:</span> The AI and Web3 space is highly competitive; AILINK may not succeed commercially</li>
      <li><span class="legal-highlight">Team Risk:</span> Key personnel departures could impact development progress</li>
      <li><span class="legal-highlight">Funding Risk:</span> Insufficient funding may halt or delay project development</li>
      <li><span class="legal-highlight">Market Adoption:</span> Platform adoption is uncertain and not guaranteed</li>
    </ul>

    <h2 class="legal-h2"><i class="fas fa-forward-step" style="color:#6B8FFF;font-size:16px;"></i> 7. Forward-Looking Statements</h2>
    <p class="legal-p">This website and associated materials may contain forward-looking statements about AILINK's plans, projections, and expected developments. These statements are based on current expectations and involve significant risks and uncertainties. <span class="legal-highlight">Actual results may differ materially</span> from those projected. AILINK undertakes no obligation to update forward-looking statements.</p>

    <h2 class="legal-h2"><i class="fas fa-hand-point-right" style="color:#6B8FFF;font-size:16px;"></i> 8. User Responsibility</h2>
    <p class="legal-p">By interacting with AILINK, you confirm that:</p>
    <ul class="legal-ul">
      <li>You have conducted your own due diligence and independent research (DYOR)</li>
      <li>You understand the risks involved in cryptocurrency and digital assets</li>
      <li>You are solely responsible for your own investment and participation decisions</li>
      <li>You have sufficient knowledge to understand this disclaimer and related risks</li>
      <li>You will only use funds you can afford to lose completely</li>
    </ul>

    <div class="legal-box" style="margin-top:28px;">
      <i class="fas fa-exclamation-circle" style="color:#FFB400;flex-shrink:0;margin-top:2px;"></i>
      <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin:0;"><span style="color:#FFB400;font-weight:700;">FINAL WARNING:</span> Cryptocurrency investments are high risk. DYOR (Do Your Own Research). Never invest more than you can afford to lose. The AILINK team is not responsible for financial losses incurred by participating in the ALINK token ecosystem.</p>
    </div>

    <h2 class="legal-h2"><i class="fas fa-envelope" style="color:#6B8FFF;font-size:16px;"></i> 9. Questions</h2>
    <p class="legal-p">For legal inquiries, contact us through official channels only. Beware of scammers impersonating AILINK:</p>
    <ul class="legal-ul">
      <li>Official Telegram: <a href="https://t.me/AiLink_Official" target="_blank" class="legal-link">t.me/AiLink_Official</a></li>
      <li>Official X/Twitter: <a href="https://x.com/AiLink_Official" target="_blank" class="legal-link">@AiLink_Official</a></li>
    </ul>
  `
  return layout('Legal Disclaimer — AILINK', legalWrapper('disclaimer', 'Legal Disclaimer', content))
}

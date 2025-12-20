import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const hubContent = `
<span class="pre-header">Comprehensive Guide</span>
<h1>How to Pass the Apple App Store Review</h1>

<p class="lead">Apple maintains strict review standards for quality, safety, and compliance. This guide helps you navigate the ecosystem, prepare your app for submission, and avoid the most common rejection pitfalls in 2025.</p>

<section id="pre-submission-checklist">
  <div class="section-header">
    <div class="section-header-icon blue">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <h2>Pre-Submission Checklist</h2>
  </div>
  
  <div class="alert-box info">
    <div class="alert-title">Why this matters</div>
    <p>A rejected app can delay your launch by weeks. By understanding the guidelines before you submit, you can save valuable time and get your app approved on the first try.</p>
  </div>

  <div class="checklist">
    <div class="checklist-item">
      <div class="checklist-number">1</div>
      <div class="checklist-content">
        <h4>Test for Functional Stability</h4>
        <p>Ensure your app doesn't crash or exhibit significant bugs. Reviewers test on real devices and various network conditions.</p>
      </div>
    </div>
    <div class="checklist-item">
      <div class="checklist-number">2</div>
      <div class="checklist-content">
        <h4>Complete Metadata & Assets</h4>
        <p>Verify that your app name, description, keywords, and screenshots are accurate and complete. Placeholder text is an instant rejection.</p>
      </div>
    </div>
    <div class="checklist-item">
      <div class="checklist-number">3</div>
      <div class="checklist-content">
        <h4>Provide Reviewer Access</h4>
        <p>If your app requires a login, provide a dedicated demo account. Ensure your backend is live and accessible during the 24-48h review window.</p>
      </div>
    </div>
  </div>
</section>

<section id="safety">
  <div class="section-header">
    <div class="section-header-icon red">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
    </div>
    <h2>Safety & Content</h2>
  </div>
  
  <div class="feature-grid">
    <div class="feature-card">
      <h3>Objectionable Content</h3>
      <p>Apps must not contain offensive, harmful, or illegal content. Ensure your content matches the age rating selected in Connect.</p>
    </div>
    <div class="feature-card">
      <h3>User Moderation</h3>
      <p>If your app features UGC, you must implement content filtering, reporting mechanisms, and user blocking.</p>
    </div>
    <div class="feature-card">
      <h3>Data Privacy</h3>
      <p>Collect only necessary data. Always include usage descriptions in your Info.plist for system permission prompts.</p>
    </div>
  </div>
</section>

<section id="performance">
  <div class="section-header">
    <div class="section-header-icon green">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <h2>Performance & Continuity</h2>
  </div>
  
  <p>Your app must be a complete version. Do not submit builds with "Coming Soon" indicators or dummy content. Apple expects native-quality experiences that handle errors gracefully.</p>
  
  <div class="checklist">
    <div class="checklist-item hover:bg-transparent p-0">
      <div class="checklist-number green">✓</div>
      <div class="checklist-content">
        <h4>System Compatibility</h4>
        <p>Test on the latest iOS version and across all supported screen sizes, including iPad if Universal.</p>
      </div>
    </div>
    <div class="checklist-item hover:bg-transparent p-0">
      <div class="checklist-number green">✓</div>
      <div class="checklist-content">
        <h4>Hardware Integration</h4>
        <p>Ensure battery usage is optimized and the app doesn't cause excessive heat or hardware strain.</p>
      </div>
    </div>
  </div>
</section>

<section id="deep-dives">
  <div class="section-header">
    <div class="section-header-icon yellow">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
    </div>
    <h2>Deep Dive Guides</h2>
  </div>

  <div class="deep-dive-grid">
    <a href="/legal-compliance" class="deep-dive-card">
      <div class="deep-dive-card-icon blue">⚖️</div>
      <h3>Legal & Privacy</h3>
      <p>Navigate the complexities of GDPR, privacy policies, and digital data rights.</p>
    </a>
    <a href="/rejection-guide" class="deep-dive-card">
      <div class="deep-dive-card-icon red">🚫</div>
      <h3>Handling Rejections</h3>
      <p>Step-by-step resolution paths when Apple says "No" through the Resolution Center.</p>
    </a>
    <a href="/connect-guide" class="deep-dive-card">
      <div class="deep-dive-card-icon green">📦</div>
      <h3>App Store Connect</h3>
      <p>Mastering uploads, TestFlight strategy, and phased release configuration.</p>
    </a>
  </div>
</section>

<section id="official-resources">
  <h2>Official Resources</h2>
  <ul class="references-list">
    <li>
      <a href="https://developer.apple.com/app-store/review/guidelines/" target="_blank" rel="noopener">App Store Review Guidelines</a>
      <span class="reference-desc">The primary source of truth for all content and technical requirements.</span>
    </li>
    <li>
      <a href="https://developer.apple.com/design/human-interface-guidelines/" target="_blank" rel="noopener">Human Interface Guidelines</a>
      <span class="reference-desc">Apple's comprehensive design system for all platforms.</span>
    </li>
  </ul>
</section>
`

async function main() {
  console.log('Updating hub article (clean HTML)...')

  const article = await prisma.article.upsert({
    where: { slug: 'app-store-guide' },
    update: {
      title: 'How to Pass the Apple App Store Review (2025 Guide)',
      description: 'Complete guide to passing the Apple App Store review process. Learn requirements, avoid common rejections, and get your iOS app approved.',
      content: hubContent,
      metaKeywords: ['app store review', 'ios submission', 'apple guidelines', 'app rejection'],
      isHub: true,
      updatedAt: new Date(),
    },
    create: {
      slug: 'app-store-guide',
      title: 'How to Pass the Apple App Store Review (2025 Guide)',
      description: 'Complete guide to passing the Apple App Store review process. Learn requirements, avoid common rejections, and get your iOS app approved.',
      content: hubContent,
      category: 'Overview',
      metaKeywords: ['app store review', 'ios submission', 'apple guidelines', 'app rejection'],
      isHub: true,
    },
  })

  console.log(`Updated: ${article.slug}`)
  await prisma.$disconnect()
}

main().catch(console.error)

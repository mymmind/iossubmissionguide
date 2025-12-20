import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const hubHtmlContent = `
<h1>How to Pass the Apple App Store Review Process (2025 Guide)</h1>

<p>Apple maintains a strict app review process to ensure that every app on the App Store meets high standards of quality, safety, and compliance. Before any iOS app can be published, it must pass Apple's review, which checks for adherence to the <strong>App Store Review Guidelines</strong>.</p>

<div class="alert-box info">
  <div class="alert-title">Why this matters</div>
  <p>A rejected app can delay your launch and cost valuable time. By understanding what Apple looks for and preparing your app accordingly, you can save yourself from the "rejection loop" and get your app approved on the first try. Use the following best practices to confidently publish your iOS app.</p>
</div>

<hr />

<!-- Pre-Submission Checklist -->
<section id="pre-submission-checklist">
<div class="section-header">
  <div class="section-header-icon green">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
  </div>
  <h2>Pre-Submission Checklist</h2>
</div>

<p>Before you even hit "Submit for Review," go through this checklist to catch issues that might trigger an immediate rejection.</p>

<div class="checklist">
  <div class="checklist-item">
    <div class="checklist-number">1</div>
    <div class="checklist-content">
      <h4>Test for Crashes & Bugs</h4>
      <p>Rigorously test on real devices and simulators. An app that crashes during Apple's review will be rejected outright. Use test cases to cover core features, edge cases, and low network conditions.</p>
    </div>
  </div>

  <div class="checklist-item">
    <div class="checklist-number">2</div>
    <div class="checklist-content">
      <h4>Complete All Metadata</h4>
      <p>Ensure the app name, description, category, keywords, screenshots, and privacy policy URL are accurate. Misleading metadata (claiming features you don't have) leads to rejection.</p>
    </div>
  </div>

  <div class="checklist-item">
    <div class="checklist-number">3</div>
    <div class="checklist-content">
      <h4>Update Contact Info</h4>
      <p>Ensure developer contact information in App Store Connect is current. If Apple needs to reach out for clarification, outdated info can stall your review.</p>
    </div>
  </div>

  <div class="checklist-item">
    <div class="checklist-number">4</div>
    <div class="checklist-content">
      <h4>Provide Demo Account</h4>
      <p>If your app requires login, provide a full-featured demo account in "App Review Notes". If specific hardware (like Bluetooth accessories) is needed, provide a video demo.</p>
    </div>
  </div>

  <div class="checklist-item">
    <div class="checklist-number">5</div>
    <div class="checklist-content">
      <h4>Backend Services</h4>
      <p>Keep servers online and testable during review. Test your app with a "fresh install" on a clean device to simulate a first-time user hitting your backend.</p>
    </div>
  </div>

  <div class="checklist-item">
    <div class="checklist-number">6</div>
    <div class="checklist-content">
      <h4>Review Notes & Compliance</h4>
      <p>Use notes to explain hidden features or special configurations. Verify you follow Human Interface Guidelines and technical rules for frameworks like Apple Pay or HealthKit.</p>
    </div>
  </div>
</div>
</section>

<hr />

<!-- Key Focus Area 1: Safety -->
<section id="safety" class="focus-area-section">
  <span class="pre-header">Key Focus Area 1</span>
  <h2>Safety</h2>

  <p>User safety and appropriate content are top priorities. Guidelines cover content, data handling, and device risk.</p>

  <h3>Objectionable Content</h3>
  <p>Apps must not contain offensive, disturbing, or harmful content. This includes pornography, graphic violence, hate speech, illegal drug references, or defamation. Content must be appropriate for your target age rating.</p>

  <h3>User-Generated Content (UGC) Requirements</h3>
  <p>If your app allows users to post content (comments, photos, profiles), you <strong>must</strong> include:</p>
  <ul>
    <li>A way to filter out objectionable material (profanity filters, image moderation)</li>
    <li>A mechanism for users to report abusive content</li>
    <li>The ability to block abusive users</li>
    <li>Contact information in-app so users can reach the developer</li>
  </ul>

  <h3>Data Privacy & Permissions</h3>
  <p>Collect only the data you need. If you access sensitive data (location, contacts, health, camera), you must include a usage description in your <code>Info.plist</code> explaining <em>why</em>. Fill out the App Privacy "nutrition label" in App Store Connect truthfully.</p>

  <div class="alert-box info">
    <div class="alert-title">Missing Policy?</div>
    <p>Every app collecting personal data must have a Privacy Policy URL in the metadata and accessible within the app (e.g., inside Settings).</p>
  </div>

  <h3>Kids Category</h3>
  <p>Apps for kids must not use behavioral advertising or collect unnecessary data. External links and purchases must be gated behind a "parental gate" (e.g., a math challenge).</p>
</section>

<hr />

<!-- Key Focus Area 2: Performance -->
<section id="performance" class="focus-area-section">
  <span class="pre-header">Key Focus Area 2</span>
  <h2>Performance</h2>

  <h3>Complete, Final Version</h3>
  <p>No placeholder content like "Coming Soon" buttons, dummy text, or lorem ipsum. All advertised features must work. Incomplete apps are rejected under guideline 2.1.</p>

  <h3>No Crashes or Major Bugs</h3>
  <p>Test extensively on fresh installs. Apple reviewers often test on iPad even if you target iPhone, so ensure no UI "letterboxing" or layout breaks occur.</p>

  <h3>Load Times & Stability</h3>
  <p>Apps shouldn't hang on launch. Use loading indicators for network calls. Broken content (empty screens due to server errors) counts as a bug.</p>

  <h3>Approved APIs Only</h3>
  <p>No private APIs. No downloading executable code after release (except allowed scripts like standard JavaScript). You are responsible for all third-party SDKs in your code.</p>
</section>

<hr />

<!-- Key Focus Area 3: Business -->
<section id="business-monetization" class="focus-area-section">
  <span class="pre-header">Key Focus Area 3</span>
  <h2>Business & Monetization</h2>

  <p>Apple is strict about payment rules. Attempting to bypass In-App Purchase (IAP) is a common cause for rejection.</p>

  <h3>Digital Goods Rule</h3>
  <p>If your app sells <strong>digital content</strong> (premium features, game currency, e-books, subscriptions), you <strong>must</strong> use Apple's IAP. You cannot direct users to a website to buy these.</p>
  <p><strong>Exception:</strong> Physical goods (food delivery, ride-hailing, physical products) must use alternative payment methods, not IAP.</p>

  <h3>Restore Purchases</h3>
  <p>If you sell non-consumables or subscriptions, you must implement a <strong>"Restore Purchases"</strong> feature. This allows users to regain access on a new device without paying again.</p>

  <h3>Subscriptions & Auto-Renewal</h3>
  <p>Clearly disclose pricing, duration, and terms. No dark patterns. Users must understand exactly what they are signing up for. Provide info on how to manage/cancel subscriptions.</p>

  <h3>Sign in with Apple</h3>
  <p>If you use third-party social logins (Google, Facebook), you generally must offer "Sign in with Apple" as an equivalent option (Guideline 4.8).</p>

  <h3>Prohibited Tactics</h3>
  <p>No crypto-currency mining on device. No misleading "free trials" that hide costs. No steering users to external payment platforms for digital goods.</p>
</section>

<hr />

<!-- Key Focus Area 4: Design -->
<section id="design" class="focus-area-section">
  <span class="pre-header">Key Focus Area 4</span>
  <h2>Design</h2>

  <h3>Human Interface Guidelines (HIG)</h3>
  <p>Your app should feel native. Standard controls, proper text size, and touch target sizing (44x44pt minimum) are expected. "Web wrapper" apps that look like a basic website are often rejected under guideline 4.2 for minimum functionality.</p>

  <h3>Accurate Screenshots</h3>
  <p>Screenshots must match the app binary. Do not use concept art. If you change the UI, you must update the screenshots. Showing features that don't exist is considered misleading.</p>

  <h3>Spam and Copycats</h3>
  <p>Do not submit multiple similar apps (e.g., 10 flashlight apps). Combine them into one container app. Re-skinned copies are rejected.</p>
</section>

<hr />

<!-- Key Focus Area 5: Legal - DARK CARD -->
<section id="legal">
<div class="dark-card">
  <span class="pre-header">Key Focus Area 5</span>
  <h2>Legal</h2>

  <div class="dark-card-grid">
    <div>
      <h4>Privacy & Account Deletion</h4>
      <p>You must comply with GDPR/COPPA. <strong>Critical:</strong> If your app allows account creation, it must allow account deletion within the app (Guideline 5.1.1(v)).</p>

      <h4>Intellectual Property</h4>
      <p>Ensure you own all content. No unauthorized trademarked names, logos, or copyrighted music.</p>
    </div>
    <div>
      <h4>Regulated Categories</h4>
      <p><strong>Medical:</strong> Needs disclaimers ("Not for diagnostic use") or regulatory clearance.</p>
      <p><strong>Gambling:</strong> Must be geo-restricted and fully licensed.</p>
      <p><strong>Crypto:</strong> Exchange apps must be from established financial institutions.</p>
    </div>
  </div>
</div>
</section>

<hr />

<!-- Preparing Your App Store Listing -->
<section id="preparing-your-app-store-listing">
<h2>Preparing Your App Store Listing</h2>

<p>The review team compares your app's actual behavior to your listing claims. Inconsistencies lead to rejection.</p>

<div class="feature-grid">
  <div class="feature-card">
    <h3>Accurate Description</h3>
    <p>Be factual. Avoid "Beta", "Test", or "Demo" terminology. Don't mention competitor platforms (e.g., "Android").</p>
  </div>

  <div class="feature-card">
    <h3>App Icon & Version</h3>
    <p>The icon in the store must match the binary installed on the device. Version numbers should match.</p>
  </div>

  <div class="feature-card">
    <h3>Support & Privacy URLs</h3>
    <p>Links must be live. The Support URL must provide a way for users to contact you.</p>
  </div>
</div>

<div class="alert-box neutral">
  <div class="alert-title">App Review Notes</div>
  <p>Crucial field. Add demo credentials, explain special hardware (attach video link), and clarify non-obvious features here.</p>
</div>
</section>

<hr />

<!-- The Review Process -->
<section id="the-review-process">
<h2>The Review Process</h2>

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot blue"></div>
    <h4>1. Automated Scans</h4>
    <p>Immediate check for malware, private API usage, and basic metadata presence.</p>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot blue"></div>
    <h4>2. Waiting for Review</h4>
    <p>Usually 24-48 hours. Be responsive to emails if Apple requests info.</p>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot blue"></div>
    <h4>3. Human Review</h4>
    <p>A real person installs your app. They test flows (login, IAP, edge cases), check permissions, and verify your metadata claims.</p>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot green"></div>
    <h4>4. Decision & Resolution</h4>
    <p><strong>Approved:</strong> Ready for sale.<br /><strong>Rejected:</strong> Cited with guideline numbers. Fix the issue and resubmit. You can appeal to the App Review Board if you believe the rejection is unfair.</p>
  </div>
</div>
</section>

<hr />

<!-- Top Reasons for Rejection -->
<section id="top-reasons-for-rejection">
<h2>Top Reasons for Rejection</h2>

<div class="alert-box warning">
  <div class="alert-title">Common Rejection Reasons</div>
  <ol>
    <li><strong>Crashes & Bugs:</strong> The #1 reason</li>
    <li><strong>Incomplete Info:</strong> Missing demo accounts</li>
    <li><strong>Broken Links:</strong> Placeholder content/dead ends</li>
    <li><strong>Privacy Violations:</strong> Missing policies or data misuse</li>
    <li><strong>Misleading Metadata:</strong> Screenshots don't match app</li>
    <li><strong>IAP Violations:</strong> Selling digital goods via web links</li>
    <li><strong>Poor UI/UX:</strong> Substandard design or web wrappers</li>
    <li><strong>Missing Features:</strong> No "Restore Purchase" or "Delete Account"</li>
  </ol>
</div>
</section>

<hr />

<!-- Deep Dive Guides -->
<section id="deep-dive-guides">
<h2>Deep Dive Guides</h2>

<p>Explore our detailed guides on specific topics to help you navigate the App Store review process.</p>

<div class="deep-dive-grid">
  <a href="/connect-guide" class="deep-dive-card">
    <div class="deep-dive-card-icon blue">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
      </svg>
    </div>
    <h3>App Store Connect & TestFlight</h3>
    <p>Master the submission process, beta testing, and phased releases.</p>
  </a>

  <a href="/rejection-guide" class="deep-dive-card">
    <div class="deep-dive-card-icon red">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    </div>
    <h3>Rejection Reasons & Fixes</h3>
    <p>Understand common rejection reasons and how to address them effectively.</p>
  </a>

  <a href="/legal-compliance" class="deep-dive-card">
    <div class="deep-dive-card-icon green">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    </div>
    <h3>Legal & Privacy Compliance</h3>
    <p>Navigate privacy policies, GDPR, and content regulations.</p>
  </a>
</div>
</section>

<hr />

<!-- References -->
<section id="references">
<h2>References</h2>

<ul class="references-list">
  <li>
    <a href="https://developer.apple.com/app-store/review/guidelines/" target="_blank" rel="noopener noreferrer">App Review Guidelines - Apple Developer</a>
    <span class="reference-desc">— Official documentation on the review guidelines</span>
  </li>
  <li>
    <a href="https://nextnative.dev/blog/app-store-review-guidelines" target="_blank" rel="noopener noreferrer">App Store Review Guidelines (2025): Checklist + Top Rejection Reasons</a>
    <span class="reference-desc">— Comprehensive checklist and analysis</span>
  </li>
  <li>
    <a href="https://appfollow.io/blog/app-store-review-guidelines" target="_blank" rel="noopener noreferrer">iOS App Store Review Guidelines: How to Pass & Avoid Rejection</a>
    <span class="reference-desc">— Detailed guide on passing the review</span>
  </li>
  <li>
    <a href="https://developer.apple.com/distribute/app-review/" target="_blank" rel="noopener noreferrer">App Review - Distribute - Apple Developer</a>
    <span class="reference-desc">— Official distribution and review process overview</span>
  </li>
</ul>
</section>

<hr />

<!-- Conclusion -->
<section id="conclusion">
<h2>Conclusion</h2>

<p>Passing Apple's App Store review is a rite of passage for iOS developers. It might seem daunting with all the rules and potential pitfalls, but with careful preparation and attention to detail, you can absolutely get your app approved smoothly.</p>

<p>Remember to think like a reviewer: ensure your app is stable, content is appropriate, user experience is solid, and all App Store rules are followed from functionality to fine-print. Good luck with your submission!</p>

<p><strong>Happy Developing!</strong></p>
</section>
`

async function updateHubArticle() {
  console.log('Updating hub article with rich HTML content...\n')

  try {
    const updated = await prisma.article.update({
      where: { slug: 'app-store-guide' },
      data: {
        content: hubHtmlContent,
        description: 'Master the Apple App Store review process with our comprehensive 2025 guide. Avoid rejections with our pre-submission checklist covering safety, performance, design, and legal guidelines.',
        metaKeywords: [
          'App Store Review Guidelines',
          'iOS App Submission',
          'App Store Rejection Reasons',
          'Apple Developer Checklist',
          'Pass App Store Review',
          'iOS App Distribution',
          'App Store Connect Guide'
        ],
      },
    })

    console.log(`✓ Updated: ${updated.slug}`)
    console.log(`  Title: ${updated.title}`)
    console.log(`  Content length: ${updated.content.length} characters`)
  } catch (error) {
    console.error('Failed to update article:', error)
  }

  console.log('\n✓ Hub article updated with rich HTML!')
}

updateHubArticle()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

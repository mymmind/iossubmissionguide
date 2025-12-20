import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const legalContent = `
<h1>App Store Legal & Privacy Compliance</h1>

<p>Legal compliance is non-negotiable for App Store approval. This guide covers privacy policies, data handling, intellectual property, and regulatory requirements.</p>

<section>
  <h2>Privacy Policy</h2>
  <p>Every app must have a privacy policy. This is required regardless of whether you collect data.</p>

  <h3>Requirements</h3>
  <ul>
    <li>Link in App Store Connect metadata</li>
    <li>Accessible within the app (Settings or onboarding)</li>
    <li>Written in clear, understandable language</li>
    <li>Accurate description of data collected and used</li>
  </ul>

  <h3>What to Include</h3>
  <ul>
    <li>Types of data collected</li>
    <li>How data is used</li>
    <li>Third parties data is shared with</li>
    <li>Data retention periods</li>
    <li>User rights (access, deletion, opt-out)</li>
    <li>Contact information</li>
  </ul>
</section>

<section>
  <h2>App Privacy Details</h2>
  <p>Apple's "nutrition label" in App Store Connect requires disclosure of all data practices.</p>

  <h3>Data Categories</h3>
  <ul>
    <li><strong>Contact Info</strong> — Name, email, phone, address</li>
    <li><strong>Health & Fitness</strong> — Health data, fitness data</li>
    <li><strong>Financial Info</strong> — Payment info, credit info</li>
    <li><strong>Location</strong> — Precise or coarse location</li>
    <li><strong>Sensitive Info</strong> — Religious beliefs, sexual orientation, etc.</li>
    <li><strong>Contacts</strong> — Address book</li>
    <li><strong>User Content</strong> — Photos, videos, audio, files</li>
    <li><strong>Browsing History</strong> — Web browsing data</li>
    <li><strong>Search History</strong> — In-app searches</li>
    <li><strong>Identifiers</strong> — User ID, device ID</li>
    <li><strong>Usage Data</strong> — Product interaction, advertising data</li>
    <li><strong>Diagnostics</strong> — Crash data, performance data</li>
  </ul>

  <h3>Data Use Purposes</h3>
  <ul>
    <li>App functionality</li>
    <li>Analytics</li>
    <li>Product personalization</li>
    <li>Advertising or marketing</li>
    <li>Third-party advertising</li>
  </ul>
</section>

<section>
  <h2>Data Collection Best Practices</h2>
  <ul>
    <li><strong>Minimize collection</strong> — Only collect what you need</li>
    <li><strong>Explain purpose</strong> — Tell users why you need each permission</li>
    <li><strong>Secure storage</strong> — Encrypt sensitive data</li>
    <li><strong>Provide controls</strong> — Let users delete their data</li>
    <li><strong>Honor opt-outs</strong> — Respect user choices</li>
  </ul>
</section>

<section>
  <h2>Permission Strings</h2>
  <p>iOS requires explanation strings for sensitive permissions in Info.plist.</p>

  <h3>Common Permissions</h3>
  <ul>
    <li><strong>NSCameraUsageDescription</strong> — Camera access</li>
    <li><strong>NSPhotoLibraryUsageDescription</strong> — Photo library</li>
    <li><strong>NSLocationWhenInUseUsageDescription</strong> — Location (foreground)</li>
    <li><strong>NSLocationAlwaysUsageDescription</strong> — Location (background)</li>
    <li><strong>NSMicrophoneUsageDescription</strong> — Microphone</li>
    <li><strong>NSContactsUsageDescription</strong> — Contacts</li>
    <li><strong>NSCalendarsUsageDescription</strong> — Calendar</li>
    <li><strong>NSHealthShareUsageDescription</strong> — HealthKit read</li>
    <li><strong>NSHealthUpdateUsageDescription</strong> — HealthKit write</li>
  </ul>

  <p>Each string should clearly explain why the permission is needed. Generic explanations will be rejected.</p>
</section>

<section>
  <h2>GDPR Compliance</h2>
  <p>If you have EU users, GDPR applies.</p>

  <h3>Requirements</h3>
  <ul>
    <li>Lawful basis for processing (consent, contract, legitimate interest)</li>
    <li>Right to access personal data</li>
    <li>Right to data deletion ("right to be forgotten")</li>
    <li>Right to data portability</li>
    <li>Data breach notification within 72 hours</li>
    <li>Privacy by design</li>
  </ul>
</section>

<section>
  <h2>Children's Privacy (COPPA)</h2>
  <p>Apps in the Kids category have strict requirements.</p>

  <ul>
    <li>No behavioral advertising</li>
    <li>No third-party analytics without parental consent</li>
    <li>Parental gates for external links and purchases</li>
    <li>Minimal data collection</li>
    <li>No social features without verification</li>
  </ul>
</section>

<section>
  <h2>Intellectual Property</h2>

  <h3>Your Responsibilities</h3>
  <ul>
    <li>Only submit apps you own or have rights to</li>
    <li>Don't use copyrighted material without permission</li>
    <li>Don't infringe trademarks</li>
    <li>Don't copy other apps' UI or functionality</li>
    <li>Properly license open-source code</li>
  </ul>

  <h3>Protecting Your IP</h3>
  <ul>
    <li>Register trademarks for your app name</li>
    <li>Copyright your original content</li>
    <li>Document your development process</li>
  </ul>
</section>

<section>
  <h2>Export Compliance</h2>
  <p>Apps using encryption may require export documentation.</p>

  <h3>Exempt Encryption</h3>
  <ul>
    <li>Standard HTTPS/TLS</li>
    <li>Standard authentication</li>
    <li>Apple's built-in encryption APIs</li>
  </ul>

  <h3>Non-Exempt</h3>
  <ul>
    <li>Custom encryption algorithms</li>
    <li>VPN functionality</li>
    <li>Secure messaging beyond standard TLS</li>
  </ul>
</section>

<section>
  <h2>Account Deletion</h2>
  <p>Apps that support account creation must offer account deletion.</p>

  <ul>
    <li>Easy to find (not buried in settings)</li>
    <li>Complete deletion of user data</li>
    <li>Clear explanation of what will be deleted</li>
    <li>Confirmation before deletion</li>
    <li>Grace period for accidental deletions (optional)</li>
  </ul>
</section>
`

const rejectionContent = `
<h1>App Store Rejection Reasons & How to Fix Them</h1>

<p>Getting rejected is frustrating, but most rejections are fixable. This guide covers common rejection reasons and how to address them.</p>

<section>
  <h2>Understanding Rejections</h2>
  <p>When Apple rejects your app, you'll receive a message in the Resolution Center with specific guideline citations. Read carefully—the fix is usually straightforward.</p>

  <h3>Response Options</h3>
  <ul>
    <li><strong>Fix and resubmit</strong> — Address the issue and upload a new build</li>
    <li><strong>Reply in Resolution Center</strong> — Ask for clarification or explain your case</li>
    <li><strong>Appeal</strong> — Request review by the App Review Board</li>
  </ul>
</section>

<section>
  <h2>Guideline 2.1 — App Completeness</h2>
  <p>Your app must be fully functional when submitted.</p>

  <h3>Common Issues</h3>
  <ul>
    <li>Placeholder content or "Coming Soon" features</li>
    <li>Broken links or dead ends</li>
    <li>Empty states without explanation</li>
    <li>Features that require unreleased backend</li>
  </ul>

  <h3>How to Fix</h3>
  <ul>
    <li>Remove unfinished features entirely</li>
    <li>Replace placeholders with real content</li>
    <li>Test every link and button</li>
    <li>Ensure backend is live before submission</li>
  </ul>
</section>

<section>
  <h2>Guideline 2.3 — Accurate Metadata</h2>
  <p>App description, screenshots, and previews must accurately reflect the app.</p>

  <h3>Common Issues</h3>
  <ul>
    <li>Screenshots showing features not in the app</li>
    <li>Misleading descriptions</li>
    <li>Wrong category selection</li>
    <li>Keyword stuffing in app name</li>
  </ul>

  <h3>How to Fix</h3>
  <ul>
    <li>Use actual screenshots from current build</li>
    <li>Update description to match features</li>
    <li>Choose the most appropriate category</li>
    <li>Keep app name concise and relevant</li>
  </ul>
</section>

<section>
  <h2>Guideline 4.2 — Minimum Functionality</h2>
  <p>Apps must provide value beyond a website.</p>

  <h3>Common Issues</h3>
  <ul>
    <li>WebView wrapper with no native features</li>
    <li>App is just a marketing brochure</li>
    <li>No unique functionality</li>
    <li>Thin content apps</li>
  </ul>

  <h3>How to Fix</h3>
  <ul>
    <li>Add native features (push notifications, offline mode, camera)</li>
    <li>Provide functionality not possible on web</li>
    <li>Improve user experience beyond browser</li>
    <li>Consider if an app is the right format</li>
  </ul>
</section>

<section>
  <h2>Guideline 3.1.1 — In-App Purchase</h2>
  <p>Digital goods must use Apple's IAP system.</p>

  <h3>Common Issues</h3>
  <ul>
    <li>Linking to external payment for digital content</li>
    <li>Mentioning cheaper prices outside the app</li>
    <li>Missing "Restore Purchases" button</li>
    <li>Subscriptions without clear terms</li>
  </ul>

  <h3>How to Fix</h3>
  <ul>
    <li>Implement StoreKit for all digital purchases</li>
    <li>Remove external payment links for digital goods</li>
    <li>Add restore functionality</li>
    <li>Clearly display subscription terms</li>
  </ul>
</section>

<section>
  <h2>Guideline 5.1.1 — Data Collection</h2>
  <p>Apps must respect user privacy.</p>

  <h3>Common Issues</h3>
  <ul>
    <li>Missing privacy policy</li>
    <li>Collecting unnecessary data</li>
    <li>Unclear permission explanations</li>
    <li>Inaccurate App Privacy labels</li>
  </ul>

  <h3>How to Fix</h3>
  <ul>
    <li>Add privacy policy link in app and App Store Connect</li>
    <li>Only request permissions you need</li>
    <li>Write clear, specific permission strings</li>
    <li>Accurately complete privacy nutrition label</li>
  </ul>
</section>

<section>
  <h2>Guideline 4.0 — Design</h2>
  <p>Apps must meet basic quality standards.</p>

  <h3>Common Issues</h3>
  <ul>
    <li>Crashes during review</li>
    <li>Poor UI/UX</li>
    <li>Broken layouts on different devices</li>
    <li>Copycat design</li>
  </ul>

  <h3>How to Fix</h3>
  <ul>
    <li>Test on multiple devices and iOS versions</li>
    <li>Follow Human Interface Guidelines</li>
    <li>Support all screen sizes you claim</li>
    <li>Create original designs</li>
  </ul>
</section>

<section>
  <h2>Responding to Rejection</h2>

  <h3>Do</h3>
  <ul>
    <li>Read the rejection message carefully</li>
    <li>Address every point mentioned</li>
    <li>Explain changes in App Review Notes</li>
    <li>Be professional and courteous</li>
    <li>Provide demo credentials if needed</li>
  </ul>

  <h3>Don't</h3>
  <ul>
    <li>Argue without understanding the issue</li>
    <li>Make the same submission without changes</li>
    <li>Be rude or aggressive</li>
    <li>Try to hide features from reviewers</li>
  </ul>
</section>

<section>
  <h2>Expedited Review</h2>
  <p>Apple offers expedited review for critical situations.</p>

  <h3>Valid Reasons</h3>
  <ul>
    <li>Critical bug fix</li>
    <li>Security vulnerability</li>
    <li>Time-sensitive event</li>
  </ul>

  <h3>Not Valid</h3>
  <ul>
    <li>Poor planning</li>
    <li>Marketing deadlines</li>
    <li>Routine updates</li>
  </ul>
</section>
`

const connectContent = `
<h1>Mastering App Store Connect</h1>

<p>App Store Connect is where you manage your app's presence on the App Store. This guide walks through setup, submission, and ongoing management.</p>

<section>
  <h2>Initial Setup</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li>Apple Developer Program membership ($99/year)</li>
    <li>Valid Apple ID</li>
    <li>D-U-N-S number (for organizations)</li>
    <li>Banking and tax information</li>
  </ul>

  <h3>Creating Your App</h3>
  <ol>
    <li>Log in to App Store Connect</li>
    <li>Go to "My Apps"</li>
    <li>Click the + button and select "New App"</li>
    <li>Fill in basic information (name, language, bundle ID, SKU)</li>
  </ol>
</section>

<section>
  <h2>App Information</h2>

  <h3>Required Fields</h3>
  <ul>
    <li><strong>Name</strong> — Up to 30 characters, must be unique</li>
    <li><strong>Subtitle</strong> — Up to 30 characters, appears below name</li>
    <li><strong>Category</strong> — Primary and secondary</li>
    <li><strong>Privacy Policy URL</strong> — Required for all apps</li>
    <li><strong>Support URL</strong> — Where users can get help</li>
  </ul>

  <h3>Promotional Text</h3>
  <p>170 characters, can be changed without new submission. Use for promotions or announcements.</p>

  <h3>Description</h3>
  <p>Up to 4000 characters. First few lines are most important—they appear before "more" link.</p>

  <h3>Keywords</h3>
  <p>100 characters, comma-separated. Research what users search for.</p>
</section>

<section>
  <h2>Screenshots & Previews</h2>

  <h3>Required Screenshots</h3>
  <ul>
    <li>6.7" display (iPhone 15 Pro Max, 14 Pro Max)</li>
    <li>6.5" display (iPhone 14 Plus, 13 Pro Max)</li>
    <li>5.5" display (iPhone 8 Plus) — optional but recommended</li>
    <li>iPad Pro 12.9" — if supporting iPad</li>
  </ul>

  <h3>Best Practices</h3>
  <ul>
    <li>Show actual app UI, not mockups</li>
    <li>Highlight key features</li>
    <li>Include captions to explain value</li>
    <li>First screenshot is most important</li>
  </ul>

  <h3>App Previews</h3>
  <ul>
    <li>15-30 seconds video</li>
    <li>Show real app usage</li>
    <li>No hands or physical devices in frame</li>
    <li>Captured on device (not simulator)</li>
  </ul>
</section>

<section>
  <h2>Build Upload</h2>

  <h3>From Xcode</h3>
  <ol>
    <li>Select "Any iOS Device" as destination</li>
    <li>Product → Archive</li>
    <li>In Organizer, click "Distribute App"</li>
    <li>Choose "App Store Connect"</li>
    <li>Upload</li>
  </ol>

  <h3>Build Processing</h3>
  <p>After upload, Apple processes the build (usually 10-30 minutes). You'll receive an email when ready.</p>

  <h3>Common Upload Issues</h3>
  <ul>
    <li>Missing required icons</li>
    <li>Invalid provisioning profile</li>
    <li>Missing privacy manifest</li>
    <li>Binary too large (check asset optimization)</li>
  </ul>
</section>

<section>
  <h2>TestFlight</h2>
  <p>Beta test your app before public release.</p>

  <h3>Internal Testing</h3>
  <ul>
    <li>Up to 100 testers from your team</li>
    <li>Builds available immediately after processing</li>
    <li>No review required</li>
  </ul>

  <h3>External Testing</h3>
  <ul>
    <li>Up to 10,000 testers</li>
    <li>Requires Beta App Review (usually 24-48 hours)</li>
    <li>Can invite via email or public link</li>
  </ul>

  <h3>Test Information</h3>
  <ul>
    <li>Beta App Description — what to test</li>
    <li>Feedback email — where testers send feedback</li>
    <li>What to Test — specific instructions per build</li>
  </ul>
</section>

<section>
  <h2>App Review</h2>

  <h3>Submission Checklist</h3>
  <ul>
    <li>All metadata complete</li>
    <li>Screenshots uploaded</li>
    <li>Build selected</li>
    <li>App Review Information filled in</li>
    <li>Export compliance answered</li>
    <li>Content rights confirmed</li>
  </ul>

  <h3>App Review Information</h3>
  <ul>
    <li><strong>Contact info</strong> — Who Apple can reach</li>
    <li><strong>Demo account</strong> — Login credentials for testing</li>
    <li><strong>Notes</strong> — Explain non-obvious features</li>
    <li><strong>Attachment</strong> — Video demo if needed</li>
  </ul>
</section>

<section>
  <h2>Release Options</h2>

  <h3>Manual Release</h3>
  <p>You choose when to release after approval. Good for coordinated launches.</p>

  <h3>Automatic Release</h3>
  <p>Goes live immediately after approval.</p>

  <h3>Scheduled Release</h3>
  <p>Set a specific date. Must be within 30 days of approval.</p>

  <h3>Phased Release</h3>
  <p>Roll out to users gradually over 7 days. Can pause if issues arise.</p>
</section>

<section>
  <h2>Post-Release</h2>

  <h3>Monitoring</h3>
  <ul>
    <li>Check crash reports in Xcode Organizer</li>
    <li>Monitor reviews and ratings</li>
    <li>Track downloads in App Analytics</li>
    <li>Respond to customer reviews</li>
  </ul>

  <h3>Updates</h3>
  <ul>
    <li>Create new version in App Store Connect</li>
    <li>Update "What's New" text</li>
    <li>Upload new build</li>
    <li>Submit for review</li>
  </ul>
</section>

<section>
  <h2>In-App Purchases</h2>

  <h3>Types</h3>
  <ul>
    <li><strong>Consumable</strong> — One-time use (coins, credits)</li>
    <li><strong>Non-consumable</strong> — Permanent unlock (remove ads, premium features)</li>
    <li><strong>Auto-renewable subscription</strong> — Recurring billing</li>
    <li><strong>Non-renewing subscription</strong> — Fixed period access</li>
  </ul>

  <h3>Setup</h3>
  <ol>
    <li>Create product in App Store Connect</li>
    <li>Set pricing and availability</li>
    <li>Add localized descriptions</li>
    <li>Submit for review (with app or separately)</li>
    <li>Implement StoreKit in your app</li>
  </ol>
</section>
`

async function main() {
  console.log('Updating all articles with clean HTML...')

  await prisma.article.update({
    where: { slug: 'legal-compliance' },
    data: {
      title: 'App Store Legal & Privacy Compliance Guide',
      content: legalContent,
      updatedAt: new Date(),
    },
  })
  console.log('Updated: legal-compliance')

  await prisma.article.update({
    where: { slug: 'rejection-guide' },
    data: {
      title: 'App Store Rejection Reasons & How to Fix Them',
      content: rejectionContent,
      updatedAt: new Date(),
    },
  })
  console.log('Updated: rejection-guide')

  await prisma.article.update({
    where: { slug: 'connect-guide' },
    data: {
      title: 'Mastering App Store Connect',
      content: connectContent,
      updatedAt: new Date(),
    },
  })
  console.log('Updated: connect-guide')

  await prisma.$disconnect()
  console.log('Done!')
}

main().catch(console.error)

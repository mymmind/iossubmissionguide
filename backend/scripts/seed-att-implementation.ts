import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const attArticle = {
  slug: 'app-tracking-transparency-att-implementation',
  title: 'App Tracking Transparency (ATT): Complete Implementation Guide',
  description: 'Learn how to implement App Tracking Transparency correctly. Includes timing strategies, permission string examples, and how to handle users who decline tracking.',
  category: 'Technical',
  isHub: false,
  metaKeywords: [
    'app tracking transparency',
    'ATT implementation',
    'IDFA iOS',
    'ATTrackingManager',
    'requestTrackingAuthorization',
    'iOS tracking permission',
    'IDFA prompt',
    'app tracking transparency best practices',
    'ATT rejection',
    'iOS 14.5 tracking'
  ],
  toc: {
    title: "ATT Implementation Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#what-is-att", label: "What is ATT" },
          { href: "#when-required", label: "When It's Required" },
          { href: "#implementation", label: "Implementation" }
        ]
      },
      {
        section: "Best Practices",
        items: [
          { href: "#timing", label: "Timing Strategies" },
          { href: "#permission-strings", label: "Permission Strings" },
          { href: "#handling-denial", label: "Handling Denial" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">Technical Guide</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded-full">iOS 14.5+</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">App Tracking Transparency: The Complete Implementation Guide</h1>
  <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">Since iOS 14.5, every app that wants to track users across other apps or websites needs explicit permission. Get this wrong and Apple will reject you. Get it right and you might actually get users to say yes.</p>
</header>

<div class="bg-apple-light dark:bg-gray-800 rounded-2xl p-6 mb-12">
  <h3 class="font-bold text-apple-dark dark:text-white mb-3 flex items-center gap-2">
    <span class="text-xl">📋</span> TL;DR - ATT Essentials
  </h3>
  <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-0">
    <li>• ATT is required if you access IDFA or track users across apps/websites</li>
    <li>• You must add NSUserTrackingUsageDescription to Info.plist</li>
    <li>• Call requestTrackingAuthorization() before accessing IDFA</li>
    <li>• Don't ask on first launch—build context first</li>
    <li>• Industry average opt-in rate is around 25-35%</li>
  </ul>
</div>

<section id="what-is-att" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is App Tracking Transparency?</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    App Tracking Transparency (ATT) is Apple's framework that requires apps to get user permission before tracking their activity across other companies' apps and websites. It was introduced in iOS 14.5 (April 2021) and fundamentally changed mobile advertising.
  </p>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Before ATT, apps could freely access the IDFA (Identifier for Advertisers) to track users. Now, that identifier returns all zeros unless the user explicitly grants permission.
  </p>

  <div class="grid md:grid-cols-2 gap-6 mb-8">
    <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl p-5">
      <h4 class="font-semibold text-red-900 dark:text-red-300 mb-3">What Counts as "Tracking"</h4>
      <ul class="space-y-2 text-red-800 dark:text-red-400 text-sm">
        <li>• Linking user data with third-party data for ads</li>
        <li>• Sharing user data with data brokers</li>
        <li>• Using IDFA for cross-app attribution</li>
        <li>• Passing device identifiers to ad networks</li>
        <li>• Building user profiles for targeted advertising</li>
      </ul>
    </div>
    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl p-5">
      <h4 class="font-semibold text-green-900 dark:text-green-300 mb-3">What's NOT Tracking</h4>
      <ul class="space-y-2 text-green-800 dark:text-green-400 text-sm">
        <li>• First-party analytics (your own app data)</li>
        <li>• Fraud detection</li>
        <li>• Credit/lending eligibility checks</li>
        <li>• Linking with data the user shared directly</li>
        <li>• Contextual advertising (based on content, not user)</li>
      </ul>
    </div>
  </div>
</section>

<section id="when-required" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">When Do You Need ATT Permission?</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Not every app needs ATT. Here's a quick decision tree:
  </p>

  <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6">
    <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Do you need ATT?</h4>
    <div class="space-y-4 text-gray-600 dark:text-gray-300">
      <p><strong>Question 1:</strong> Does your app show ads from an ad network (AdMob, Facebook Audience Network, etc.)?</p>
      <p class="pl-4 text-sm">→ If yes, and you want personalized ads or attribution, you need ATT.</p>

      <p><strong>Question 2:</strong> Do you use Facebook SDK, Google Analytics for Firebase, or similar SDKs that access IDFA?</p>
      <p class="pl-4 text-sm">→ Check their documentation. Many still request IDFA for attribution even if you don't use ads.</p>

      <p><strong>Question 3:</strong> Do you share user behavior data with any third parties?</p>
      <p class="pl-4 text-sm">→ If that data could be linked with other data to identify users, you need ATT.</p>

      <p><strong>Question 4:</strong> Is your app purely offline, or only uses first-party analytics?</p>
      <p class="pl-4 text-sm">→ You probably don't need ATT. But double-check your SDK dependencies.</p>
    </div>
  </div>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">Common Gotcha</h4>
    <p class="text-amber-800 dark:text-amber-400 text-sm mb-0">
      Many developers don't realize their analytics SDK requests IDFA behind the scenes. Run a privacy report in Xcode (Product → Analyze → Generate Privacy Report) to see what APIs your app and its dependencies access.
    </p>
  </div>
</section>

<section id="implementation" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation Guide</h2>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Step 1: Add the Usage Description</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    Add <code>NSUserTrackingUsageDescription</code> to your Info.plist. This is the text that appears in the permission dialog.
  </p>

  <pre class="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-6"><code class="language-xml">&lt;key&gt;NSUserTrackingUsageDescription&lt;/key&gt;
&lt;string&gt;We use this to show you relevant ads and measure their effectiveness. Your data is never sold.&lt;/string&gt;</code></pre>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Step 2: Request Permission</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    Use <code>ATTrackingManager</code> to request authorization. This must be called before you access IDFA.
  </p>

  <pre class="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-6"><code class="language-swift">import AppTrackingTransparency
import AdSupport

func requestTrackingPermission() {
    // Only request on iOS 14+
    guard #available(iOS 14, *) else {
        // Pre-iOS 14: IDFA is available without permission
        let idfa = ASIdentifierManager.shared().advertisingIdentifier
        initializeAds(with: idfa)
        return
    }

    // Check current status first
    let status = ATTrackingManager.trackingAuthorizationStatus

    switch status {
    case .notDetermined:
        // User hasn't been asked yet - request permission
        ATTrackingManager.requestTrackingAuthorization { newStatus in
            DispatchQueue.main.async {
                self.handleAuthorizationStatus(newStatus)
            }
        }
    case .authorized:
        // Already authorized
        let idfa = ASIdentifierManager.shared().advertisingIdentifier
        initializeAds(with: idfa)
    case .denied, .restricted:
        // User denied or restricted - use limited tracking
        initializeAdsWithoutTracking()
    @unknown default:
        initializeAdsWithoutTracking()
    }
}

func handleAuthorizationStatus(_ status: ATTrackingManager.AuthorizationStatus) {
    switch status {
    case .authorized:
        let idfa = ASIdentifierManager.shared().advertisingIdentifier
        print("IDFA: \\(idfa.uuidString)")
        initializeAds(with: idfa)
    case .denied:
        print("Tracking denied by user")
        initializeAdsWithoutTracking()
    case .restricted:
        print("Tracking restricted (parental controls, etc.)")
        initializeAdsWithoutTracking()
    case .notDetermined:
        print("Status not determined")
        initializeAdsWithoutTracking()
    @unknown default:
        initializeAdsWithoutTracking()
    }
}</code></pre>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Step 3: Handle the Response</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    Your app needs to work regardless of whether the user grants permission. Plan for both scenarios:
  </p>

  <div class="grid md:grid-cols-2 gap-4 mb-6">
    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl p-5">
      <h4 class="font-semibold text-green-900 dark:text-green-300 mb-2">If Authorized</h4>
      <ul class="text-green-800 dark:text-green-400 text-sm space-y-1">
        <li>• Pass IDFA to your ad SDK</li>
        <li>• Enable personalized ads</li>
        <li>• Allow full attribution</li>
      </ul>
    </div>
    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-2">If Denied/Restricted</h4>
      <ul class="text-gray-700 dark:text-gray-300 text-sm space-y-1">
        <li>• Use contextual ads instead</li>
        <li>• Rely on SKAdNetwork for attribution</li>
        <li>• Don't degrade user experience</li>
      </ul>
    </div>
  </div>
</section>

<section id="timing" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">When to Show the ATT Prompt</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Timing is everything. Ask too early and users will instinctively tap "Ask App Not to Track" without reading. Here's what actually works:
  </p>

  <div class="space-y-4 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-100 dark:border-red-800/40">
        <h3 class="font-semibold text-red-900 dark:text-red-300 flex items-center gap-2">
          <span class="text-lg">❌</span> Don't: Ask on First Launch
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          Users don't trust apps they just downloaded. They haven't seen your value yet. Showing a tracking permission as the first thing screams "we want your data." Opt-in rates for first-launch prompts are typically below 15%.
        </p>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-green-50 dark:bg-green-900/20 px-6 py-4 border-b border-green-100 dark:border-green-800/40">
        <h3 class="font-semibold text-green-900 dark:text-green-300 flex items-center gap-2">
          <span class="text-lg">✓</span> Do: Wait for a Natural Moment
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Show the prompt after the user has experienced value. Good moments include:
        </p>
        <ul class="text-gray-600 dark:text-gray-300 text-sm space-y-2">
          <li>• After completing onboarding</li>
          <li>• After their first meaningful action (saved something, completed a level)</li>
          <li>• When they're about to see their first ad anyway</li>
          <li>• After a few sessions, not the first one</li>
        </ul>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-blue-50 dark:bg-blue-900/20 px-6 py-4 border-b border-blue-100 dark:border-blue-800/40">
        <h3 class="font-semibold text-blue-900 dark:text-blue-300 flex items-center gap-2">
          <span class="text-lg">💡</span> Pro Move: Pre-Permission Screen
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          Show your own custom screen BEFORE the system dialog. Explain why you're asking and what they get. "Allow tracking for personalized recommendations" converts better than a cold system popup. Just don't be manipulative or Apple will reject you.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">App Review Warning</h4>
    <p class="text-amber-800 dark:text-amber-400 text-sm mb-0">
      Apple explicitly prohibits "offering incentives for granting the request." You cannot offer coins, premium features, or discounts for allowing tracking. This will get you rejected under Guideline 5.1.1(v).
    </p>
  </div>
</section>

<section id="permission-strings" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Writing Effective Permission Strings</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Your NSUserTrackingUsageDescription text appears in the system dialog. It's limited to about 200 characters before truncation. Make them count.
  </p>

  <div class="space-y-4 mb-8">
    <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl p-5">
      <h4 class="font-semibold text-red-900 dark:text-red-300 mb-2">Bad Examples</h4>
      <ul class="text-red-800 dark:text-red-400 text-sm space-y-2">
        <li>❌ "Your data helps us improve." <span class="text-red-600 dark:text-red-500">(Too vague)</span></li>
        <li>❌ "We need this for the app to work properly." <span class="text-red-600 dark:text-red-500">(Misleading - app should work without it)</span></li>
        <li>❌ "Tap Allow to continue." <span class="text-red-600 dark:text-red-500">(Will get you rejected)</span></li>
      </ul>
    </div>

    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl p-5">
      <h4 class="font-semibold text-green-900 dark:text-green-300 mb-2">Good Examples</h4>
      <ul class="text-green-800 dark:text-green-400 text-sm space-y-2">
        <li>✓ "This helps us show you ads that match your interests instead of random ones."</li>
        <li>✓ "We use this identifier to measure ad effectiveness and show relevant content."</li>
        <li>✓ "Allow tracking to see personalized offers and recommendations tailored to you."</li>
      </ul>
    </div>
  </div>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    Key principles for high-converting permission strings:
  </p>

  <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
    <li class="flex items-start gap-2">
      <svg class="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
      <span><strong>Focus on user benefit</strong> — What do THEY get? Not what do you get.</span>
    </li>
    <li class="flex items-start gap-2">
      <svg class="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
      <span><strong>Be specific</strong> — "Personalized ads" is better than "improve experience."</span>
    </li>
    <li class="flex items-start gap-2">
      <svg class="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
      <span><strong>Be honest</strong> — Don't claim you need it if you don't.</span>
    </li>
    <li class="flex items-start gap-2">
      <svg class="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
      <span><strong>Avoid fear</strong> — Don't say "or we can't show you anything."</span>
    </li>
  </ul>
</section>

<section id="handling-denial" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Handling Users Who Decline</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Expect most users to decline. Industry data shows about 65-75% will tap "Ask App Not to Track." Your app needs to handle this gracefully.
  </p>

  <div class="space-y-4 mb-8">
    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Don't Degrade the Experience</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Users who decline tracking should still get a great app. Don't lock features, nag repeatedly, or make them feel punished.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Use SKAdNetwork for Attribution</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Apple's SKAdNetwork provides privacy-preserving ad attribution. It's limited compared to IDFA, but it's what you've got.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Switch to Contextual Ads</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Show ads based on content, not user profiles. A recipe app shows food ads. A fitness app shows workout gear. CPMs are lower but it works.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Don't Ask Again</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">You can only show the system dialog once. After that, the user must go to Settings to change it. You can remind them (gently), but you can't trigger the dialog again.</p>
      </div>
    </div>
  </div>

  <pre class="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-6"><code class="language-swift">// Check if user can still be asked
func canRequestTracking() -> Bool {
    if #available(iOS 14, *) {
        return ATTrackingManager.trackingAuthorizationStatus == .notDetermined
    }
    return true // Pre-iOS 14, no permission needed
}

// Gently remind user they can enable tracking in Settings
func showTrackingReminderIfNeeded() {
    guard #available(iOS 14, *) else { return }

    if ATTrackingManager.trackingAuthorizationStatus == .denied {
        // Show a non-intrusive banner or message
        // "Want personalized ads? Enable in Settings > Privacy > Tracking"
        // But don't be annoying about it
    }
}</code></pre>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Do I need ATT if I only use Firebase Analytics?</h3>
      <p class="text-gray-600 dark:text-gray-400">It depends on your configuration. Firebase Analytics can work without IDFA using first-party identifiers. But if you have Google Analytics for Firebase linked with Google Ads, or use Firebase's advertising features, you likely need ATT. Check the "Analytics data collection" settings in Firebase Console.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What happens if I access IDFA without requesting permission?</h3>
      <p class="text-gray-600 dark:text-gray-400">On iOS 14.5+, the IDFA will return all zeros (00000000-0000-0000-0000-000000000000). Your app won't crash, but your tracking won't work. Apple may also reject your app update if they detect you're accessing IDFA without proper ATT implementation.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Can I delay showing the ATT prompt indefinitely?</h3>
      <p class="text-gray-600 dark:text-gray-400">Yes, but if you ever want to use IDFA, you'll need to ask eventually. Some apps wait until the user engages with an ad-related feature. Just don't try to use IDFA before asking—it won't work.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Does ATT apply to my own first-party data?</h3>
      <p class="text-gray-600 dark:text-gray-400">No. ATT is specifically about cross-company tracking. You can still collect analytics about how users use your app, track in-app events, and personalize based on their behavior within your own app—all without ATT permission.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Why does my ATT prompt show before my pre-permission screen?</h3>
      <p class="text-gray-600 dark:text-gray-400">The system dialog appears when you call requestTrackingAuthorization(). Make sure you're presenting your custom pre-permission screen first, waiting for user interaction, and only THEN calling the API. Also check that you're not calling it in applicationDidFinishLaunching—it might fire before your UI is ready.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What if the user has "Allow Apps to Request to Track" disabled in Settings?</h3>
      <p class="text-gray-600 dark:text-gray-400">If the user has disabled tracking at the system level (Settings > Privacy & Security > Tracking), the authorization status will be .restricted. The system dialog will never show, and you'll never get IDFA access. Handle this the same as a .denied response.</p>
    </div>
  </div>
</section>

<div class="mt-16 p-8 bg-gradient-to-br from-apple-blue/5 to-blue-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-apple-blue/10 dark:border-blue-800/40">
  <h3 class="text-2xl font-bold text-apple-dark dark:text-white mb-4">Get Your App ATT-Ready</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">
    Our AI Review Toolkit includes prompts to audit your tracking implementation and ensure you're compliant with Apple's privacy requirements before submission.
  </p>
  <a href="/ai-review" class="inline-flex items-center gap-2 px-6 py-3 bg-apple-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
    Get the AI Toolkit
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </a>
</div>
`
};

async function main() {
  console.log('Seeding ATT Implementation article...');

  await prisma.article.upsert({
    where: { slug: attArticle.slug },
    update: {
      title: attArticle.title,
      description: attArticle.description,
      content: attArticle.content,
      category: attArticle.category,
      metaKeywords: attArticle.metaKeywords,
      isHub: attArticle.isHub,
      toc: attArticle.toc,
      updatedAt: new Date(),
    },
    create: attArticle,
  });

  console.log('ATT Implementation article seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

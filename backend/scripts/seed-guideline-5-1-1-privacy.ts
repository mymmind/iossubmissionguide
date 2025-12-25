import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const privacyGuidelineArticle = {
  slug: 'guideline-5-1-1-data-collection-privacy',
  title: 'Guideline 5.1.1 Rejection: Fixing Data Collection & Privacy Issues',
  description: 'Understand why Apple rejected your app for Guideline 5.1.1 privacy violations. Learn about data collection requirements, privacy nutrition labels, and how to fix common issues.',
  category: 'Rejections',
  isHub: false,
  metaKeywords: [
    'guideline 5.1.1',
    'app store privacy rejection',
    'data collection ios',
    'privacy nutrition label',
    'app privacy details',
    'purpose string rejection',
    'ios privacy requirements',
    'app tracking transparency rejection',
    '5.1.1 data collection',
    'apple privacy rejection'
  ],
  toc: {
    title: "Guideline 5.1.1 Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#what-is-5-1-1", label: "What is Guideline 5.1.1" },
          { href: "#common-violations", label: "Common Violations" },
          { href: "#privacy-labels", label: "Privacy Nutrition Labels" }
        ]
      },
      {
        section: "Fixes",
        items: [
          { href: "#purpose-strings", label: "Purpose Strings" },
          { href: "#data-minimization", label: "Data Minimization" },
          { href: "#third-party-sdks", label: "Third-Party SDKs" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full">Rejection Guide</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded-full">Guideline 5.1.1</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Guideline 5.1.1: Data Collection and Privacy</h1>
  <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">Your app was rejected for collecting too much data, not being transparent about it, or handling it improperly. Here's what Apple expects and exactly how to fix it.</p>
</header>

<div class="bg-apple-light dark:bg-gray-800 rounded-2xl p-6 mb-12">
  <h3 class="font-bold text-apple-dark dark:text-white mb-3 flex items-center gap-2">
    <span class="text-xl">📋</span> TL;DR - Privacy Requirements
  </h3>
  <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-0">
    <li>• Only collect data you actually need</li>
    <li>• Explain clearly WHY you need each piece of data</li>
    <li>• Fill out App Privacy details accurately in App Store Connect</li>
    <li>• Purpose strings must be specific, not generic</li>
    <li>• Third-party SDKs count—know what they collect</li>
  </ul>
</div>

<section id="what-is-5-1-1" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is Guideline 5.1.1?</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Guideline 5.1.1 covers data collection, storage, and use. Apple summarizes it as:
  </p>

  <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mb-8 border-l-4 border-apple-blue">
    <p class="text-gray-700 dark:text-gray-300 italic mb-0">
      "Apps must respect user privacy by being transparent about data collection. Apps that collect user or device data must secure user consent, and make a privacy policy available that clearly describes your use of data."
    </p>
  </div>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    This sounds simple, but 5.1.1 is one of the broadest guidelines and covers many specific requirements:
  </p>

  <div class="grid md:grid-cols-2 gap-4 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-3">5.1.1(i) - Data Collection</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm">Only collect data that's directly relevant to your app's core functionality. No hoarding "just in case."</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-3">5.1.1(ii) - Data Use</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm">Data must be used only for what you disclosed. No secret monetization or sharing with third parties.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-3">5.1.1(iii) - Permissions</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm">Request permissions only when needed, with clear purpose strings explaining why.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-3">5.1.1(v) - ATT</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm">If you track users across apps/websites, you must use App Tracking Transparency.</p>
    </div>
  </div>
</section>

<section id="common-violations" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Common 5.1.1 Violations</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    These are the issues I see developers get rejected for repeatedly:
  </p>

  <div class="space-y-4 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-100 dark:border-red-800/40">
        <h3 class="font-semibold text-red-900 dark:text-red-300 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
          Requesting Permissions You Don't Need
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Your calculator app asks for camera access. Your note-taking app wants location. Apple's question: "Why?"
        </p>
        <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Fix:</strong> Only request permissions that are essential for core features. If it's for an optional feature, request it at the moment the user tries to use that feature—not at launch.</p>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-100 dark:border-red-800/40">
        <h3 class="font-semibold text-red-900 dark:text-red-300 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
          Vague or Generic Purpose Strings
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
          "We need camera access to enhance your experience." What experience? This tells the user nothing.
        </p>
        <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Fix:</strong> Be specific. "Camera access is needed to scan QR codes for quick login." Now the user understands.</p>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-100 dark:border-red-800/40">
        <h3 class="font-semibold text-red-900 dark:text-red-300 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
          Privacy Label Mismatch
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Your App Privacy label says "No data collected" but your app uses Firebase Analytics, Facebook SDK, or other data-collecting SDKs.
        </p>
        <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Fix:</strong> Audit every SDK in your app. Update your privacy label to accurately reflect what's collected—even by third parties.</p>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-100 dark:border-red-800/40">
        <h3 class="font-semibold text-red-900 dark:text-red-300 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
          Collecting Data Before Consent
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Analytics fire on launch before the user even sees your privacy policy or agrees to anything.
        </p>
        <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Fix:</strong> For EU users (GDPR), you need explicit consent before tracking. Consider delaying analytics initialization until after consent is given.</p>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-100 dark:border-red-800/40">
        <h3 class="font-semibold text-red-900 dark:text-red-300 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
          No Privacy Policy or Inaccessible URL
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Your privacy policy link returns a 404, or you don't have one at all.
        </p>
        <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Fix:</strong> Every app that collects any data needs a privacy policy. Host it on a stable URL and verify it loads before submitting.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="privacy-labels" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Privacy Nutrition Labels</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Since December 2020, every app on the App Store must have privacy "nutrition labels" that tell users what data you collect. These appear on your App Store listing before users download.
  </p>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Fill Them Out</h3>

  <div class="space-y-4 mb-8">
    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Go to App Store Connect → App Privacy</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Under your app, click "App Privacy" in the left sidebar.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">For Each Data Type, Answer Honestly</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Apple lists categories (Contact Info, Location, Identifiers, etc.). For each, specify if you collect it, and if so, how it's used and whether it's linked to the user.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Include Third-Party SDK Data</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Firebase collects device IDs. Facebook SDK collects usage data. You're responsible for disclosing everything your app collects, directly or through SDKs.</p>
      </div>
    </div>
  </div>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">Apple Verifies This</h4>
    <p class="text-amber-800 dark:text-amber-400 text-sm mb-0">
      Apple's reviewers do check. They analyze your binary for known SDKs and compare against your declarations. If there's a mismatch, you'll get a 5.1.1 rejection asking you to update your privacy labels.
    </p>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Data Categories You Might Forget</h3>

  <div class="overflow-x-auto mb-8">
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-100 dark:bg-gray-800">
          <th class="px-4 py-3 text-left text-sm font-bold text-apple-dark dark:text-white border border-gray-200 dark:border-gray-700">SDK/Feature</th>
          <th class="px-4 py-3 text-left text-sm font-bold text-apple-dark dark:text-white border border-gray-200 dark:border-gray-700">Data Collected</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Firebase Analytics</td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Device ID, Usage Data, Diagnostics</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-800/50">
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Firebase Crashlytics</td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Crash Logs, Device ID, Diagnostics</td>
        </tr>
        <tr>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Facebook SDK</td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Device ID, Advertising Data, Usage Data</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-800/50">
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">AdMob / Google Ads</td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Device ID, Location (if allowed), Advertising Data</td>
        </tr>
        <tr>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Mixpanel / Amplitude</td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Usage Data, Device ID</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-800/50">
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Push Notifications</td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Device Token (counts as Identifiers)</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section id="purpose-strings" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Writing Good Purpose Strings</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Purpose strings appear when iOS asks for permission (camera, location, etc.). Apple reviews these carefully. Generic strings get rejected.
  </p>

  <div class="grid md:grid-cols-2 gap-6 mb-8">
    <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl p-5">
      <h4 class="font-semibold text-red-900 dark:text-red-300 mb-3">Bad Purpose Strings</h4>
      <ul class="space-y-2 text-red-800 dark:text-red-400 text-sm">
        <li>❌ "Camera access is required"</li>
        <li>❌ "We need your location"</li>
        <li>❌ "This app needs photos access"</li>
        <li>❌ "Allow access for a better experience"</li>
        <li>❌ "Please allow all permissions"</li>
      </ul>
    </div>
    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl p-5">
      <h4 class="font-semibold text-green-900 dark:text-green-300 mb-3">Good Purpose Strings</h4>
      <ul class="space-y-2 text-green-800 dark:text-green-400 text-sm">
        <li>✓ "Camera is used to scan product barcodes for price comparison"</li>
        <li>✓ "Your location helps find nearby restaurants"</li>
        <li>✓ "Photo library access allows you to attach images to your journal entries"</li>
        <li>✓ "Microphone is needed to record voice memos for your notes"</li>
      </ul>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">All Required Purpose String Keys</h3>

  <pre class="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-6"><code class="language-xml">&lt;!-- Info.plist keys you might need --&gt;
&lt;key&gt;NSCameraUsageDescription&lt;/key&gt;
&lt;string&gt;Take photos for your profile and posts&lt;/string&gt;

&lt;key&gt;NSPhotoLibraryUsageDescription&lt;/key&gt;
&lt;string&gt;Select photos from your library to share&lt;/string&gt;

&lt;key&gt;NSLocationWhenInUseUsageDescription&lt;/key&gt;
&lt;string&gt;Find stores and events near you&lt;/string&gt;

&lt;key&gt;NSMicrophoneUsageDescription&lt;/key&gt;
&lt;string&gt;Record audio messages to send to friends&lt;/string&gt;

&lt;key&gt;NSContactsUsageDescription&lt;/key&gt;
&lt;string&gt;Find friends who are also using this app&lt;/string&gt;

&lt;key&gt;NSCalendarsUsageDescription&lt;/key&gt;
&lt;string&gt;Add events to your calendar from the app&lt;/string&gt;

&lt;key&gt;NSUserTrackingUsageDescription&lt;/key&gt;
&lt;string&gt;Allow tracking to receive personalized ads&lt;/string&gt;</code></pre>
</section>

<section id="data-minimization" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data Minimization</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Apple's philosophy is simple: collect only what you need. If a feature can work without certain data, don't collect it "just in case."
  </p>

  <div class="space-y-4 mb-8">
    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Ask: Do You Really Need This?</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Before adding any data collection, ask if the feature works without it. Can you use on-device processing instead of cloud? Can you anonymize the data?</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Request at the Right Time</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Don't request all permissions at launch. Request them when the user tries to use the feature that needs them. This is also better UX—users understand why you're asking.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Delete When No Longer Needed</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Don't hoard data forever. If a user deletes their account, actually delete their data. Apple (and GDPR) expects this.</p>
      </div>
    </div>
  </div>
</section>

<section id="third-party-sdks" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Third-Party SDKs</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    This is where most developers get caught. You add Firebase for analytics, not realizing it collects device IDs. You include an ad SDK that tracks users. Apple holds YOU responsible for what these SDKs do.
  </p>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Audit Your SDKs</h3>

  <ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li><strong>List every SDK</strong> in your project (check Podfile, Package.swift, build phases)</li>
    <li><strong>Check each SDK's privacy documentation</strong>—most major SDKs now publish what they collect</li>
    <li><strong>Update your privacy labels</strong> to include everything your SDKs collect</li>
    <li><strong>Consider alternatives</strong> if an SDK collects more than you're comfortable disclosing</li>
  </ol>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">Privacy Manifests (iOS 17+)</h4>
    <p class="text-amber-800 dark:text-amber-400 text-sm mb-0">
      As of iOS 17, SDKs must include privacy manifests declaring what data they access. Xcode can generate a privacy report showing all APIs your app uses. Run Product → Analyze → Generate Privacy Report to see what needs to be declared.
    </p>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Does "Data Not Collected" mean I can't use any analytics?</h3>
      <p class="text-gray-600 dark:text-gray-400">No. You can use analytics, but you must disclose it. "Data Not Collected" means you genuinely collect nothing—no analytics, no crash reports, no identifiers at all. If you use any SDK that phones home, you're collecting data.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What if an SDK collects data I can't control?</h3>
      <p class="text-gray-600 dark:text-gray-400">You still have to disclose it. That's the deal with using third-party code. If you're not comfortable with what an SDK collects, find an alternative or build the functionality yourself.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">My app works fine without location, but users might want it. Should I still request it?</h3>
      <p class="text-gray-600 dark:text-gray-400">Only if you have a feature that uses it. Don't request location "in case" the user wants it someday. Implement the feature first, then request permission when they try to use it.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Can I change my privacy labels after the app is live?</h3>
      <p class="text-gray-600 dark:text-gray-400">Yes. Privacy labels aren't locked to a specific version. You can update them anytime in App Store Connect. Just be aware that changes are visible to users.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What's the difference between "Data Used to Track You" and "Data Linked to You"?</h3>
      <p class="text-gray-600 dark:text-gray-400">"Track" means the data is used to follow users across apps or websites for advertising. "Linked" means the data is connected to the user's identity but stays within your app. Both must be disclosed, but they appear differently on the App Store.</p>
    </div>
  </div>
</section>

<div class="mt-16 p-8 bg-gradient-to-br from-apple-blue/5 to-blue-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-apple-blue/10 dark:border-blue-800/40">
  <h3 class="text-2xl font-bold text-apple-dark dark:text-white mb-4">Audit Your Privacy Compliance</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">
    Our AI Review Toolkit includes prompts to analyze your app's data collection practices and privacy declarations. Catch 5.1.1 issues before Apple does.
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
  console.log('Seeding Guideline 5.1.1 Privacy article...');

  await prisma.article.upsert({
    where: { slug: privacyGuidelineArticle.slug },
    update: {
      title: privacyGuidelineArticle.title,
      description: privacyGuidelineArticle.description,
      content: privacyGuidelineArticle.content,
      category: privacyGuidelineArticle.category,
      metaKeywords: privacyGuidelineArticle.metaKeywords,
      isHub: privacyGuidelineArticle.isHub,
      toc: privacyGuidelineArticle.toc,
      updatedAt: new Date(),
    },
    create: privacyGuidelineArticle,
  });

  console.log('Guideline 5.1.1 Privacy article seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

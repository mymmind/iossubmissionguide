import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const swiftArticle = {
  slug: 'swift-swiftui-app-store-submission',
  title: 'Swift & SwiftUI App Store Submission Guide 2025',
  description: 'Complete guide to submitting native Swift and SwiftUI apps to the App Store. Covers Xcode configuration, signing, App Store Connect setup, common rejection fixes, and optimization tips for native iOS development.',
  category: 'Frameworks',
  isHub: false,
  metaKeywords: [
    'swift app store submission',
    'swiftui app store',
    'xcode app store submit',
    'ios app submission guide',
    'swift app review',
    'native ios submission',
    'xcode archive upload',
    'app store connect xcode',
    'swift app rejected'
  ],
  toc: {
    title: "Swift Submission Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#overview", label: "Overview" },
          { href: "#xcode-setup", label: "Xcode Setup" },
          { href: "#signing", label: "Signing & Provisioning" },
          { href: "#app-store-connect", label: "App Store Connect" }
        ]
      },
      {
        section: "Submission",
        items: [
          { href: "#archive-upload", label: "Archive & Upload" },
          { href: "#common-issues", label: "Common Issues" },
          { href: "#optimization", label: "Optimization Tips" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 rounded-full">Native iOS</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">Updated December 2025</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Swift & SwiftUI App Store Submission Guide 2025</h1>
  <p class="text-xl text-gray-600 max-w-3xl">The complete guide to submitting your native Swift or SwiftUI app to the App Store. From Xcode configuration to App Store Connect, learn how to avoid common pitfalls and get approved on the first try.</p>
</header>

<!-- Quick Answer Box -->
<div class="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 mb-10">
  <h2 class="text-lg font-semibold text-orange-900 mb-3">How Long Does Swift App Submission Take?</h2>
  <p class="text-gray-700 mb-4">The technical submission process (archive, upload, processing) takes about 30-60 minutes. App Store review typically takes 24-48 hours. Most native Swift apps have fewer review issues than cross-platform apps because they naturally follow Apple's design patterns.</p>
  <div class="flex items-center gap-2 text-sm text-orange-700">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
    <span>Native apps using SwiftUI have higher approval rates due to built-in HIG compliance</span>
  </div>
</div>

<section id="overview" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Submission Overview</h2>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">Prerequisites</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-center gap-2">
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          Apple Developer Account ($99/year)
        </li>
        <li class="flex items-center gap-2">
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          Xcode 15+ (latest recommended)
        </li>
        <li class="flex items-center gap-2">
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          macOS Sonoma or later
        </li>
        <li class="flex items-center gap-2">
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          App registered in App Store Connect
        </li>
      </ul>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-center gap-2">
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          Valid Distribution Certificate
        </li>
        <li class="flex items-center gap-2">
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          App Store Provisioning Profile
        </li>
        <li class="flex items-center gap-2">
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          App icons (all sizes)
        </li>
        <li class="flex items-center gap-2">
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          Screenshots for all device sizes
        </li>
      </ul>
    </div>
  </div>

  <!-- Submission Steps -->
  <div class="relative border-l-2 border-orange-200 ml-4 space-y-8">
    <div class="relative pl-8">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm"></div>
      <h3 class="font-bold text-gray-900">1. Configure Xcode Project</h3>
      <p class="text-sm text-gray-600 mt-1">Set bundle ID, version, build number, deployment target, and capabilities.</p>
    </div>
    <div class="relative pl-8">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm"></div>
      <h3 class="font-bold text-gray-900">2. Set Up Signing</h3>
      <p class="text-sm text-gray-600 mt-1">Configure automatic signing or manual provisioning profiles.</p>
    </div>
    <div class="relative pl-8">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm"></div>
      <h3 class="font-bold text-gray-900">3. Create App Store Connect Record</h3>
      <p class="text-sm text-gray-600 mt-1">Register your app, add metadata, screenshots, and pricing.</p>
    </div>
    <div class="relative pl-8">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm"></div>
      <h3 class="font-bold text-gray-900">4. Archive & Upload</h3>
      <p class="text-sm text-gray-600 mt-1">Build archive in Xcode and upload via Xcode or Transporter.</p>
    </div>
    <div class="relative pl-8">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
      <h3 class="font-bold text-gray-900">5. Submit for Review</h3>
      <p class="text-sm text-gray-600 mt-1">Select build, complete review information, and submit.</p>
    </div>
  </div>
</section>

<section id="xcode-setup" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Xcode Project Setup</h2>

  <div class="space-y-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">General Settings</h3>
      <p class="text-gray-600 mb-4">In Xcode, select your target → General tab:</p>
      <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre class="text-gray-100 text-sm"><code>Bundle Identifier: com.yourcompany.appname
Version: 1.0.0 (marketing version)
Build: 1 (increment for each upload)
Minimum Deployments: iOS 16.0+ (recommended)
Device Orientation: Select supported orientations
App Icons Source: AppIcon (asset catalog)</code></pre>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Info.plist Configuration</h3>
      <p class="text-gray-600 mb-4">Essential keys for App Store submission:</p>
      <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre class="text-gray-100 text-sm"><code>&lt;key&gt;CFBundleDisplayName&lt;/key&gt;
&lt;string&gt;Your App Name&lt;/string&gt;

&lt;!-- Privacy usage descriptions (required if used) --&gt;
&lt;key&gt;NSCameraUsageDescription&lt;/key&gt;
&lt;string&gt;We need camera access to scan documents&lt;/string&gt;

&lt;key&gt;NSPhotoLibraryUsageDescription&lt;/key&gt;
&lt;string&gt;We need photo access to save images&lt;/string&gt;

&lt;key&gt;NSLocationWhenInUseUsageDescription&lt;/key&gt;
&lt;string&gt;We need location to show nearby stores&lt;/string&gt;

&lt;!-- Required for networking --&gt;
&lt;key&gt;NSAppTransportSecurity&lt;/key&gt;
&lt;dict&gt;
    &lt;key&gt;NSAllowsArbitraryLoads&lt;/key&gt;
    &lt;false/&gt;
&lt;/dict&gt;</code></pre>
      </div>
      <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p class="text-yellow-800 text-sm"><strong>Important:</strong> Every permission your app requests MUST have a usage description explaining why. Vague descriptions like "for app functionality" will be rejected.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Build Settings</h3>
      <div class="space-y-3">
        <div class="flex justify-between items-center py-2 border-b border-gray-100">
          <span class="text-gray-700">Build Active Architecture Only</span>
          <span class="text-gray-500 text-sm">No (Release)</span>
        </div>
        <div class="flex justify-between items-center py-2 border-b border-gray-100">
          <span class="text-gray-700">Enable Bitcode</span>
          <span class="text-gray-500 text-sm">Yes (deprecated in Xcode 14+)</span>
        </div>
        <div class="flex justify-between items-center py-2 border-b border-gray-100">
          <span class="text-gray-700">Swift Language Version</span>
          <span class="text-gray-500 text-sm">Swift 5 or later</span>
        </div>
        <div class="flex justify-between items-center py-2">
          <span class="text-gray-700">Debug Information Format</span>
          <span class="text-gray-500 text-sm">DWARF with dSYM File</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="signing" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Signing & Provisioning</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Automatic Signing (Recommended)</h3>
      <ol class="space-y-3 text-gray-600 text-sm">
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
          <span>Select target → Signing & Capabilities</span>
        </li>
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
          <span>Check "Automatically manage signing"</span>
        </li>
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
          <span>Select your Team (Apple Developer account)</span>
        </li>
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
          <span>Xcode creates certificates and profiles automatically</span>
        </li>
      </ol>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Manual Signing</h3>
      <ol class="space-y-3 text-gray-600 text-sm">
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
          <span>Create Distribution Certificate in Developer Portal</span>
        </li>
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
          <span>Create App Store Provisioning Profile</span>
        </li>
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
          <span>Download and install both in Keychain/Xcode</span>
        </li>
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
          <span>Select profile in Xcode signing settings</span>
        </li>
      </ol>
    </div>
  </div>

  <div class="mt-6 bg-red-50 border border-red-200 rounded-xl p-5">
    <h4 class="font-semibold text-red-900 mb-2">Common Signing Errors</h4>
    <ul class="space-y-2 text-red-800 text-sm">
      <li><strong>"No signing certificate"</strong> → Re-download certificate from Developer Portal or use automatic signing</li>
      <li><strong>"Provisioning profile doesn't match"</strong> → Bundle ID in Xcode must match the profile's App ID exactly</li>
      <li><strong>"Certificate has expired"</strong> → Create new certificate in Developer Portal and update profiles</li>
    </ul>
  </div>
</section>

<section id="app-store-connect" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">App Store Connect Setup</h2>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">Create New App</h3>
    <ol class="space-y-4 text-gray-600">
      <li class="flex gap-3">
        <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
        <div>
          <span class="font-medium text-gray-900">Go to App Store Connect → Apps → "+"</span>
          <p class="text-sm mt-1">Select "New App" and choose iOS platform</p>
        </div>
      </li>
      <li class="flex gap-3">
        <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
        <div>
          <span class="font-medium text-gray-900">Fill in Basic Information</span>
          <p class="text-sm mt-1">Name (30 chars), Primary Language, Bundle ID, SKU (unique identifier)</p>
        </div>
      </li>
      <li class="flex gap-3">
        <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
        <div>
          <span class="font-medium text-gray-900">Complete App Information</span>
          <p class="text-sm mt-1">Subtitle, Category, Content Rights, Age Rating</p>
        </div>
      </li>
      <li class="flex gap-3">
        <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
        <div>
          <span class="font-medium text-gray-900">Add Screenshots & Preview</span>
          <p class="text-sm mt-1">Required for 6.7", 6.5", 5.5" iPhones and 12.9" iPad</p>
        </div>
      </li>
      <li class="flex gap-3">
        <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">5</span>
        <div>
          <span class="font-medium text-gray-900">Set Pricing & Availability</span>
          <p class="text-sm mt-1">Free or paid, country availability, pre-orders</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<section id="archive-upload" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Archive & Upload</h2>

  <div class="space-y-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Step 1: Create Archive</h3>
      <ol class="space-y-3 text-gray-600 text-sm">
        <li>1. Select "Any iOS Device (arm64)" as build destination</li>
        <li>2. Product → Archive (Cmd + Shift + A)</li>
        <li>3. Wait for archive to complete (opens Organizer automatically)</li>
      </ol>
      <div class="mt-4 bg-gray-900 rounded-lg p-4">
        <pre class="text-gray-100 text-sm"><code># Or via command line:
xcodebuild -workspace YourApp.xcworkspace \\
  -scheme YourApp \\
  -configuration Release \\
  -archivePath ./build/YourApp.xcarchive \\
  archive</code></pre>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Step 2: Upload to App Store Connect</h3>
      <ol class="space-y-3 text-gray-600 text-sm">
        <li>1. In Organizer, select the archive → "Distribute App"</li>
        <li>2. Choose "App Store Connect" → "Upload"</li>
        <li>3. Select distribution options (usually keep defaults)</li>
        <li>4. Choose signing (automatic or manual)</li>
        <li>5. Review and click "Upload"</li>
      </ol>
      <div class="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p class="text-blue-800 text-sm"><strong>Processing Time:</strong> After upload, Apple processes your build (5-30 minutes). You'll receive an email when it's ready to submit.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Alternative: Transporter App</h3>
      <p class="text-gray-600 text-sm mb-4">For CI/CD pipelines or when Xcode upload fails:</p>
      <ol class="space-y-2 text-gray-600 text-sm">
        <li>1. Export archive as .ipa (Xcode Organizer → Export)</li>
        <li>2. Download Transporter from Mac App Store</li>
        <li>3. Drag .ipa into Transporter and click "Deliver"</li>
      </ol>
    </div>
  </div>
</section>

<section id="common-issues" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Common Swift/SwiftUI Issues</h2>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">ITMS-90683: Missing Purpose String</h3>
      <p class="text-gray-600 text-sm mb-3">Your app uses a permission (camera, location, etc.) without an Info.plist usage description.</p>
      <div class="bg-green-50 rounded-lg p-3">
        <p class="text-green-800 text-sm"><strong>Fix:</strong> Add NSCameraUsageDescription, NSLocationWhenInUseUsageDescription, etc. with user-friendly explanations.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">ITMS-90725: SDK Contains Simulator Slices</h3>
      <p class="text-gray-600 text-sm mb-3">A third-party framework includes simulator architectures (x86_64).</p>
      <div class="bg-green-50 rounded-lg p-3">
        <p class="text-green-800 text-sm"><strong>Fix:</strong> Use XCFrameworks instead of fat frameworks, or add a build script to strip simulator architectures.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">ITMS-90338: Non-Public API Usage</h3>
      <p class="text-gray-600 text-sm mb-3">Your code or a dependency uses private Apple APIs.</p>
      <div class="bg-green-50 rounded-lg p-3">
        <p class="text-green-800 text-sm"><strong>Fix:</strong> Remove the offending code or update the third-party library. Common culprits: jailbreak detection, runtime introspection.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Missing App Icons</h3>
      <p class="text-gray-600 text-sm mb-3">App Store Connect requires a 1024x1024 icon, and your asset catalog needs all sizes.</p>
      <div class="bg-green-50 rounded-lg p-3">
        <p class="text-green-800 text-sm"><strong>Fix:</strong> Use an icon generator or Xcode 15+'s single-size icon feature. Ensure no alpha channel in App Store icon.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">SwiftUI Preview Crashes in Production</h3>
      <p class="text-gray-600 text-sm mb-3">Preview-only code or #if DEBUG guards not properly configured.</p>
      <div class="bg-green-50 rounded-lg p-3">
        <p class="text-green-800 text-sm"><strong>Fix:</strong> Wrap preview providers in #if DEBUG. Test release builds on device before submission.</p>
      </div>
    </div>
  </div>
</section>

<section id="optimization" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Swift App Optimization Tips</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Performance</h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Enable Whole Module Optimization in Release</li>
        <li>• Use @MainActor for UI updates</li>
        <li>• Profile with Instruments before submission</li>
        <li>• Minimize app launch time (&lt; 400ms cold start)</li>
        <li>• Use lazy loading for heavy views</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">App Size</h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Enable App Thinning (automatic)</li>
        <li>• Compress images with HEIC format</li>
        <li>• Remove unused assets and code</li>
        <li>• Use On-Demand Resources for large assets</li>
        <li>• Check for duplicate embedded frameworks</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">SwiftUI Best Practices</h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Use @StateObject for owned references</li>
        <li>• Prefer @EnvironmentObject for shared state</li>
        <li>• Extract complex views into separate files</li>
        <li>• Use .task modifier for async work</li>
        <li>• Test on older iOS versions you support</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Accessibility</h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Add accessibility labels to images</li>
        <li>• Support Dynamic Type for text</li>
        <li>• Test with VoiceOver enabled</li>
        <li>• Ensure sufficient color contrast</li>
        <li>• Use semantic colors (.label, .background)</li>
      </ul>
    </div>
  </div>
</section>

<!-- Related Guides Section -->
<section class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
  <div class="grid md:grid-cols-3 gap-4">
    <a href="/react-native-app-store-submission" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-cyan-600 mb-2">React Native Submission</h3>
      <p class="text-sm text-gray-600">Cross-platform alternative using JavaScript.</p>
    </a>
    <a href="/flutter-app-store-submission" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">Flutter Submission</h3>
      <p class="text-sm text-gray-600">Cross-platform alternative using Dart.</p>
    </a>
    <a href="/app-store-screenshot-sizes-2025" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">Screenshot Sizes 2025</h3>
      <p class="text-sm text-gray-600">All required screenshot dimensions.</p>
    </a>
  </div>
</section>

<!-- CTA Section -->
<section class="mb-12">
  <div class="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
    <div class="max-w-2xl">
      <h2 class="text-2xl font-bold mb-4">Ready to Submit Your Swift App?</h2>
      <p class="text-white/90 mb-6">Our AI-powered review tool checks your app against all App Store guidelines before you submit, catching issues that could cause rejection.</p>
      <a href="/ai-review" class="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
        Check Your App
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Should I use UIKit or SwiftUI for App Store submission?</h3>
      <p class="text-gray-600">Both work fine for App Store submission. SwiftUI apps often have fewer HIG violations since they use native components. For new projects, SwiftUI is recommended unless you need UIKit-specific features.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">What iOS version should I target?</h3>
      <p class="text-gray-600">iOS 16.0+ is a good baseline for 2025, covering 95%+ of devices. If using SwiftUI, iOS 17+ gives you the latest features. Check Apple's adoption stats in your App Store Connect analytics.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">How do I handle the build number for updates?</h3>
      <p class="text-gray-600">Increment the build number (CFBundleVersion) for every upload. You can keep the same version number (CFBundleShortVersionString) for TestFlight builds, but must increment for production updates.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">My archive is stuck at "Processing" - what do I do?</h3>
      <p class="text-gray-600">Processing can take 5-30 minutes. If stuck longer, check your email for processing errors. Common issues: invalid icon format, missing entitlements, or provisioning profile mismatch.</p>
    </div>
  </div>
</section>
`
};

async function main() {
  console.log('Seeding Swift/SwiftUI Submission Guide...');

  await prisma.article.upsert({
    where: { slug: swiftArticle.slug },
    update: {
      title: swiftArticle.title,
      description: swiftArticle.description,
      content: swiftArticle.content,
      category: swiftArticle.category,
      isHub: swiftArticle.isHub,
      metaKeywords: swiftArticle.metaKeywords,
      toc: swiftArticle.toc,
      updatedAt: new Date(),
    },
    create: {
      slug: swiftArticle.slug,
      title: swiftArticle.title,
      description: swiftArticle.description,
      content: swiftArticle.content,
      category: swiftArticle.category,
      isHub: swiftArticle.isHub,
      metaKeywords: swiftArticle.metaKeywords,
      toc: swiftArticle.toc,
      publishedAt: new Date(),
    },
  });

  console.log('✓ Swift/SwiftUI Submission Guide created/updated');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

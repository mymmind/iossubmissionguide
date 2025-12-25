import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const appSizeArticle = {
  slug: 'ios-app-size-optimization-reduce-bundle-size',
  title: 'iOS App Size Optimization: How to Reduce Your Bundle Size',
  description: 'Complete guide to reducing iOS app size. Learn about App Thinning, asset catalogs, on-demand resources, code optimization, and avoiding the 200MB cellular download limit.',
  category: 'Technical',
  isHub: false,
  metaKeywords: [
    'ios app size',
    'reduce app size',
    'app thinning',
    'ios bundle size',
    'on-demand resources',
    'app slicing',
    'bitcode',
    '200mb app store limit',
    'asset catalog optimization',
    'reduce ipa size'
  ],
  toc: {
    title: "App Size Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#why-size-matters", label: "Why Size Matters" },
          { href: "#measure-first", label: "Measure Your App Size" },
          { href: "#app-thinning", label: "App Thinning" }
        ]
      },
      {
        section: "Optimization",
        items: [
          { href: "#assets", label: "Asset Optimization" },
          { href: "#code", label: "Code & Dependencies" },
          { href: "#on-demand", label: "On-Demand Resources" },
          { href: "#advanced", label: "Advanced Techniques" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full">Technical Guide</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">iOS App Size Optimization: Shrink Your Bundle</h1>
  <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">Your app's download size directly affects conversion rates. Here's everything you need to know about reducing your iOS app bundle from bloated to lean.</p>
</header>

<div class="bg-apple-light dark:bg-gray-800 rounded-2xl p-6 mb-12">
  <h3 class="font-bold text-apple-dark dark:text-white mb-3 flex items-center gap-2">
    <span class="text-xl">📦</span> TL;DR - Key Size Limits
  </h3>
  <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-0">
    <li>• <strong>200MB:</strong> Maximum size for cellular download (users need WiFi above this)</li>
    <li>• <strong>4GB:</strong> Maximum total app size in App Store</li>
    <li>• App Thinning automatically reduces what each device downloads</li>
    <li>• Every 10MB reduction can improve conversion by 1-2%</li>
    <li>• On-demand resources let you load assets only when needed</li>
  </ul>
</div>

<section id="why-size-matters" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why App Size Matters</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    App size isn't just a technical metric—it directly impacts how many people download your app. Research from Google found that for every 6MB increase in app size, install conversion rates drop by 1%. Apple hasn't published similar numbers, but the logic is the same: bigger apps mean more friction.
  </p>

  <div class="grid md:grid-cols-3 gap-4 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center">
      <div class="text-3xl font-bold text-red-500 mb-2">200MB</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Cellular Download Limit</div>
    </div>
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center">
      <div class="text-3xl font-bold text-amber-500 mb-2">~1-2%</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Conversion Drop per 10MB</div>
    </div>
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center">
      <div class="text-3xl font-bold text-apple-blue mb-2">4GB</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Maximum App Size</div>
    </div>
  </div>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    The 200MB limit is the critical threshold. Above that, users on cellular need to either wait for WiFi or manually allow the download in Settings. Most won't bother. That "Download on WiFi" prompt has killed countless potential installs.
  </p>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">The Real-World Impact</h4>
    <p class="text-amber-800 dark:text-amber-400 text-sm mb-0">
      A developer shared on Reddit: "We dropped from 240MB to 180MB. Downloads increased 23% the following month." That's the power of getting under the cellular limit. Even if your users have unlimited data, the friction of waiting for WiFi loses them.
    </p>
  </div>
</section>

<section id="measure-first" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Measure Your App Size First</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Before optimizing anything, you need to understand what's actually taking up space. The file size you see in Finder is NOT what users download—Apple applies compression and App Thinning.
  </p>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Method 1: App Store Connect</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    The most accurate way to see your real-world size:
  </p>

  <ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li>Upload a build to App Store Connect</li>
    <li>Go to TestFlight or the App Store tab</li>
    <li>Click on your build and find "App File Sizes"</li>
    <li>You'll see the compressed download size for each device</li>
  </ol>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Method 2: Xcode App Size Report</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    For quick local checks:
  </p>

  <ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li>Archive your app (Product → Archive)</li>
    <li>Select your archive, click "Distribute App"</li>
    <li>Choose "Development" or "Ad Hoc"</li>
    <li>Check "App Thinning" and select a specific device</li>
    <li>Export—you'll get a size report showing compressed sizes</li>
  </ol>

  <div class="bg-gray-900 rounded-xl p-4 mb-6">
    <div class="text-gray-400 text-xs mb-2">Terminal - Alternative method</div>
    <pre class="text-green-400 text-sm overflow-x-auto"><code># Generate app size report from archive
xcodebuild -exportArchive -archivePath MyApp.xcarchive \\
  -exportPath ./export \\
  -exportOptionsPlist ExportOptions.plist \\
  -allowProvisioningUpdates

# Check the App Thinning Size Report.txt in the export folder</code></pre>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Method 3: Analyzing the IPA</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    To see exactly what's taking up space:
  </p>

  <div class="bg-gray-900 rounded-xl p-4 mb-6">
    <pre class="text-green-400 text-sm overflow-x-auto"><code># Rename .ipa to .zip and extract
mv MyApp.ipa MyApp.zip
unzip MyApp.zip -d extracted/

# Find largest files
find extracted -type f -exec ls -la {} \\; | sort -k 5 -rn | head -20

# Or use du to see folder sizes
du -sh extracted/Payload/MyApp.app/*</code></pre>
  </div>
</section>

<section id="app-thinning" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Understanding App Thinning</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    App Thinning is Apple's umbrella term for three technologies that reduce download size. It's been around since iOS 9, and you get most of it for free.
  </p>

  <div class="grid md:grid-cols-3 gap-6 mb-8">
    <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40 rounded-xl p-6">
      <h3 class="font-bold text-blue-900 dark:text-blue-300 mb-4">App Slicing</h3>
      <p class="text-blue-800 dark:text-blue-400 text-sm mb-0">
        The App Store delivers only the assets and code that match the user's device. An iPhone 15 user won't download iPad-only assets or @1x images.
      </p>
    </div>

    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl p-6">
      <h3 class="font-bold text-green-900 dark:text-green-300 mb-4">Bitcode</h3>
      <p class="text-green-800 dark:text-green-400 text-sm mb-0">
        <strong>Deprecated as of Xcode 14.</strong> Previously let Apple recompile your app for specific devices. Now removed—don't worry about it.
      </p>
    </div>

    <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/40 rounded-xl p-6">
      <h3 class="font-bold text-purple-900 dark:text-purple-300 mb-4">On-Demand Resources</h3>
      <p class="text-purple-800 dark:text-purple-400 text-sm mb-0">
        Download specific assets only when needed. Perfect for game levels, tutorials, or region-specific content.
      </p>
    </div>
  </div>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    App Slicing happens automatically if you're using Asset Catalogs correctly. The key is to <strong>never embed device-specific resources directly</strong>—always use Asset Catalogs so the App Store knows what can be sliced out.
  </p>
</section>

<section id="assets" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Asset Optimization</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Assets are almost always the biggest culprit for bloated apps. Images, videos, and audio files often account for 60-80% of total app size.
  </p>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Images</h3>

  <div class="space-y-4 mb-8">
    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="font-bold text-apple-blue">1</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Use Asset Catalogs</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Always put images in .xcassets. This enables App Slicing and better compression. Direct file references bypass optimization entirely.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="font-bold text-green-600">2</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Use Vector PDFs or SVGs</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">For icons and simple graphics, use PDFs set to "Single Scale" in Asset Catalogs. One file serves all resolutions. Check "Preserve Vector Data" for sharp scaling.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="font-bold text-purple-600">3</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Choose the Right Format</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
          <strong>HEIF:</strong> Best compression, 50% smaller than JPEG, iOS 11+<br>
          <strong>PNG:</strong> For transparency, lossless<br>
          <strong>JPEG:</strong> Photos without transparency<br>
          <strong>WebP:</strong> Good compression, iOS 14+
        </p>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Consider dropping @1x assets—no device has used 1x resolution since iPhone 3GS.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="font-bold text-amber-600">4</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Compress Before Adding</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Use ImageOptim, TinyPNG, or similar tools before importing. Don't rely on Xcode's compression—pre-optimized assets are always smaller.</p>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Audio & Video</h3>

  <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li><strong>Audio:</strong> Use AAC or MP3 instead of WAV/AIFF. A 44.1kHz stereo WAV is 10MB/minute; AAC at 128kbps is under 1MB/minute.</li>
    <li><strong>Video:</strong> Stream from a server instead of bundling. If you must bundle, use HEVC (H.265) for iOS 11+ devices.</li>
    <li><strong>Sound Effects:</strong> Use CAF format with IMA4 compression. Perfect for short sounds in games.</li>
  </ul>

  <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-green-900 dark:text-green-300 mb-2">Quick Win: Find Duplicate Assets</h4>
    <p class="text-green-800 dark:text-green-400 text-sm mb-0">
      Run <code>fdupes -r YourProject/</code> or use a tool like Gemini to find duplicate files. It's common to have the same image imported multiple times with different names.
    </p>
  </div>
</section>

<section id="code" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Code & Dependencies</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Compiled code is usually 10-30% of your app, but dependencies can balloon that quickly. A "small" SDK might add 10-50MB.
  </p>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Build Settings</h3>

  <div class="bg-gray-900 rounded-xl p-4 mb-6">
    <div class="text-gray-400 text-xs mb-2">Important Build Settings for Size</div>
    <pre class="text-green-400 text-sm overflow-x-auto"><code># In your xcconfig or Build Settings:

# Enable optimizations for Release
SWIFT_OPTIMIZATION_LEVEL = -Osize  # Optimize for size over speed
GCC_OPTIMIZATION_LEVEL = s         # Same for Objective-C

# Strip debug symbols
STRIP_INSTALLED_PRODUCT = YES
STRIP_STYLE = all
COPY_PHASE_STRIP = YES

# Remove dead code
DEAD_CODE_STRIPPING = YES

# Link-Time Optimization (can significantly reduce size)
LLVM_LTO = YES  # or Monolithic for more aggressive</code></pre>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Audit Your Dependencies</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    Third-party SDKs are often the hidden size killer. Here's a typical example:
  </p>

  <div class="overflow-x-auto mb-6">
    <table class="w-full border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden text-sm">
      <thead class="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">SDK</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Typical Size</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Notes</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
        <tr class="bg-white dark:bg-gray-900">
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">Firebase Analytics</td>
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">~5-8MB</td>
          <td class="px-4 py-3 text-gray-600 dark:text-gray-400">Reasonable</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-800">
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">Firebase Full Suite</td>
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">~20-40MB</td>
          <td class="px-4 py-3 text-gray-600 dark:text-gray-400">Only import what you use</td>
        </tr>
        <tr class="bg-white dark:bg-gray-900">
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">Facebook SDK</td>
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">~10-15MB</td>
          <td class="px-4 py-3 text-gray-600 dark:text-gray-400">Can use lightweight alternatives</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-800">
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">Google Maps SDK</td>
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">~50-80MB</td>
          <td class="px-4 py-3 text-gray-600 dark:text-gray-400">Consider MapKit instead</td>
        </tr>
        <tr class="bg-white dark:bg-gray-900">
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">AWS SDK (full)</td>
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">~30-50MB</td>
          <td class="px-4 py-3 text-gray-600 dark:text-gray-400">Import only needed modules</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-800">
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">Realm</td>
          <td class="px-4 py-3 text-gray-700 dark:text-gray-300">~15-20MB</td>
          <td class="px-4 py-3 text-gray-600 dark:text-gray-400">Consider Core Data for simpler needs</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">Before Adding Any SDK, Ask:</h4>
    <ul class="text-amber-800 dark:text-amber-400 text-sm space-y-1 mb-0">
      <li>• How much size does it add? (Check their documentation)</li>
      <li>• Can I use a lighter alternative or Apple's built-in APIs?</li>
      <li>• Am I using more than 20% of its features?</li>
      <li>• Can I make it load lazily or on-demand?</li>
    </ul>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Swift-Specific Tips</h3>

  <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li><strong>Avoid generics abuse:</strong> Heavy use of generics causes code duplication in the binary. Sometimes concrete types are better.</li>
    <li><strong>Use @inlinable sparingly:</strong> It copies code to every call site, increasing size.</li>
    <li><strong>Prefer static over dynamic dispatch:</strong> Using <code>final</code> classes and <code>private</code> methods enables better optimization.</li>
    <li><strong>Check for bloated enums:</strong> Associated values in enums can unexpectedly increase code size.</li>
  </ul>
</section>

<section id="on-demand" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">On-Demand Resources</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    On-Demand Resources (ODR) let you host assets on the App Store and download them only when needed. Perfect for apps with content that not every user accesses.
  </p>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Good Candidates for ODR</h3>

  <div class="grid md:grid-cols-2 gap-4 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Games</h4>
      <ul class="text-gray-600 dark:text-gray-400 text-sm space-y-1">
        <li>• Later game levels</li>
        <li>• Character/skin packs</li>
        <li>• Tutorial videos</li>
        <li>• Region-specific content</li>
      </ul>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Productivity Apps</h4>
      <ul class="text-gray-600 dark:text-gray-400 text-sm space-y-1">
        <li>• Template libraries</li>
        <li>• Language packs</li>
        <li>• Advanced feature assets</li>
        <li>• Onboarding videos</li>
      </ul>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Implementation</h3>

  <div class="bg-gray-900 rounded-xl p-4 mb-6">
    <div class="text-gray-400 text-xs mb-2">Setting up On-Demand Resources</div>
    <pre class="text-green-400 text-sm overflow-x-auto"><code>// 1. In Xcode, select your asset in the Asset Catalog
// 2. In the Attributes Inspector, set "On-Demand Resource Tags"
// 3. Give it a meaningful tag like "level-2" or "premium-templates"

// Request resources in code:
let tags: Set<String> = ["level-2"]
let resourceRequest = NSBundleResourceRequest(tags: tags)

resourceRequest.beginAccessingResources { error in
    if let error = error {
        print("Failed to download: \\(error)")
        return
    }

    // Resources are now available
    // Load your assets as normal
    let image = UIImage(named: "level-2-background")
}

// When done, release the resources
resourceRequest.endAccessingResources()</code></pre>
  </div>

  <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-blue-900 dark:text-blue-300 mb-2">ODR Limits</h4>
    <ul class="text-blue-800 dark:text-blue-400 text-sm space-y-1 mb-0">
      <li>• <strong>Total hosted:</strong> 20GB maximum on App Store</li>
      <li>• <strong>Initial install tags:</strong> Content that downloads with the app, still counts toward app size</li>
      <li>• <strong>Prefetch tags:</strong> Downloads after install completes</li>
      <li>• <strong>Download-only tags:</strong> Only downloaded when explicitly requested</li>
    </ul>
  </div>
</section>

<section id="advanced" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Advanced Techniques</h2>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Dynamic Frameworks vs Static Libraries</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    Dynamic frameworks add overhead because each framework includes its own copy of the Swift runtime (if Swift is used). For size optimization:
  </p>

  <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li>Prefer static libraries where possible</li>
    <li>If using CocoaPods, add <code>use_frameworks! :linkage => :static</code> to your Podfile</li>
    <li>For SPM, static linking is the default</li>
  </ul>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Remove Unused Architectures</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    This matters less now with App Slicing, but during development:
  </p>

  <div class="bg-gray-900 rounded-xl p-4 mb-6">
    <pre class="text-green-400 text-sm overflow-x-auto"><code># Check architectures in a framework
lipo -info Framework.framework/Framework

# Remove simulator architectures from release builds (if needed)
lipo -remove x86_64 -remove i386 -output Framework Framework</code></pre>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Use App Clips for Preview</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    If your app is large by nature, consider creating an App Clip. App Clips must be under 15MB (50MB for experiences from Safari) and let users try your app before committing to the full download.
  </p>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Lazy Loading of Features</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    For features most users won't use immediately, consider:
  </p>

  <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li>Loading view controllers lazily instead of in storyboards</li>
    <li>Using container views that load content on demand</li>
    <li>Deferring SDK initialization until the feature is accessed</li>
  </ul>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Monitor Size in CI/CD</h3>

  <div class="bg-gray-900 rounded-xl p-4 mb-6">
    <div class="text-gray-400 text-xs mb-2">Add to your CI pipeline</div>
    <pre class="text-green-400 text-sm overflow-x-auto"><code># After building, check size
APP_SIZE=$(stat -f%z "build/App.ipa" 2>/dev/null || stat -c%s "build/App.ipa")
MAX_SIZE=209715200  # 200MB in bytes

if [ "$APP_SIZE" -gt "$MAX_SIZE" ]; then
    echo "WARNING: App size ($APP_SIZE bytes) exceeds 200MB cellular limit"
    exit 1
fi</code></pre>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What's the difference between "Download Size" and "Install Size"?</h3>
      <p class="text-gray-600 dark:text-gray-400">Download size is the compressed size users download from the App Store. Install size is the uncompressed size on the device, which is usually 2-3x larger. The 200MB limit applies to download size.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Does Swift bloat my app compared to Objective-C?</h3>
      <p class="text-gray-600 dark:text-gray-400">Not anymore. Since iOS 12.2, the Swift runtime is included in the OS. Your app no longer bundles Swift libraries. However, Swift can generate more code for generic-heavy designs, so architecture still matters.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Should I use HEIF images everywhere?</h3>
      <p class="text-gray-600 dark:text-gray-400">HEIF is great for photos and complex images, but for simple graphics and icons, PDFs or PNGs with transparency are often better. HEIF shines for photographs and detailed textures.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Can I use ZIP files to compress assets in my app bundle?</h3>
      <p class="text-gray-600 dark:text-gray-400">You can, but it rarely helps. The App Store already compresses your IPA. Pre-zipping assets adds decompression overhead and may not reduce download size. Use properly optimized original formats instead.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Do localizations significantly increase app size?</h3>
      <p class="text-gray-600 dark:text-gray-400">Text localizations are tiny (kilobytes). But localized assets (images with text, different graphics per region) can add up. Use On-Demand Resources for region-specific assets if size is a concern.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">How much size does Core ML add?</h3>
      <p class="text-gray-600 dark:text-gray-400">Core ML models can be huge—anywhere from 1MB to 500MB+. Use model quantization to reduce size (often 4x smaller with minimal accuracy loss). Consider server-side ML for very large models.</p>
    </div>
  </div>
</section>

<div class="mt-16 p-8 bg-gradient-to-br from-apple-blue/5 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-3xl border border-apple-blue/10 dark:border-blue-800/40">
  <h3 class="text-2xl font-bold text-apple-dark dark:text-white mb-4">Optimize Before You Submit</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">
    Our AI Review Toolkit can help identify potential App Store issues before submission. Get your app through review faster—including size-related problems.
  </p>
  <a href="/ai-review" class="inline-flex items-center gap-2 px-6 py-3 bg-apple-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
    Try the AI Toolkit
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </a>
</div>
`
};

async function main() {
  console.log('Seeding App Size Optimization article...');

  await prisma.article.upsert({
    where: { slug: appSizeArticle.slug },
    update: {
      title: appSizeArticle.title,
      description: appSizeArticle.description,
      content: appSizeArticle.content,
      category: appSizeArticle.category,
      metaKeywords: appSizeArticle.metaKeywords,
      isHub: appSizeArticle.isHub,
      toc: appSizeArticle.toc,
      updatedAt: new Date(),
    },
    create: appSizeArticle,
  });

  console.log('App Size Optimization article seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

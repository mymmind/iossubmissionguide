import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const flutterArticle = {
  slug: 'flutter-app-store-submission',
  title: 'Flutter App Store Submission Guide 2025: iOS Deployment Walkthrough',
  description: 'Complete guide to submitting your Flutter app to the Apple App Store. Covers Xcode configuration, code signing, common Flutter-specific rejections, and optimization tips.',
  category: 'framework-guides',
  isHub: false,
  metaKeywords: [
    'flutter app store',
    'flutter ios submission',
    'submit flutter to app store',
    'flutter xcode',
    'flutter code signing',
    'flutter app store rejection',
    'flutter ios build',
    'flutter testflight',
    'flutter app store connect',
    'flutter ios release'
  ],
  toc: {
    title: "Flutter iOS Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#prerequisites", label: "Prerequisites" },
          { href: "#xcode-setup", label: "Xcode Project Setup" },
          { href: "#code-signing", label: "Code Signing" },
          { href: "#build-release", label: "Building for Release" },
          { href: "#app-store-connect", label: "App Store Connect" }
        ]
      },
      {
        section: "Optimization",
        items: [
          { href: "#flutter-rejections", label: "Flutter-Specific Rejections" },
          { href: "#performance", label: "Performance Optimization" },
          { href: "#app-size", label: "Reducing App Size" }
        ]
      },
      {
        section: "Reference",
        items: [
          { href: "#troubleshooting", label: "Troubleshooting" },
          { href: "#checklist", label: "Pre-Submission Checklist" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-cyan-100 text-cyan-800 rounded-full">Framework Guide</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">Flutter</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Flutter App Store Submission Guide 2025</h1>
  <p class="text-xl text-gray-600 max-w-3xl">Everything you need to deploy your Flutter app to the Apple App Store—from Xcode configuration to avoiding common Flutter-specific rejection pitfalls.</p>
</header>

<!-- Quick Answer Box -->
<div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6 mb-10">
  <h2 class="text-lg font-semibold text-cyan-900 mb-3">How to Submit a Flutter App to the App Store</h2>
  <p class="text-gray-700 mb-4">To submit a Flutter app: 1) Run <code>flutter build ios --release</code>, 2) Open the Xcode workspace and configure signing, 3) Archive via Product → Archive, 4) Upload to App Store Connect, 5) Fill metadata and submit for review. Most Flutter apps are reviewed within 24-48 hours.</p>
  <div class="flex items-center gap-2 text-sm text-cyan-700">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>
    <span>Build time: ~5-10 minutes | Review: 24-48 hours</span>
  </div>
</div>

<section id="prerequisites" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">1</span>
        Development Environment
      </h3>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Mac with latest Xcode (15.0+)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Flutter SDK 3.16+ (latest stable)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>CocoaPods installed</span>
        </li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">2</span>
        Apple Developer Account
      </h3>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Enrolled in Apple Developer Program ($99/year)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>App ID created in Developer Portal</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Distribution certificate ready</span>
        </li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">3</span>
        App Assets Ready
      </h3>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>1024x1024 app icon (no transparency)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Screenshots for required device sizes</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Privacy policy URL</span>
        </li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-cyan-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">4</span>
        Verify Flutter Setup
      </h3>
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code># Run Flutter doctor to verify
flutter doctor

# Should show all green checkmarks for iOS</code></pre>
    </div>
  </div>
</section>

<section id="xcode-setup" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Xcode Project Setup</h2>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 1: Open the Xcode Workspace</h3>
    </div>
    <div class="p-6">
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code># From your Flutter project root
cd ios
open Runner.xcworkspace</code></pre>
      <div class="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p class="text-amber-800 text-sm"><strong>Important:</strong> Always open <code>.xcworkspace</code>, not <code>.xcodeproj</code>. The workspace includes CocoaPods dependencies that Flutter needs.</p>
      </div>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 2: Configure Bundle Identifier</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">In Xcode, select the Runner target and go to "Signing & Capabilities":</p>
      <ol class="space-y-2 text-gray-600">
        <li>1. Set your <strong>Bundle Identifier</strong> (e.g., <code>com.yourcompany.yourapp</code>)</li>
        <li>2. Select your <strong>Team</strong> from the dropdown</li>
        <li>3. Enable "Automatically manage signing" (recommended for beginners)</li>
      </ol>
      <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p class="text-blue-800 text-sm"><strong>Tip:</strong> The Bundle ID must match what you registered in App Store Connect. It cannot be changed after your first submission.</p>
      </div>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 3: Update iOS Deployment Target</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">Flutter defaults to iOS 12.0, but you may want to update this:</p>
      <ul class="space-y-2 text-gray-600">
        <li>• <strong>iOS 12.0</strong> - Maximum compatibility (Flutter default)</li>
        <li>• <strong>iOS 13.0</strong> - Required for SwiftUI, Sign in with Apple</li>
        <li>• <strong>iOS 14.0</strong> - Required for App Clips, widgets</li>
      </ul>
      <p class="text-gray-600 mt-4">Update in both:</p>
      <ul class="list-disc ml-5 text-gray-600">
        <li>Xcode → Runner → General → Deployment Info</li>
        <li><code>ios/Podfile</code> - change <code>platform :ios, '12.0'</code></li>
      </ul>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 4: Configure App Icons</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">Flutter's default icon won't pass review. Update your icons:</p>
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4"><code># Install flutter_launcher_icons package
flutter pub add flutter_launcher_icons --dev

# Add to pubspec.yaml:
flutter_launcher_icons:
  ios: true
  image_path: "assets/icon/icon.png"
  remove_alpha_ios: true  # Critical - removes transparency

# Generate icons
dart run flutter_launcher_icons</code></pre>
      <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p class="text-red-800 text-sm"><strong>Common Rejection:</strong> iOS app icons cannot have transparency (alpha channel). Use <code>remove_alpha_ios: true</code> or manually flatten your icon.</p>
      </div>
    </div>
  </div>
</section>

<section id="code-signing" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Code Signing</h2>

  <div class="grid md:grid-cols-2 gap-6 mb-6">
    <div class="bg-white border border-green-200 rounded-xl p-6">
      <h3 class="font-semibold text-green-900 mb-4">Automatic Signing (Recommended)</h3>
      <ol class="space-y-3 text-gray-600">
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
          <span>Check "Automatically manage signing" in Xcode</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
          <span>Select your Team from the dropdown</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
          <span>Xcode creates certificates and profiles automatically</span>
        </li>
      </ol>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Manual Signing (CI/CD)</h3>
      <ol class="space-y-3 text-gray-600">
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
          <span>Create Distribution Certificate in Developer Portal</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
          <span>Create App Store Provisioning Profile</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
          <span>Download and select in Xcode</span>
        </li>
      </ol>
    </div>
  </div>

  <div class="p-6 bg-red-50 border border-red-200 rounded-xl">
    <h4 class="font-semibold text-red-900 mb-2">Common Signing Errors</h4>
    <ul class="space-y-2 text-red-800 text-sm">
      <li><strong>"No signing certificate"</strong> - Your certificate is missing or expired. Regenerate in Developer Portal.</li>
      <li><strong>"Profile doesn't match"</strong> - Bundle ID mismatch. Verify it matches exactly.</li>
      <li><strong>"Provisioning profile expired"</strong> - Profiles expire yearly. Regenerate and download.</li>
    </ul>
  </div>
</section>

<section id="build-release" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Building for Release</h2>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 1: Build the Flutter Release</h3>
    </div>
    <div class="p-6">
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code># Clean previous builds
flutter clean

# Get dependencies
flutter pub get

# Build iOS release
flutter build ios --release

# Or build IPA directly (requires Xcode config)
flutter build ipa --release</code></pre>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 2: Archive in Xcode</h3>
    </div>
    <div class="p-6">
      <ol class="space-y-3 text-gray-600">
        <li>1. Open <code>ios/Runner.xcworkspace</code> in Xcode</li>
        <li>2. Select <strong>"Any iOS Device (arm64)"</strong> as the destination (not a simulator)</li>
        <li>3. Go to <strong>Product → Archive</strong></li>
        <li>4. Wait for the build to complete (5-10 minutes)</li>
        <li>5. The Organizer window opens with your archive</li>
      </ol>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 3: Upload to App Store Connect</h3>
    </div>
    <div class="p-6">
      <ol class="space-y-3 text-gray-600">
        <li>1. In Organizer, select your archive and click <strong>"Distribute App"</strong></li>
        <li>2. Choose <strong>"App Store Connect"</strong> → <strong>"Upload"</strong></li>
        <li>3. Select distribution options (usually keep defaults)</li>
        <li>4. Review and click <strong>"Upload"</strong></li>
        <li>5. Wait for processing (10-30 minutes)</li>
      </ol>
      <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p class="text-blue-800 text-sm"><strong>Alternative:</strong> Use <code>flutter build ipa</code> and upload via Transporter app or <code>xcrun altool</code> for CI/CD pipelines.</p>
      </div>
    </div>
  </div>
</section>

<section id="app-store-connect" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">App Store Connect Setup</h2>

  <div class="grid gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Required Metadata</h3>
      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 class="font-medium text-gray-700 mb-2">App Information</h4>
          <ul class="space-y-1 text-gray-600">
            <li>• App name (30 characters max)</li>
            <li>• Subtitle (30 characters max)</li>
            <li>• Primary category</li>
            <li>• Privacy policy URL</li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-gray-700 mb-2">Version Information</h4>
          <ul class="space-y-1 text-gray-600">
            <li>• Description (4000 characters max)</li>
            <li>• Keywords (100 characters total)</li>
            <li>• Support URL</li>
            <li>• What's New (for updates)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Screenshot Requirements</h3>
      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 class="font-medium text-gray-700 mb-2">iPhone (Required)</h4>
          <ul class="space-y-1 text-gray-600">
            <li>• 6.7" - 1290 × 2796px</li>
            <li>• 6.5" - 1284 × 2778px</li>
            <li>• 5.5" - 1242 × 2208px</li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-gray-700 mb-2">iPad (If Supporting)</h4>
          <ul class="space-y-1 text-gray-600">
            <li>• 12.9" - 2048 × 2732px</li>
            <li>• 11" - 1668 × 2388px</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="flutter-rejections" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Flutter-Specific Rejection Reasons</h2>

  <div class="space-y-4">
    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">1</span>
          App Icon Has Transparency
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">iOS rejects icons with alpha channels. Flutter's default icon handling may not strip transparency.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix:</p>
          <pre class="text-sm text-gray-700 overflow-x-auto"><code># In pubspec.yaml with flutter_launcher_icons
flutter_launcher_icons:
  remove_alpha_ios: true</code></pre>
        </div>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">2</span>
          Missing Purpose Strings
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">Many Flutter plugins require iOS permissions. If you don't add purpose strings, your app is auto-rejected.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix in ios/Runner/Info.plist:</p>
          <pre class="text-sm text-gray-700 overflow-x-auto"><code>&lt;key&gt;NSCameraUsageDescription&lt;/key&gt;
&lt;string&gt;We need camera access to take photos for your profile&lt;/string&gt;

&lt;key&gt;NSPhotoLibraryUsageDescription&lt;/key&gt;
&lt;string&gt;We need photo access to let you select images&lt;/string&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">3</span>
          iPad Layout Issues
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">Flutter apps run on iPad by default. If your layout isn't responsive, it looks broken and gets rejected.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix options:</p>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• Make your UI responsive with <code>LayoutBuilder</code> or <code>MediaQuery</code></li>
            <li>• Or disable iPad: In Xcode → Runner → General → Deployment Info → uncheck iPad</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">4</span>
          Guideline 4.2 - Minimum Functionality
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">If your Flutter app is too simple or just wraps a website, it will be rejected.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix:</p>
          <p class="text-sm text-gray-700">Add native features like push notifications, offline mode, or device APIs. Read our <a href="/guideline-4-2-minimum-functionality" class="text-blue-600 hover:underline">complete Guideline 4.2 guide</a>.</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">5</span>
          Debug Banner Visible
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">If you take screenshots with the debug banner showing, your app will be rejected.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix in main.dart:</p>
          <pre class="text-sm text-gray-700 overflow-x-auto"><code>MaterialApp(
  debugShowCheckedModeBanner: false,
  // ...
)</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="performance" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Performance Optimization</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        Build Optimization
      </h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Use <code>--release</code> mode (not debug)</li>
        <li>• Enable tree shaking (automatic in release)</li>
        <li>• Use <code>--split-debug-info</code> for smaller builds</li>
        <li>• Consider <code>--obfuscate</code> for code protection</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <div class="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>
        </div>
        Runtime Performance
      </h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Use <code>const</code> widgets where possible</li>
        <li>• Implement <code>ListView.builder</code> for long lists</li>
        <li>• Cache images with <code>cached_network_image</code></li>
        <li>• Profile with Flutter DevTools</li>
      </ul>
    </div>
  </div>
</section>

<section id="app-size" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Reducing App Size</h2>

  <p class="text-gray-600 mb-6">Flutter apps can be large. Here's how to minimize size:</p>

  <div class="bg-white border border-gray-200 rounded-xl p-6">
    <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code># Build with size optimization
flutter build ios --release \\
  --split-debug-info=build/debug-info \\
  --obfuscate

# Analyze what's taking space
flutter build ios --analyze-size</code></pre>

    <div class="mt-6 grid md:grid-cols-2 gap-4">
      <div>
        <h4 class="font-medium text-gray-900 mb-2">Size Reduction Tips</h4>
        <ul class="space-y-1 text-sm text-gray-600">
          <li>• Remove unused packages from pubspec.yaml</li>
          <li>• Use WebP instead of PNG for images</li>
          <li>• Use vector graphics (SVG) when possible</li>
          <li>• Lazy load features with deferred components</li>
        </ul>
      </div>
      <div>
        <h4 class="font-medium text-gray-900 mb-2">Typical Flutter iOS Sizes</h4>
        <ul class="space-y-1 text-sm text-gray-600">
          <li>• Minimal app: ~15-20 MB</li>
          <li>• Typical app: 25-40 MB</li>
          <li>• Feature-rich: 50-100 MB</li>
          <li>• App Store limit: 4 GB</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="troubleshooting" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Troubleshooting</h2>

  <div class="space-y-4">
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50">
        <span class="font-medium text-gray-900">"Module 'flutter' not found" error</span>
        <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </summary>
      <div class="px-6 pb-4 text-gray-600">
        <pre class="bg-gray-100 rounded p-3 text-sm mt-2 overflow-x-auto"><code>cd ios
rm -rf Pods Podfile.lock
pod install --repo-update
cd ..
flutter clean && flutter pub get</code></pre>
      </div>
    </details>

    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50">
        <span class="font-medium text-gray-900">Archive fails with signing error</span>
        <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </summary>
      <div class="px-6 pb-4 text-gray-600">
        <ul class="list-disc ml-5 mt-2 space-y-1">
          <li>Verify your Apple Developer membership is active</li>
          <li>Check that Bundle ID matches App Store Connect</li>
          <li>Regenerate provisioning profiles in Developer Portal</li>
          <li>In Xcode: Product → Clean Build Folder, then try again</li>
        </ul>
      </div>
    </details>

    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50">
        <span class="font-medium text-gray-900">App crashes on release but works in debug</span>
        <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </summary>
      <div class="px-6 pb-4 text-gray-600">
        <ul class="list-disc ml-5 mt-2 space-y-1">
          <li>Release mode has different optimizations - test with <code>flutter run --release</code></li>
          <li>Check for reflection-based code (JSON serialization) - may need build_runner</li>
          <li>Verify all assets are included in pubspec.yaml</li>
          <li>Check for platform-specific code issues</li>
        </ul>
      </div>
    </details>

    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50">
        <span class="font-medium text-gray-900">Upload to App Store Connect fails</span>
        <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </summary>
      <div class="px-6 pb-4 text-gray-600">
        <ul class="list-disc ml-5 mt-2 space-y-1">
          <li>Increment build number (must be unique for each upload)</li>
          <li>Check version in pubspec.yaml matches App Store Connect</li>
          <li>Verify app icon has no transparency</li>
          <li>Try using Transporter app instead of Xcode</li>
        </ul>
      </div>
    </details>
  </div>
</section>

<section id="checklist" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Pre-Submission Checklist</h2>

  <div class="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6">
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold text-cyan-900 mb-3">Build & Configuration</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span><code>flutter build ios --release</code> succeeds</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Bundle ID matches App Store Connect</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Version and build number incremented</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>App icon has no transparency</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Debug banner disabled</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-cyan-900 mb-3">Permissions & Privacy</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>All Info.plist purpose strings added</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Privacy policy URL works</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>App privacy questionnaire completed</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Tested on physical device</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-cyan-900 mb-3">App Store Assets</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Screenshots for all required sizes</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>App description written</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Keywords optimized (100 char limit)</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Support URL works</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-cyan-900 mb-3">Testing</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Tested in release mode</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>iPad layout acceptable (if supporting)</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>No crashes or major bugs</span>
          </li>
          <li class="flex items-start gap-2 text-cyan-800">
            <input type="checkbox" class="mt-1 rounded border-cyan-300">
            <span>Demo account provided (if needed)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">How long does it take to review a Flutter app?</h3>
      <p class="text-gray-600">Flutter apps are reviewed the same as native apps—typically 24-48 hours. Apple doesn't distinguish based on framework. First submissions may take slightly longer.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Can Apple tell if an app is built with Flutter?</h3>
      <p class="text-gray-600">Yes, Apple can identify Flutter apps, but this doesn't affect approval. What matters is app quality, performance, and guideline compliance—not the technology used.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Do I need a Mac to submit a Flutter app to the App Store?</h3>
      <p class="text-gray-600">Yes. iOS apps must be built and archived using Xcode, which only runs on macOS. There's no way to submit to the App Store without a Mac. Services like Codemagic can build in the cloud, but you still need an Apple Developer account.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Why is my Flutter iOS app so large?</h3>
      <p class="text-gray-600">Flutter includes its rendering engine (~15MB base). To reduce size: use <code>--split-debug-info</code>, remove unused packages, compress images, and use deferred components for large features. The App Store also applies App Thinning which reduces download size for users.</p>
    </div>
  </div>
</section>

<!-- Related Guides Section -->
<section class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
  <div class="grid md:grid-cols-3 gap-4">
    <a href="/react-native-app-store-submission" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-cyan-600 mb-2">React Native Submission</h3>
      <p class="text-sm text-gray-600">Alternative cross-platform framework using JavaScript.</p>
    </a>
    <a href="/swift-swiftui-app-store-submission" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-orange-600 mb-2">Swift/SwiftUI Submission</h3>
      <p class="text-sm text-gray-600">Native iOS development guide.</p>
    </a>
    <a href="/guideline-4-2-minimum-functionality" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">Guideline 4.2: Minimum Functionality</h3>
      <p class="text-sm text-gray-600">Common rejection for cross-platform apps.</p>
    </a>
  </div>
</section>

<!-- CTA Section -->
<section class="mb-12">
  <div class="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
    <div class="max-w-2xl">
      <h2 class="text-2xl font-bold mb-4">Ship Your Flutter App with Confidence</h2>
      <p class="text-white/90 mb-6">Our AI-powered review tool checks your Flutter app against all App Store guidelines before you submit, catching issues that could cause rejection.</p>
      <a href="/ai-review" class="inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
        Try AI Review
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>
`
};

async function main() {
  console.log('Seeding Flutter submission guide...');

  await prisma.article.upsert({
    where: { slug: flutterArticle.slug },
    update: {
      title: flutterArticle.title,
      description: flutterArticle.description,
      content: flutterArticle.content,
      category: flutterArticle.category,
      metaKeywords: flutterArticle.metaKeywords,
      isHub: flutterArticle.isHub,
      toc: flutterArticle.toc,
      updatedAt: new Date(),
    },
    create: flutterArticle,
  });

  console.log('✓ Flutter submission guide created/updated');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

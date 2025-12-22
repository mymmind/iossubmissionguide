import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const reactNativeArticle = {
  slug: 'react-native-app-store-submission',
  title: 'React Native App Store Submission Guide 2025: Complete Walkthrough',
  description: 'Step-by-step guide to submitting your React Native app to the Apple App Store. Covers Xcode configuration, code signing, common rejection issues, and optimization tips for React Native iOS apps.',
  category: 'framework-guides',
  isHub: false,
  metaKeywords: [
    'react native app store',
    'react native ios submission',
    'submit react native to app store',
    'react native xcode',
    'react native code signing',
    'react native app store rejection',
    'expo app store submission',
    'react native ios build',
    'react native testflight',
    'react native app store connect'
  ],
  toc: {
    title: "React Native Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#prerequisites", label: "Prerequisites" },
          { href: "#xcode-configuration", label: "Xcode Configuration" },
          { href: "#code-signing", label: "Code Signing Setup" },
          { href: "#build-production", label: "Creating Production Build" },
          { href: "#app-store-connect", label: "App Store Connect Setup" }
        ]
      },
      {
        section: "Optimization",
        items: [
          { href: "#common-rejections", label: "React Native Rejections" },
          { href: "#performance-optimization", label: "Performance Optimization" },
          { href: "#expo-eas", label: "Expo & EAS Build" }
        ]
      },
      {
        section: "Reference",
        items: [
          { href: "#troubleshooting", label: "Troubleshooting" },
          { href: "#checklist", label: "Pre-Submission Checklist" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">Framework Guide</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">React Native</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">React Native App Store Submission Guide 2025</h1>
  <p class="text-xl text-gray-600 max-w-3xl">Everything you need to know to successfully submit your React Native app to the Apple App Store—from Xcode configuration to avoiding common rejection pitfalls.</p>
</header>

<!-- Quick Answer Box for Featured Snippets -->
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-10">
  <h2 class="text-lg font-semibold text-blue-900 mb-3">How to Submit a React Native App to the App Store</h2>
  <p class="text-gray-700 mb-4">To submit a React Native app to the App Store: 1) Configure your Xcode project with proper Bundle ID and certificates, 2) Build an Archive using Xcode or EAS Build, 3) Upload to App Store Connect via Xcode or Transporter, 4) Fill in app metadata, screenshots, and privacy details, 5) Submit for review. The entire process takes 1-3 days for approval.</p>
  <div class="flex items-center gap-2 text-sm text-blue-700">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>
    <span>Average review time: 24-48 hours</span>
  </div>
</div>

<section id="prerequisites" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Prerequisites Before You Start</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">1</span>
        Apple Developer Account
      </h3>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Enrolled in Apple Developer Program ($99/year)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Access to App Store Connect</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Distribution certificate created</span>
        </li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">2</span>
        Development Environment
      </h3>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Mac with latest Xcode (15.0+)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>React Native 0.72+ (latest recommended)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>CocoaPods installed and updated</span>
        </li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">3</span>
        App Requirements
      </h3>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>1024x1024 app icon (no alpha/transparency)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Screenshots for all required device sizes</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Privacy policy URL (required)</span>
        </li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">4</span>
        If Using Expo
      </h3>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Expo SDK 49+ (latest recommended)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>EAS CLI installed globally</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>app.json properly configured</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section id="xcode-configuration" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Xcode Configuration for React Native</h2>

  <p class="text-gray-600 mb-6">Before building for production, you need to configure several settings in Xcode. Open your project by double-clicking the <code class="bg-gray-100 px-2 py-1 rounded">.xcworkspace</code> file (not .xcodeproj).</p>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 1: Open in Xcode</h3>
    </div>
    <div class="p-6">
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code># From your React Native project root
cd ios
open YourAppName.xcworkspace</code></pre>
      <div class="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p class="text-amber-800 text-sm"><strong>Important:</strong> Always open the <code>.xcworkspace</code> file, not <code>.xcodeproj</code>. The workspace includes CocoaPods dependencies.</p>
      </div>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 2: Configure Bundle Identifier</h3>
    </div>
    <div class="p-6 space-y-4">
      <ol class="space-y-3 text-gray-600">
        <li class="flex items-start gap-3">
          <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
          <span>Select your project in the navigator (blue icon at top)</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
          <span>Select your app target under "TARGETS"</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
          <span>Go to "Signing & Capabilities" tab</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
          <span>Set your Bundle Identifier (e.g., <code class="bg-gray-100 px-2 py-0.5 rounded">com.yourcompany.yourapp</code>)</span>
        </li>
      </ol>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 3: Set Version and Build Numbers</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">In the "General" tab, configure:</p>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <span class="font-medium text-gray-900">Version:</span>
          <span>User-facing version (e.g., 1.0.0) - follows semantic versioning</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="font-medium text-gray-900">Build:</span>
          <span>Internal build number (e.g., 1, 2, 3) - must increment for each upload</span>
        </li>
      </ul>
      <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p class="text-blue-800 text-sm"><strong>Tip:</strong> You can automate build number incrementing with <code>agvtool</code> or Fastlane.</p>
      </div>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 4: Configure Deployment Target</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">Set your minimum iOS version in "General" → "Deployment Info":</p>
      <ul class="space-y-2 text-gray-600">
        <li>• <strong>iOS 13.0+</strong> - Maximum device compatibility</li>
        <li>• <strong>iOS 14.0+</strong> - Modern React Native apps (recommended)</li>
        <li>• <strong>iOS 15.0+</strong> - If using newer iOS-only features</li>
      </ul>
      <p class="text-gray-600 mt-4">Also ensure the devices section includes both iPhone and iPad if applicable.</p>
    </div>
  </div>
</section>

<section id="code-signing" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Code Signing Setup</h2>

  <p class="text-gray-600 mb-6">Code signing is often the most confusing part for React Native developers. Here's how to set it up correctly.</p>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Option A: Automatic Signing (Recommended for Beginners)</h3>
    </div>
    <div class="p-6">
      <ol class="space-y-4 text-gray-600">
        <li class="flex items-start gap-3">
          <span class="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
          <div>
            <span class="font-medium text-gray-900">Enable Automatic Signing</span>
            <p class="text-sm mt-1">In Signing & Capabilities, check "Automatically manage signing"</p>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
          <div>
            <span class="font-medium text-gray-900">Select Your Team</span>
            <p class="text-sm mt-1">Choose your Apple Developer account from the Team dropdown</p>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
          <div>
            <span class="font-medium text-gray-900">Done!</span>
            <p class="text-sm mt-1">Xcode will automatically create certificates and provisioning profiles</p>
          </div>
        </li>
      </ol>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Option B: Manual Signing (For Teams/CI)</h3>
    </div>
    <div class="p-6">
      <ol class="space-y-4 text-gray-600">
        <li>
          <span class="font-medium text-gray-900">1. Create Distribution Certificate</span>
          <p class="text-sm mt-1">In Apple Developer Portal → Certificates → Create "Apple Distribution" certificate</p>
        </li>
        <li>
          <span class="font-medium text-gray-900">2. Create App ID</span>
          <p class="text-sm mt-1">Identifiers → App IDs → New with your Bundle ID</p>
        </li>
        <li>
          <span class="font-medium text-gray-900">3. Create Provisioning Profile</span>
          <p class="text-sm mt-1">Profiles → Distribution → App Store → Select your App ID and Certificate</p>
        </li>
        <li>
          <span class="font-medium text-gray-900">4. Download and Install</span>
          <p class="text-sm mt-1">Double-click downloaded profile to install, then select in Xcode</p>
        </li>
      </ol>
    </div>
  </div>

  <div class="p-6 bg-red-50 border border-red-200 rounded-xl">
    <h4 class="font-semibold text-red-900 mb-2">Common Signing Errors</h4>
    <ul class="space-y-2 text-red-800 text-sm">
      <li><strong>"No signing certificate"</strong> - Your certificate is missing or expired. Create a new one in Developer Portal.</li>
      <li><strong>"Provisioning profile doesn't include signing certificate"</strong> - Regenerate your profile after creating new certificate.</li>
      <li><strong>"The executable was signed with invalid entitlements"</strong> - Enable matching capabilities in both Developer Portal and Xcode.</li>
    </ul>
  </div>
</section>

<section id="build-production" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Creating a Production Build</h2>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 1: Install Pods and Build JS Bundle</h3>
    </div>
    <div class="p-6">
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code># From project root
cd ios && pod install && cd ..

# The bundle is created automatically during Archive
# But you can manually create it:
npx react-native bundle --entry-file index.js \\
  --platform ios \\
  --dev false \\
  --bundle-output ios/main.jsbundle \\
  --assets-dest ios</code></pre>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 2: Set Build Configuration to Release</h3>
    </div>
    <div class="p-6">
      <ol class="space-y-3 text-gray-600">
        <li>1. In Xcode, go to Product → Scheme → Edit Scheme</li>
        <li>2. Select "Archive" from the left sidebar</li>
        <li>3. Set Build Configuration to "Release"</li>
        <li>4. Close the dialog</li>
      </ol>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 3: Create Archive</h3>
    </div>
    <div class="p-6">
      <ol class="space-y-3 text-gray-600">
        <li>1. Select "Any iOS Device (arm64)" as the build destination (not a simulator)</li>
        <li>2. Go to Product → Archive</li>
        <li>3. Wait for the build to complete (may take 5-15 minutes)</li>
        <li>4. Organizer window will open automatically with your archive</li>
      </ol>
      <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p class="text-blue-800 text-sm"><strong>Keyboard shortcut:</strong> Product → Archive has no default shortcut, but you can assign one in Xcode preferences.</p>
      </div>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Step 4: Upload to App Store Connect</h3>
    </div>
    <div class="p-6">
      <ol class="space-y-3 text-gray-600">
        <li>1. In the Organizer, select your archive and click "Distribute App"</li>
        <li>2. Choose "App Store Connect" → "Upload"</li>
        <li>3. Keep default options (usually) and click Next</li>
        <li>4. Review the app content and click Upload</li>
        <li>5. Wait for processing (usually 10-30 minutes)</li>
      </ol>
    </div>
  </div>
</section>

<section id="app-store-connect" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">App Store Connect Setup</h2>

  <p class="text-gray-600 mb-6">While your build processes, set up your app listing in App Store Connect.</p>

  <div class="grid gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Required Information</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <h4 class="font-medium text-gray-700 mb-2">App Information</h4>
          <ul class="space-y-1 text-sm text-gray-600">
            <li>• App name (30 characters max)</li>
            <li>• Subtitle (30 characters max)</li>
            <li>• Primary category</li>
            <li>• Privacy policy URL</li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-gray-700 mb-2">Version Information</h4>
          <ul class="space-y-1 text-sm text-gray-600">
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
      <p class="text-gray-600 mb-4">You need screenshots for at least one device size. Required dimensions:</p>
      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 class="font-medium text-gray-700 mb-2">iPhone</h4>
          <ul class="space-y-1 text-gray-600">
            <li>• 6.7" (1290 × 2796) - iPhone 15 Pro Max</li>
            <li>• 6.5" (1284 × 2778) - iPhone 14 Plus</li>
            <li>• 5.5" (1242 × 2208) - iPhone 8 Plus</li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-gray-700 mb-2">iPad (if supporting)</h4>
          <ul class="space-y-1 text-gray-600">
            <li>• 12.9" (2048 × 2732) - iPad Pro</li>
            <li>• 11" (1668 × 2388) - iPad Pro</li>
          </ul>
        </div>
      </div>
      <div class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p class="text-green-800 text-sm"><strong>Tip:</strong> Upload 6.7" iPhone screenshots first—App Store Connect will offer to use them for smaller sizes.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">App Privacy</h3>
      <p class="text-gray-600 mb-4">You must declare what data your React Native app collects:</p>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
          <span><strong>Analytics:</strong> If using Firebase, Amplitude, Mixpanel, etc.</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
          <span><strong>Crash data:</strong> If using Sentry, Crashlytics, Bugsnag</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
          <span><strong>Device ID:</strong> Many third-party SDKs collect this</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section id="common-rejections" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">React Native-Specific Rejection Reasons</h2>

  <p class="text-gray-600 mb-6">React Native apps face some unique challenges during App Review. Here are the most common issues:</p>

  <div class="space-y-4">
    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">1</span>
          JavaScript Bundle Not Found (Crash on Launch)
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">The most common React Native rejection. App crashes immediately because the JS bundle isn't included in the archive.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix:</p>
          <pre class="text-sm text-gray-700 overflow-x-auto"><code># Ensure bundle is generated for release builds
# In Xcode Build Phases, verify "Bundle React Native code and images" runs</code></pre>
        </div>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">2</span>
          Debug Menu Accessible in Production
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">If users can shake their device to see the React Native debug menu, you'll be rejected.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix:</p>
          <p class="text-gray-600 text-sm">The debug menu should be automatically disabled in Release builds. If not, check that your build configuration is set to "Release", not "Debug".</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">3</span>
          Missing Purpose Strings (NSCameraUsageDescription, etc.)
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">If your app uses camera, location, photos, or other permissions, you must explain why in Info.plist.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix in ios/YourApp/Info.plist:</p>
          <pre class="text-sm text-gray-700 overflow-x-auto"><code>&lt;key&gt;NSCameraUsageDescription&lt;/key&gt;
&lt;string&gt;We need camera access to let you take photos for your profile&lt;/string&gt;

&lt;key&gt;NSPhotoLibraryUsageDescription&lt;/key&gt;
&lt;string&gt;We need photo library access to let you select images&lt;/string&gt;</code></pre>
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
        <p class="text-gray-600 mb-4">Your app must provide value beyond what a website could offer. Simple WebView wrappers will be rejected.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix:</p>
          <p class="text-gray-600 text-sm">Add native features: push notifications, offline support, camera integration, HealthKit, or other iOS-specific APIs.</p>
          <a href="/guideline-4-2-minimum-functionality" class="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2 text-sm font-medium">
            Read our complete Guideline 4.2 guide
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">5</span>
          iPad Compatibility Issues
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">If your app runs on iPad, it must have a proper layout—not just a stretched iPhone UI.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix:</p>
          <p class="text-gray-600 text-sm">Either use responsive layouts (Flexbox works great) or explicitly disable iPad in Xcode → Target → General → Deployment Info → uncheck iPad.</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">6</span>
          App Icon Contains Alpha Channel
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">App Store rejects icons with transparency. This is a common issue with PNG exports.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Fix:</p>
          <pre class="text-sm text-gray-700 overflow-x-auto"><code># Remove alpha channel using ImageMagick
convert icon.png -alpha off -background white -flatten icon-no-alpha.png</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="performance-optimization" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Performance Optimization for App Review</h2>

  <p class="text-gray-600 mb-6">Slow apps get rejected. Apple reviewers have limited patience, and performance issues often lead to 2.1 (crashes) or 4.2 (low quality) rejections.</p>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        Startup Time
      </h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Use Hermes engine (enabled by default in RN 0.70+)</li>
        <li>• Lazy load screens with React.lazy()</li>
        <li>• Minimize bundle size—remove unused dependencies</li>
        <li>• Consider RAM bundles for large apps</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <div class="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>
        </div>
        Memory Usage
      </h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Profile with Xcode Instruments</li>
        <li>• Optimize images (use WebP format)</li>
        <li>• Use FlatList instead of ScrollView for lists</li>
        <li>• Remove console.log statements in production</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        Render Performance
      </h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Use React.memo for expensive components</li>
        <li>• Implement useCallback and useMemo</li>
        <li>• Avoid inline function definitions in JSX</li>
        <li>• Use InteractionManager for heavy operations</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        </div>
        Bundle Optimization
      </h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Enable Proguard/R8 for Android (reduces bundle)</li>
        <li>• Remove unused native modules</li>
        <li>• Use dynamic imports for large features</li>
        <li>• Check bundle size with source-map-explorer</li>
      </ul>
    </div>
  </div>

  <div class="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
    <h4 class="font-semibold text-blue-900 mb-2">Enable Hermes (Critical for Performance)</h4>
    <p class="text-blue-800 text-sm mb-3">Hermes significantly improves startup time and memory usage. It's enabled by default in React Native 0.70+.</p>
    <pre class="bg-white rounded-lg p-4 text-sm overflow-x-auto"><code># Verify Hermes is enabled in ios/Podfile:
:hermes_enabled => true

# Then reinstall pods
cd ios && pod install</code></pre>
  </div>
</section>

<section id="expo-eas" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Expo & EAS Build</h2>

  <p class="text-gray-600 mb-6">If you're using Expo, EAS Build simplifies the submission process significantly. You don't need a Mac for building.</p>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Configure app.json for App Store</h3>
    </div>
    <div class="p-6">
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code>{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourapp",
      "buildNumber": "1",
      "supportsTablet": false,
      "infoPlist": {
        "NSCameraUsageDescription": "We need camera access to...",
        "NSPhotoLibraryUsageDescription": "We need photo access to..."
      }
    }
  }
}</code></pre>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Build and Submit with EAS</h3>
    </div>
    <div class="p-6">
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code># Install EAS CLI
npm install -g eas-cli

# Login to Expo account
eas login

# Configure EAS (first time)
eas build:configure

# Build for iOS App Store
eas build --platform ios --profile production

# Submit to App Store (after build completes)
eas submit --platform ios</code></pre>
    </div>
  </div>

  <div class="p-6 bg-green-50 border border-green-200 rounded-xl">
    <h4 class="font-semibold text-green-900 mb-2">EAS Build Advantages</h4>
    <ul class="space-y-2 text-green-800 text-sm">
      <li>• <strong>No Mac required</strong> - builds happen in the cloud</li>
      <li>• <strong>Automatic code signing</strong> - EAS manages certificates</li>
      <li>• <strong>Built-in CI/CD</strong> - automatic builds on git push</li>
      <li>• <strong>One-command submit</strong> - eas submit handles upload</li>
    </ul>
  </div>
</section>

<section id="troubleshooting" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Troubleshooting Common Issues</h2>

  <div class="space-y-4">
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50">
        <span class="font-medium text-gray-900">"Unable to install" error in TestFlight</span>
        <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </summary>
      <div class="px-6 pb-4 text-gray-600">
        <p>This usually means the device's iOS version is lower than your deployment target. Check your minimum iOS version in Xcode and ensure testers have compatible devices.</p>
      </div>
    </details>

    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50">
        <span class="font-medium text-gray-900">Build fails with "Could not find module" error</span>
        <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </summary>
      <div class="px-6 pb-4 text-gray-600">
        <pre class="bg-gray-100 rounded p-3 text-sm mt-2 overflow-x-auto"><code># Clean and reinstall everything
rm -rf node_modules
rm -rf ios/Pods
rm ios/Podfile.lock
npm install
cd ios && pod install</code></pre>
      </div>
    </details>

    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50">
        <span class="font-medium text-gray-900">Archive succeeds but upload fails</span>
        <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </summary>
      <div class="px-6 pb-4 text-gray-600">
        <p>Common causes:</p>
        <ul class="list-disc ml-5 mt-2 space-y-1">
          <li>Bundle ID mismatch between Xcode and App Store Connect</li>
          <li>Build number wasn't incremented from previous upload</li>
          <li>Invalid assets (wrong icon size, alpha channel)</li>
        </ul>
        <p class="mt-2">Check the detailed error in Xcode's Organizer → "Show in Finder" → right-click → "Show Package Contents" → look for error logs.</p>
      </div>
    </details>

    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50">
        <span class="font-medium text-gray-900">App crashes only in production build</span>
        <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </summary>
      <div class="px-6 pb-4 text-gray-600">
        <p>Debug builds work differently from Release builds. Common causes:</p>
        <ul class="list-disc ml-5 mt-2 space-y-1">
          <li>JS bundle not included in archive (check Build Phases)</li>
          <li>Hermes optimization issues (try disabling temporarily)</li>
          <li>ProGuard/R8 removing needed code (Android)</li>
          <li>Environment variables not set for production</li>
        </ul>
        <p class="mt-2">Test with: <code class="bg-gray-100 px-2 py-0.5 rounded">npx react-native run-ios --configuration Release</code></p>
      </div>
    </details>
  </div>
</section>

<section id="checklist" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Pre-Submission Checklist</h2>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
    <p class="text-green-800 mb-6">Use this checklist before every App Store submission:</p>

    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold text-green-900 mb-3">Build & Technical</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Build configuration set to "Release"</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>JS bundle included in archive</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Build number incremented</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Debug menu disabled</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>console.log statements removed</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Tested on physical device</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-900 mb-3">App Store Assets</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>App icon has no alpha channel</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Screenshots for all required sizes</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Privacy policy URL working</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>App privacy questionnaire completed</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Support URL working</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Demo account provided (if applicable)</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-900 mb-3">Permissions & Privacy</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>All usage descriptions in Info.plist</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Purpose strings explain user benefit</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>ATT prompt for ad tracking (if used)</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Data collection matches privacy labels</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-900 mb-3">Content & Quality</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>No placeholder content</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>All links working</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>App provides native value beyond web</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>iPad layout acceptable (if supporting)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Related Guides Section -->
<section class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
  <div class="grid md:grid-cols-3 gap-4">
    <a href="/flutter-app-store-submission" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">Flutter Submission</h3>
      <p class="text-sm text-gray-600">Alternative cross-platform framework using Dart.</p>
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
  <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
    <div class="max-w-2xl">
      <h2 class="text-2xl font-bold mb-4">Want to Ensure Your React Native App Gets Approved?</h2>
      <p class="text-white/90 mb-6">Our AI-powered review tool analyzes your app against all 150+ App Store guidelines before you submit, catching issues that could cause rejection.</p>
      <a href="/ai-review" class="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
        Try AI Review
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- FAQ Section for Featured Snippets -->
<section class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">How long does App Store review take for React Native apps?</h3>
      <p class="text-gray-600">App Store review typically takes 24-48 hours for React Native apps. The review time is the same as native apps—Apple doesn't distinguish based on framework. First submissions may take slightly longer as reviewers examine all aspects of your app.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Can Apple tell if an app is built with React Native?</h3>
      <p class="text-gray-600">Apple can identify React Native apps during review, but this doesn't affect approval chances. What matters is app quality, not the technology used. Apple's guidelines apply equally to all apps regardless of whether they're built with Swift, React Native, Flutter, or other frameworks.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Do I need a Mac to submit a React Native app to the App Store?</h3>
      <p class="text-gray-600">For traditional React Native CLI projects, yes—you need a Mac with Xcode to create the archive and upload to App Store Connect. However, if you use Expo with EAS Build, you can build and submit entirely from the cloud without a Mac.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Why does my React Native app crash only in the App Store build?</h3>
      <p class="text-gray-600">This usually means the JavaScript bundle isn't included in your release build. Check that "Bundle React Native code and images" is in your Xcode Build Phases and runs during archiving. Also verify your build configuration is set to "Release" in the Archive scheme.</p>
    </div>
  </div>
</section>
`
};

async function main() {
  console.log('Seeding React Native submission guide...');

  await prisma.article.upsert({
    where: { slug: reactNativeArticle.slug },
    update: {
      title: reactNativeArticle.title,
      description: reactNativeArticle.description,
      content: reactNativeArticle.content,
      category: reactNativeArticle.category,
      metaKeywords: reactNativeArticle.metaKeywords,
      isHub: reactNativeArticle.isHub,
      toc: reactNativeArticle.toc,
      updatedAt: new Date(),
    },
    create: reactNativeArticle,
  });

  console.log('✓ React Native submission guide created/updated');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

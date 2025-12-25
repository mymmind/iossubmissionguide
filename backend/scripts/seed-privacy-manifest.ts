import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const privacyManifestArticle = {
  slug: 'privacy-manifest-required-reason-api',
  title: 'Privacy Manifest Rejected? Fix Required Reason API Issues (2025)',
  description: 'Complete guide to fixing privacy manifest rejections and implementing Required Reason APIs for iOS apps. Includes step-by-step implementation, common ITMS-91053 errors, and SDK audit checklist.',
  category: 'Rejections',
  isHub: false,
  metaKeywords: [
    'privacy manifest',
    'required reason api',
    'ITMS-91053',
    'privacy manifest rejection',
    'NSPrivacyAccessedAPITypes',
    'PrivacyInfo.xcprivacy',
    'ios 17 privacy requirements',
    'apple privacy manifest 2025',
    'required reason api list',
    'privacy manifest sdk'
  ],
  toc: {
    title: "Privacy Manifest Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#what-is-it", label: "What is a Privacy Manifest" },
          { href: "#why-rejected", label: "Why You Got Rejected" },
          { href: "#required-apis", label: "Required Reason APIs" },
          { href: "#implementation", label: "How to Implement" }
        ]
      },
      {
        section: "Practical",
        items: [
          { href: "#sdk-audit", label: "SDK Audit Checklist" },
          { href: "#common-errors", label: "Common Errors" },
          { href: "#testing", label: "Testing Your Manifest" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full">Rejection Guide</span>
    <span class="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">iOS 17+</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">Updated 2025</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Manifest: How to Fix Required Reason API Rejections</h1>
  <p class="text-xl text-gray-600 max-w-3xl">You just got an email with "ITMS-91053" in the subject line. Your perfectly working app got rejected because of something called a "privacy manifest." Welcome to the club.</p>
  <p class="text-lg text-gray-500 mt-4">This caught a lot of us off guard. Apple quietly introduced this requirement, and suddenly apps that had been approved for years started getting bounced. Let me walk you through exactly what's happening and how to fix it.</p>
</header>

<!-- Quick Answer Box -->
<div class="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 mb-10">
  <h2 class="text-lg font-semibold text-purple-900 mb-3">The Short Version</h2>
  <p class="text-gray-700 mb-4">Starting in spring 2024, Apple requires a <code class="bg-purple-100 px-1.5 py-0.5 rounded text-purple-800 text-sm">PrivacyInfo.xcprivacy</code> file if your app (or any SDK you use) accesses certain "sensitive" APIs. These include things you'd never think twice about—like checking a file's modification date or reading from UserDefaults. No manifest = automatic rejection.</p>
  <div class="flex items-center gap-2 text-sm text-purple-700">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
    <span><strong>Enforcement is now active.</strong> Apps are being rejected daily for missing privacy manifests.</span>
  </div>
</div>

<section id="what-is-it" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">What Even Is a Privacy Manifest?</h2>

  <p class="text-gray-600 mb-6">A privacy manifest is a property list file (<code class="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 text-sm">PrivacyInfo.xcprivacy</code>) that declares why your app accesses certain APIs that could potentially be used for fingerprinting users across apps.</p>

  <p class="text-gray-600 mb-6">Here's the thing that frustrated me when I first encountered this: these aren't shady tracking APIs. We're talking about stuff like:</p>

  <div class="grid md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 mb-3">APIs That Now Require Reasons</h4>
      <ul class="space-y-2 text-gray-700 text-sm">
        <li>• <code class="bg-gray-200 px-1 rounded">UserDefaults</code> - yes, really</li>
        <li>• File timestamp APIs (creation date, etc.)</li>
        <li>• System boot time</li>
        <li>• Disk space APIs</li>
        <li>• Active keyboard info</li>
        <li>• User defaults access</li>
      </ul>
    </div>
    <div class="bg-purple-50 border border-purple-100 rounded-xl p-5">
      <h4 class="font-semibold text-purple-900 mb-3">Why Apple Did This</h4>
      <p class="text-purple-800 text-sm">These APIs can be combined to create a "fingerprint" that identifies users across apps—even without any explicit tracking. Shady SDKs were doing this silently. Apple's solution: make everyone declare their usage.</p>
    </div>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6">
    <h4 class="font-semibold text-amber-900 mb-2">The Catch That Gets Everyone</h4>
    <p class="text-amber-800 text-sm">You're responsible for privacy manifests in <strong>every SDK and framework</strong> you include—even if you didn't write them. That Firebase pod you added? Better make sure it has an updated manifest. That analytics library from 2022? Probably doesn't.</p>
  </div>
</section>

<section id="why-rejected" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Why Your App Got Rejected</h2>

  <p class="text-gray-600 mb-6">The rejection email probably looked something like this:</p>

  <div class="bg-gray-900 text-gray-100 rounded-xl p-6 mb-6 font-mono text-sm overflow-x-auto">
    <p class="text-red-400 mb-2">ITMS-91053: Missing API declaration</p>
    <p class="text-gray-400">Your app's code references one or more APIs that require a privacy manifest file. The following APIs require reasons:</p>
    <p class="text-gray-300 mt-2">NSPrivacyAccessedAPICategoryFileTimestamp</p>
    <p class="text-gray-300">NSPrivacyAccessedAPICategoryUserDefaults</p>
    <p class="text-gray-400 mt-4">Please update your privacy manifest to include the required NSPrivacyAccessedAPITypes.</p>
  </div>

  <p class="text-gray-600 mb-6">There are three main reasons you might see this:</p>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-100">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">1</span>
          Your Own Code Uses Required APIs
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">You're directly calling APIs like <code class="bg-gray-100 px-1 rounded">FileManager</code> to check file dates, or using <code class="bg-gray-100 px-1 rounded">UserDefaults</code> to store settings. Totally normal, everyday stuff—but now you need to declare it.</p>
        <p class="text-sm text-gray-500 italic">This is the easiest to fix. You just add your own privacy manifest.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-100">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">2</span>
          A Third-Party SDK Uses Required APIs
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">Your app doesn't directly use these APIs, but one of your dependencies does. Firebase, Facebook SDK, analytics libraries, crash reporters—they all use these APIs internally.</p>
        <p class="text-sm text-gray-500 italic">You need to either update the SDK to a version with a manifest, or add their API usage to your own manifest.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-100">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">3</span>
          Your Manifest Exists But Is Wrong
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">You added a privacy manifest, but it's missing API categories that Apple detected in your binary. Or you used the wrong "reason" codes. Or the file isn't being bundled correctly.</p>
        <p class="text-sm text-gray-500 italic">Double-check your manifest against Apple's actual API categories and verify it's included in your target's "Copy Bundle Resources" phase.</p>
      </div>
    </div>
  </div>
</section>

<section id="required-apis" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">The Required Reason API Categories</h2>

  <p class="text-gray-600 mb-6">Apple groups these APIs into categories. Here's what each one covers and the most common reasons you'd use them:</p>

  <div class="space-y-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
        File Timestamp APIs
      </h3>
      <p class="text-sm text-gray-500 mb-3">NSPrivacyAccessedAPICategoryFileTimestamp</p>
      <div class="bg-gray-50 rounded-lg p-4 mb-4">
        <p class="text-sm text-gray-700"><strong>What triggers this:</strong> Checking when files were created, modified, or accessed. Very common in document apps, backup tools, or anything that syncs.</p>
      </div>
      <div class="text-sm">
        <p class="font-medium text-gray-900 mb-2">Common valid reasons:</p>
        <ul class="space-y-1 text-gray-600">
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">DDA9.1</code> - Display to user (show "last modified" dates)</li>
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">C617.1</code> - Access inside app's container only</li>
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">3B52.1</code> - User-initiated file operations</li>
        </ul>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
        System Boot Time APIs
      </h3>
      <p class="text-sm text-gray-500 mb-3">NSPrivacyAccessedAPICategorySystemBootTime</p>
      <div class="bg-gray-50 rounded-lg p-4 mb-4">
        <p class="text-sm text-gray-700"><strong>What triggers this:</strong> Checking how long the device has been running. Used for uptime calculations, diagnostics, or rate limiting.</p>
      </div>
      <div class="text-sm">
        <p class="font-medium text-gray-900 mb-2">Common valid reasons:</p>
        <ul class="space-y-1 text-gray-600">
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">35F9.1</code> - Measure time elapsed in app (most common)</li>
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">8FFB.1</code> - Calculate absolute timestamps</li>
        </ul>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
        Disk Space APIs
      </h3>
      <p class="text-sm text-gray-500 mb-3">NSPrivacyAccessedAPICategoryDiskSpace</p>
      <div class="bg-gray-50 rounded-lg p-4 mb-4">
        <p class="text-sm text-gray-700"><strong>What triggers this:</strong> Checking available storage. Common in apps that download content, cache data, or warn users about low space.</p>
      </div>
      <div class="text-sm">
        <p class="font-medium text-gray-900 mb-2">Common valid reasons:</p>
        <ul class="space-y-1 text-gray-600">
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">E174.1</code> - Check space before writing files</li>
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">85F4.1</code> - Display available space to user</li>
        </ul>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
        User Defaults APIs
      </h3>
      <p class="text-sm text-gray-500 mb-3">NSPrivacyAccessedAPICategoryUserDefaults</p>
      <div class="bg-gray-50 rounded-lg p-4 mb-4">
        <p class="text-sm text-gray-700"><strong>What triggers this:</strong> Using <code class="bg-gray-200 px-1 rounded">UserDefaults</code> to store settings or state. Yes, the thing every iOS app uses.</p>
      </div>
      <div class="text-sm">
        <p class="font-medium text-gray-900 mb-2">Common valid reasons:</p>
        <ul class="space-y-1 text-gray-600">
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">CA92.1</code> - Access your app's own UserDefaults (this is what you want)</li>
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">1C8F.1</code> - App group shared UserDefaults</li>
        </ul>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-red-100 text-red-700 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
        Active Keyboard APIs
      </h3>
      <p class="text-sm text-gray-500 mb-3">NSPrivacyAccessedAPICategoryActiveKeyboards</p>
      <div class="bg-gray-50 rounded-lg p-4 mb-4">
        <p class="text-sm text-gray-700"><strong>What triggers this:</strong> Checking which keyboard extensions are installed. Used by some localization or accessibility features.</p>
      </div>
      <div class="text-sm">
        <p class="font-medium text-gray-900 mb-2">Common valid reasons:</p>
        <ul class="space-y-1 text-gray-600">
          <li>• <code class="bg-gray-100 px-1 rounded text-xs">54BD.1</code> - Customize app based on active keyboards</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="implementation" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">How to Create Your Privacy Manifest</h2>

  <p class="text-gray-600 mb-6">Here's the step-by-step process. I'll show you the Xcode way first, then the manual approach if you need more control.</p>

  <div class="space-y-6">
    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-blue-50 px-6 py-4 border-b border-blue-100">
        <h3 class="font-semibold text-blue-900">Step 1: Create the File in Xcode</h3>
      </div>
      <div class="p-6">
        <ol class="space-y-3 text-gray-600">
          <li class="flex gap-3">
            <span class="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
            <span>File → New → File (or Cmd+N)</span>
          </li>
          <li class="flex gap-3">
            <span class="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
            <span>Search for "App Privacy" and select <strong>App Privacy</strong> file type</span>
          </li>
          <li class="flex gap-3">
            <span class="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
            <span>Name it <code class="bg-gray-100 px-1 rounded">PrivacyInfo</code> (Xcode adds the .xcprivacy extension)</span>
          </li>
          <li class="flex gap-3">
            <span class="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
            <span>Make sure it's added to your app target</span>
          </li>
        </ol>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-blue-50 px-6 py-4 border-b border-blue-100">
        <h3 class="font-semibold text-blue-900">Step 2: Add Your API Declarations</h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">The file is XML under the hood. Here's what a typical manifest looks like for an app that uses UserDefaults and checks file timestamps:</p>
        <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-xs overflow-x-auto">
          <pre>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"&gt;
&lt;plist version="1.0"&gt;
&lt;dict&gt;
  &lt;key&gt;NSPrivacyAccessedAPITypes&lt;/key&gt;
  &lt;array&gt;
    &lt;!-- UserDefaults --&gt;
    &lt;dict&gt;
      &lt;key&gt;NSPrivacyAccessedAPIType&lt;/key&gt;
      &lt;string&gt;NSPrivacyAccessedAPICategoryUserDefaults&lt;/string&gt;
      &lt;key&gt;NSPrivacyAccessedAPITypeReasons&lt;/key&gt;
      &lt;array&gt;
        &lt;string&gt;CA92.1&lt;/string&gt;
      &lt;/array&gt;
    &lt;/dict&gt;
    &lt;!-- File Timestamps --&gt;
    &lt;dict&gt;
      &lt;key&gt;NSPrivacyAccessedAPIType&lt;/key&gt;
      &lt;string&gt;NSPrivacyAccessedAPICategoryFileTimestamp&lt;/string&gt;
      &lt;key&gt;NSPrivacyAccessedAPITypeReasons&lt;/key&gt;
      &lt;array&gt;
        &lt;string&gt;C617.1&lt;/string&gt;
      &lt;/array&gt;
    &lt;/dict&gt;
  &lt;/array&gt;
&lt;/dict&gt;
&lt;/plist&gt;</pre>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-blue-50 px-6 py-4 border-b border-blue-100">
        <h3 class="font-semibold text-blue-900">Step 3: Verify It's Bundled</h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">This trips up a lot of people. The file exists, but it's not actually included in the app bundle.</p>
        <ol class="space-y-2 text-gray-600 text-sm">
          <li>1. Select your target → Build Phases</li>
          <li>2. Expand "Copy Bundle Resources"</li>
          <li>3. Make sure <code class="bg-gray-100 px-1 rounded">PrivacyInfo.xcprivacy</code> is listed</li>
          <li>4. If not, click + and add it</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section id="sdk-audit" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">SDK Audit Checklist</h2>

  <p class="text-gray-600 mb-6">Here's the painful part: you need to check every dependency. I've compiled a list of common SDKs and their manifest status as of early 2025:</p>

  <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-gray-50">
          <th class="text-left p-4 font-semibold text-gray-900">SDK</th>
          <th class="text-left p-4 font-semibold text-gray-900">Has Manifest</th>
          <th class="text-left p-4 font-semibold text-gray-900">Min Version</th>
          <th class="text-left p-4 font-semibold text-gray-900">Notes</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="p-4 text-gray-900">Firebase</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Yes</span></td>
          <td class="p-4 text-gray-600">10.22.0+</td>
          <td class="p-4 text-gray-500">Update all Firebase pods</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-900">Facebook SDK</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Yes</span></td>
          <td class="p-4 text-gray-600">16.0.0+</td>
          <td class="p-4 text-gray-500">Includes FBSDKCoreKit</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-900">Google Analytics</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Yes</span></td>
          <td class="p-4 text-gray-600">10.22.0+</td>
          <td class="p-4 text-gray-500">Part of Firebase update</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-900">Crashlytics</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Yes</span></td>
          <td class="p-4 text-gray-600">10.22.0+</td>
          <td class="p-4 text-gray-500">Part of Firebase update</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-900">Amplitude</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Yes</span></td>
          <td class="p-4 text-gray-600">8.16.0+</td>
          <td class="p-4 text-gray-500">Check their docs</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-900">Sentry</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Yes</span></td>
          <td class="p-4 text-gray-600">8.20.0+</td>
          <td class="p-4 text-gray-500">Both Cocoa and React Native</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-900">RevenueCat</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Yes</span></td>
          <td class="p-4 text-gray-600">4.32.0+</td>
          <td class="p-4 text-gray-500">Update Purchases SDK</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-900">Older/Custom SDKs</td>
          <td class="p-4"><span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Maybe</span></td>
          <td class="p-4 text-gray-600">Check docs</td>
          <td class="p-4 text-gray-500">May need to add to your manifest</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
    <h4 class="font-semibold text-amber-900 mb-2">For SDKs Without Manifests</h4>
    <p class="text-amber-800 text-sm">If an SDK doesn't have its own privacy manifest, you have two options: (1) Update to a newer version that includes one, or (2) Include their API usage in your own manifest. Contact the SDK vendor if you're unsure what APIs they use.</p>
  </div>
</section>

<section id="common-errors" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Common Errors and How to Fix Them</h2>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
        <span class="text-red-500">ITMS-91053</span>
      </h3>
      <p class="text-gray-600 mb-3">Missing API declaration - your binary uses APIs but no manifest declares them.</p>
      <p class="text-sm text-green-700"><strong>Fix:</strong> Add the missing API categories to your PrivacyInfo.xcprivacy file.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
        <span class="text-red-500">ITMS-91061</span>
      </h3>
      <p class="text-gray-600 mb-3">Missing privacy manifest for third-party SDK.</p>
      <p class="text-sm text-green-700"><strong>Fix:</strong> Update the SDK, or if that's not possible, include their API usage in your manifest.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
        <span class="text-red-500">"Invalid reason code"</span>
      </h3>
      <p class="text-gray-600 mb-3">You used a reason code that Apple doesn't recognize or that doesn't apply to the API category.</p>
      <p class="text-sm text-green-700"><strong>Fix:</strong> Check Apple's documentation for valid reason codes for each API category. They're picky about this.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
        <span class="text-red-500">Manifest exists but still rejected</span>
      </h3>
      <p class="text-gray-600 mb-3">The file is there, but it's not making it into the app bundle.</p>
      <p class="text-sm text-green-700"><strong>Fix:</strong> Verify it's in "Copy Bundle Resources" in your build phases. Also check that the file isn't excluded in your .gitignore or build settings.</p>
    </div>
  </div>
</section>

<section id="testing" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Testing Your Privacy Manifest</h2>

  <p class="text-gray-600 mb-6">Before you submit, here's how to verify everything is working:</p>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3">1. Generate a Privacy Report in Xcode</h3>
      <p class="text-gray-600 mb-3">Xcode 15+ can generate a privacy report that shows what APIs your app uses:</p>
      <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
        <p>Product → Archive → Right-click archive → Generate Privacy Report</p>
      </div>
      <p class="text-sm text-gray-500 mt-3">This shows you exactly what Apple will scan for. Compare it against your manifest.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3">2. Check the App Bundle</h3>
      <p class="text-gray-600 mb-3">Build your app and inspect the .app package:</p>
      <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-xs">
        <p>find /path/to/YourApp.app -name "PrivacyInfo.xcprivacy"</p>
      </div>
      <p class="text-sm text-gray-500 mt-3">If this returns nothing, your manifest isn't being bundled.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3">3. Validate with App Store Connect</h3>
      <p class="text-gray-600">Upload a build to TestFlight. If there are privacy manifest issues, you'll get an email within a few minutes—much faster than waiting for full review.</p>
    </div>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

  <div class="space-y-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3">Do I need a privacy manifest if my app doesn't collect user data?</h3>
      <p class="text-gray-600">Yes, if your app uses any of the Required Reason APIs—even for completely innocent purposes. UserDefaults alone is enough to require a manifest.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3">What if a third-party SDK I use doesn't have a privacy manifest?</h3>
      <p class="text-gray-600">You can either: (1) Update to a newer version, (2) Contact the vendor, or (3) Add their API usage to your own manifest. Option 3 is a valid workaround, but you're essentially taking responsibility for their API usage.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3">Can I just add all the API categories to be safe?</h3>
      <p class="text-gray-600">Don't do this. Apple may reject apps that declare APIs they don't actually use. Only declare what you actually need. If you're not sure what your app uses, run the privacy report in Xcode first.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3">Does this affect Mac Catalyst or watchOS apps?</h3>
      <p class="text-gray-600">Yes. Privacy manifest requirements apply to all Apple platforms: iOS, iPadOS, macOS, watchOS, and tvOS.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-3">My app was approved before—why is it being rejected now?</h3>
      <p class="text-gray-600">Apple phases in enforcement over time. Your previous binary was approved before strict enforcement began. Any new submission (including updates) must now include proper privacy manifests.</p>
    </div>
  </div>
</section>

<!-- CTA Section -->
<div class="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
  <h2 class="text-2xl font-bold mb-4">Want AI to Audit Your Privacy Manifest?</h2>
  <p class="text-purple-100 mb-6 max-w-2xl mx-auto">Our AI Review Toolkit includes prompts that scan your Xcode project and identify missing privacy declarations before Apple does.</p>
  <a href="/ai-review" class="inline-block px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-gray-100 transition-colors">
    Get the AI Toolkit
  </a>
</div>
`
};

async function main() {
  console.log('Seeding Privacy Manifest article...');

  await prisma.article.upsert({
    where: { slug: privacyManifestArticle.slug },
    update: {
      title: privacyManifestArticle.title,
      description: privacyManifestArticle.description,
      category: privacyManifestArticle.category,
      isHub: privacyManifestArticle.isHub,
      content: privacyManifestArticle.content,
      metaKeywords: privacyManifestArticle.metaKeywords,
      toc: privacyManifestArticle.toc,
    },
    create: {
      slug: privacyManifestArticle.slug,
      title: privacyManifestArticle.title,
      description: privacyManifestArticle.description,
      category: privacyManifestArticle.category,
      isHub: privacyManifestArticle.isHub,
      content: privacyManifestArticle.content,
      metaKeywords: privacyManifestArticle.metaKeywords,
      toc: privacyManifestArticle.toc,
    },
  });

  console.log('Privacy Manifest article seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

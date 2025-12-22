import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const privacyPolicyArticle = {
  slug: 'app-store-privacy-policy-requirements',
  title: 'App Store Privacy Policy Requirements 2025: Complete Guide',
  description: 'Everything you need to know about App Store privacy policy requirements in 2025. Covers privacy nutrition labels, data collection disclosure, account deletion requirements, and GDPR/CCPA compliance for iOS apps.',
  category: 'compliance',
  isHub: false,
  metaKeywords: [
    'app store privacy policy',
    'ios privacy policy requirements',
    'app privacy nutrition label',
    'apple privacy policy template',
    'app store data collection',
    'ios app privacy',
    'app store privacy questions',
    'apple privacy manifest',
    'required reason api'
  ],
  toc: {
    title: "Privacy Policy Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#overview", label: "Overview" },
          { href: "#privacy-policy-url", label: "Privacy Policy URL" },
          { href: "#nutrition-labels", label: "Privacy Nutrition Labels" },
          { href: "#data-types", label: "Data Types Explained" }
        ]
      },
      {
        section: "Requirements",
        items: [
          { href: "#account-deletion", label: "Account Deletion" },
          { href: "#required-reason-api", label: "Required Reason APIs" },
          { href: "#privacy-manifest", label: "Privacy Manifest" },
          { href: "#third-party-sdks", label: "Third-Party SDKs" }
        ]
      },
      {
        section: "Reference",
        items: [
          { href: "#template", label: "Privacy Policy Template" },
          { href: "#checklist", label: "Compliance Checklist" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">Compliance</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">Updated December 2025</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">App Store Privacy Policy Requirements 2025</h1>
  <p class="text-xl text-gray-600 max-w-3xl">Apple requires every app to have a privacy policy. But meeting App Store privacy requirements goes far beyond just having a URL—you need privacy nutrition labels, account deletion support, privacy manifests, and more.</p>
</header>

<!-- Quick Answer Box -->
<div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-10">
  <h2 class="text-lg font-semibold text-green-900 mb-3">What Privacy Requirements Does the App Store Have?</h2>
  <p class="text-gray-700 mb-4">Every App Store app must have: 1) A privacy policy URL accessible from within the app, 2) Completed privacy nutrition labels in App Store Connect, 3) Account deletion functionality if the app allows account creation, 4) A privacy manifest file for apps using Required Reason APIs, and 5) Proper disclosure of all data collection including third-party SDKs.</p>
  <div class="flex items-center gap-2 text-sm text-green-700">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
    <span>Missing any of these can result in app rejection</span>
  </div>
</div>

<section id="overview" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Privacy Requirements Overview</h2>

  <p class="text-gray-600 mb-6">Apple has significantly expanded privacy requirements since iOS 14. Here's what you need to comply with in 2025:</p>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      </div>
      <h3 class="font-semibold text-gray-900 mb-2">Privacy Policy URL</h3>
      <p class="text-sm text-gray-600">Required for all apps. Must be accessible from within the app and linked in App Store Connect metadata.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
      </div>
      <h3 class="font-semibold text-gray-900 mb-2">Privacy Nutrition Labels</h3>
      <p class="text-sm text-gray-600">Detailed disclosure of all data your app collects, how it's used, and whether it's linked to identity.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <div class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
      </div>
      <h3 class="font-semibold text-gray-900 mb-2">Account Deletion</h3>
      <p class="text-sm text-gray-600">If your app allows account creation, you must provide a way to delete accounts within the app (Guideline 5.1.1(v)).</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <h3 class="font-semibold text-gray-900 mb-2">Privacy Manifest</h3>
      <p class="text-sm text-gray-600">Required if using "Required Reason APIs" like UserDefaults, file timestamps, or device identifiers.</p>
    </div>
  </div>
</section>

<section id="privacy-policy-url" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Privacy Policy URL Requirements</h2>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">Where You Need a Privacy Policy Link</h3>
    <ul class="space-y-3 text-gray-600">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>App Store Connect:</strong> In your app's metadata under "App Privacy" section</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Within the app:</strong> Accessible from settings or registration flow</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Before data collection:</strong> Shown before requesting sensitive permissions</span>
      </li>
    </ul>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6">
    <h4 class="font-semibold text-amber-900 mb-2">Common Rejection Reasons</h4>
    <ul class="space-y-2 text-amber-800 text-sm">
      <li>• Privacy policy URL returns 404 or is unreachable</li>
      <li>• Privacy policy is not available in the app's primary language</li>
      <li>• Policy doesn't mention the specific app or data it collects</li>
      <li>• No link to privacy policy within the app itself</li>
    </ul>
  </div>
</section>

<section id="nutrition-labels" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Privacy Nutrition Labels</h2>

  <p class="text-gray-600 mb-6">Since December 2020, all apps must disclose their data collection practices through "App Privacy" labels in App Store Connect. These appear on your App Store listing.</p>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Three Categories of Data Use</h3>
    </div>
    <div class="p-6">
      <div class="space-y-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Data Used to Track You</h4>
            <p class="text-sm text-gray-600 mt-1">Data linked to your identity and used for advertising or shared with data brokers. Requires ATT (App Tracking Transparency) consent.</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Data Linked to You</h4>
            <p class="text-sm text-gray-600 mt-1">Data connected to your identity (account, device, etc.) but not used for tracking. Examples: purchase history, user content.</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Data Not Linked to You</h4>
            <p class="text-sm text-gray-600 mt-1">Anonymous data not tied to identity. Examples: aggregated analytics, crash logs without user identifiers.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="data-types" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Data Types You Must Disclose</h2>

  <p class="text-gray-600 mb-6">Apple requires disclosure of 14 categories of data. Here are the most common ones developers collect:</p>

  <div class="overflow-x-auto">
    <table class="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">Data Type</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">Examples</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">Common Sources</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Contact Info</td>
          <td class="px-4 py-3 text-gray-600">Name, email, phone, address</td>
          <td class="px-4 py-3 text-gray-600">Registration forms, profiles</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Identifiers</td>
          <td class="px-4 py-3 text-gray-600">User ID, Device ID</td>
          <td class="px-4 py-3 text-gray-600">Analytics SDKs, crash reporters</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Usage Data</td>
          <td class="px-4 py-3 text-gray-600">App interactions, features used</td>
          <td class="px-4 py-3 text-gray-600">Firebase, Amplitude, Mixpanel</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Diagnostics</td>
          <td class="px-4 py-3 text-gray-600">Crash data, performance data</td>
          <td class="px-4 py-3 text-gray-600">Sentry, Crashlytics, Bugsnag</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Location</td>
          <td class="px-4 py-3 text-gray-600">Precise or coarse location</td>
          <td class="px-4 py-3 text-gray-600">CoreLocation, IP-based</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Purchases</td>
          <td class="px-4 py-3 text-gray-600">Purchase history</td>
          <td class="px-4 py-3 text-gray-600">StoreKit, payment processors</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <p class="text-blue-800 text-sm"><strong>Important:</strong> You must also disclose data collected by third-party SDKs (Firebase, Facebook, AdMob, etc.). Review each SDK's privacy documentation.</p>
  </div>
</section>

<section id="account-deletion" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Account Deletion Requirements</h2>

  <div class="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-red-900 mb-3">Guideline 5.1.1(v) - Account Deletion</h3>
    <p class="text-red-800 mb-4">If your app allows users to create an account, it must also allow them to initiate deletion of their account from within the app.</p>
    <p class="text-red-800 text-sm">This has been mandatory since June 30, 2022. Apps without this feature will be rejected.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">What Account Deletion Must Include</h3>
    <ul class="space-y-3 text-gray-600">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>In-app initiation:</strong> Users must be able to start the deletion process from within the app—not just a website</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Complete deletion:</strong> Delete the account record and associated personal data</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Cancel subscriptions:</strong> Guide users to cancel any active auto-renewing subscriptions first</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Reasonable timeframe:</strong> Deletion should happen promptly (within days, not months)</span>
      </li>
    </ul>
  </div>

  <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
    <h4 class="font-semibold text-gray-900 mb-3">Acceptable Implementations</h4>
    <ul class="space-y-2 text-gray-600 text-sm">
      <li>• In-app "Delete Account" button in Settings</li>
      <li>• In-app link to a web form (must be accessible from the app)</li>
      <li>• In-app chat/support flow that initiates deletion</li>
      <li>• Email request option (only if accompanied by in-app initiation)</li>
    </ul>
  </div>
</section>

<section id="required-reason-api" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Required Reason APIs</h2>

  <p class="text-gray-600 mb-6">Since Spring 2024, Apple requires apps to declare why they use certain APIs that could be used for fingerprinting. You must include approved reasons in a privacy manifest file.</p>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">APIs Requiring Declared Reasons</h3>
    </div>
    <div class="p-6">
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-gray-50 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">File Timestamp APIs</h4>
          <p class="text-sm text-gray-600">NSFileCreationDate, NSFileModificationDate, etc.</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">System Boot Time APIs</h4>
          <p class="text-sm text-gray-600">systemUptime, mach_absolute_time</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">Disk Space APIs</h4>
          <p class="text-sm text-gray-600">volumeAvailableCapacity, NSURLVolumeAvailableCapacityKey</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">User Defaults APIs</h4>
          <p class="text-sm text-gray-600">UserDefaults (when accessed by third-party SDKs)</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="privacy-manifest" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Privacy Manifest File</h2>

  <p class="text-gray-600 mb-6">A privacy manifest is a <code class="bg-gray-100 px-2 py-0.5 rounded">PrivacyInfo.xcprivacy</code> file that declares your app's privacy practices in a machine-readable format.</p>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Sample Privacy Manifest</h3>
    </div>
    <div class="p-6">
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"&gt;
&lt;plist version="1.0"&gt;
&lt;dict&gt;
  &lt;key&gt;NSPrivacyTracking&lt;/key&gt;
  &lt;false/&gt;
  &lt;key&gt;NSPrivacyCollectedDataTypes&lt;/key&gt;
  &lt;array&gt;
    &lt;dict&gt;
      &lt;key&gt;NSPrivacyCollectedDataType&lt;/key&gt;
      &lt;string&gt;NSPrivacyCollectedDataTypeCrashData&lt;/string&gt;
      &lt;key&gt;NSPrivacyCollectedDataTypeLinked&lt;/key&gt;
      &lt;false/&gt;
      &lt;key&gt;NSPrivacyCollectedDataTypeTracking&lt;/key&gt;
      &lt;false/&gt;
      &lt;key&gt;NSPrivacyCollectedDataTypePurposes&lt;/key&gt;
      &lt;array&gt;
        &lt;string&gt;NSPrivacyCollectedDataTypePurposeAppFunctionality&lt;/string&gt;
      &lt;/array&gt;
    &lt;/dict&gt;
  &lt;/array&gt;
  &lt;key&gt;NSPrivacyAccessedAPITypes&lt;/key&gt;
  &lt;array&gt;
    &lt;dict&gt;
      &lt;key&gt;NSPrivacyAccessedAPIType&lt;/key&gt;
      &lt;string&gt;NSPrivacyAccessedAPICategoryUserDefaults&lt;/string&gt;
      &lt;key&gt;NSPrivacyAccessedAPITypeReasons&lt;/key&gt;
      &lt;array&gt;
        &lt;string&gt;CA92.1&lt;/string&gt;
      &lt;/array&gt;
    &lt;/dict&gt;
  &lt;/array&gt;
&lt;/dict&gt;
&lt;/plist&gt;</code></pre>
    </div>
  </div>
</section>

<section id="third-party-sdks" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Third-Party SDK Privacy</h2>

  <p class="text-gray-600 mb-6">You are responsible for the data collection practices of every SDK in your app. Common SDKs and their typical data collection:</p>

  <div class="overflow-x-auto">
    <table class="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">SDK</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">Typical Data Collected</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">Notes</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Firebase Analytics</td>
          <td class="px-4 py-3 text-gray-600">Device ID, usage data, crash data</td>
          <td class="px-4 py-3 text-gray-600">Linked to identity by default</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Facebook SDK</td>
          <td class="px-4 py-3 text-gray-600">Device ID, ad interactions, purchases</td>
          <td class="px-4 py-3 text-gray-600">Used for tracking—requires ATT</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Sentry/Crashlytics</td>
          <td class="px-4 py-3 text-gray-600">Crash logs, device info</td>
          <td class="px-4 py-3 text-gray-600">Can be configured as not linked</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">RevenueCat</td>
          <td class="px-4 py-3 text-gray-600">Purchase history, user ID</td>
          <td class="px-4 py-3 text-gray-600">Linked to identity</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
    <p class="text-amber-800 text-sm"><strong>Action Required:</strong> Check each SDK's documentation for their privacy manifest and include it in your app bundle. Apple now validates that SDKs have proper privacy manifests.</p>
  </div>
</section>

<section id="template" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Privacy Policy Template</h2>

  <p class="text-gray-600 mb-6">Your privacy policy should include these sections at minimum:</p>

  <div class="bg-white border border-gray-200 rounded-xl p-6">
    <ol class="space-y-4 text-gray-600">
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
        <div>
          <strong class="text-gray-900">What data we collect</strong>
          <p class="text-sm mt-1">List all data types: contact info, usage data, device info, etc.</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
        <div>
          <strong class="text-gray-900">How we use your data</strong>
          <p class="text-sm mt-1">App functionality, analytics, personalization, advertising</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
        <div>
          <strong class="text-gray-900">Third-party sharing</strong>
          <p class="text-sm mt-1">List all third parties who receive data (analytics, ad networks)</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
        <div>
          <strong class="text-gray-900">Data retention</strong>
          <p class="text-sm mt-1">How long you keep data and when it's deleted</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">5</span>
        <div>
          <strong class="text-gray-900">User rights</strong>
          <p class="text-sm mt-1">How to access, correct, or delete personal data</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">6</span>
        <div>
          <strong class="text-gray-900">Contact information</strong>
          <p class="text-sm mt-1">Email or form to reach you about privacy concerns</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<section id="checklist" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Privacy Compliance Checklist</h2>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold text-green-900 mb-3">Privacy Policy</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Privacy policy URL is live and accessible</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Policy mentions your specific app by name</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Policy available in app's primary language</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Link to policy accessible within the app</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-900 mb-3">Nutrition Labels</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>All data types disclosed in App Store Connect</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Third-party SDK data collection included</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Tracking status correctly declared</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Data purposes accurately described</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-900 mb-3">Account & Data</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Account deletion available in-app (if accounts exist)</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Subscription cancellation guidance provided</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Data export option available (if applicable)</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-900 mb-3">Technical</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Privacy manifest included (if using Required Reason APIs)</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>All SDK privacy manifests bundled</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>ATT prompt implemented (if tracking)</span>
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
    <a href="/legal-compliance" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-green-600 mb-2">Legal & IAP Compliance</h3>
      <p class="text-sm text-gray-600">Complete guide to App Store legal requirements and In-App Purchases.</p>
    </a>
    <a href="/app-store-metadata-best-practices" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">Metadata Best Practices</h3>
      <p class="text-sm text-gray-600">Optimize your app listing alongside privacy requirements.</p>
    </a>
    <a href="/rejection-recovery" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">Handle Rejections</h3>
      <p class="text-sm text-gray-600">What to do if your app is rejected for privacy issues.</p>
    </a>
  </div>
</section>

<!-- CTA Section -->
<section class="mb-12">
  <div class="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
    <div class="max-w-2xl">
      <h2 class="text-2xl font-bold mb-4">Ensure Your Privacy Compliance</h2>
      <p class="text-white/90 mb-6">Our AI-powered review tool checks your app's privacy practices against Apple's requirements before you submit.</p>
      <a href="/ai-review" class="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
        Check Privacy Compliance
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Do I need a privacy policy if my app doesn't collect any data?</h3>
      <p class="text-gray-600">Yes. Apple requires all apps to have a privacy policy URL in App Store Connect, even if you collect no data. Your policy can simply state that you don't collect personal information.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">What happens if my privacy labels don't match my actual data collection?</h3>
      <p class="text-gray-600">Apple may reject your app or remove it from the store. In 2024, Apple began more actively verifying privacy labels against actual app behavior using automated scanning tools.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Can I just link to my website's privacy policy?</h3>
      <p class="text-gray-600">Yes, but the policy must specifically cover your app and its data practices—not just your general website. Apple reviewers check that the policy is relevant to the app being submitted.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">How often should I update my privacy nutrition labels?</h3>
      <p class="text-gray-600">Update them whenever you add new SDKs, change data collection practices, or Apple adds new categories. You don't need to submit a new app version to update labels—they're managed separately in App Store Connect.</p>
    </div>
  </div>
</section>
`
};

async function main() {
  console.log('Seeding Privacy Policy Requirements article...');

  await prisma.article.upsert({
    where: { slug: privacyPolicyArticle.slug },
    update: {
      title: privacyPolicyArticle.title,
      description: privacyPolicyArticle.description,
      content: privacyPolicyArticle.content,
      category: privacyPolicyArticle.category,
      metaKeywords: privacyPolicyArticle.metaKeywords,
      isHub: privacyPolicyArticle.isHub,
      toc: privacyPolicyArticle.toc,
      updatedAt: new Date(),
    },
    create: privacyPolicyArticle,
  });

  console.log('✓ Privacy Policy Requirements article created/updated');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

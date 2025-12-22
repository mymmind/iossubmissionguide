import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const guideline21Article = {
  slug: 'guideline-2-1-app-crashes',
  title: 'Guideline 2.1 Rejection: How to Fix App Crashes & Bugs',
  description: 'Complete guide to fixing Apple App Store Guideline 2.1 rejections for crashes, bugs, and performance issues. Learn what triggers 2.1 rejections and how to resolve them.',
  category: 'Rejections',
  isHub: false,
  metaKeywords: [
    'guideline 2.1',
    'app store rejection 2.1',
    'app crash rejection',
    'ios app crashes',
    'app store performance rejection',
    '2.1 app completeness',
    'app store bug rejection',
    'fix app crash apple',
    'app review crash'
  ],
  toc: {
    title: "Guideline 2.1 Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#what-is-2-1", label: "What is Guideline 2.1" },
          { href: "#common-triggers", label: "Common Triggers" },
          { href: "#how-to-fix", label: "How to Fix" },
          { href: "#debugging", label: "Debugging Crashes" },
          { href: "#prevention", label: "Prevention Checklist" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full">Rejection Guide</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">Guideline 2.1</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Guideline 2.1: How to Fix Crash & Bug Rejections</h1>
  <p class="text-xl text-gray-600 max-w-3xl">I'll never forget opening that rejection email at 2am. "We found that your app crashed on iPad Air 2 running iOS 16.4." My app. The one I'd tested for weeks on my own devices. Dead on arrival because of a device I didn't own.</p>
  <p class="text-lg text-gray-500 mt-4">If you're here, you probably just got the same gut-punch. Let me help you fix it.</p>
</header>

<!-- Quick Answer Box -->
<div class="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-10">
  <h2 class="text-lg font-semibold text-red-900 mb-3">The TL;DR on Guideline 2.1</h2>
  <p class="text-gray-700 mb-4">Your app crashed or froze during review. Apple's reviewers test on devices you probably don't have, with fresh installs and demo accounts. They found something broken, and now you need to fix it. The good news? Crash rejections are usually quick to resolve once you know what happened.</p>
  <div class="flex items-center gap-2 text-sm text-red-700">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
    <span><strong>~30% of all App Store rejections</strong> cite Guideline 2.1. You're not alone.</span>
  </div>
</div>

<section id="what-is-2-1" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">What is Guideline 2.1, Actually?</h2>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">Apple's Legalese</h3>
    <blockquote class="border-l-4 border-red-400 pl-4 text-gray-700 italic">
      "App completeness: Submissions to App Review, including apps you make available for pre-order, should be final versions with all necessary metadata and fully functional URLs included. All placeholder text, empty websites, and other temporary content should be scrubbed before submission."
    </blockquote>
  </div>

  <p class="text-gray-600 mb-6"><strong>Translation:</strong> If your app crashes, shows a blank screen, has a button that goes nowhere, or does anything that makes a reviewer go "huh?"—you're getting bounced. Apple reviewers aren't patient debuggers. They tap around for maybe 5-10 minutes. If something breaks, they screenshot it and hit reject.</p>

  <div class="grid md:grid-cols-2 gap-4">
    <div class="bg-red-50 border border-red-100 rounded-xl p-5">
      <h4 class="font-semibold text-red-900 mb-2">What Triggers 2.1</h4>
      <ul class="space-y-2 text-red-800 text-sm">
        <li>• App crashes on launch</li>
        <li>• App crashes during normal use</li>
        <li>• Features that don't work</li>
        <li>• Broken links or buttons</li>
        <li>• Network errors without handling</li>
        <li>• Placeholder content ("Lorem ipsum")</li>
      </ul>
    </div>
    <div class="bg-green-50 border border-green-100 rounded-xl p-5">
      <h4 class="font-semibold text-green-900 mb-2">What Apple Expects</h4>
      <ul class="space-y-2 text-green-800 text-sm">
        <li>• Zero crashes during review</li>
        <li>• All buttons and features work</li>
        <li>• Proper error handling</li>
        <li>• Loading states for slow content</li>
        <li>• Graceful offline behavior</li>
        <li>• Real, final content</li>
      </ul>
    </div>
  </div>
</section>

<section id="common-triggers" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">The Usual Suspects: What Causes 2.1 Rejections</h2>

  <p class="text-gray-600 mb-6">After seeing hundreds of 2.1 rejections across dev forums and my own painful experiences, here are the scenarios that get developers every single time:</p>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-100">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">1</span>
          The Launch Crash (a.k.a. The Career-Ender)
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">App doesn't even open. The reviewer taps your icon, sees the splash screen, and boom—crash. They can't test anything else. Instant rejection, no questions asked.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Why this happens:</p>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• <strong>Force-unwrapping nil</strong> in Swift (the classic <code>!</code> that bites everyone)</li>
            <li>• Your backend is down or slow to respond during the review window</li>
            <li>• Missing Info.plist keys that iOS 17+ requires</li>
            <li>• Asset catalog missing fonts or images you reference in code</li>
            <li>• Memory pressure on older devices (iPad Air 2 has 2GB RAM)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-100">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">2</span>
          The Demo Account That Doesn't Work
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">You gave Apple a demo account. But did you actually test it right before submitting? Did you type it correctly? Did it expire? I've been burned by this more than I'd like to admit.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">The ways this goes wrong:</p>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• <strong>Typo in credentials</strong> (copy-paste from a notes app that added invisible characters)</li>
            <li>• Demo account got auto-deleted by your cleanup job</li>
            <li>• Your auth service has rate limiting that blocks Apple's IP range</li>
            <li>• Sign in with Apple is configured but you never actually tested the Apple ID flow</li>
            <li>• 2FA is required but you forgot to provide codes or disable it for the test account</li>
          </ul>
        </div>
        <p class="text-sm text-gray-500 mt-4 italic">Pro tip: Test your demo account from a different network (like mobile data) right before you hit submit. And screenshot yourself logging in—helps if you need to argue the credentials worked.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-100">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">3</span>
          The Backend That Picked the Worst Time to Die
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">Murphy's Law loves app reviews. Your server that's been rock solid for months will choose the exact 10-minute window when Apple's reviewer opens your app to throw a 500 error. And if your app shows a blank screen or a cryptic error? That's a 2.1.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">How servers betray you:</p>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• Scheduled deployment happened to run during review</li>
            <li>• Rate limiting kicked in because the reviewer's IP looks suspicious</li>
            <li>• Your free tier Heroku dyno went to sleep</li>
            <li>• API times out and your app just shows... nothing</li>
            <li>• SSL cert expired (or worse, your cert pinning is rejecting Apple's proxy)</li>
          </ul>
        </div>
        <div class="bg-yellow-50 rounded-lg p-4 mt-4">
          <p class="text-sm text-yellow-800"><strong>Real talk:</strong> Always show something when the network fails. A friendly error message, a retry button, cached data—anything but a blank screen or spinner that spins forever.</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-100">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">4</span>
          The "I'll Finish This Later" Features
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">We've all done it. Ship the MVP, worry about that settings page later. Except the reviewer found your "TODO: implement this" comment or that button that does nothing.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">Things you forgot to hide or remove:</p>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• "Coming Soon" buttons that lead nowhere</li>
            <li>• Lorem ipsum text you used for layout testing</li>
            <li>• A settings tab that's completely empty</li>
            <li>• Navigation items that crash when tapped</li>
            <li>• Profile picture placeholder that never gets replaced</li>
          </ul>
        </div>
        <p class="text-sm text-gray-500 mt-4 italic">If a feature isn't ready, remove it entirely. Don't show a grayed-out button with "Coming Soon"—Apple hates that.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-100">
        <h3 class="font-semibold text-red-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-red-600 text-white rounded flex items-center justify-center text-sm">5</span>
          The iPad You Forgot Existed
        </h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">Your app runs on iPad by default unless you specifically opt out. And guess what? Apple reviewers love testing on iPads. If your layout goes haywire on a 12.9" screen or crashes in landscape mode, 2.1 rejection incoming.</p>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="font-medium text-gray-900 mb-2">iPad gotchas:</p>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• UI elements overlapping or off-screen on larger displays</li>
            <li>• Buttons so tiny they're impossible to tap (Apple's HIG says 44pt minimum)</li>
            <li>• Hardcoded widths like <code>width: 375</code> that don't scale</li>
            <li>• Landscape mode crashes because you never tested it</li>
            <li>• Split View and Slide Over causing layout chaos</li>
          </ul>
        </div>
        <p class="text-sm text-gray-500 mt-4 italic">Don't have an iPad? The Simulator works. Or set your app to iPhone-only in Xcode if iPad support isn't part of your plan.</p>
      </div>
    </div>
  </div>
</section>

<section id="how-to-fix" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">OK, I Got Rejected. Now What?</h2>

  <p class="text-gray-600 mb-6">Deep breath. You can resubmit as soon as you fix it—there's no penalty or waiting period. Here's how to handle it:</p>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-green-50 px-6 py-4 border-b border-green-100">
      <h3 class="font-semibold text-green-900">Step 1: Actually Read the Rejection Message</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">I know, sounds obvious. But Apple's messages contain gold. They'll tell you exactly what broke:</p>
      <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm">
        <p class="text-gray-700">"We were unable to review your app as it crashed on launch on iPad running iOS 17.2. Please see attached crash logs."</p>
      </div>
      <p class="text-gray-600 mt-4"><strong>Parse this like code:</strong></p>
      <ul class="text-gray-600 mt-2 space-y-1">
        <li>• <strong>"iPad"</strong> — Did you test on iPad? Do you even have one?</li>
        <li>• <strong>"iOS 17.2"</strong> — Are you testing on this version or still on 16?</li>
        <li>• <strong>"on launch"</strong> — This is a startup crash, not a deep feature bug</li>
        <li>• <strong>"attached crash logs"</strong> — They gave you the stack trace. USE IT.</li>
      </ul>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-green-50 px-6 py-4 border-b border-green-100">
      <h3 class="font-semibold text-green-900">Step 2: Reproduce the Issue</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">Try to recreate exactly what Apple experienced:</p>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Test on the same device type and iOS version mentioned</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Do a fresh install (delete and reinstall)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Test with a new user account (not your developer account)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Test with VPN to simulate different network conditions</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-green-50 px-6 py-4 border-b border-green-100">
      <h3 class="font-semibold text-green-900">Step 3: Fix the Specific Issue</h3>
    </div>
    <div class="p-6">
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">For Crashes:</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Analyze the crash log using Xcode's Organizer</li>
            <li>• Add proper nil-checking and error handling</li>
            <li>• Test on low-memory conditions</li>
            <li>• Verify all required frameworks are linked</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">For Login Issues:</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Verify demo account still works</li>
            <li>• Test all login methods (email, social, Apple)</li>
            <li>• Provide clear instructions in Review Notes</li>
            <li>• Consider creating a fresh demo account</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">For Network Errors:</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Add loading indicators and timeouts</li>
            <li>• Show user-friendly error messages</li>
            <li>• Implement retry mechanisms</li>
            <li>• Add offline mode or graceful degradation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <div class="bg-green-50 px-6 py-4 border-b border-green-100">
      <h3 class="font-semibold text-green-900">Step 4: Resubmit with Confidence</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">Before resubmitting:</p>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Confirm the fix works on the exact device/OS mentioned</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Test the entire user flow, not just the broken part</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Update Review Notes explaining what you fixed</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Increment build number and submit new binary</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section id="debugging" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Debugging Crashes</h2>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Reading Crash Logs from Apple</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">Apple sometimes attaches crash logs. Here's how to read them:</p>
      <ol class="space-y-3 text-gray-600">
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
          <span>Download the .crash or .ips file from the Resolution Center</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
          <span>Open Xcode → Window → Devices and Simulators</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
          <span>Drag the crash file into the device logs</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
          <span>Xcode will symbolicate it if you have matching dSYM files</span>
        </li>
      </ol>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Using Crash Reporting Services</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-4">Integrate crash reporting to catch issues before Apple does:</p>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">Firebase Crashlytics</h4>
          <p class="text-sm text-gray-600">Free, real-time crash reporting with stack traces and user data.</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">Sentry</h4>
          <p class="text-sm text-gray-600">Error tracking with context, breadcrumbs, and release health.</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">Bugsnag</h4>
          <p class="text-sm text-gray-600">Stability scoring and automated issue prioritization.</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">Xcode Organizer</h4>
          <p class="text-sm text-gray-600">Free crash reports from TestFlight and App Store users.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="prevention" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Prevention Checklist</h2>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
    <p class="text-green-800 mb-6">Use this checklist before every submission to avoid 2.1 rejections:</p>

    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold text-green-900 mb-3">Stability Testing</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Fresh install on physical device works</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Tested on oldest supported iOS version</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Tested on iPad (if applicable)</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Tested in airplane mode / poor network</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Memory warnings don't cause crashes</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-900 mb-3">User Flow Testing</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>All buttons and links work</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Login/signup flow tested with demo account</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>All screens have real content (no placeholders)</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>In-app purchases complete successfully</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>External URLs open correctly</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-900 mb-3">Backend Readiness</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>API servers are stable and monitored</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Demo account credentials are current</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>No rate limiting on reviewer IPs</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>SSL certificates are valid</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-900 mb-3">Error Handling</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Network errors show helpful messages</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Loading states for slow operations</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Empty states handled gracefully</span>
          </li>
          <li class="flex items-start gap-2 text-green-800">
            <input type="checkbox" class="mt-1 rounded border-green-300">
            <span>Retry options for failed requests</span>
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
    <a href="/rejection-recovery" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">How to Handle Rejection</h3>
      <p class="text-sm text-gray-600">Step-by-step guide to responding to App Store rejections and getting approved.</p>
    </a>
    <a href="/guideline-4-2-minimum-functionality" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">Guideline 4.2: Minimum Functionality</h3>
      <p class="text-sm text-gray-600">Another common rejection reason - learn how to add enough value to pass review.</p>
    </a>
    <a href="/app-store-review-time-2025" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-green-600 mb-2">Review Times 2025</h3>
      <p class="text-sm text-gray-600">Current App Store review times and what to expect after fixing your rejection.</p>
    </a>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Questions I Get Asked All the Time</h2>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">"But it works fine on MY phone!"</h3>
      <p class="text-gray-600">This is the #1 thing developers say after a 2.1. Here's the thing: Apple tests on devices you don't have, iOS versions you might not be running, with fresh installs and zero cached data. They might be on iOS 17.4 beta. They might use an iPad Air 2 with 2GB RAM. They definitely don't have your development environment's configuration.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Can I resubmit immediately?</h3>
      <p class="text-gray-600">Yes! No waiting period, no penalty. Fix it, bump your build number, submit again. Resubmissions after a rejection usually get reviewed faster too—often within 24 hours vs. the 24-48 hours for first submissions. Apple prioritizes developers who are actively fixing issues.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Am I going to get banned for multiple rejections?</h3>
      <p class="text-gray-600">No. Apple doesn't ban developers for 2.1 rejections—they just want working apps. I've seen developers get rejected 5+ times on the same app and eventually get approved. Now, if you keep submitting the exact same broken build? That's suspicious. But legitimate iteration is fine.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">What's the difference between 2.1 and 2.3?</h3>
      <p class="text-gray-600">2.1 = your app is broken (crashes, bugs, incomplete). 2.3 = your app works but your metadata is misleading (screenshots show features you don't have, description promises things you can't deliver). A crash is always 2.1. Fake screenshots are 2.3.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Should I use App Review Board to escalate?</h3>
      <p class="text-gray-600">For a 2.1 crash rejection? Almost never. The crash happened. Arguing won't make it un-crash. Save the appeal board for subjective rejections like 4.2 or 4.3 where you genuinely disagree. For 2.1, just fix it and resubmit.</p>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="mb-12">
  <div class="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
    <div class="max-w-2xl">
      <h2 class="text-2xl font-bold mb-4">Avoid 2.1 Rejections Before You Submit</h2>
      <p class="text-white/90 mb-6">Our AI-powered review tool simulates Apple's testing process, catching crashes and bugs before they cause rejection.</p>
      <a href="/ai-review" class="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
        Try AI Pre-Review
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>
`
};

async function main() {
  console.log('Seeding Guideline 2.1 article...');

  await prisma.article.upsert({
    where: { slug: guideline21Article.slug },
    update: {
      title: guideline21Article.title,
      description: guideline21Article.description,
      content: guideline21Article.content,
      category: guideline21Article.category,
      metaKeywords: guideline21Article.metaKeywords,
      isHub: guideline21Article.isHub,
      toc: guideline21Article.toc,
      updatedAt: new Date(),
    },
    create: guideline21Article,
  });

  console.log('✓ Guideline 2.1 article created/updated');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

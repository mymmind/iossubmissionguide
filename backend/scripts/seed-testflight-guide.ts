import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const testflightArticle = {
  slug: 'testflight-beta-testing-complete-guide',
  title: 'TestFlight Beta Testing: The Complete Guide for iOS Developers',
  description: 'Everything you need to know about TestFlight: internal vs external testing, inviting testers, beta app review, collecting feedback, and common pitfalls to avoid.',
  category: 'Guides',
  isHub: false,
  metaKeywords: [
    'testflight',
    'testflight beta testing',
    'ios beta testing',
    'testflight invite',
    'testflight external testing',
    'testflight app review',
    'testflight public link',
    'beta app review',
    'testflight testers',
    'how to use testflight'
  ],
  toc: {
    title: "TestFlight Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#what-is-testflight", label: "What is TestFlight" },
          { href: "#internal-vs-external", label: "Internal vs External" },
          { href: "#setup", label: "Setting Up TestFlight" }
        ]
      },
      {
        section: "Distribution",
        items: [
          { href: "#inviting-testers", label: "Inviting Testers" },
          { href: "#beta-review", label: "Beta App Review" },
          { href: "#feedback", label: "Collecting Feedback" },
          { href: "#common-issues", label: "Common Issues" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">Complete Guide</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">TestFlight Beta Testing: Everything You Need to Know</h1>
  <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">TestFlight is how you get your iOS app into real users' hands before the App Store launch. Here's everything from uploading your first build to managing thousands of testers.</p>
</header>

<div class="bg-apple-light dark:bg-gray-800 rounded-2xl p-6 mb-12">
  <h3 class="font-bold text-apple-dark dark:text-white mb-3 flex items-center gap-2">
    <span class="text-xl">📋</span> TL;DR - TestFlight Basics
  </h3>
  <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-0">
    <li>• TestFlight is Apple's official beta testing platform</li>
    <li>• Internal testers (up to 100): instant access, no review needed</li>
    <li>• External testers (up to 10,000): requires Beta App Review</li>
    <li>• Builds expire after 90 days</li>
    <li>• Free to use, included with your Apple Developer account</li>
  </ul>
</div>

<section id="what-is-testflight" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is TestFlight?</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    TestFlight is Apple's beta testing service that lets you distribute pre-release versions of your iOS, iPadOS, macOS, tvOS, and watchOS apps to testers. It's been around since 2014 (when Apple acquired the original TestFlight company) and is now deeply integrated into App Store Connect.
  </p>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Before TestFlight, distributing beta builds was a nightmare involving UDIDs, provisioning profiles, and manually emailing .ipa files. Now it's as simple as uploading to App Store Connect and sending invite links.
  </p>

  <div class="grid md:grid-cols-3 gap-4 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center">
      <div class="text-3xl font-bold text-apple-blue mb-2">100</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Internal Testers</div>
    </div>
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center">
      <div class="text-3xl font-bold text-apple-blue mb-2">10,000</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">External Testers</div>
    </div>
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center">
      <div class="text-3xl font-bold text-apple-blue mb-2">90</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">Days per Build</div>
    </div>
  </div>
</section>

<section id="internal-vs-external" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Internal vs External Testing</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    This is the most important distinction in TestFlight. Get it wrong and you'll be waiting for reviews when you don't need to.
  </p>

  <div class="grid md:grid-cols-2 gap-6 mb-8">
    <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40 rounded-xl p-6">
      <h3 class="font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
        Internal Testing
      </h3>
      <ul class="space-y-2 text-blue-800 dark:text-blue-400 text-sm">
        <li><strong>Who:</strong> Members of your App Store Connect team</li>
        <li><strong>Limit:</strong> Up to 100 testers</li>
        <li><strong>Review:</strong> No Beta App Review required</li>
        <li><strong>Speed:</strong> Available immediately after upload</li>
        <li><strong>Best for:</strong> Your team, QA, stakeholders</li>
      </ul>
    </div>

    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl p-6">
      <h3 class="font-bold text-green-900 dark:text-green-300 mb-4 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
        External Testing
      </h3>
      <ul class="space-y-2 text-green-800 dark:text-green-400 text-sm">
        <li><strong>Who:</strong> Anyone with an email address</li>
        <li><strong>Limit:</strong> Up to 10,000 testers per app</li>
        <li><strong>Review:</strong> Requires Beta App Review (24-48 hours)</li>
        <li><strong>Speed:</strong> After review approval</li>
        <li><strong>Best for:</strong> Real users, public betas</li>
      </ul>
    </div>
  </div>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">Pro Tip: Use Internal Testing First</h4>
    <p class="text-amber-800 dark:text-amber-400 text-sm mb-0">
      Always test with internal testers before submitting to external. It's instant, and you can catch obvious bugs before they hit Beta App Review. A rejected beta build still counts against your team's patience.
    </p>
  </div>
</section>

<section id="setup" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Setting Up TestFlight</h2>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Step 1: Upload Your Build</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    You can upload builds to App Store Connect in several ways:
  </p>

  <div class="space-y-4 mb-8">
    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="font-bold text-apple-blue">1</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Xcode (Most Common)</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Product → Archive → Distribute App → App Store Connect. Follow the wizard.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="font-bold text-green-600">2</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Xcode Cloud</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Set up CI/CD that automatically uploads builds when you push to a branch.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="font-bold text-purple-600">3</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">altool / Transporter</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Command-line tools for scripted uploads. Useful for CI/CD pipelines.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="font-bold text-amber-600">4</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Fastlane</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Third-party tool that automates the entire build and upload process.</p>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Step 2: Wait for Processing</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    After uploading, Apple processes your build. This typically takes 5-30 minutes but can take longer during busy periods. You'll see the build status in App Store Connect under your app → TestFlight tab.
  </p>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Step 3: Fill in Test Information</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    For external testing, you need to provide:
  </p>

  <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li><strong>Beta App Description:</strong> What are you testing? What should testers focus on?</li>
    <li><strong>Feedback Email:</strong> Where should testers send bug reports?</li>
    <li><strong>What to Test:</strong> Specific features or flows you want feedback on</li>
    <li><strong>Demo Account:</strong> If your app requires login (same as App Store review)</li>
  </ul>
</section>

<section id="inviting-testers" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Inviting Testers</h2>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Internal Testers</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    Internal testers must be part of your App Store Connect team. To add them:
  </p>

  <ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li>Go to Users and Access in App Store Connect</li>
    <li>Invite them with at least the "App Manager" or "Developer" role</li>
    <li>Under your app → TestFlight → Internal Testing, add them to a group</li>
    <li>They'll receive an email invite instantly</li>
  </ol>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">External Testers</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    External testers don't need App Store Connect accounts. You have two options:
  </p>

  <div class="space-y-4 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Option 1: Email Invites</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Add email addresses manually or import a CSV. Each tester gets a personalized invite. Good for controlled betas where you know your testers.</p>
      <p class="text-gray-500 dark:text-gray-500 text-xs">Limit: 10,000 emails per app</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Option 2: Public Link</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Generate a public link anyone can use to join your beta. Great for open betas, social media promotion, or when you want anyone to test.</p>
      <p class="text-gray-500 dark:text-gray-500 text-xs">You can limit how many people can join via the link and disable it anytime.</p>
    </div>
  </div>

  <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-green-900 dark:text-green-300 mb-2">Public Link Strategy</h4>
    <p class="text-green-800 dark:text-green-400 text-sm mb-0">
      Public links are powerful but can be overwhelming. Consider setting a cap (e.g., 500 testers) and promoting in waves. You can always increase the limit later.
    </p>
  </div>
</section>

<section id="beta-review" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Beta App Review</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Every build you want to distribute to external testers must pass Beta App Review. It's similar to the full App Store review but typically faster and slightly less strict.
  </p>

  <div class="grid md:grid-cols-2 gap-6 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-3">What Beta Review Checks</h4>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
        <li>• App doesn't crash on launch</li>
        <li>• Basic functionality works</li>
        <li>• No obvious guideline violations</li>
        <li>• Metadata is appropriate</li>
        <li>• No malware or harmful content</li>
      </ul>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-3">What Beta Review Ignores</h4>
      <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
        <li>• Minor UI bugs (it's a beta!)</li>
        <li>• Incomplete features</li>
        <li>• Placeholder content (within reason)</li>
        <li>• Performance optimization</li>
        <li>• Polish and finishing touches</li>
      </ul>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Timeline</h3>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Beta App Review typically takes <strong>24-48 hours</strong>. It's faster than full App Store review, but don't assume it's instant. Plan accordingly if you're on a deadline.
  </p>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">Skip Beta Review After First Build</h4>
    <p class="text-amber-800 dark:text-amber-400 text-sm mb-0">
      Once your first build is approved, subsequent builds with the same external testers often go through automatically—no review wait. This only works if you're updating an already-approved beta, not adding new testers to a new group.
    </p>
  </div>
</section>

<section id="feedback" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Collecting Feedback</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    TestFlight has built-in feedback mechanisms, but they're limited. Here's how to actually get useful feedback from testers:
  </p>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Built-in Feedback</h3>

  <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
    <li><strong>Screenshots:</strong> Testers can take screenshots and annotate them directly in TestFlight</li>
    <li><strong>Crash Reports:</strong> Automatically collected and available in App Store Connect</li>
    <li><strong>Email:</strong> Testers can email you directly via the feedback email you provided</li>
  </ul>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Better Approaches</h3>

  <div class="space-y-4 mb-8">
    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-apple-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">In-App Feedback Button</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Add a "Send Feedback" button that opens a form or email composer. Make it easy to reach you without leaving the app.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Discord/Slack Community</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Create a channel for beta testers. Real-time chat often surfaces issues faster than formal reports. Plus, testers help each other.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Structured Surveys</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Send periodic surveys (Typeform, Google Forms) asking specific questions. "What's the most confusing part?" gets better answers than "Any feedback?"</p>
      </div>
    </div>
  </div>
</section>

<section id="common-issues" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Common TestFlight Issues</h2>

  <div class="space-y-4 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">"Build Processing" Stuck</h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">If your build is stuck processing for more than an hour, there might be an issue. Check for emails from Apple about processing errors. Common causes: invalid provisioning profile, missing required icons, or invalid binary format.</p>
      <p class="text-gray-500 dark:text-gray-500 text-xs">Fix: Check your email, verify your archive settings, and try uploading again.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Testers Not Receiving Invites</h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">TestFlight invites sometimes land in spam folders, especially for corporate emails. If a tester says they didn't get the invite, have them check spam or send again.</p>
      <p class="text-gray-500 dark:text-gray-500 text-xs">Fix: Use the public link as a backup, or have them manually open TestFlight and enter a redemption code.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">"Unable to Install" Error</h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">This usually means the device or OS version isn't supported. Check that your deployment target matches the tester's device capabilities.</p>
      <p class="text-gray-500 dark:text-gray-500 text-xs">Fix: Lower your deployment target or inform testers of requirements.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Beta Review Rejected</h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Even betas get rejected. Common reasons: crashes on launch, completely non-functional app, or content violations. Fix the issue and resubmit—beta rejections don't affect your App Store standing.</p>
      <p class="text-gray-500 dark:text-gray-500 text-xs">Fix: Address the specific issue mentioned and submit a new build.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Build Expired</h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">TestFlight builds expire after 90 days. Testers will see a warning, then the app stops working. You need to upload a new build to continue testing.</p>
      <p class="text-gray-500 dark:text-gray-500 text-xs">Fix: Upload a new build before expiration if you're still testing.</p>
    </div>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Can I use TestFlight for production/live apps?</h3>
      <p class="text-gray-600 dark:text-gray-400">No. TestFlight is explicitly for testing. Builds expire after 90 days, and using TestFlight to avoid App Store review is against the rules. If caught, your developer account could be terminated.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Do TestFlight apps work with In-App Purchases?</h3>
      <p class="text-gray-600 dark:text-gray-400">Yes, but they use the sandbox environment. Testers can make purchases without being charged real money. This is essential for testing your IAP flow before launch.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Can I have multiple beta groups?</h3>
      <p class="text-gray-600 dark:text-gray-400">Yes. You can create different groups (e.g., "Power Users", "New Users", "QA Team") and give each group access to different builds. Great for staged rollouts or A/B testing.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What data can I see about my testers?</h3>
      <p class="text-gray-600 dark:text-gray-400">App Store Connect shows you: number of installs, sessions, crashes per build, and device/OS distribution. You won't see individual user behavior—just aggregate stats.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Can I remove a tester?</h3>
      <p class="text-gray-600 dark:text-gray-400">Yes. Go to your tester group, find the tester, and remove them. Their access is revoked immediately. For public links, you can also disable the link entirely.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Does TestFlight work on Mac (macOS apps)?</h3>
      <p class="text-gray-600 dark:text-gray-400">Yes, as of macOS Monterey. The process is the same—upload your macOS build to App Store Connect and distribute via TestFlight. Testers need macOS 12+ and the TestFlight app.</p>
    </div>
  </div>
</section>

<div class="mt-16 p-8 bg-gradient-to-br from-apple-blue/5 to-blue-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-apple-blue/10 dark:border-blue-800/40">
  <h3 class="text-2xl font-bold text-apple-dark dark:text-white mb-4">Ready to Launch After Beta?</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">
    Our AI Review Toolkit helps ensure your app is ready for the full App Store review. Catch potential rejection issues before you submit your production build.
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
  console.log('Seeding TestFlight Guide article...');

  await prisma.article.upsert({
    where: { slug: testflightArticle.slug },
    update: {
      title: testflightArticle.title,
      description: testflightArticle.description,
      content: testflightArticle.content,
      category: testflightArticle.category,
      metaKeywords: testflightArticle.metaKeywords,
      isHub: testflightArticle.isHub,
      toc: testflightArticle.toc,
      updatedAt: new Date(),
    },
    create: testflightArticle,
  });

  console.log('TestFlight Guide article seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

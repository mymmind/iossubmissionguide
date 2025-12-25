import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const appealProcessArticle = {
  slug: 'app-store-rejection-appeal-process',
  title: 'How to Appeal an App Store Rejection (Step-by-Step)',
  description: 'Complete guide to appealing App Store rejections. Learn when to appeal vs. when to fix, how to write effective appeals, and what to do if the App Review Board denies you.',
  category: 'Rejections',
  isHub: false,
  metaKeywords: [
    'app store rejection appeal',
    'appeal app review',
    'app review board',
    'apple rejection appeal',
    'how to appeal app store',
    'app store appeal template',
    'app review appeal process',
    'apple developer appeal',
    'app rejected what to do',
    'resolution center apple'
  ],
  toc: {
    title: "Appeal Process Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#when-to-appeal", label: "When to Appeal" },
          { href: "#resolution-center", label: "Resolution Center" },
          { href: "#writing-appeal", label: "Writing Your Appeal" }
        ]
      },
      {
        section: "Escalation",
        items: [
          { href: "#app-review-board", label: "App Review Board" },
          { href: "#phone-call", label: "Requesting a Call" },
          { href: "#what-if-denied", label: "If You're Denied" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full">Rejection Guide</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">How to Appeal an App Store Rejection</h1>
  <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">Your app got rejected and you think it's unfair. Here's how to dispute the decision, what actually works in appeals, and when to escalate to the App Review Board.</p>
</header>

<div class="bg-apple-light dark:bg-gray-800 rounded-2xl p-6 mb-12">
  <h3 class="font-bold text-apple-dark dark:text-white mb-3 flex items-center gap-2">
    <span class="text-xl">📋</span> TL;DR - The Appeal Process
  </h3>
  <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-0">
    <li>• First: Respond via Resolution Center in App Store Connect</li>
    <li>• If that fails: Request a phone call with App Review</li>
    <li>• Last resort: Escalate to the App Review Board</li>
    <li>• Only appeal if you genuinely believe the rejection was wrong</li>
    <li>• Sometimes it's faster to just fix the issue and resubmit</li>
  </ul>
</div>

<section id="when-to-appeal" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Should You Appeal or Just Fix It?</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Before you spend time on an appeal, ask yourself: Is this worth fighting? Sometimes the fastest path to approval is just making the change Apple wants, even if you disagree.
  </p>

  <div class="grid md:grid-cols-2 gap-6 mb-8">
    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl p-5">
      <h4 class="font-semibold text-green-900 dark:text-green-300 mb-3">Good Reasons to Appeal</h4>
      <ul class="space-y-2 text-green-800 dark:text-green-400 text-sm">
        <li>• The reviewer misunderstood your app's functionality</li>
        <li>• The rejection cites a guideline that doesn't apply</li>
        <li>• Similar apps are approved (and you can name them)</li>
        <li>• You have evidence the reviewer missed information you provided</li>
        <li>• The requested change would break core functionality</li>
        <li>• Previous versions with the same feature were approved</li>
      </ul>
    </div>
    <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl p-5">
      <h4 class="font-semibold text-red-900 dark:text-red-300 mb-3">Just Fix It Instead</h4>
      <ul class="space-y-2 text-red-800 dark:text-red-400 text-sm">
        <li>• The fix is quick and doesn't hurt your app</li>
        <li>• You actually did violate the guideline</li>
        <li>• It's a subjective design choice Apple dislikes</li>
        <li>• You're trying to work around a clear rule</li>
        <li>• Time-to-market matters more than winning the argument</li>
        <li>• This is your first submission and you're unsure</li>
      </ul>
    </div>
  </div>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">Real Talk</h4>
    <p class="text-amber-800 dark:text-amber-400 text-sm mb-0">
      Appeals take time. A typical back-and-forth can add 3-7 days to your timeline. If your rejection is for something fixable in an hour, fixing is almost always faster than arguing.
    </p>
  </div>
</section>

<section id="resolution-center" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Step 1: Use the Resolution Center</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    The Resolution Center in App Store Connect is your first stop. This is where you communicate directly with the reviewer who rejected your app.
  </p>

  <div class="space-y-4 mb-8">
    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Go to App Store Connect</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Find your app, then click on the rejected submission. Look for the "Resolution Center" link.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Read the Full Rejection Reason</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Make sure you understand exactly what they're objecting to. Sometimes the email summary misses details that are in the full message.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Click "Reply"</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Write your response. Be clear, concise, and professional. You can attach screenshots or documents if helpful.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Wait for Response</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Responses typically come within 24-48 hours. The same reviewer or a colleague will reply.</p>
      </div>
    </div>
  </div>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    <strong>Pro tip:</strong> You can reply to the Resolution Center as many times as needed. It's a conversation, not a one-shot appeal. But don't spam—give them time to respond between messages.
  </p>
</section>

<section id="writing-appeal" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Write an Effective Appeal</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Your appeal should be clear, factual, and respectful. The reviewer is a human who made a judgment call. Your job is to give them information they might have missed, not to lecture them.
  </p>

  <div class="space-y-4 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-green-50 dark:bg-green-900/20 px-6 py-4 border-b border-green-100 dark:border-green-800/40">
        <h3 class="font-semibold text-green-900 dark:text-green-300">Structure That Works</h3>
      </div>
      <div class="p-6">
        <ol class="space-y-3 text-gray-600 dark:text-gray-300">
          <li><strong>1. Acknowledge the rejection:</strong> "Thank you for reviewing our app. I'd like to provide additional context about [specific issue]."</li>
          <li><strong>2. Explain the misunderstanding:</strong> What did they get wrong? Be specific.</li>
          <li><strong>3. Provide evidence:</strong> Screenshots, documentation, or examples that support your case.</li>
          <li><strong>4. Reference guidelines:</strong> If the guideline doesn't actually apply, explain why.</li>
          <li><strong>5. Offer a solution:</strong> If there's a middle ground, propose it.</li>
          <li><strong>6. Be respectful:</strong> Thank them for their time and consideration.</li>
        </ol>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Example Appeal Messages</h3>

  <div class="space-y-6 mb-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
        <h4 class="font-semibold text-gray-900 dark:text-white">Example: Misunderstood Functionality</h4>
      </div>
      <div class="p-6">
        <pre class="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">Hi,

Thank you for the review. I believe there may be a misunderstanding about our app's payment functionality.

The rejection states we're "requiring payment for features available free elsewhere." However, our premium features are:

1. Cloud sync across unlimited devices (not available in free apps)
2. Custom AI-generated content (costs us to provide)
3. Offline access to premium templates

These are genuine value-adds, not paywalled free features. I've attached a comparison chart showing how our pricing compares to [Competitor A] and [Competitor B], both of which are approved in the App Store.

Would you be able to reconsider based on this context?

Thank you,
[Name]</pre>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
        <h4 class="font-semibold text-gray-900 dark:text-white">Example: Pointing to Approved Competitors</h4>
      </div>
      <div class="p-6">
        <pre class="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">Hi,

I'd like to understand the rejection better. Our app was rejected under Guideline 4.2 for "limited functionality."

However, several apps with similar or even less functionality are currently live:
- [App Name 1] - does X only
- [App Name 2] - similar scope to ours
- [App Name 3] - approved last month with same feature set

Our app provides [list of features]. Could you clarify what additional functionality would be needed, or how our app differs from the approved examples above?

I want to make sure we meet the guidelines and would appreciate any specific guidance.

Thank you,
[Name]</pre>
      </div>
    </div>
  </div>

  <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl">
    <h4 class="font-bold text-red-800 dark:text-red-300 mb-2">What NOT to Say</h4>
    <ul class="text-red-700 dark:text-red-400 text-sm space-y-1">
      <li>• "This is ridiculous" or "You're wrong"</li>
      <li>• "I'll contact my lawyer" (unless you actually will)</li>
      <li>• "Other apps do this so I should be allowed to"</li>
      <li>• Long emotional rants about how hard you worked</li>
      <li>• Threats to switch to Android or leave the platform</li>
    </ul>
  </div>
</section>

<section id="app-review-board" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Step 2: Escalate to the App Review Board</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    If the Resolution Center conversation goes nowhere and you genuinely believe you're in the right, you can escalate to the App Review Board. This is Apple's internal appeals body.
  </p>

  <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 mb-6">
    <h4 class="font-semibold text-amber-900 dark:text-amber-300 mb-2">Important Note</h4>
    <p class="text-amber-800 dark:text-amber-400 text-sm mb-0">
      The App Review Board should be a last resort. Only escalate after you've tried the Resolution Center and truly believe the decision is wrong. Frivolous escalations can hurt your reputation with Apple.
    </p>
  </div>

  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Submit to the App Review Board</h3>

  <div class="space-y-4 mb-8">
    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Go to the Appeal Form</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Visit <a href="https://developer.apple.com/contact/app-store/" class="text-apple-blue hover:underline" target="_blank" rel="noopener">developer.apple.com/contact/app-store</a> and select "Appeal" as your topic.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Select Your App and Build</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Choose the specific submission that was rejected.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Write Your Appeal</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Explain why you believe the rejection was incorrect. Reference your Resolution Center conversation. Be factual and concise.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Wait for the Board's Decision</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">The App Review Board typically responds within 5-7 business days. Their decision is usually final.</p>
      </div>
    </div>
  </div>

  <p class="text-gray-600 dark:text-gray-300">
    The App Review Board consists of senior reviewers who weren't involved in your original rejection. They review the case fresh, which can work in your favor if the original reviewer made an error.
  </p>
</section>

<section id="phone-call" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Requesting a Phone Call</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Sometimes text-based communication isn't enough. Apple offers the option to schedule a phone call with the App Review team to discuss your rejection.
  </p>

  <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6">
    <h4 class="font-semibold text-gray-900 dark:text-white mb-4">When Phone Calls Help</h4>
    <ul class="space-y-2 text-gray-600 dark:text-gray-300">
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span>Complex functionality that's hard to explain in text</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span>Demonstrating a feature live is easier than describing it</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span>The written back-and-forth has stalled</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-apple-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span>You need to understand exactly what Apple wants</span>
      </li>
    </ul>
  </div>

  <p class="text-gray-600 dark:text-gray-300 mb-4">
    To request a call, reply in the Resolution Center and ask: "Would it be possible to schedule a call to discuss this further? I believe I could better demonstrate [feature/context] in a conversation."
  </p>

  <p class="text-gray-600 dark:text-gray-300">
    Phone calls are typically 15-30 minutes. Come prepared with specific questions and, if possible, have the app ready to demonstrate.
  </p>
</section>

<section id="what-if-denied" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">What If Your Appeal Is Denied?</h2>

  <p class="text-gray-600 dark:text-gray-300 mb-6">
    If the App Review Board upholds the rejection, your options are limited. Here's what you can do:
  </p>

  <div class="space-y-4 mb-8">
    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="text-lg">1</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Accept and Comply</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Make the changes Apple requires. It's not ideal, but it gets your app live. You can always iterate later.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="text-lg">2</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Find a Creative Alternative</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Sometimes there's a way to achieve your goal differently. Can you implement the feature in a way that satisfies Apple's concern?</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="text-lg">3</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Consider Web Distribution</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">For features Apple won't allow (like certain payment systems), a web app or PWA might be an alternative.</p>
      </div>
    </div>

    <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="text-lg">4</span>
      </div>
      <div>
        <h4 class="font-bold text-apple-dark dark:text-white">Wait and Try Later</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Guidelines change. Features that were rejected in the past sometimes get approved as Apple updates policies. Check back in 6-12 months.</p>
      </div>
    </div>
  </div>

  <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl p-5">
    <h4 class="font-semibold text-red-900 dark:text-red-300 mb-2">What NOT to Do</h4>
    <ul class="text-red-800 dark:text-red-400 text-sm space-y-1">
      <li>• Don't try to "sneak" the feature back in a future update</li>
      <li>• Don't create a new developer account to submit the same app</li>
      <li>• Don't publicly trash Apple (it won't help and could hurt you)</li>
      <li>• Don't give up on your app entirely—adjust and move forward</li>
    </ul>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">How long does the appeal process take?</h3>
      <p class="text-gray-600 dark:text-gray-400">Resolution Center responses: 24-48 hours. App Review Board: 5-7 business days. Total process if escalated fully: 1-2 weeks.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Can I keep my app in "Waiting for Review" while appealing?</h3>
      <p class="text-gray-600 dark:text-gray-400">Yes. You don't need to resubmit to appeal. Your rejected build stays in App Store Connect while you discuss in the Resolution Center.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Will appealing hurt my relationship with Apple?</h3>
      <p class="text-gray-600 dark:text-gray-400">Not if you do it professionally and for legitimate reasons. Apple expects some developers to disagree. What hurts is being rude, dishonest, or repeatedly wasting their time.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Should I mention other apps that are "getting away with it"?</h3>
      <p class="text-gray-600 dark:text-gray-400">You can reference competitors, but do it carefully. Frame it as "seeking to understand the guidelines" rather than "they do it so I should too." Apple may investigate those apps, but that doesn't automatically help you.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What if I genuinely can't figure out what Apple wants?</h3>
      <p class="text-gray-600 dark:text-gray-400">Ask directly in the Resolution Center: "Could you provide specific guidance on what changes would make this app compliant?" Sometimes they'll give you a clear answer. Other times they'll say "read the guidelines"—in which case, request a phone call.</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Can I submit a new version while my appeal is pending?</h3>
      <p class="text-gray-600 dark:text-gray-400">Yes. If you fix the issue and submit a new build, the new submission goes through normal review. Your appeal on the old build can continue separately, but it becomes moot if the new version is approved.</p>
    </div>
  </div>
</section>

<div class="mt-16 p-8 bg-gradient-to-br from-apple-blue/5 to-blue-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-apple-blue/10 dark:border-blue-800/40">
  <h3 class="text-2xl font-bold text-apple-dark dark:text-white mb-4">Prevent Rejections Before They Happen</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">
    The best rejection is the one that never happens. Our AI Review Toolkit helps identify potential guideline violations before you submit, so you spend less time in appeals and more time shipping.
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
  console.log('Seeding Appeal Process article...');

  await prisma.article.upsert({
    where: { slug: appealProcessArticle.slug },
    update: {
      title: appealProcessArticle.title,
      description: appealProcessArticle.description,
      content: appealProcessArticle.content,
      category: appealProcessArticle.category,
      metaKeywords: appealProcessArticle.metaKeywords,
      isHub: appealProcessArticle.isHub,
      toc: appealProcessArticle.toc,
      updatedAt: new Date(),
    },
    create: appealProcessArticle,
  });

  console.log('Appeal Process article seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

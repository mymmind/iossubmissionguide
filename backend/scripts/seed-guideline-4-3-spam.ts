import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const guideline43SpamArticle = {
  slug: 'guideline-4-3-spam-rejection-appeal',
  title: 'Guideline 4.3 (Spam) Rejection: Why Apple Thinks Your App is a Clone',
  description: 'Got rejected for Guideline 4.3 Spam? Learn why Apple flags apps as duplicates and exactly how to appeal or differentiate your app to get approved.',
  content: `
<p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
The rejection email says your app is "similar to other apps" or "doesn't provide a unique experience." You've built something you care about, and Apple just called it spam. Let me help you understand what's actually happening and how to fix it.
</p>

<div class="bg-apple-light dark:bg-gray-800 rounded-2xl p-6 mb-12">
  <h3 class="font-bold text-apple-dark dark:text-white mb-3 flex items-center gap-2">
    <span class="text-xl">📋</span> TL;DR - Why 4.3 Rejections Happen
  </h3>
  <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-0">
    <li>• Apple's anti-spam algorithms flag apps that look too similar to existing apps</li>
    <li>• Template apps, white-label products, and thin wrappers trigger this</li>
    <li>• Your app might be legitimately unique but "look" like spam to reviewers</li>
    <li>• The fix involves demonstrating clear differentiation in your appeal</li>
    <li>• Sometimes you need to add visible unique features before resubmitting</li>
  </ul>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">What Apple's Actually Saying</h2>

<p>
Guideline 4.3 is Apple's way of keeping the App Store from becoming a graveyard of clone apps. The full guideline reads:
</p>

<div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mb-8 border-l-4 border-apple-blue">
  <p class="text-gray-700 dark:text-gray-300 italic mb-0">
    "Don't create multiple apps that are the same app or use a single app to create bundles, compendiums, or portfolios of content."
  </p>
</div>

<p>
But in practice, 4.3 gets applied to three very different situations:
</p>

<div class="grid md:grid-cols-3 gap-6 mb-8">
  <div class="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl p-6">
    <div class="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
      <span class="text-xl">🔄</span>
    </div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Duplicate Apps</h4>
    <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">You're submitting multiple versions of the same app with minor variations (different branding, same functionality).</p>
  </div>

  <div class="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl p-6">
    <div class="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4">
      <span class="text-xl">📋</span>
    </div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Template Apps</h4>
    <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Your app was built from a template or app builder that thousands of other apps use.</p>
  </div>

  <div class="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl p-6">
    <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
      <span class="text-xl">🌐</span>
    </div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Similar to Competitors</h4>
    <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Your app resembles existing apps in the store too closely, even if built independently.</p>
  </div>
</div>

<p>
The frustrating part? Apple doesn't tell you which one applies to you. The rejection just says "Guideline 4.3" and leaves you guessing.
</p>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">How to Diagnose Your Situation</h2>

<p>
Before you can fix the rejection, you need to understand why it happened. Ask yourself these questions:
</p>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-10 mb-4">Question 1: Did You Use a Template or App Builder?</h3>

<p>
Services like Appy Pie, BuildFire, Thunkable, or purchased Xcode templates are automatic red flags. Apple has seen thousands of apps from these sources, and their algorithms recognize the patterns.
</p>

<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-2xl p-6 mb-8">
  <h4 class="font-bold text-red-800 dark:text-red-300 mb-2">Common Template Sources That Trigger 4.3</h4>
  <ul class="text-red-700 dark:text-red-400 text-sm space-y-1 mb-0">
    <li>• Codecanyon templates (restaurant apps, dating apps, etc.)</li>
    <li>• App builder platforms (GoodBarber, Shoutem, AppInstitute)</li>
    <li>• White-label solutions for businesses</li>
    <li>• GitHub templates with thousands of forks</li>
    <li>• "Starter kits" sold on Gumroad or similar</li>
  </ul>
</div>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-10 mb-4">Question 2: Do You Have Other Similar Apps in the Store?</h3>

<p>
If you've published multiple apps that share significant code or UI, Apple might flag the new one as a duplicate of your own work. This commonly hits agencies that build white-label apps for clients.
</p>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-10 mb-4">Question 3: Is Your App Too Simple?</h3>

<p>
Apps that wrap a single website, display static content, or have minimal functionality often get rejected under 4.3. Apple wants "native app experiences" that justify being installed on a user's device.
</p>

<p>
A restaurant menu app that only shows a PDF, a calculator with no unique features, or a flashlight app - these are common 4.3 targets.
</p>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-10 mb-4">Question 4: Does Your App Look Like Existing Apps?</h3>

<p>
Even if you built everything from scratch, your app might visually resemble thousands of others. Generic UI, stock icons, and common app concepts (todo lists, habit trackers, note apps) can trigger suspicion.
</p>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">How to Appeal a 4.3 Rejection</h2>

<p>
Here's the process I've seen work repeatedly:
</p>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-10 mb-4">Step 1: Gather Your Differentiation Evidence</h3>

<p>
Before you write anything to Apple, compile evidence of what makes your app unique. This might include:
</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Screenshots showing unique features competitors don't have</li>
  <li>Explanation of your proprietary algorithm or data</li>
  <li>Description of your target audience and how it differs</li>
  <li>Business context (why this app needs to exist)</li>
  <li>Technical architecture showing original code</li>
</ul>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-10 mb-4">Step 2: Write a Clear Appeal Message</h3>

<p>
Use the Resolution Center in App Store Connect. Be professional, specific, and concise. Here's a template that works:
</p>

<div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mb-8">
  <p class="text-gray-700 dark:text-gray-300 text-sm font-mono mb-0">
    Hi App Review Team,<br><br>
    Thank you for reviewing [App Name]. I understand the concern about Guideline 4.3, and I'd like to clarify what makes this app unique.<br><br>
    <strong>What This App Does Differently:</strong><br>
    [Specific feature 1 and why it matters]<br>
    [Specific feature 2 and how it differs from alternatives]<br>
    [Unique value proposition for users]<br><br>
    <strong>Technical Differentiation:</strong><br>
    [Describe any proprietary technology, algorithms, or data]<br><br>
    <strong>Business Context:</strong><br>
    [Why you built this app and who it serves]<br><br>
    I've attached screenshots highlighting these unique aspects. Please let me know if you need any additional information.<br><br>
    Best regards,<br>
    [Your Name]
  </p>
</div>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-10 mb-4">Step 3: Include Visual Evidence</h3>

<p>
Attach screenshots with annotations pointing out unique features. Reviewers process hundreds of apps. Make it easy for them to see your differentiation at a glance.
</p>

<div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-2xl p-6 mb-8">
  <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">What Works in Visual Evidence</h4>
  <ul class="text-green-700 dark:text-green-400 text-sm space-y-1 mb-0">
    <li>✓ Side-by-side comparison with competitors showing your unique UI</li>
    <li>✓ Screenshots of features no other app has</li>
    <li>✓ Flow diagrams showing unique user journeys</li>
    <li>✓ Data visualizations or reports unique to your app</li>
  </ul>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">When Appeals Don't Work: Add Differentiation</h2>

<p>
Sometimes your appeal won't work because, honestly, your app isn't differentiated enough yet. In that case, you need to add features before resubmitting.
</p>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-10 mb-4">Low-Effort Differentiators</h3>

<p>
These won't make your app amazing, but they demonstrate effort and uniqueness:
</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Widgets:</strong> iOS Home Screen widgets show native investment</li>
  <li><strong>Shortcuts integration:</strong> Siri Shortcuts support is easy to add</li>
  <li><strong>Watch app:</strong> Even a simple companion app counts</li>
  <li><strong>iCloud sync:</strong> Shows you're building for the Apple ecosystem</li>
  <li><strong>Accessibility:</strong> VoiceOver support, Dynamic Type, etc.</li>
</ul>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-10 mb-4">High-Impact Differentiators</h3>

<p>
These require more work but genuinely improve your app:
</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Unique data source:</strong> Integrate data no one else has</li>
  <li><strong>Novel interaction:</strong> Create a UI pattern that's distinctly yours</li>
  <li><strong>Platform integration:</strong> HealthKit, HomeKit, CarPlay</li>
  <li><strong>Machine learning:</strong> On-device ML using Core ML</li>
  <li><strong>Community features:</strong> Social elements, sharing, collaboration</li>
</ul>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">Special Case: White-Label and Agency Apps</h2>

<p>
If you build apps for clients using a common codebase, 4.3 is a constant threat. Here's how agencies handle it:
</p>

<div class="space-y-4 mb-8">
  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Significant Visual Differentiation</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Each client app needs unique branding that goes beyond just logo swaps. Different color schemes, custom icons, distinct UI layouts.</p>
    </div>
  </div>

  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Client-Specific Features</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Even one unique feature per client helps. A loyalty program, specific integration, or custom functionality.</p>
    </div>
  </div>

  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Different Developer Accounts</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Some agencies have clients publish under their own developer accounts. This reduces pattern detection.</p>
    </div>
  </div>

  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Stagger Submissions</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Don't submit 10 client apps in the same week. Space them out over months.</p>
    </div>
  </div>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">Real Developer Experiences</h2>

<div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 mb-6 border-l-4 border-gray-300 dark:border-gray-600">
  <p class="text-gray-700 dark:text-gray-300 italic mb-3">
    "We got 4.3'd on our fifth white-label restaurant app. What worked was adding a unique AR menu feature that only that client had. Cost us a week of dev time but got approved on the next submission."
  </p>
  <p class="text-gray-500 dark:text-gray-400 text-sm mb-0">— Agency developer on r/iOSProgramming</p>
</div>

<div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 mb-6 border-l-4 border-gray-300 dark:border-gray-600">
  <p class="text-gray-700 dark:text-gray-300 italic mb-3">
    "My fitness app was rejected for 4.3 even though I built it from scratch. Turned out there were like 50 apps with the same workout timer concept. I added Apple Watch support and got approved immediately."
  </p>
  <p class="text-gray-500 dark:text-gray-400 text-sm mb-0">— Solo developer on Apple Developer Forums</p>
</div>

<div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 mb-8 border-l-4 border-gray-300 dark:border-gray-600">
  <p class="text-gray-700 dark:text-gray-300 italic mb-3">
    "The appeal worked when I explained the app was for a specific corporate client's internal use. Context matters. They approved it same day."
  </p>
  <p class="text-gray-500 dark:text-gray-400 text-sm mb-0">— Enterprise developer</p>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">FAQ</h2>

<div class="space-y-6 mb-8">
  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Can I submit an appeal immediately?</h4>
    <p class="text-gray-600 dark:text-gray-400">Yes. Use the Resolution Center in App Store Connect. You don't need to resubmit the binary to appeal.</p>
  </div>

  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">How long do 4.3 appeals take?</h4>
    <p class="text-gray-600 dark:text-gray-400">Usually 1-3 business days for a response. Complex cases might take longer.</p>
  </div>

  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">What if my appeal gets rejected?</h4>
    <p class="text-gray-600 dark:text-gray-400">You can request a phone call with App Review via the Resolution Center. This often helps clarify exactly what Apple wants to see.</p>
  </div>

  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Will changing the app name help?</h4>
    <p class="text-gray-600 dark:text-gray-400">Not by itself. Apple's detection looks at code, UI patterns, and functionality - not just metadata.</p>
  </div>

  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Is 4.3 rejection permanent?</h4>
    <p class="text-gray-600 dark:text-gray-400">No. You can always add differentiation and resubmit. Many apps eventually get approved after iteration.</p>
  </div>

  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Should I start with a new bundle ID?</h4>
    <p class="text-gray-600 dark:text-gray-400">This rarely helps and can hurt. Apple tracks developer accounts, not just bundle IDs. Focus on genuine differentiation instead.</p>
  </div>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">Prevention: How to Avoid 4.3 From the Start</h2>

<p>
If you're building a new app and want to minimize 4.3 risk:
</p>

<div class="space-y-4 mb-8">
  <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl">
    <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">✓ Research the competition first</h4>
    <p class="text-green-700 dark:text-green-400 text-sm mb-0">Search the App Store for apps in your category. If there are already 100+ nearly identical apps, you need a strong differentiator.</p>
  </div>

  <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl">
    <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">✓ Build custom UI from scratch</h4>
    <p class="text-green-700 dark:text-green-400 text-sm mb-0">Avoid templates. Design your own screens, even if they're simple. Originality shows.</p>
  </div>

  <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl">
    <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">✓ Include at least one "hero" feature</h4>
    <p class="text-green-700 dark:text-green-400 text-sm mb-0">What's the one thing your app does that no other app does exactly the same way?</p>
  </div>

  <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl">
    <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">✓ Invest in Apple ecosystem features</h4>
    <p class="text-green-700 dark:text-green-400 text-sm mb-0">Widgets, Shortcuts, Watch app, iCloud sync. These signal you're building a real iOS app, not a quick cash-grab.</p>
  </div>

  <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl">
    <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">✓ Write unique metadata</h4>
    <p class="text-green-700 dark:text-green-400 text-sm mb-0">Your app description, screenshots, and keywords should be original. Don't copy competitor listings.</p>
  </div>
</div>

<div class="mt-16 p-8 bg-gradient-to-br from-apple-blue/5 to-blue-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-apple-blue/10 dark:border-blue-800/40">
  <h3 class="text-2xl font-bold text-apple-dark dark:text-white mb-4">Struggling With App Store Rejections?</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">
    Our AI Review Toolkit includes prompts designed to analyze your app for Guideline 4.3 risks before you submit. Identify differentiation gaps and get approval on your first try.
  </p>
  <a href="/ai-review" class="inline-flex items-center gap-2 px-6 py-3 bg-apple-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
    Get the AI Toolkit
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </a>
</div>
`,
  category: 'Rejections',
  isHub: false,
  metaKeywords: ['guideline 4.3', 'spam rejection', 'app store rejection', 'duplicate app', 'template app', 'white label app', 'app differentiation', 'appeal rejection', '4.3 rejection appeal', 'clone app rejected'],
  toc: {
    title: "Guideline 4.3 Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#what-saying", label: "What Apple's Saying" },
          { href: "#diagnose", label: "Diagnose Your Situation" },
          { href: "#appeal", label: "How to Appeal" }
        ]
      },
      {
        section: "Solutions",
        items: [
          { href: "#differentiation", label: "Adding Differentiation" },
          { href: "#white-label", label: "White-Label Apps" },
          { href: "#prevention", label: "Prevention" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  }
};

async function main() {
  console.log('Seeding Guideline 4.3 Spam article...');

  await prisma.article.upsert({
    where: { slug: guideline43SpamArticle.slug },
    update: {
      title: guideline43SpamArticle.title,
      description: guideline43SpamArticle.description,
      content: guideline43SpamArticle.content,
      category: guideline43SpamArticle.category,
      metaKeywords: guideline43SpamArticle.metaKeywords,
      isHub: guideline43SpamArticle.isHub,
      toc: guideline43SpamArticle.toc,
      updatedAt: new Date(),
    },
    create: guideline43SpamArticle,
  });

  console.log('Guideline 4.3 Spam article seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

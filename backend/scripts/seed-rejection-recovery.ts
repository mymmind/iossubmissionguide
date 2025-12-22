import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Rejection Recovery article...')

  const content = `
    <!-- Hero Section -->
    <section id="intro" class="mb-16 max-w-3xl">
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-apple-dark font-sans">How to Handle App Store Rejection (And Get Approved Fast)</h1>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Getting your app rejected by Apple can feel devastating, but here's the truth: <strong>it happens to almost everyone</strong>. First-time developers typically face 2-5 rejections before approval. The key is knowing how to respond quickly and effectively.
        </p>
        <div class="bg-amber-50 border border-amber-100 rounded-2xl p-6">
            <h3 class="text-amber-900 font-semibold mb-2">The Reality Check</h3>
            <p class="text-amber-800/80 text-sm leading-relaxed">
                Apple rejects over 40,000 apps every week. Even experienced developers rarely pass review on their first submission. The difference between success and failure isn't avoiding rejection—it's how fast you recover from it.
            </p>
        </div>
    </section>

    <hr class="border-gray-100 mb-16">

    <!-- Why Rejections Happen -->
    <section id="why-rejections" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-red-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">Why Rejections Happen</h2>
        </div>

        <div class="prose prose-gray max-w-3xl text-gray-600 mb-8">
            <p>Based on thousands of developer experiences, most rejections fall into predictable categories. Understanding these patterns helps you prevent them—or fix them faster when they occur.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 mb-8">
            <div class="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h3 class="font-semibold text-gray-900 mb-2">Tiny Mistakes (Most Common)</h3>
                <p class="text-sm text-gray-600">"Usually when I get rejected, it's for something tiny I missed in the guidelines." Small oversights in Info.plist, metadata, or purpose strings trigger most first rejections.</p>
            </div>
            <div class="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h3 class="font-semibold text-gray-900 mb-2">Permission Mismatches</h3>
                <p class="text-sm text-gray-600">Declaring permissions you don't use, or using permissions without proper explanation. Apple's automated scanners catch these instantly.</p>
            </div>
            <div class="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h3 class="font-semibold text-gray-900 mb-2">Crashes & Performance</h3>
                <p class="text-sm text-gray-600">Apps that crash during review are automatically rejected. Test thoroughly on real devices, especially older models and different iOS versions.</p>
            </div>
            <div class="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h3 class="font-semibold text-gray-900 mb-2">Metadata Issues</h3>
                <p class="text-sm text-gray-600">Misleading screenshots, incomplete descriptions, missing privacy policy URL, or claiming features that don't exist in the app.</p>
            </div>
        </div>

        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-apple-blue">
            <p class="text-sm text-blue-900"><strong>Developer Story:</strong> "Apple review team found a typo in a variable name. Instant rejection." — Naval Bihani, Software Engineer</p>
        </div>
    </section>

    <!-- The Recovery Timeline -->
    <section id="recovery-timeline" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">The Recovery Timeline</h2>
        </div>

        <div class="space-y-6">
            <div class="flex gap-6">
                <div class="w-12 h-12 rounded-full bg-apple-blue text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div class="flex-1">
                    <h3 class="font-bold text-lg text-apple-dark mb-2">Hour 0-1: Read the Rejection Carefully</h3>
                    <p class="text-gray-600 text-sm">Don't panic. Read Apple's rejection message thoroughly. They usually cite specific guidelines (e.g., "Guideline 2.1 - Performance"). Look up that guideline in the official documentation.</p>
                </div>
            </div>

            <div class="flex gap-6">
                <div class="w-12 h-12 rounded-full bg-apple-blue text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div class="flex-1">
                    <h3 class="font-bold text-lg text-apple-dark mb-2">Hour 1-2: Identify the Root Cause</h3>
                    <p class="text-gray-600 text-sm">If the rejection is vague, use the Resolution Center to ask for clarification. Be polite and specific: "Could you please provide more details about which aspect of Guideline X.X we violated?"</p>
                </div>
            </div>

            <div class="flex gap-6">
                <div class="w-12 h-12 rounded-full bg-apple-blue text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div class="flex-1">
                    <h3 class="font-bold text-lg text-apple-dark mb-2">Hour 2-6: Fix the Issue</h3>
                    <p class="text-gray-600 text-sm">Make the minimum necessary changes to address the rejection. Don't refactor unrelated code—this introduces new risks and delays your resubmission.</p>
                </div>
            </div>

            <div class="flex gap-6">
                <div class="w-12 h-12 rounded-full bg-apple-blue text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div class="flex-1">
                    <h3 class="font-bold text-lg text-apple-dark mb-2">Hour 6-7: Test & Resubmit</h3>
                    <p class="text-gray-600 text-sm">Test the fix thoroughly, increment your build number, and resubmit with updated Review Notes explaining what you changed. Reference the original rejection.</p>
                </div>
            </div>
        </div>

        <div class="mt-8 bg-green-50 p-6 rounded-xl border-l-4 border-apple-green">
            <p class="text-sm text-green-900"><strong>Instagram Story:</strong> Kevin Systrom received a vague rejection, fixed it the same night, and resubmitted. This act of persistence became part of Instagram's company DNA.</p>
        </div>
    </section>

    <!-- How to Write an Effective Appeal -->
    <section id="writing-appeals" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-green-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">Writing an Effective Appeal</h2>
        </div>

        <div class="prose prose-gray max-w-3xl text-gray-600 mb-8">
            <p>If you believe the rejection was a mistake, or if you've made changes, communicating clearly with Apple can make the difference. Here's the format that works:</p>
        </div>

        <div class="bg-gray-50 p-8 rounded-2xl border border-gray-200 font-mono text-sm">
            <p class="text-gray-500 mb-4">// Template for Resolution Center response</p>
            <p class="mb-4"><span class="text-apple-blue">Subject:</span> Resubmission for [App Name] - Guideline [X.X] Addressed</p>
            <p class="mb-4"><span class="text-apple-blue">Body:</span></p>
            <p class="mb-2">Dear App Review Team,</p>
            <p class="mb-4">Thank you for your feedback regarding our submission.</p>
            <p class="mb-4"><span class="text-apple-blue">Issue Identified:</span> [Restate the rejection reason in your own words]</p>
            <p class="mb-4"><span class="text-apple-blue">Changes Made:</span></p>
            <p class="mb-2">1. [Specific change #1]</p>
            <p class="mb-2">2. [Specific change #2]</p>
            <p class="mb-4">3. [Specific change #3]</p>
            <p class="mb-4"><span class="text-apple-blue">Testing Performed:</span> [Describe how you verified the fix]</p>
            <p class="mb-4">Please let us know if you need any additional information or clarification.</p>
            <p>Best regards,<br/>[Your Name]</p>
        </div>
    </section>

    <!-- The Danger Zone -->
    <section id="danger-zone" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">The Danger Zone: Repeated Rejections</h2>
        </div>

        <div class="bg-gray-900 text-white p-8 rounded-2xl">
            <p class="text-gray-300 mb-6">Multiple rejections can trigger "Extraordinary Review" status, which significantly extends review times. Here's how to avoid it:</p>

            <div class="space-y-4">
                <div class="flex items-start gap-4">
                    <span class="text-red-400 text-xl">×</span>
                    <p class="text-gray-300"><strong class="text-white">Don't resubmit without changes.</strong> Simply resubmitting the same build hoping for a different reviewer will flag your account.</p>
                </div>
                <div class="flex items-start gap-4">
                    <span class="text-red-400 text-xl">×</span>
                    <p class="text-gray-300"><strong class="text-white">Don't ignore feedback.</strong> Each rejection should result in a visible, documented change.</p>
                </div>
                <div class="flex items-start gap-4">
                    <span class="text-red-400 text-xl">×</span>
                    <p class="text-gray-300"><strong class="text-white">Don't create new developer accounts.</strong> Apple tracks this and will ban both accounts.</p>
                </div>
                <div class="flex items-start gap-4 mt-6">
                    <span class="text-green-400 text-xl">✓</span>
                    <p class="text-gray-300"><strong class="text-white">Do be responsive.</strong> Quick turnaround shows good faith and professionalism.</p>
                </div>
                <div class="flex items-start gap-4">
                    <span class="text-green-400 text-xl">✓</span>
                    <p class="text-gray-300"><strong class="text-white">Do document everything.</strong> Keep records of all changes made between submissions.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Prevention Checklist -->
    <section id="prevention" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">Prevention: Skip the Rejection Cycle</h2>
        </div>

        <div class="prose prose-gray max-w-3xl text-gray-600 mb-8">
            <p>The best rejection is one that never happens. Use this pre-submission checklist to catch issues before Apple does:</p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">All permission strings explain user benefit</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">No unused permissions declared in Info.plist</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Privacy Policy URL is accessible</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Demo account credentials provided</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Tested on real device (not just simulator)</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Screenshots match actual app UI</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">No external payment links visible</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Review notes explain any unclear features</span>
            </label>
        </div>
    </section>

    <!-- Related Guides Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <a href="/guideline-2-1-app-crashes" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-red-500 hover:shadow-md transition-all">
          <h3 class="font-semibold text-gray-900 group-hover:text-red-600 mb-2">Guideline 2.1: Crashes</h3>
          <p class="text-sm text-gray-600">The most common rejection reason - learn how to fix crash and bug issues.</p>
        </a>
        <a href="/guideline-4-2-minimum-functionality" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-md transition-all">
          <h3 class="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">Guideline 4.2: Minimum Functionality</h3>
          <p class="text-sm text-gray-600">Rejected for being "too simple"? Here's how to add enough value.</p>
        </a>
        <a href="/app-store-review-time-2025" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all">
          <h3 class="font-semibold text-gray-900 group-hover:text-green-600 mb-2">Review Times 2025</h3>
          <p class="text-sm text-gray-600">Current wait times and what to expect after resubmitting.</p>
        </a>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="mb-16">
        <div class="bg-gradient-to-br from-apple-blue to-blue-700 rounded-3xl p-10 text-center text-white">
            <h2 class="text-3xl font-bold mb-4">Want to Pass on Your First Try?</h2>
            <p class="text-white/90 mb-8 max-w-xl mx-auto">Our AI Review Toolkit catches the issues that cause rejections before you submit. Don't learn from rejection—prevent it.</p>
            <a href="/ai-review" class="inline-block px-8 py-4 bg-white text-apple-blue rounded-2xl font-bold hover:bg-gray-100 transition-all">
                Get the AI Toolkit — $29.99
            </a>
        </div>
    </section>
  `

  const toc = {
    title: "On This Page",
    sections: [
      {
        section: null,
        items: [
          { href: "#why-rejections", label: "Why Rejections Happen" },
          { href: "#recovery-timeline", label: "The Recovery Timeline" },
          { href: "#writing-appeals", label: "Writing Effective Appeals" },
          { href: "#danger-zone", label: "The Danger Zone" },
          { href: "#prevention", label: "Prevention Checklist" }
        ]
      }
    ]
  }

  await prisma.article.upsert({
    where: { slug: 'rejection-recovery' },
    update: {
      title: 'How to Handle App Store Rejection (And Get Approved Fast)',
      description: 'Learn how to recover from App Store rejection quickly. Includes appeal templates, timeline strategies, and prevention checklists used by successful iOS developers.',
      content,
      category: 'Technical',
      metaKeywords: ['app store rejection', 'apple rejection', 'app rejected', 'app store appeal', 'ios rejection fix', 'app review rejection'],
      toc,
      isHub: false
    },
    create: {
      slug: 'rejection-recovery',
      title: 'How to Handle App Store Rejection (And Get Approved Fast)',
      description: 'Learn how to recover from App Store rejection quickly. Includes appeal templates, timeline strategies, and prevention checklists used by successful iOS developers.',
      content,
      category: 'Technical',
      metaKeywords: ['app store rejection', 'apple rejection', 'app rejected', 'app store appeal', 'ios rejection fix', 'app review rejection'],
      toc,
      isHub: false
    }
  })

  console.log('✓ Rejection Recovery article created/updated')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

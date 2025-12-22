import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const guideline31Article = {
  slug: 'guideline-3-1-in-app-purchase',
  title: 'Guideline 3.1 Rejection: How to Fix In-App Purchase Issues',
  description: 'Complete guide to fixing Apple App Store Guideline 3.1 rejections for In-App Purchase violations. Learn what triggers 3.1 rejections, when to use IAP vs external payments, and how to implement StoreKit correctly.',
  category: 'Rejections',
  isHub: false,
  metaKeywords: [
    'guideline 3.1',
    'app store rejection 3.1',
    'in-app purchase rejection',
    'iap rejection apple',
    'storekit rejection',
    'apple payment rejection',
    'digital goods ios',
    'restore purchases ios',
    'subscription rejection'
  ],
  toc: {
    title: "Guideline 3.1 Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#what-is-3-1", label: "What is Guideline 3.1" },
          { href: "#common-triggers", label: "Common Triggers" },
          { href: "#when-to-use-iap", label: "When to Use IAP" },
          { href: "#implementation", label: "Implementation Guide" },
          { href: "#checklist", label: "Compliance Checklist" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 rounded-full">Rejection Guide</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">Guideline 3.1</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Guideline 3.1: How to Fix In-App Purchase Rejections</h1>
  <p class="text-xl text-gray-600 max-w-3xl">Ah, 3.1. The guideline that sparked an antitrust lawsuit, got Fortnite banned from the App Store, and makes indie developers question their career choices. If you're here, Apple probably caught you trying to sell something without giving them their cut. Let's fix it.</p>
</header>

<!-- Quick Answer Box -->
<div class="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6 mb-10">
  <h2 class="text-lg font-semibold text-orange-900 mb-3">The Short Version</h2>
  <p class="text-gray-700 mb-4">If you sell <strong>anything digital</strong> inside your app—subscriptions, premium features, coins, content unlocks—you must use Apple's IAP system. No linking to your website. No "subscribe on web" buttons. No clever workarounds. Apple's reviewers have seen every trick in the book.</p>
  <div class="flex items-center gap-2 text-sm text-orange-700">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
    <span><strong>Apple takes 15-30%</strong>. Yes, it hurts. No, you can't avoid it for digital goods.</span>
  </div>
</div>

<!-- Real case study callout -->
<div class="bg-blue-50 border-l-4 border-blue-500 p-5 mb-10">
  <h3 class="font-semibold text-blue-900 mb-2">Real Story: Epic Games vs. Apple</h3>
  <p class="text-blue-800 text-sm">In August 2020, Epic added a direct payment option to Fortnite, bypassing Apple's 30% cut. Apple removed Fortnite from the App Store <strong>within hours</strong>. The resulting lawsuit lasted years. Fortnite is still banned on iOS (outside the EU). Unless you're willing to fight a billion-dollar legal battle, just use IAP.</p>
</div>

<section id="what-is-3-1" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">What is Guideline 3.1, Really?</h2>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">Apple's Words</h3>
    <blockquote class="border-l-4 border-orange-400 pl-4 text-gray-700 italic">
      "If you want to unlock features or functionality within your app, (by way of example: subscriptions, in-game currencies, game levels, access to premium content, or unlocking a full version), you must use in-app purchase. Apps may not use their own mechanisms to unlock content or functionality."
    </blockquote>
  </div>

  <p class="text-gray-600 mb-6"><strong>Plain English:</strong> Anything consumed digitally on the phone = Apple gets a cut. The rule seems simple but the edge cases will make you pull your hair out. Here's the key distinction:</p>

  <div class="grid md:grid-cols-2 gap-4">
    <div class="bg-orange-50 border border-orange-100 rounded-xl p-5">
      <h4 class="font-semibold text-orange-900 mb-2">Must Use IAP (Digital)</h4>
      <ul class="space-y-2 text-orange-800 text-sm">
        <li>• Premium app features</li>
        <li>• Subscriptions (content, services)</li>
        <li>• Virtual currency / coins</li>
        <li>• Game levels or items</li>
        <li>• E-books, music, videos</li>
        <li>• Ad removal</li>
        <li>• Cloud storage upgrades</li>
      </ul>
    </div>
    <div class="bg-green-50 border border-green-100 rounded-xl p-5">
      <h4 class="font-semibold text-green-900 mb-2">Cannot Use IAP (Physical)</h4>
      <ul class="space-y-2 text-green-800 text-sm">
        <li>• Physical products (e-commerce)</li>
        <li>• Food delivery</li>
        <li>• Ride-hailing services</li>
        <li>• Event tickets (real events)</li>
        <li>• Rentals (cars, equipment)</li>
        <li>• Professional services</li>
        <li>• Person-to-person payments</li>
      </ul>
    </div>
  </div>
</section>

<section id="common-triggers" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">How Developers Get Caught</h2>

  <p class="text-gray-600 mb-6">Apple's reviewers are trained to spot payment workarounds. Here's what trips people up:</p>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
          <span class="text-red-600 font-bold">1</span>
        </div>
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">The "Just Go to Our Website" Move</h3>
          <p class="text-gray-600 text-sm mb-3">You added a link to your website where people can subscribe for less. Maybe just a small "Manage subscription" link that happens to show pricing. Apple catches this every single time.</p>
          <div class="bg-red-50 border border-red-100 rounded-lg p-3">
            <p class="text-red-800 text-sm"><strong>What they'll flag:</strong> "Subscribe at myapp.com" • "Better pricing on web" • QR codes to payment pages • Even just mentioning that web purchases exist</p>
          </div>
          <p class="text-gray-500 text-xs mt-3 italic">The Hey Email case (2020): Basecamp's email app was rejected because it didn't offer IAP signup—users had to go to the website. After massive backlash, Apple created the "reader app" exception. But unless you qualify, don't try this.</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
          <span class="text-red-600 font-bold">2</span>
        </div>
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">Forgetting the "Restore Purchases" Button</h3>
          <p class="text-gray-600 text-sm mb-3">This one catches so many developers. If you have any non-consumable purchases or subscriptions, you MUST have a restore button. Apple checks for this specifically.</p>
          <div class="bg-red-50 border border-red-100 rounded-lg p-3">
            <p class="text-red-800 text-sm"><strong>Why it matters:</strong> Users switch phones. If they can't restore their $9.99 purchase on their new iPhone, they'll leave 1-star reviews and file refund requests. Apple hates both.</p>
          </div>
          <p class="text-gray-500 text-xs mt-3 italic">Put it somewhere visible—settings screen, paywall, or subscription management. Don't hide it in a buried menu.</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
          <span class="text-red-600 font-bold">3</span>
        </div>
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">The Sketchy Subscription Screen</h3>
          <p class="text-gray-600 text-sm mb-3">Apple's cracked down hard on shady subscription UX. If your paywall hides the price, makes the trial length unclear, or buries the "cancel" info—rejected.</p>
          <div class="bg-red-50 border border-red-100 rounded-lg p-3">
            <p class="text-red-800 text-sm"><strong>Must include:</strong> Exact price ($9.99/month) • Billing frequency (weekly/monthly/yearly) • Trial length if applicable • How to cancel (Settings > Subscriptions)</p>
          </div>
          <p class="text-gray-500 text-xs mt-3 italic">Apple doesn't just reject these—they remember. Repeated dark pattern attempts can get your developer account flagged for extended reviews.</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
          <span class="text-red-600 font-bold">4</span>
        </div>
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">Using IAP for the Wrong Things</h3>
          <p class="text-gray-600 text-sm mb-3">The flip side: you CAN'T use IAP for physical goods or real-world services. Apple will reject you for that too.</p>
          <div class="bg-green-50 border border-green-100 rounded-lg p-3">
            <p class="text-green-800 text-sm"><strong>Physical goods (Stripe/PayPal):</strong> T-shirts, food delivery, Uber rides, concert tickets, furniture</p>
            <p class="text-orange-800 text-sm mt-2"><strong>Digital goods (IAP only):</strong> Premium features, coins, subscriptions, e-books, ad removal</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
          <span class="text-red-600 font-bold">5</span>
        </div>
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">The Bitcoin/Crypto Tip Trap</h3>
          <p class="text-gray-600 text-sm mb-3">Thinking crypto tips bypass IAP? Think again. Apple considers any in-app tipping a digital transaction.</p>
          <div class="bg-red-50 border border-red-100 rounded-lg p-3">
            <p class="text-red-800 text-sm"><strong>Real case:</strong> Damus, a decentralized social app, was threatened with removal in 2023 for allowing Bitcoin tips. Apple demanded they use IAP for all tipping. The developer complied rather than lose their app.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="when-to-use-iap" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">When to Use In-App Purchase</h2>

  <div class="overflow-x-auto">
    <table class="w-full border-collapse bg-white rounded-xl overflow-hidden border border-gray-200">
      <thead>
        <tr class="bg-gray-50">
          <th class="text-left p-4 font-semibold text-gray-900 border-b">Product Type</th>
          <th class="text-left p-4 font-semibold text-gray-900 border-b">Use IAP?</th>
          <th class="text-left p-4 font-semibold text-gray-900 border-b">Notes</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr>
          <td class="p-4 text-gray-700">Premium features</td>
          <td class="p-4"><span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">Yes</span></td>
          <td class="p-4 text-gray-600 text-sm">Non-consumable or subscription</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-700">Virtual currency</td>
          <td class="p-4"><span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">Yes</span></td>
          <td class="p-4 text-gray-600 text-sm">Consumable IAP</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-700">Content subscriptions</td>
          <td class="p-4"><span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">Yes</span></td>
          <td class="p-4 text-gray-600 text-sm">Auto-renewable subscription</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-700">SaaS/B2B apps</td>
          <td class="p-4"><span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">Yes*</span></td>
          <td class="p-4 text-gray-600 text-sm">Unless purchased before download or for enterprise</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-700">Physical products</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">No</span></td>
          <td class="p-4 text-gray-600 text-sm">Use Stripe, PayPal, etc.</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-700">Food delivery</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">No</span></td>
          <td class="p-4 text-gray-600 text-sm">Real-world service</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-700">Ride-hailing</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">No</span></td>
          <td class="p-4 text-gray-600 text-sm">Real-world service</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-700">1:1 tutoring/coaching</td>
          <td class="p-4"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">No</span></td>
          <td class="p-4 text-gray-600 text-sm">Real-world service (live sessions)</td>
        </tr>
        <tr>
          <td class="p-4 text-gray-700">Tips/donations</td>
          <td class="p-4"><span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">Yes</span></td>
          <td class="p-4 text-gray-600 text-sm">Must use IAP, no external links</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
    <h4 class="font-semibold text-blue-900 mb-2">Reader Apps Exception</h4>
    <p class="text-blue-800 text-sm">Certain "reader" apps (Netflix, Spotify, Kindle) can allow users to access content purchased elsewhere without offering IAP in-app. However, you cannot link to external purchase options. Users must already have an account.</p>
  </div>
</section>

<section id="implementation" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Implementation Guide</h2>

  <div class="space-y-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">1. Set Up Products in App Store Connect</h3>
      <ol class="space-y-3 text-gray-600 text-sm">
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
          <span>Go to App Store Connect → Your App → Features → In-App Purchases</span>
        </li>
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
          <span>Click "+" and choose product type (Consumable, Non-Consumable, Auto-Renewable, Non-Renewing)</span>
        </li>
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
          <span>Set Reference Name, Product ID, Price, and localized Display Name/Description</span>
        </li>
        <li class="flex gap-3">
          <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
          <span>Submit for review (products must be approved before they work in production)</span>
        </li>
      </ol>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">2. Implement StoreKit 2 (Swift)</h3>
      <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm"><code>import StoreKit

// Fetch products
let products = try await Product.products(for: ["com.app.premium"])

// Purchase
let result = try await product.purchase()
switch result {
case .success(let verification):
    let transaction = try checkVerified(verification)
    // Grant access to content
    await transaction.finish()
case .userCancelled, .pending:
    break
}

// Restore purchases
for await result in Transaction.currentEntitlements {
    let transaction = try checkVerified(result)
    // Re-grant access
}</code></pre>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">3. Required UI Elements</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-green-50 rounded-lg p-4">
          <h4 class="font-medium text-green-900 mb-2">✓ Must Include</h4>
          <ul class="space-y-1 text-green-800 text-sm">
            <li>• Clear price display</li>
            <li>• Subscription terms (if applicable)</li>
            <li>• Restore Purchases button</li>
            <li>• Links to Terms & Privacy Policy</li>
            <li>• Cancellation instructions</li>
          </ul>
        </div>
        <div class="bg-red-50 rounded-lg p-4">
          <h4 class="font-medium text-red-900 mb-2">✗ Never Include</h4>
          <ul class="space-y-1 text-red-800 text-sm">
            <li>• Links to external payment</li>
            <li>• "Cheaper on website" messaging</li>
            <li>• QR codes to external purchase</li>
            <li>• Fake "discount" pricing</li>
            <li>• Hidden recurring charges</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="checklist" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Guideline 3.1 Compliance Checklist</h2>

  <div class="bg-white border border-gray-200 rounded-xl p-6">
    <div class="space-y-3">
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
        <span class="text-gray-700">All digital content purchases use IAP exclusively</span>
      </label>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
        <span class="text-gray-700">No links, buttons, or text directing to external payments</span>
      </label>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
        <span class="text-gray-700">"Restore Purchases" button is visible and functional</span>
      </label>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
        <span class="text-gray-700">Subscription terms clearly displayed (price, frequency, trial length)</span>
      </label>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
        <span class="text-gray-700">Cancellation instructions included near purchase UI</span>
      </label>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
        <span class="text-gray-700">No dark patterns (hidden costs, confusing trials)</span>
      </label>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
        <span class="text-gray-700">Physical goods/services use external payment (not IAP)</span>
      </label>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
        <span class="text-gray-700">IAP products set up and approved in App Store Connect</span>
      </label>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
        <span class="text-gray-700">Server-side receipt validation implemented (recommended)</span>
      </label>
    </div>
  </div>
</section>

<!-- Related Guides Section -->
<section class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
  <div class="grid md:grid-cols-3 gap-4">
    <a href="/legal-compliance" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-green-600 mb-2">Legal & IAP Compliance</h3>
      <p class="text-sm text-gray-600">Complete guide to App Store legal requirements and payment rules.</p>
    </a>
    <a href="/rejection-recovery" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">Handle Rejections</h3>
      <p class="text-sm text-gray-600">Step-by-step guide to responding to IAP rejections.</p>
    </a>
    <a href="/app-store-privacy-policy-requirements" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">Privacy Requirements</h3>
      <p class="text-sm text-gray-600">Privacy policy and data collection requirements.</p>
    </a>
  </div>
</section>

<!-- CTA Section -->
<section class="mb-12">
  <div class="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
    <div class="max-w-2xl">
      <h2 class="text-2xl font-bold mb-4">Avoid 3.1 Rejections Before They Happen</h2>
      <p class="text-white/90 mb-6">Our AI Review Toolkit checks your app's payment implementation against Apple's guidelines before you submit.</p>
      <a href="/ai-review" class="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
        Check Your IAP Setup
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">The Questions Everyone Asks</h2>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">"Can I just tell users it's cheaper on my website?"</h3>
      <p class="text-gray-600">Absolutely not. You can't mention pricing differences. You can't link to your website's pricing page. You can't put a winking emoji next to "manage subscription." Apple's reviewers have seen every creative workaround and they're not amused.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">"How much does Apple actually take?"</h3>
      <p class="text-gray-600"><strong>30%</strong> is the standard rate. But there's the <strong>App Store Small Business Program</strong>: if you made under $1M last year, you pay only 15%. Subscriptions also drop to 15% after a user stays subscribed for 12+ continuous months. Still painful, but less painful.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">"I sell both physical products AND digital subscriptions. What do I do?"</h3>
      <p class="text-gray-600">You use both. Physical goods (t-shirts, food, event tickets) go through Stripe/PayPal. Digital content (premium features, ad-free, subscriptions) goes through IAP. Just keep them clearly separate—don't let users "buy credits" that work for both.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">"My app was approved before, why is it getting rejected now?"</h3>
      <p class="text-gray-600">Apple's enforcement evolves. Something that slipped through in 2022 might get flagged in 2025. Also, different reviewers have different interpretations. And if you added or changed any payment flows since the last approval, those get scrutinized fresh.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">"What about users who already subscribed on web?"</h3>
      <p class="text-gray-600">They're fine. Existing web subscribers can log in and access their content. You just can't direct NEW users to purchase outside the app. This is how Netflix and Spotify work—they don't offer in-app signup, but existing subscribers can use the app normally.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">"Is there any way around this?"</h3>
      <p class="text-gray-600">Legally? The "reader app" exception (Netflix model) requires Apple approval and only works for content consumption apps. The EU's Digital Markets Act forces Apple to allow alternative payment in the EU starting 2024. Outside the EU? For most apps, IAP is the only way.</p>
    </div>
  </div>
</section>
`
};

async function main() {
  console.log('Seeding Guideline 3.1 article...');

  await prisma.article.upsert({
    where: { slug: guideline31Article.slug },
    update: {
      title: guideline31Article.title,
      description: guideline31Article.description,
      content: guideline31Article.content,
      category: guideline31Article.category,
      isHub: guideline31Article.isHub,
      metaKeywords: guideline31Article.metaKeywords,
      toc: guideline31Article.toc,
      updatedAt: new Date(),
    },
    create: {
      slug: guideline31Article.slug,
      title: guideline31Article.title,
      description: guideline31Article.description,
      content: guideline31Article.content,
      category: guideline31Article.category,
      isHub: guideline31Article.isHub,
      metaKeywords: guideline31Article.metaKeywords,
      toc: guideline31Article.toc,
      publishedAt: new Date(),
    },
  });

  console.log('✓ Guideline 3.1 article created/updated');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

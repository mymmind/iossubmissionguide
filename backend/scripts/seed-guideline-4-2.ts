import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Guideline 4.2 article...')

  const content = `
    <!-- Hero Section -->
    <section id="intro" class="mb-16 max-w-3xl">
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-apple-dark font-sans">Guideline 4.2 Rejection: How to Fix "Minimum Functionality" Issues</h1>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
            If you're reading this, you probably just got the most frustrating rejection in the App Store playbook. <strong>Guideline 4.2</strong> is Apple's way of saying "your app isn't app-y enough." It's subjective. It's vague. And it's rejected more apps than any guideline except 2.1.
        </p>
        <p class="text-gray-600 leading-relaxed mb-6">
            I've been on both sides of this—rejected three times for 4.2 on my first serious app, then later shipping apps that were objectively simpler but somehow passed. The difference? Understanding what Apple's really looking for.
        </p>
        <div class="bg-red-50 border border-red-100 rounded-2xl p-6">
            <h3 class="text-red-900 font-semibold mb-2">Apple's Actual Words</h3>
            <p class="text-red-800/80 text-sm leading-relaxed">
                "Your app must include features, content, and UI that elevate it beyond a repackaged website. If your app is not particularly useful, unique, or 'app-like,' it doesn't belong on the App Store."
            </p>
            <p class="text-red-700/70 text-xs mt-3 italic">Translation: "We don't want your mobile website in an app shell. Convince us you needed to be an app."</p>
        </div>
    </section>

    <!-- Real case study -->
    <div class="bg-blue-50 border-l-4 border-blue-500 p-5 mb-10 max-w-3xl">
      <h3 class="font-semibold text-blue-900 mb-2">Real Story: ProtonMail's 4.2 Rejection</h3>
      <p class="text-blue-800 text-sm">In 2019, the encrypted email provider ProtonMail was rejected under 4.2 because reviewers thought the free tier didn't offer enough functionality. A major security-focused email service, rejected for being "too basic." After public backlash and some back-and-forth with Apple, it was approved. The lesson? 4.2 is subjective, and sometimes you need to push back.</p>
    </div>

    <hr class="border-gray-100 mb-16">

    <!-- What Triggers 4.2 -->
    <section id="what-triggers" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-red-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">What Gets You Rejected</h2>
        </div>

        <div class="prose prose-gray max-w-3xl text-gray-600 mb-8">
            <p>Apple reviewers have a mental checklist. They're asking: "Why does this need to be an app instead of a bookmark?" If you can't answer that, you're getting 4.2'd.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 mb-8">
            <div class="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h3 class="font-semibold text-gray-900 mb-2">The WKWebView Special</h3>
                <p class="text-sm text-gray-600">Your app is basically Safari with your logo. The reviewer opens it, sees a WebView loading your website, and hits reject before their coffee gets cold. Doesn't matter how good your website is.</p>
            </div>
            <div class="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h3 class="font-semibold text-gray-900 mb-2">The "One Button" App</h3>
                <p class="text-sm text-gray-600">You built a flashlight app. Or a tip calculator. Or an app that does exactly one thing that iOS already does. Unless it does that one thing exceptionally well with unique features, 4.2.</p>
            </div>
            <div class="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h3 class="font-semibold text-gray-900 mb-2">The Digital Brochure</h3>
                <p class="text-sm text-gray-600">Your client's restaurant wants an app. It shows the menu, hours, and a map. That's it. No ordering. No reservations. No loyalty program. Apple says: "just make a website."</p>
            </div>
            <div class="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h3 class="font-semibold text-gray-900 mb-2">The Template Farm</h3>
                <p class="text-sm text-gray-600">You used Appy Pie or a similar service to generate 50 apps for 50 local businesses. Apple's automated systems detect duplicate code structures. Mass rejection incoming.</p>
            </div>
        </div>

        <div class="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400">
            <p class="text-sm text-amber-900"><strong>The frustrating truth:</strong> 4.2 is wildly inconsistent. I've seen fart apps get approved while genuinely useful utilities get rejected. Different reviewers, different interpretations, different luck. Your job is to make rejection as hard as possible to justify.</p>
        </div>
    </section>

    <!-- Specific 4.2 Variants -->
    <section id="variants" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">Guideline 4.2 Sub-Categories</h2>
        </div>

        <p class="text-gray-600 mb-8 max-w-3xl">Apple's rejection emails often cite specific 4.2 sub-guidelines. Here's what each means:</p>

        <div class="space-y-6">
            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-lg text-apple-dark mb-3">4.2.1 - Apps Using Non-Public APIs</h3>
                <p class="text-gray-600 text-sm mb-4">Your app uses private frameworks or APIs not documented in Apple's public SDK.</p>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-700"><strong>Fix:</strong> Remove any private API calls. Use <code class="bg-gray-100 px-1 rounded">nm</code> or <code class="bg-gray-100 px-1 rounded">otool</code> to scan your binary for private symbols.</p>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-lg text-apple-dark mb-3">4.2.2 - Apps That Are Not Useful</h3>
                <p class="text-gray-600 text-sm mb-4">The app doesn't provide lasting value or meaningful functionality. This is the most common 4.2 rejection.</p>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-700"><strong>Fix:</strong> Add native features like offline support, push notifications, widgets, Siri shortcuts, or device integration that websites can't replicate.</p>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-lg text-apple-dark mb-3">4.2.3 - Apps That Are Simply Websites</h3>
                <p class="text-gray-600 text-sm mb-4">Your app is primarily a web view with no native iOS features or offline capabilities.</p>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-700"><strong>Fix:</strong> Implement at least 3-4 native features. Consider: native navigation, local data caching, biometric authentication, camera integration, or Apple Pay.</p>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-lg text-apple-dark mb-3">4.2.5 - Apps Primarily Marketing Materials</h3>
                <p class="text-gray-600 text-sm mb-4">The app functions more as an advertisement than a useful tool.</p>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-700"><strong>Fix:</strong> Add genuine utility. For a restaurant: add ordering, reservations, loyalty program. For a business: add appointment booking, customer service chat, or account management.</p>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-lg text-apple-dark mb-3">4.2.6 - Apps from Templates or App Generation Services</h3>
                <p class="text-gray-600 text-sm mb-4">The app was created using a drag-and-drop builder without significant customization.</p>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-700"><strong>Fix:</strong> Extensively customize the template. Add unique features, custom UI elements, and functionality that differentiates it from other template-built apps.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How to Fix -->
    <section id="how-to-fix" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-green-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">How to Fix a 4.2 Rejection</h2>
        </div>

        <div class="prose prose-gray max-w-3xl text-gray-600 mb-8">
            <p>Getting past Guideline 4.2 requires demonstrating that your app provides value beyond a website. Here's a systematic approach:</p>
        </div>

        <div class="space-y-8">
            <div class="flex gap-6">
                <div class="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div class="flex-1">
                    <h3 class="font-bold text-lg text-apple-dark mb-2">Add Native iOS Features</h3>
                    <p class="text-gray-600 text-sm mb-4">Implement features that require native access and can't be replicated by a website:</p>
                    <ul class="text-sm text-gray-600 space-y-2 ml-4">
                        <li>• <strong>Push Notifications:</strong> Keep users engaged with timely updates</li>
                        <li>• <strong>Widgets:</strong> Show app content on the home screen</li>
                        <li>• <strong>Siri Shortcuts:</strong> Voice-activated app actions</li>
                        <li>• <strong>Apple Watch:</strong> Companion app or complications</li>
                        <li>• <strong>Offline Mode:</strong> Cache data for use without internet</li>
                        <li>• <strong>Camera/Photos:</strong> Scan documents, take photos, access library</li>
                        <li>• <strong>Face ID/Touch ID:</strong> Biometric authentication</li>
                        <li>• <strong>HealthKit/CoreMotion:</strong> Access fitness and health data</li>
                    </ul>
                </div>
            </div>

            <div class="flex gap-6">
                <div class="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div class="flex-1">
                    <h3 class="font-bold text-lg text-apple-dark mb-2">Enhance the User Experience</h3>
                    <p class="text-gray-600 text-sm mb-4">Make your app feel native and polished:</p>
                    <ul class="text-sm text-gray-600 space-y-2 ml-4">
                        <li>• Use native navigation (UINavigationController, TabBar)</li>
                        <li>• Implement swipe gestures and haptic feedback</li>
                        <li>• Add smooth animations and transitions</li>
                        <li>• Follow Human Interface Guidelines strictly</li>
                        <li>• Support Dynamic Type and accessibility features</li>
                        <li>• Add pull-to-refresh and native loading states</li>
                    </ul>
                </div>
            </div>

            <div class="flex gap-6">
                <div class="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div class="flex-1">
                    <h3 class="font-bold text-lg text-apple-dark mb-2">Write a Compelling Appeal</h3>
                    <p class="text-gray-600 text-sm mb-4">If you believe your app provides value, explain it clearly in the Resolution Center:</p>
                    <div class="bg-gray-50 p-4 rounded-lg font-mono text-xs">
                        <p class="mb-2">Dear App Review Team,</p>
                        <p class="mb-2">We respectfully request reconsideration of our app [Name].</p>
                        <p class="mb-2"><strong>Native features we've implemented:</strong></p>
                        <p class="mb-1">1. Push notifications for [specific use case]</p>
                        <p class="mb-1">2. Offline data caching using CoreData</p>
                        <p class="mb-1">3. Face ID authentication for secure access</p>
                        <p class="mb-2">4. Home screen widget showing [specific data]</p>
                        <p class="mb-2"><strong>Value beyond a website:</strong></p>
                        <p class="mb-2">[Explain specific user benefits that require native access]</p>
                        <p>Thank you for your consideration.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Real Examples -->
    <section id="examples" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">Real-World Examples</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
            <div class="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 class="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <span class="text-red-500">✗</span> Rejected: Restaurant Menu App
                </h3>
                <p class="text-sm text-red-800/80 mb-4">A WebView showing the restaurant's menu PDF with contact information and hours.</p>
                <p class="text-xs text-red-700"><strong>Why:</strong> No functionality beyond what the website offers.</p>
            </div>

            <div class="bg-green-50 border border-green-100 rounded-2xl p-6">
                <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span class="text-green-500">✓</span> Approved: Restaurant App
                </h3>
                <p class="text-sm text-green-800/80 mb-4">Native menu with ordering, Apple Pay, push notifications for order status, loyalty rewards, and table reservations.</p>
                <p class="text-xs text-green-700"><strong>Why:</strong> Genuine utility that requires native capabilities.</p>
            </div>

            <div class="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 class="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <span class="text-red-500">✗</span> Rejected: Company Info App
                </h3>
                <p class="text-sm text-red-800/80 mb-4">Static pages showing company information, team bios, and a contact form.</p>
                <p class="text-xs text-red-700"><strong>Why:</strong> Marketing material with no app-specific value.</p>
            </div>

            <div class="bg-green-50 border border-green-100 rounded-2xl p-6">
                <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span class="text-green-500">✓</span> Approved: Client Portal App
                </h3>
                <p class="text-sm text-green-800/80 mb-4">Secure login with Face ID, document upload via camera, push notifications for updates, offline document access, and in-app messaging.</p>
                <p class="text-xs text-green-700"><strong>Why:</strong> Provides secure, convenient access that improves on web experience.</p>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">Questions I Always Get</h2>
        </div>

        <div class="space-y-6">
            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-apple-dark mb-2">"Should I appeal or just add features?"</h3>
                <p class="text-gray-600 text-sm">Usually, add features. Appeals for 4.2 rarely work unless you've genuinely been misunderstood OR you have a strong case that the reviewer missed something. Writing a compelling appeal that says "my app IS useful because..." is harder than just adding push notifications and offline mode. Do both if you can—add features AND explain them clearly in your resubmission notes.</p>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-apple-dark mb-2">"How many native features is enough?"</h3>
                <p class="text-gray-600 text-sm">There's no magic number, but I aim for 3-4 that I can list clearly. Quality beats quantity. A well-implemented offline mode with local sync is worth more than push notifications + widgets + Siri shortcuts that feel bolted on. The reviewer should see your native features within 30 seconds of opening the app.</p>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-apple-dark mb-2">"My app was approved before! Why is it getting rejected NOW?"</h3>
                <p class="text-gray-600 text-sm">This happens all the time and it's maddening. A few possibilities: (1) Different reviewer with different interpretation, (2) Apple raised the bar—what passed in 2021 might not pass in 2025, (3) Your update changed something that triggered a fresh review of the whole app. Unfortunately, "but you approved it before" is not a valid appeal argument.</p>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-apple-dark mb-2">"Will using React Native or Flutter get me rejected?"</h3>
                <p class="text-gray-600 text-sm">No. I've shipped dozens of React Native apps. Apple doesn't care about your framework—they care about the user experience. The Expo community ships thousands of apps successfully. The real question is: does your app feel native and provide value? If yes, your tech stack is irrelevant.</p>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-apple-dark mb-2">"Can I resubmit immediately?"</h3>
                <p class="text-gray-600 text-sm">Yes, as soon as you've made meaningful changes. In fact, quick turnaround looks good—it shows you're responsive and taking the feedback seriously. Just make sure you actually fixed/added something. Resubmitting the same binary hoping for a different reviewer is a waste of everyone's time and Apple notices.</p>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 class="font-bold text-apple-dark mb-2">"What if my app is genuinely simple by design?"</h3>
                <p class="text-gray-600 text-sm">Then you need to explain WHY in Review Notes. Some apps are intentionally minimal—meditation timers, focused tools, accessibility aids. If simplicity IS the feature, make that case clearly. "This app is designed to do one thing without distraction" is a valid argument. Back it up with great execution and maybe some accessibility features.</p>
            </div>
        </div>
    </section>

    <!-- Checklist -->
    <section id="checklist" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">Pre-Submission Checklist for 4.2</h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">App works offline (at least partially)</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Push notifications implemented and useful</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Native navigation (no WebView for main UI)</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Uses at least one device feature (camera, biometrics, etc.)</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Follows Human Interface Guidelines</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Provides value a website cannot</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Review Notes explain native features clearly</span>
            </label>
            <label class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-apple-blue focus:ring-apple-blue">
                <span class="text-sm text-gray-700">Not a template app or reskinned version</span>
            </label>
        </div>
    </section>

    <!-- Related Guides Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <a href="/guideline-2-1-app-crashes" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-red-500 hover:shadow-md transition-all">
          <h3 class="font-semibold text-gray-900 group-hover:text-red-600 mb-2">Guideline 2.1: Crashes</h3>
          <p class="text-sm text-gray-600">The most common rejection reason - fix crash and performance issues.</p>
        </a>
        <a href="/rejection-recovery" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
          <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">How to Handle Rejection</h3>
          <p class="text-sm text-gray-600">Step-by-step guide to responding to rejections and getting approved.</p>
        </a>
        <a href="/react-native-app-store-submission" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all">
          <h3 class="font-semibold text-gray-900 group-hover:text-cyan-600 mb-2">React Native Submission</h3>
          <p class="text-sm text-gray-600">Framework-specific tips to avoid 4.2 and pass review.</p>
        </a>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="mb-16">
        <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-center text-white">
            <h2 class="text-3xl font-bold mb-4">Avoid 4.2 Rejections Before They Happen</h2>
            <p class="text-white/90 mb-8 max-w-xl mx-auto">Our AI Review Toolkit scans your app for common 4.2 triggers and suggests native features to implement before you submit.</p>
            <a href="/ai-review" class="inline-block px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-gray-100 transition-all">
                Get the AI Toolkit — $29.99
            </a>
        </div>
    </section>
  `

  const toc = {
    title: "Guideline 4.2 Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#what-triggers", label: "What Triggers 4.2" },
          { href: "#variants", label: "4.2 Sub-Categories" },
          { href: "#how-to-fix", label: "How to Fix It" },
          { href: "#examples", label: "Real-World Examples" },
          { href: "#faq", label: "FAQ" },
          { href: "#checklist", label: "Pre-Submission Checklist" }
        ]
      }
    ]
  }

  await prisma.article.upsert({
    where: { slug: 'guideline-4-2-minimum-functionality' },
    update: {
      title: 'Guideline 4.2 Rejection: How to Fix Minimum Functionality Issues',
      description: 'Complete guide to fixing Apple App Store Guideline 4.2 rejections. Learn what triggers minimum functionality rejections and how to add native features to get approved.',
      content,
      category: 'Rejections',
      metaKeywords: ['guideline 4.2', 'app store rejection 4.2', 'minimum functionality', '4.2 rejection fix', 'web wrapper rejection', 'app not useful'],
      toc,
      isHub: false,
      updatedAt: new Date()
    },
    create: {
      slug: 'guideline-4-2-minimum-functionality',
      title: 'Guideline 4.2 Rejection: How to Fix Minimum Functionality Issues',
      description: 'Complete guide to fixing Apple App Store Guideline 4.2 rejections. Learn what triggers minimum functionality rejections and how to add native features to get approved.',
      content,
      category: 'Rejections',
      metaKeywords: ['guideline 4.2', 'app store rejection 4.2', 'minimum functionality', '4.2 rejection fix', 'web wrapper rejection', 'app not useful'],
      toc,
      isHub: false,
      publishedAt: new Date()
    }
  })

  console.log('✓ Guideline 4.2 article created/updated')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

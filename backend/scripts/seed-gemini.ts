import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Gemini reference content (Refined)...')

  const content = `
    <!-- Hero Section -->
    <section id="intro" class="mb-16 max-w-3xl">
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-apple-dark font-sans">How to Pass the Apple App Store Review Process (2025 Guide)</h1>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Apple maintains a strict app review process to ensure that every app on the App Store meets high standards of quality, safety, and compliance. Before any iOS app can be published, it must pass Apple's review, which checks for adherence to the <strong>App Store Review Guidelines</strong>.
        </p>
        <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h3 class="text-blue-900 font-semibold mb-2">Why this matters</h3>
            <p class="text-blue-800/80 text-sm leading-relaxed">
                A rejected app can delay your launch and cost valuable time. By understanding what Apple looks for and preparing your app accordingly, you can save yourself from the "rejection loop" and get your app approved on the first try. Use the following best practices to confidently publish your iOS app.
            </p>
        </div>
    </section>

    <hr class="border-gray-100 mb-16">

    <!-- Pre-Submission Checklist -->
    <section id="pre-submission" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark font-sans">Pre-Submission Checklist</h2>
        </div>
        <p class="text-gray-600 mb-8 max-w-3xl">Before you even hit "Submit for Review," go through this checklist to catch issues that might trigger an immediate rejection.</p>
        
        <div class="grid gap-6 md:grid-cols-2">
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 class="font-semibold text-gray-900 mb-2">1. Test for Crashes & Bugs</h3>
                <p class="text-sm text-gray-600">Rigorously test on real devices and simulators. An app that crashes during Apple's review will be rejected outright. Use test cases to cover core features, edge cases, and low network conditions.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 class="font-semibold text-gray-900 mb-2">2. Complete All Metadata</h3>
                <p class="text-sm text-gray-600">Ensure the app name, description, category, keywords, screenshots, and privacy policy URL are accurate. Misleading metadata (claiming features you don't have) leads to rejection.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 class="font-semibold text-gray-900 mb-2">3. Update Contact Info</h3>
                <p class="text-sm text-gray-600">Ensure developer contact information in App Store Connect is current. If Apple needs to reach out for clarification, outdated info can stall your review.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 class="font-semibold text-gray-900 mb-2">4. Provide Demo Account</h3>
                <p class="text-sm text-gray-600">If your app requires login, provide a full-featured demo account in "App Review Notes". If specific hardware (like Bluetooth accessories) is needed, provide a video demo.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 class="font-semibold text-gray-900 mb-2">5. Backend Services</h3>
                <p class="text-sm text-gray-600">Keep servers online and testable during review. Test your app with a "fresh install" on a clean device to simulate a first-time user hitting your backend.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 class="font-semibold text-gray-900 mb-2">6. Review Notes & Compliance</h3>
                <p class="text-sm text-gray-600">Use notes to explain hidden features or special configurations. Verify you follow Human Interface Guidelines and technical rules for frameworks like Apple Pay or HealthKit.</p>
            </div>
        </div>
    </section>

    <!-- 1. Safety -->
    <section id="safety" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">Key Focus Area 1</span>
        <h2 class="text-3xl font-bold text-apple-dark mb-6 font-sans">Safety</h2>
        <div class="prose prose-gray max-w-3xl text-gray-600">
            <p>User safety and appropriate content are top priorities. Guidelines cover content, data handling, and device risk.</p>
            
            <h3 class="text-gray-900 font-semibold text-lg mt-6 mb-2">Objectionable Content</h3>
            <p>Apps must not contain offensive, disturbing, or harmful content. This includes pornography, graphic violence, hate speech, illegal drug references, or defamation. Content must be appropriate for your target age rating.</p>

            <h3 class="text-gray-900 font-semibold text-lg mt-6 mb-2">User-Generated Content (UGC) Requirements</h3>
            <p>If your app allows users to post content (comments, photos, profiles), you <strong>must</strong> include:</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li>A way to filter out objectionable material (profanity filters, image moderation).</li>
                <li>A mechanism for users to report abusive content.</li>
                <li>The ability to block abusive users.</li>
                <li>Contact information in-app so users can reach the developer.</li>
            </ul>

            <h3 class="text-gray-900 font-semibold">Data Privacy & Permissions</h3>
            <p>Collect only the data you need. If you access sensitive data (location, contacts, health, camera), you must include a usage description in your <code>Info.plist</code> explaining <em>why</em>. Fill out the App Privacy "nutrition label" in App Store Connect truthfully.</p>
            <div class="bg-blue-50 p-6 rounded-lg text-sm border-l-4 border-blue-400 mt-8">
                <strong>Missing Policy?</strong> Every app collecting personal data must have a Privacy Policy URL in the metadata and accessible within the app (e.g., inside Settings).
            </div>

            <h3 class="text-gray-900 font-semibold mt-12">Kids Category</h3>
            <p>Apps for kids must not use behavioral advertising or collect unnecessary data. External links and purchases must be gated behind a "parental gate" (e.g., a math challenge).</p>
        </div>
    </section>

    <!-- 2. Performance -->
    <section id="performance" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">Key Focus Area 2</span>
        <h2 class="text-3xl font-bold text-apple-dark mb-6 font-sans">Performance</h2>
        <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div class="p-8">
                <div class="grid gap-8">
                    <div>
                        <h4 class="font-bold text-gray-900 text-lg">Complete, Final Version</h4>
                        <p class="text-gray-600 mt-2">No placeholder content like "Coming Soon" buttons, dummy text, or lorem ipsum. All advertised features must work. Incomplete apps are rejected under guideline 2.1.</p>
                    </div>
                    <hr class="border-gray-100">
                    <div>
                        <h4 class="font-bold text-gray-900 text-lg">No Crashes or Major Bugs</h4>
                        <p class="text-gray-600 mt-2">Test extensively on fresh installs. Apple reviewers often test on iPad even if you target iPhone, so ensure no UI "letterboxing" or layout breaks occur.</p>
                    </div>
                    <hr class="border-gray-100">
                    <div>
                        <h4 class="font-bold text-gray-900 text-lg">Load Times & Stability</h4>
                        <p class="text-gray-600 mt-2">Apps shouldn't hang on launch. Use loading indicators for network calls. Broken content (empty screens due to server errors) counts as a bug.</p>
                    </div>
                    <hr class="border-gray-100">
                    <div>
                        <h4 class="font-bold text-gray-900 text-lg">Approved APIs Only</h4>
                        <p class="text-gray-600 mt-2">No private APIs. No downloading executable code after release (except allowed scripts like standard JavaScript). You are responsible for all third-party SDKs in your code.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. Business -->
    <section id="business" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">Key Focus Area 3</span>
        <h2 class="text-3xl font-bold text-apple-dark mb-6 font-sans">Business & Monetization</h2>
        <p class="text-gray-600 mb-8 max-w-3xl">Apple is strict about payment rules. Attempting to bypass In-App Purchase (IAP) is a common cause for rejection.</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="border border-gray-200 rounded-xl p-6 bg-gray-50">
                <h3 class="font-bold text-gray-900 mb-3 flex items-center text-lg">
                    Digital Goods Rule
                </h3>
                <p class="text-sm text-gray-600 mb-4">
                    If your app sells <strong>digital content</strong> (premium features, game currency, e-books, subscriptions), you <strong>must</strong> use Apple's IAP. You cannot direct users to a website to buy these.
                </p>
                <p class="text-sm text-gray-600">
                    <strong>Exception:</strong> Physical goods (food delivery, ride-hailing, physical products) must use alternative payment methods, not IAP.
                </p>
            </div>
            <div class="border border-gray-200 rounded-xl p-6 bg-gray-50">
                <h3 class="font-bold text-gray-900 mb-3 flex items-center text-lg">
                    Restore Purchases
                </h3>
                <p class="text-sm text-gray-600 mb-4">
                    If you sell non-consumables or subscriptions, you must implement a <strong>"Restore Purchases"</strong> feature. This allows users to regain access on a new device without paying again.
                </p>
            </div>
        </div>

        <div class="space-y-6 max-w-3xl">
            <div>
                <h4 class="font-bold text-gray-900">Subscriptions & Auto-Renewal</h4>
                <p class="text-gray-600 text-sm mt-1">Clearly disclose pricing, duration, and terms. No dark patterns. Users must understand exactly what they are signing up for. Provide info on how to manage/cancel subscriptions.</p>
            </div>
            <div>
                <h4 class="font-bold text-gray-900">Sign in with Apple</h4>
                <p class="text-gray-600 text-sm mt-1">If you use third-party social logins (Google, Facebook), you generally must offer "Sign in with Apple" as an equivalent option (Guideline 4.8).</p>
            </div>
            <div>
                <h4 class="font-bold text-gray-900">Prohibited Tactics</h4>
                <p class="text-gray-600 text-sm mt-1">No crypto-currency mining on device. No misleading "free trials" that hide costs. No steering users to external payment platforms for digital goods.</p>
            </div>
        </div>
    </section>

    <!-- 4. Design -->
    <section id="design" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">Key Focus Area 4</span>
        <h2 class="text-3xl font-bold text-apple-dark mb-6 font-sans">Design</h2>
        <div class="space-y-8 max-w-3xl">
            <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Human Interface Guidelines (HIG)</h3>
                <p class="text-gray-600">Your app should feel native. Standard controls, proper text size, and touch target sizing (44x44pt minimum) are expected. "Web wrapper" apps that look like a basic website are often rejected under guideline 4.2 for minimum functionality.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Accurate Screenshots</h3>
                <p class="text-gray-600">Screenshots must match the app binary. Do not use concept art. If you change the UI, you must update the screenshots. Showing features that don't exist is considered misleading.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Spam and Copycats</h3>
                <p class="text-gray-600">Do not submit multiple similar apps (e.g., 10 flashlight apps). Combine them into one container app. Re-skinned copies are rejected.</p>
            </div>
        </div>
    </section>

     <!-- 5. Legal -->
     <section id="legal" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">Key Focus Area 5</span>
        <h2 class="text-3xl font-bold text-apple-dark mb-6 font-sans">Legal</h2>
        <div class="bg-gray-900 text-gray-300 rounded-2xl p-8">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 class="text-white font-bold mb-2">Privacy & Account Deletion</h4>
                    <p class="text-sm mb-4">You must comply with GDPR/COPPA. <strong>Critical:</strong> If your app allows account creation, it must allow account deletion within the app (Guideline 5.1.1(v)).</p>
                    
                    <h4 class="text-white font-bold mb-2">Intellectual Property</h4>
                    <p class="text-sm">Ensure you own all content. No unauthorized trademarked names, logos, or copyrighted music.</p>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-2">Regulated Categories</h4>
                    <ul class="text-sm space-y-2">
                        <li><strong>Medical:</strong> Needs disclaimers ("Not for diagnostic use") or regulatory clearance.</li>
                        <li><strong>Gambling:</strong> Must be geo-restricted and fully licensed.</li>
                        <li><strong>Crypto:</strong> Exchange apps must be from established financial institutions.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <hr class="border-gray-100 mb-16">

    <!-- Listing Prep -->
    <section id="listing" class="mb-20 scroll-mt-24">
        <h2 class="text-2xl font-bold text-apple-dark mb-6 font-sans">Preparing Your App Store Listing</h2>
        <p class="text-gray-600 mb-6 max-w-3xl">The review team compares your app's actual behavior to your listing claims. Inconsistencies lead to rejection.</p>
        
        <div class="grid gap-6 md:grid-cols-2">
            <div class="p-5 border border-gray-200 rounded-lg">
                <h4 class="font-bold text-gray-900">Accurate Description</h4>
                <p class="text-sm text-gray-600 mt-2">Be factual. Avoid "Beta", "Test", or "Demo" terminology. Don't mention competitor platforms (e.g., "Android").</p>
            </div>
            <div class="p-5 border border-gray-200 rounded-lg">
                <h4 class="font-bold text-gray-900">App Icon & Version</h4>
                <p class="text-sm text-gray-600 mt-2">The icon in the store must match the binary installed on the device. Version numbers should match.</p>
            </div>
            <div class="p-5 border border-gray-200 rounded-lg">
                <h4 class="font-bold text-gray-900">Support & Privacy URLs</h4>
                <p class="text-sm text-gray-600 mt-2">Links must be live. The Support URL must provide a way for users to contact you.</p>
            </div>
            <div class="p-5 border border-gray-200 rounded-lg">
                <h4 class="font-bold text-gray-900">App Review Notes</h4>
                <p class="text-sm text-gray-600 mt-2">Crucial field. Add demo credentials, explain special hardware (attach video link), and clarify non-obvious features here.</p>
            </div>
        </div>
    </section>

     <!-- Process -->
     <section id="process" class="mb-20 scroll-mt-24">
        <h2 class="text-2xl font-bold text-apple-dark mb-8 font-sans">The Review Process</h2>
        <div class="relative border-l-2 border-gray-200 ml-4 space-y-12">
            <div class="relative pl-8">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                <h3 class="font-bold text-gray-900">1. Automated Scans</h3>
                <p class="text-sm text-gray-600 mt-1">Immediate check for malware, private API usage, and basic metadata presence.</p>
            </div>
            <div class="relative pl-8">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                <h3 class="font-bold text-gray-900">2. Waiting for Review</h3>
                <p class="text-sm text-gray-600 mt-1">Usually 24-48 hours. Be responsive to emails if Apple requests info.</p>
            </div>
            <div class="relative pl-8">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                <h3 class="font-bold text-gray-900">3. Human Review</h3>
                <p class="text-sm text-gray-600 mt-1">A real person installs your app. They test flows (login, IAP, edge cases), check permissions, and verify your metadata claims.</p>
            </div>
            <div class="relative pl-8">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
                <h3 class="font-bold text-gray-900">4. Decision & Resolution</h3>
                <p class="text-sm text-gray-600 mt-1">
                    <strong>Approved:</strong> Ready for sale.<br>
                    <strong>Rejected:</strong> Cited with guideline numbers. Fix the issue and resubmit. You can appeal to the App Review Board if you believe the rejection is unfair.
                </p>
            </div>
        </div>
    </section>

    <!-- Rejection Reasons -->
    <section id="rejection" class="mb-20 scroll-mt-24">
        <div class="bg-red-50 rounded-2xl p-8 border border-red-100">
            <h2 class="text-2xl font-bold text-red-900 mb-6 font-sans">Top Reasons for Rejection</h2>
            <div class="grid md:grid-cols-2 gap-4 text-red-800">
                <ul class="space-y-3">
                    <li class="flex items-start gap-2">
                        <span class="font-bold mt-1">1.</span>
                        <span><strong>Crashes & Bugs:</strong> The #1 reason.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="font-bold mt-1">2.</span>
                        <span><strong>Incomplete Info:</strong> Missing demo accounts.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="font-bold mt-1">3.</span>
                        <span><strong>Broken Links:</strong> Placeholder content/dead ends.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="font-bold mt-1">4.</span>
                        <span><strong>Privacy Violations:</strong> Missing policies or data misuse.</span>
                    </li>
                </ul>
                <ul class="space-y-3">
                    <li class="flex items-start gap-2">
                        <span class="font-bold mt-1">5.</span>
                        <span><strong>Misleading Metadata:</strong> Screenshots don't match app.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="font-bold mt-1">6.</span>
                        <span><strong>IAP Violations:</strong> Selling digital goods via web links.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="font-bold mt-1">7.</span>
                        <span><strong>Poor UI/UX:</strong> Substandard design or web wrappers.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="font-bold mt-1">8.</span>
                        <span><strong>Missing Features:</strong> No "Restore Purchase" or "Delete Account".</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <!-- AI Review Paywall -->
    <section id="llm-review" class="mb-20 scroll-mt-24">
        <h2 class="text-3xl font-bold text-apple-dark mb-6 font-sans">Pass Review with AI</h2>
        
        <!-- Sales Copy & Social Proof -->
        <div class="max-w-3xl mb-10">
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
                Increase your approval chances tenfold while ensuring your code adheres to Apple's highest standards. By integrating Advanced AI into your workflow with our guide, you can simulate a senior reviewer's perspective before you ever hit "Submit".
            </p>
            
            <div class="grid md:grid-cols-3 gap-4 mb-8">
                <!-- Review 1 -->
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div class="flex text-yellow-400 mb-2">★★★★★</div>
                    <p class="text-sm text-gray-600 mb-3">"Saved me weeks of rejection ping-pong. The prompt caught a metadata issue I completely missed."</p>
                    <p class="text-xs font-bold text-gray-900">— Alex R., iOS Dev</p>
                </div>
                <!-- Review 2 -->
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div class="flex text-yellow-400 mb-2">★★★★★</div>
                    <p class="text-sm text-gray-600 mb-3">"The PDF guide is gold. Worth every penny of the $29.99 just for the checklist alone."</p>
                    <p class="text-xs font-bold text-gray-900">— Sarah K., Founder</p>
                </div>
                <!-- Review 3 -->
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div class="flex text-yellow-400 mb-2">★★★★★</div>
                    <p class="text-sm text-gray-600 mb-3">"Finally passed review after 3 rejections thanks to the code smell checker. Essential toolkit."</p>
                    <p class="text-xs font-bold text-gray-900">— Mike T., Expo Dev</p>
                </div>
            </div>
        </div>

        <!-- Content Locker -->
        <div class="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm h-[600px]"> 
            <!-- Blurred Background Content (The "Secret" Stuff) -->
            <div class="p-8 h-full blur-[4px] opacity-50 select-none pointer-events-none overflow-hidden font-mono text-sm leading-relaxed" aria-hidden="true">
                 <h3 class="text-xl font-bold font-sans mb-4 text-gray-900">System Prompt: The Apple Reviewer Persona</h3>
                 <p class="mb-4">
                    // Copy this into your AI context window<br>
                    ROLE: You are a strict Apple App Store Reviewer acting under the 2025 Guidelines.<br>
                    GOAL: Audit the user's provided code diffs and metadata for rejection triggers.<br>
                    <br>
                    RULES:<br>
                    1. Check for any usage of Non-Public APIs (reject immediately with 2.5).<br>
                    2. Verify specific Info.plist keys for camera/location usage.<br>
                    3. Ensure UI meets Human Interface Guidelines (minimum hit areas 44x44pt).
                 </p>
                 <br>
                 <h3 class="text-xl font-bold font-sans mb-4 text-gray-900">Swift/Obj-C Risk Scanners</h3>
                 <p>
                    func auditPermissions() {<br>
                      // ... hidden content ...<br>
                    }
                 </p>
            </div>
            
            <!-- Centered Paywall Popup -->
            <div class="absolute inset-0 z-20 flex items-center justify-center p-4">
                <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-[400px] w-full text-center relative animate-in fade-in zoom-in-95 duration-300">
                    <div class="mb-6">
                        <div class="flex items-center justify-center gap-2 mb-2">
                             <span class="text-6xl font-bold text-gray-900 tracking-tight">$29.99</span>
                             <span class="text-xl text-gray-400 font-semibold line-through decoration-2">$49</span>
                        </div>
                    </div>

                    <ul class="text-left space-y-4 mb-8 pl-2">
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            <span class="text-gray-700 font-medium">Store Review Strategy <span class="text-gray-400 text-sm font-normal">(2025 Edition)</span></span>
                        </li>
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            <span class="text-gray-700 font-medium">Coding Best Practices <span class="text-gray-400 text-sm font-normal">(Native & Expo)</span></span>
                        </li>
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            <span class="text-gray-700 font-medium">Master AI Instructions <span class="text-gray-400 text-sm font-normal">(Immediate Access)</span></span>
                        </li>
                    </ul>

                    <button id="paywall-btn" onclick="handlePurchase()" class="w-full bg-[#0071e3] hover:bg-[#0077ED] text-white font-semibold text-lg py-3.5 rounded-lg transition-all shadow-md active:scale-[0.98]">
                        Unlock Full Access
                    </button>
                    
                    <div class="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        Secure payment via Stripe
                    </div>
                    <a href="/ai-review" class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-apple-blue hover:underline">
                        Learn more about what's included
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Deep Dive Guides (Hub & Spoke Strategy) -->
    <section id="deep-dives" class="mb-20 scroll-mt-24">
        <h2 class="text-2xl font-bold text-apple-dark mb-6 font-sans">Deep Dive Guides</h2>
        <p class="text-gray-600 mb-8 max-w-3xl">Need more detail? Explore our focused guides on submission, compliance, and troubleshooting.</p>
        <div class="grid md:grid-cols-3 gap-6">
            <!-- Card 1: Connect -->
            <a href="/connect-guide" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-apple-blue hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-apple-blue mb-4 group-hover:bg-apple-blue group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-apple-blue mb-2">App Store Connect & TestFlight</h3>
                <p class="text-sm text-gray-600">Step-by-step guide to uploading your binary, managing TestFlight, and the final submission process.</p>
            </a>

            <!-- Card 2: Rejections -->
            <a href="/rejection-guide" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-red-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-red-600 mb-2">Troubleshooting Rejections</h3>
                <p class="text-sm text-gray-600">Detailed breakdown of common rejection codes (Guideline 4.1, 2.1) and how to fix them efficiently.</p>
            </a>

            <!-- Card 3: Legal -->
            <a href="/legal-compliance" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-green-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-green-600 mb-2">Legal, Privacy & IAP</h3>
                <p class="text-sm text-gray-600">Deep dive into Nutrition Labels, Account Deletion requirements, and complex In-App Purchase rules.</p>
            </a>
        </div>

        <!-- Second Row of Cards -->
        <div class="grid md:grid-cols-3 gap-6 mt-6">
            <!-- Card 4: Privacy Policy -->
            <a href="/app-store-privacy-policy-requirements" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-emerald-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-emerald-600 mb-2">Privacy Policy Requirements</h3>
                <p class="text-sm text-gray-600">Complete guide to privacy nutrition labels, Required Reason APIs, privacy manifests, and account deletion.</p>
            </a>

            <!-- Card 5: Metadata -->
            <a href="/app-store-metadata-best-practices" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-indigo-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-indigo-600 mb-2">Metadata Best Practices</h3>
                <p class="text-sm text-gray-600">Optimize app name, subtitle, keywords, description, and screenshots for better discoverability and conversions.</p>
            </a>

            <!-- Card 6: Screenshots -->
            <a href="/app-store-screenshot-sizes-2025" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-purple-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-2">Screenshot Sizes 2025</h3>
                <p class="text-sm text-gray-600">Complete reference for all required screenshot dimensions across iPhone, iPad, Apple Watch, and Mac.</p>
            </a>
        </div>

        <!-- Third Row: Guideline-Specific Fixes -->
        <div class="grid md:grid-cols-3 gap-6 mt-6">
            <!-- Card 7: Guideline 3.1 IAP -->
            <a href="/guideline-3-1-in-app-purchase" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-amber-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-amber-600 mb-2">Guideline 3.1: In-App Purchase</h3>
                <p class="text-sm text-gray-600">Fix IAP rejection issues. Learn when Apple requires IAP vs external payments, StoreKit 2 implementation, and restore purchases.</p>
            </a>

            <!-- Card 8: Review Time -->
            <a href="/app-store-review-time-2025" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-teal-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-teal-600 mb-2">App Store Review Time 2025</h3>
                <p class="text-sm text-gray-600">Current review times, expedited review requests, factors that affect timing, and tips to speed up approval.</p>
            </a>

            <!-- Card 9: Rejection Recovery -->
            <a href="/rejection-recovery" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-slate-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-slate-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-slate-600 mb-2">How to Handle Rejection</h3>
                <p class="text-sm text-gray-600">Step-by-step recovery guide: understanding rejection messages, fixing issues, resubmitting, and when to appeal.</p>
            </a>
        </div>
    </section>

    <!-- Framework Guides -->
    <section id="framework-guides" class="mb-20 scroll-mt-24">
        <h2 class="text-2xl font-bold text-apple-dark mb-6 font-sans">Framework-Specific Guides</h2>
        <p class="text-gray-600 mb-8 max-w-3xl">Building with React Native, Flutter, or native Swift? Get framework-specific submission guidance.</p>
        <div class="grid md:grid-cols-3 gap-6">
            <!-- React Native -->
            <a href="/react-native-app-store-submission" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-cyan-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-cyan-600 mb-2">React Native Submission</h3>
                <p class="text-sm text-gray-600">Complete guide for React Native & Expo apps: native modules, code signing, build optimization, and common pitfalls.</p>
            </a>

            <!-- Flutter -->
            <a href="/flutter-app-store-submission" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-sky-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-sky-600 mb-2">Flutter Submission</h3>
                <p class="text-sm text-gray-600">Flutter iOS deployment guide: build modes, Runner.xcworkspace setup, plugin integration, and archive uploads.</p>
            </a>

            <!-- Swift/SwiftUI -->
            <a href="/swift-swiftui-app-store-submission" class="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-orange-500 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7.078 23.55c-.473-.316-.893-.703-1.244-1.15-.383-.463-.738-.95-1.064-1.454-.766-1.12-1.365-2.345-1.78-3.636-.5-1.502-.743-2.94-.743-4.347 0-1.57.34-2.94 1.002-4.09.49-.9 1.22-1.653 2.1-2.182.85-.53 1.84-.82 2.84-.84.35 0 .73.05 1.13.15.29.08.64.21 1.07.37.55.21.85.34.95.37.32.12.59.17.8.17.16 0 .39-.05.645-.13.145-.05.42-.14.81-.31.386-.14.692-.26.935-.35.37-.11.728-.21 1.05-.26.39-.06.777-.08 1.148-.05.71.05 1.36.2 1.94.42 1.02.41 1.843 1.05 2.457 1.96-.26.16-.5.346-.725.55-.487.43-.9.94-1.23 1.505-.43.77-.65 1.64-.644 2.52.015 1.083.29 2.035.84 2.86.387.6.904 1.114 1.534 1.536.31.21.582.355.84.45-.12.375-.252.74-.405 1.1-.347.807-.76 1.58-1.25 2.31-.432.63-.772 1.1-1.03 1.41-.402.48-.79.84-1.18 1.097-.43.285-.935.436-1.452.436-.35.015-.7-.03-1.034-.127-.29-.095-.576-.202-.856-.323-.293-.134-.596-.248-.905-.34-.38-.1-.77-.148-1.164-.147-.4 0-.79.05-1.16.145-.31.088-.61.196-.907.325-.42.175-.695.29-.855.34-.324.096-.656.154-.99.175-.52 0-1.004-.15-1.486-.45zm6.854-18.46c-.68.34-1.326.484-1.973.436-.1-.646 0-1.31.27-2.037.24-.62.56-1.18 1-1.68.46-.52 1.01-.95 1.63-1.26.66-.34 1.29-.52 1.89-.55.08.68 0 1.35-.25 2.07-.228.64-.568 1.23-1 1.76-.435.52-.975.95-1.586 1.26z"/></svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-orange-600 mb-2">Swift & SwiftUI Submission</h3>
                <p class="text-sm text-gray-600">Native iOS submission guide: Xcode setup, code signing, provisioning profiles, archive and upload workflow.</p>
            </a>
        </div>
    </section>
    
    <!-- References -->
    <section id="references" class="mb-20 scroll-mt-24">
        <h2 class="text-2xl font-bold text-apple-dark mb-6 font-sans">References</h2>
        <div class="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
            <ul class="divide-y divide-gray-200">
                <li class="p-4 hover:bg-gray-100 transition-colors">
                    <a href="https://developer.apple.com/app-store/review/guidelines/" target="_blank" class="flex items-start gap-3 group">
                        <div class="mt-1 text-apple-blue">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-gray-900 group-hover:text-apple-blue">App Review Guidelines - Apple Developer</h4>
                            <p class="text-xs text-gray-600 mt-1">Official documentation on the review guidelines.</p>
                        </div>
                    </a>
                </li>
                <li class="p-4 hover:bg-gray-100 transition-colors">
                    <a href="https://developer.apple.com/design/human-interface-guidelines/" target="_blank" class="flex items-start gap-3 group">
                        <div class="mt-1 text-apple-blue">
                             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-gray-900 group-hover:text-apple-blue">Human Interface Guidelines</h4>
                            <p class="text-xs text-gray-600 mt-1">Apple's comprehensive design system for all platforms.</p>
                        </div>
                    </a>
                </li>
                <li class="p-4 hover:bg-gray-100 transition-colors">
                    <a href="https://developer.apple.com/help/app-store-connect/" target="_blank" class="flex items-start gap-3 group">
                        <div class="mt-1 text-apple-blue">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-gray-900 group-hover:text-apple-blue">App Store Connect Help</h4>
                            <p class="text-xs text-gray-600 mt-1">Manage your apps, view analytics, and test with TestFlight.</p>
                        </div>
                    </a>
                </li>
                <li class="p-4 hover:bg-gray-100 transition-colors">
                    <a href="https://developer.apple.com/programs/" target="_blank" class="flex items-start gap-3 group">
                        <div class="mt-1 text-apple-blue">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-gray-900 group-hover:text-apple-blue">Apple Developer Program</h4>
                            <p class="text-xs text-gray-600 mt-1">Everything you need to build, test, and distribute your apps.</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>

    <!-- Conclusion -->
    <section class="mb-12">
        <h2 class="text-2xl font-bold text-apple-dark mb-4 font-sans">Conclusion</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
            Passing Apple's App Store review is a rite of passage for iOS developers. It might seem daunting with all the rules and potential pitfalls, but with careful preparation and attention to detail, you can absolutely get your app approved smoothly.
        </p>
        <p class="text-gray-600 leading-relaxed mb-6">
            Remember to think like a reviewer: ensure your app is stable, content is appropriate, user experience is solid, and all App Store rules are followed from functionality to fine-print. Good luck with your submission!
        </p>
        <p class="text-gray-600 font-medium">Happy Developing!</p>
    </section>
  `

  // Update or create the main Hub article
  await prisma.article.upsert({
    where: { slug: 'app-store-guide' },
    update: {
      content,
      title: 'How to Pass the Apple App Store Review',
      description: 'Learn how to pass Apple App Store review on your first try. Avoid common rejections for crashes, IAP, and Guideline 4.2 with our 2025 checklist.',
      updatedAt: new Date(),
    },
    create: {
      slug: 'app-store-guide',
      title: 'How to Pass the App Store Review',
      description: 'Learn how to pass Apple App Store review on your first try. Avoid common rejections for crashes, IAP, and Guideline 4.2 with our 2025 checklist.',
      content,
      category: 'Guide',
      isHub: true,
      publishedAt: new Date(),
    },
  })

  console.log('Seed completed successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

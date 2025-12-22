import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const metadataArticle = {
  slug: 'app-store-metadata-best-practices',
  title: 'App Store Metadata Best Practices 2025: Optimize Your Listing',
  description: 'Complete guide to App Store metadata optimization in 2025. Learn how to write compelling app descriptions, choose the right keywords, create effective screenshots, and avoid metadata rejections.',
  category: 'submission',
  isHub: false,
  metaKeywords: [
    'app store metadata',
    'app store optimization',
    'aso tips',
    'app store keywords',
    'app description best practices',
    'app store listing',
    'app subtitle',
    'app store connect metadata',
    'ios app marketing'
  ],
  toc: {
    title: "Metadata Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#overview", label: "Overview" },
          { href: "#app-name", label: "App Name" },
          { href: "#subtitle", label: "Subtitle" },
          { href: "#keywords", label: "Keywords" }
        ]
      },
      {
        section: "Content",
        items: [
          { href: "#description", label: "Description" },
          { href: "#whats-new", label: "What's New" },
          { href: "#screenshots", label: "Screenshots" },
          { href: "#app-preview", label: "App Preview Videos" }
        ]
      },
      {
        section: "Reference",
        items: [
          { href: "#rejections", label: "Common Rejections" },
          { href: "#checklist", label: "Metadata Checklist" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">Submission</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">Updated December 2025</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">App Store Metadata Best Practices 2025</h1>
  <p class="text-xl text-gray-600 max-w-3xl">Your App Store listing is your app's first impression. Learn how to optimize every element—from app name to screenshots—to improve discoverability and conversion while staying compliant with Apple's guidelines.</p>
</header>

<!-- Quick Answer Box -->
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-10">
  <h2 class="text-lg font-semibold text-blue-900 mb-3">What Metadata Does Apple Require?</h2>
  <p class="text-gray-700 mb-4">Required App Store metadata includes: App name (30 chars), subtitle (30 chars), description (4000 chars), keywords (100 chars), category, privacy policy URL, support URL, screenshots for each device size, and age rating. Optional but recommended: promotional text, app previews, and What's New text.</p>
  <div class="flex items-center gap-2 text-sm text-blue-700">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
    <span>Misleading or inaccurate metadata is a top rejection reason</span>
  </div>
</div>

<section id="overview" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Metadata Overview</h2>

  <p class="text-gray-600 mb-6">App Store metadata serves two purposes: helping users find your app (ASO) and convincing them to download it (conversion). Here's what you can customize:</p>

  <div class="overflow-x-auto">
    <table class="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">Field</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">Limit</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">Searchable</th>
          <th class="px-4 py-3 text-left font-semibold text-gray-900">Notes</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">App Name</td>
          <td class="px-4 py-3 text-gray-600">30 characters</td>
          <td class="px-4 py-3"><span class="text-green-600 font-medium">Yes</span></td>
          <td class="px-4 py-3 text-gray-600">Most important for ASO</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Subtitle</td>
          <td class="px-4 py-3 text-gray-600">30 characters</td>
          <td class="px-4 py-3"><span class="text-green-600 font-medium">Yes</span></td>
          <td class="px-4 py-3 text-gray-600">Second most important</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Keywords</td>
          <td class="px-4 py-3 text-gray-600">100 characters</td>
          <td class="px-4 py-3"><span class="text-green-600 font-medium">Yes</span></td>
          <td class="px-4 py-3 text-gray-600">Hidden, comma-separated</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Description</td>
          <td class="px-4 py-3 text-gray-600">4000 characters</td>
          <td class="px-4 py-3"><span class="text-red-600 font-medium">No</span></td>
          <td class="px-4 py-3 text-gray-600">For conversion, not search</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">Promotional Text</td>
          <td class="px-4 py-3 text-gray-600">170 characters</td>
          <td class="px-4 py-3"><span class="text-red-600 font-medium">No</span></td>
          <td class="px-4 py-3 text-gray-600">Can update without new build</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-medium text-gray-900">What's New</td>
          <td class="px-4 py-3 text-gray-600">4000 characters</td>
          <td class="px-4 py-3"><span class="text-red-600 font-medium">No</span></td>
          <td class="px-4 py-3 text-gray-600">Required for updates</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section id="app-name" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">App Name Best Practices</h2>

  <p class="text-gray-600 mb-6">Your app name is the most important metadata field for discoverability. Apple indexes it for search, so include your most important keyword.</p>

  <div class="grid md:grid-cols-2 gap-6 mb-6">
    <div class="bg-green-50 border border-green-200 rounded-xl p-6">
      <h3 class="font-semibold text-green-900 mb-3 flex items-center gap-2">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        Good Examples
      </h3>
      <ul class="space-y-2 text-green-800 text-sm">
        <li>• <strong>Headspace: Meditation & Sleep</strong> - Brand + keywords</li>
        <li>• <strong>Notion - Notes & Projects</strong> - Brand + use case</li>
        <li>• <strong>Calm - Sleep & Meditation</strong> - Brand + category</li>
      </ul>
    </div>

    <div class="bg-red-50 border border-red-200 rounded-xl p-6">
      <h3 class="font-semibold text-red-900 mb-3 flex items-center gap-2">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
        Avoid These
      </h3>
      <ul class="space-y-2 text-red-800 text-sm">
        <li>• <strong>MyApp Pro Plus Premium</strong> - Keyword stuffing</li>
        <li>• <strong>#1 Best Photo Editor FREE</strong> - Superlatives, price claims</li>
        <li>• <strong>Photo Editor for iPhone</strong> - Using Apple trademarks</li>
      </ul>
    </div>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6">
    <h4 class="font-semibold text-amber-900 mb-2">App Name Rules</h4>
    <ul class="space-y-2 text-amber-800 text-sm">
      <li>• Don't include price (FREE, $0.99)</li>
      <li>• Don't use superlatives (#1, Best, Top)</li>
      <li>• Don't use Apple trademarks (iPhone, iPad, Apple)</li>
      <li>• Don't include generic category terms only (Calculator, Weather)</li>
      <li>• Names must be unique—Apple rejects duplicates</li>
    </ul>
  </div>
</section>

<section id="subtitle" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Subtitle Optimization</h2>

  <p class="text-gray-600 mb-6">The subtitle appears below your app name in search results. Use it to add keywords that don't fit in your app name.</p>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">Subtitle Strategy</h3>
    <ol class="space-y-3 text-gray-600">
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
        <span><strong>Complement your app name</strong> - Don't repeat words from your name</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
        <span><strong>Use your second-best keywords</strong> - Your most important keyword should be in the name</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
        <span><strong>Describe the value proposition</strong> - What does the user get?</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
        <span><strong>Keep it readable</strong> - Users see this in search results</span>
      </li>
    </ol>
  </div>

  <div class="grid md:grid-cols-2 gap-4">
    <div class="p-4 bg-gray-50 rounded-xl">
      <p class="text-sm text-gray-500 mb-1">App Name:</p>
      <p class="font-semibold text-gray-900">Strava: Run & Ride</p>
      <p class="text-sm text-gray-500 mt-2 mb-1">Subtitle:</p>
      <p class="text-gray-600">Track Your Fitness</p>
    </div>
    <div class="p-4 bg-gray-50 rounded-xl">
      <p class="text-sm text-gray-500 mb-1">App Name:</p>
      <p class="font-semibold text-gray-900">Duolingo</p>
      <p class="text-sm text-gray-500 mt-2 mb-1">Subtitle:</p>
      <p class="text-gray-600">Language Lessons</p>
    </div>
  </div>
</section>

<section id="keywords" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Keywords Field</h2>

  <p class="text-gray-600 mb-6">You have 100 characters for keywords. This field is hidden from users but indexed by Apple's search algorithm.</p>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">Keyword Optimization Tips</h3>
    <ul class="space-y-3 text-gray-600">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Use commas, no spaces after commas</strong> - Saves characters: "fitness,workout,exercise"</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Don't repeat words from name/subtitle</strong> - Already indexed</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Use singular OR plural, not both</strong> - Apple matches both automatically</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Don't use competitor names</strong> - Violates guidelines, causes rejection</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        <span><strong>Skip "app" and "free"</strong> - Low value, wastes space</span>
      </li>
    </ul>
  </div>

  <div class="bg-gray-900 rounded-xl p-6">
    <p class="text-gray-400 text-sm mb-2">Example for a meditation app (already has "Meditation" in name):</p>
    <code class="text-green-400 text-sm">relax,stress,anxiety,sleep,calm,breathing,mindfulness,focus,wellness,mental health</code>
  </div>
</section>

<section id="description" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">App Description</h2>

  <p class="text-gray-600 mb-6">The description doesn't affect search rankings, but it's crucial for conversion. Users see the first 3 lines before "More"—make them count.</p>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <h3 class="font-semibold text-gray-900">Description Structure</h3>
    </div>
    <div class="p-6">
      <div class="space-y-6">
        <div>
          <h4 class="font-medium text-gray-900 mb-2">First 3 Lines (Above the Fold)</h4>
          <p class="text-sm text-gray-600 mb-2">This is all most users see. Include:</p>
          <ul class="text-sm text-gray-600 space-y-1 ml-4">
            <li>• Clear value proposition</li>
            <li>• Who the app is for</li>
            <li>• Key benefit or feature</li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-gray-900 mb-2">Feature List</h4>
          <p class="text-sm text-gray-600">Use bullet points or emojis for scanability. Focus on benefits, not just features.</p>
        </div>
        <div>
          <h4 class="font-medium text-gray-900 mb-2">Social Proof</h4>
          <p class="text-sm text-gray-600">Awards, press mentions, user count ("Join 10M+ users").</p>
        </div>
        <div>
          <h4 class="font-medium text-gray-900 mb-2">Subscription Details (if applicable)</h4>
          <p class="text-sm text-gray-600">Required if you have auto-renewing subscriptions. Include pricing and terms.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-red-50 border border-red-200 rounded-xl p-6">
    <h4 class="font-semibold text-red-900 mb-2">Description Don'ts</h4>
    <ul class="space-y-2 text-red-800 text-sm">
      <li>• Don't mention price (can change, makes updates tedious)</li>
      <li>• Don't use "new" for features (becomes outdated)</li>
      <li>• Don't reference competitors</li>
      <li>• Don't include irrelevant keywords</li>
      <li>• Don't use ALL CAPS excessively</li>
    </ul>
  </div>
</section>

<section id="whats-new" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">What's New Section</h2>

  <p class="text-gray-600 mb-6">Required for every app update. Users see this when deciding whether to update, and it's indexed for search.</p>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-green-50 border border-green-200 rounded-xl p-6">
      <h3 class="font-semibold text-green-900 mb-3">Good Practices</h3>
      <ul class="space-y-2 text-green-800 text-sm">
        <li>• Be specific about what changed</li>
        <li>• Highlight new features first</li>
        <li>• Mention bug fixes briefly</li>
        <li>• Thank users for feedback</li>
        <li>• Keep it concise and scannable</li>
      </ul>
    </div>

    <div class="bg-red-50 border border-red-200 rounded-xl p-6">
      <h3 class="font-semibold text-red-900 mb-3">Avoid These</h3>
      <ul class="space-y-2 text-red-800 text-sm">
        <li>• "Bug fixes and improvements" only</li>
        <li>• Copy-pasting the same text every update</li>
        <li>• Overly technical jargon</li>
        <li>• "Please rate 5 stars" requests</li>
        <li>• Promotional content unrelated to update</li>
      </ul>
    </div>
  </div>
</section>

<section id="screenshots" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Screenshot Best Practices</h2>

  <p class="text-gray-600 mb-6">Screenshots are your most powerful conversion tool. Most users decide based on screenshots alone without reading the description.</p>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">Screenshot Strategy</h3>
    <ol class="space-y-4 text-gray-600">
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
        <div>
          <strong class="text-gray-900">First screenshot = Most important</strong>
          <p class="text-sm mt-1">Show your app's primary value proposition. This is the only screenshot most users see.</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
        <div>
          <strong class="text-gray-900">Use captions</strong>
          <p class="text-sm mt-1">Add text above/below the device frame explaining what users see. Focus on benefits.</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
        <div>
          <strong class="text-gray-900">Show real app UI</strong>
          <p class="text-sm mt-1">Apple rejects concept art or mockups that don't match the actual app.</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
        <div>
          <strong class="text-gray-900">Tell a story</strong>
          <p class="text-sm mt-1">Screenshots should flow logically: onboarding → core feature → advanced features → results.</p>
        </div>
      </li>
    </ol>
  </div>

  <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <p class="text-blue-800 text-sm"><strong>Pro tip:</strong> Create a "panoramic" design where screenshots connect visually when viewed in sequence. This encourages users to swipe through all of them.</p>
  </div>

  <div class="mt-6">
    <a href="/app-store-screenshot-sizes-2025" class="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
      See complete screenshot size requirements
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </a>
  </div>
</section>

<section id="app-preview" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">App Preview Videos</h2>

  <p class="text-gray-600 mb-6">Optional but highly recommended. App previews auto-play (muted) in search results and can significantly boost conversion.</p>

  <div class="bg-white border border-gray-200 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-gray-900 mb-4">App Preview Requirements</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <h4 class="font-medium text-gray-700 mb-2">Technical Specs</h4>
        <ul class="space-y-1 text-sm text-gray-600">
          <li>• 15-30 seconds long</li>
          <li>• H.264 or HEVC codec</li>
          <li>• 30fps or 60fps</li>
          <li>• Match device resolution exactly</li>
        </ul>
      </div>
      <div>
        <h4 class="font-medium text-gray-700 mb-2">Content Guidelines</h4>
        <ul class="space-y-1 text-sm text-gray-600">
          <li>• Show actual app footage</li>
          <li>• No hands/devices in frame</li>
          <li>• Must work without sound</li>
          <li>• Include captions/text overlays</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="rejections" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Common Metadata Rejections</h2>

  <p class="text-gray-600 mb-6">These metadata issues frequently cause app rejections:</p>

  <div class="space-y-4">
    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900">Guideline 2.3.7 - Accurate Metadata</h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-3">Screenshots, previews, and descriptions must accurately reflect the app.</p>
        <ul class="space-y-2 text-gray-600 text-sm">
          <li>• Screenshots showing features that don't exist</li>
          <li>• Description claiming functionality the app lacks</li>
          <li>• App preview showing different UI than actual app</li>
        </ul>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900">Guideline 2.3.10 - Irrelevant Keywords</h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-3">Keywords must be relevant to your app.</p>
        <ul class="space-y-2 text-gray-600 text-sm">
          <li>• Using competitor app names or trademarks</li>
          <li>• Celebrity names without authorization</li>
          <li>• Unrelated popular search terms</li>
        </ul>
      </div>
    </div>

    <div class="bg-white border border-red-200 rounded-xl overflow-hidden">
      <div class="bg-red-50 px-6 py-4 border-b border-red-200">
        <h3 class="font-semibold text-red-900">Guideline 1.1.6 - Misleading Claims</h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-3">No false or misleading representations.</p>
        <ul class="space-y-2 text-gray-600 text-sm">
          <li>• Fake reviews or ratings in screenshots</li>
          <li>• "#1 App" or "Best" claims without substantiation</li>
          <li>• Misleading price or subscription terms</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="checklist" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Metadata Checklist</h2>

  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold text-blue-900 mb-3">Text Content</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>App name under 30 characters</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Subtitle under 30 characters</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Keywords under 100 characters</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Description is compelling and accurate</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>No competitor names or trademarks</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-blue-900 mb-3">Visual Assets</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Screenshots match actual app UI</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>All required device sizes included</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>First screenshot shows key value</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>App preview under 30 seconds (if used)</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>1024x1024 app icon uploaded</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-blue-900 mb-3">Required URLs</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Privacy policy URL is live</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Support URL is working</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Marketing URL (optional but recommended)</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-blue-900 mb-3">Compliance</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Age rating correctly set</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Category accurately selected</span>
          </li>
          <li class="flex items-start gap-2 text-blue-800">
            <input type="checkbox" class="mt-1 rounded border-blue-300">
            <span>Subscription terms disclosed (if applicable)</span>
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
    <a href="/app-store-screenshot-sizes-2025" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">Screenshot Sizes 2025</h3>
      <p class="text-sm text-gray-600">Complete guide to all required screenshot dimensions and formats.</p>
    </a>
    <a href="/app-store-privacy-policy-requirements" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">Privacy Requirements</h3>
      <p class="text-sm text-gray-600">Privacy policy URL and nutrition label requirements.</p>
    </a>
    <a href="/app-store-review-time-2025" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-green-600 mb-2">Review Times 2025</h3>
      <p class="text-sm text-gray-600">Current wait times after submitting your optimized app.</p>
    </a>
  </div>
</section>

<!-- CTA Section -->
<section class="mb-12">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
    <div class="max-w-2xl">
      <h2 class="text-2xl font-bold mb-4">Get Your Metadata Right the First Time</h2>
      <p class="text-white/90 mb-6">Our AI review tool checks your app's metadata against Apple's guidelines before you submit, catching issues that could cause rejection.</p>
      <a href="/ai-review" class="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
        Review My Metadata
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
      <h3 class="font-semibold text-gray-900 mb-2">How often can I change my app name?</h3>
      <p class="text-gray-600">You can change your app name with any app update. However, frequent changes may confuse users and hurt brand recognition. Apple may also reject name changes that appear to be for gaming search rankings.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Does the description affect App Store search?</h3>
      <p class="text-gray-600">No. Apple only indexes app name, subtitle, and keywords field for search. The description is purely for conversion—convincing users to download after they've found your app.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Can I use the same screenshots for all device sizes?</h3>
      <p class="text-gray-600">Partially. When you upload 6.7" iPhone screenshots, App Store Connect offers to use them for smaller sizes (scaled appropriately). However, iPad screenshots must be separate if you support iPad.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">What's the difference between Description and Promotional Text?</h3>
      <p class="text-gray-600">Promotional text (170 chars) appears above the description and can be updated anytime without a new app version—great for seasonal promotions. The main description (4000 chars) requires an app update to change.</p>
    </div>
  </div>
</section>
`
};

async function main() {
  console.log('Seeding Metadata Best Practices article...');

  await prisma.article.upsert({
    where: { slug: metadataArticle.slug },
    update: {
      title: metadataArticle.title,
      description: metadataArticle.description,
      content: metadataArticle.content,
      category: metadataArticle.category,
      metaKeywords: metadataArticle.metaKeywords,
      isHub: metadataArticle.isHub,
      toc: metadataArticle.toc,
      updatedAt: new Date(),
    },
    create: metadataArticle,
  });

  console.log('✓ Metadata Best Practices article created/updated');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

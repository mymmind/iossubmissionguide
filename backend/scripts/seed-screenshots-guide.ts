import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const screenshotsArticle = {
  slug: 'app-store-screenshot-sizes-2025',
  title: 'App Store Screenshot Sizes 2025: Complete Requirements Guide',
  description: 'Complete guide to App Store screenshot sizes and requirements for 2025. All iPhone and iPad dimensions, best practices, and tips for creating compelling screenshots.',
  category: 'submission-process',
  isHub: false,
  metaKeywords: [
    'app store screenshot sizes',
    'app store screenshot dimensions',
    'ios screenshot requirements',
    'app store connect screenshots',
    'iphone screenshot size',
    'ipad screenshot size',
    'app store screenshot 2025',
    'app preview video size',
    'app store listing images'
  ],
  toc: {
    title: "Screenshots Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#requirements", label: "Screenshot Requirements" },
          { href: "#iphone-sizes", label: "iPhone Sizes" },
          { href: "#ipad-sizes", label: "iPad Sizes" },
          { href: "#app-preview", label: "App Preview Videos" },
          { href: "#best-practices", label: "Best Practices" },
          { href: "#tools", label: "Tools & Resources" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  },
  content: `
<header class="mb-12">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">Submission Process</span>
    <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">Updated 2025</span>
  </div>
  <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">App Store Screenshot Sizes 2025</h1>
  <p class="text-xl text-gray-600 max-w-3xl">Complete guide to all iPhone and iPad screenshot dimensions required for App Store Connect. Get the exact pixel sizes, format requirements, and best practices.</p>
</header>

<!-- Quick Reference Box -->
<div class="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 mb-10">
  <h2 class="text-lg font-semibold text-purple-900 mb-3">Quick Reference: Required Sizes</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="text-center p-3 bg-white rounded-lg border border-purple-100">
      <div class="text-lg font-bold text-purple-600">6.7"</div>
      <div class="text-xs text-gray-600">1290 × 2796</div>
      <div class="text-xs text-gray-500">iPhone 15 Pro Max</div>
    </div>
    <div class="text-center p-3 bg-white rounded-lg border border-purple-100">
      <div class="text-lg font-bold text-purple-600">6.5"</div>
      <div class="text-xs text-gray-600">1284 × 2778</div>
      <div class="text-xs text-gray-500">iPhone 14 Plus</div>
    </div>
    <div class="text-center p-3 bg-white rounded-lg border border-purple-100">
      <div class="text-lg font-bold text-purple-600">5.5"</div>
      <div class="text-xs text-gray-600">1242 × 2208</div>
      <div class="text-xs text-gray-500">iPhone 8 Plus</div>
    </div>
    <div class="text-center p-3 bg-white rounded-lg border border-purple-100">
      <div class="text-lg font-bold text-purple-600">12.9"</div>
      <div class="text-xs text-gray-600">2048 × 2732</div>
      <div class="text-xs text-gray-500">iPad Pro</div>
    </div>
  </div>
  <p class="text-sm text-purple-700 mt-4">Upload 6.7" screenshots and App Store Connect offers to auto-generate smaller sizes.</p>
</div>

<section id="requirements" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Screenshot Requirements</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Format Requirements</h3>
      <ul class="space-y-3 text-gray-600">
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span><strong>Format:</strong> PNG or JPEG (PNG recommended)</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span><strong>Color space:</strong> sRGB or Display P3</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span><strong>Resolution:</strong> 72 dpi minimum</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span><strong>Transparency:</strong> Not allowed</span>
        </li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Quantity Limits</h3>
      <ul class="space-y-3 text-gray-600">
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
          <span><strong>Minimum:</strong> 1 screenshot per device size</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
          <span><strong>Maximum:</strong> 10 screenshots per device size</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
          <span><strong>Recommended:</strong> 5-8 screenshots</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
          <span><strong>App Preview Videos:</strong> Up to 3 per device size</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section id="iphone-sizes" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">iPhone Screenshot Sizes</h2>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <table class="w-full">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Display Size</th>
          <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dimensions (px)</th>
          <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Devices</th>
          <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Required</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr class="bg-green-50">
          <td class="px-6 py-4 font-semibold text-gray-900">6.7" Super Retina XDR</td>
          <td class="px-6 py-4 font-mono text-sm">1290 × 2796</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPhone 15 Pro Max, 15 Plus, 14 Pro Max, 14 Plus</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Required</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">6.5" Super Retina XDR</td>
          <td class="px-6 py-4 font-mono text-sm">1284 × 2778</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPhone 14, 13 Pro Max, 12 Pro Max, 11 Pro Max, XS Max</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">6.1" Super Retina XDR</td>
          <td class="px-6 py-4 font-mono text-sm">1179 × 2556</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPhone 15 Pro, 15, 14 Pro</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">5.8" Super Retina</td>
          <td class="px-6 py-4 font-mono text-sm">1125 × 2436</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPhone X, XS, 11 Pro</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
        <tr class="bg-amber-50">
          <td class="px-6 py-4 font-semibold text-gray-900">5.5" Retina HD</td>
          <td class="px-6 py-4 font-mono text-sm">1242 × 2208</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPhone 8 Plus, 7 Plus, 6s Plus</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded">Required*</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">4.7" Retina HD</td>
          <td class="px-6 py-4 font-mono text-sm">750 × 1334</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPhone SE (3rd gen), 8, 7, 6s</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">4" Retina</td>
          <td class="px-6 py-4 font-mono text-sm">640 × 1136</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPhone SE (1st gen), 5s, 5</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <p class="text-blue-800 text-sm"><strong>Pro Tip:</strong> Upload 6.7" screenshots and App Store Connect will offer to use them for 6.5", 5.8", and 5.5" displays. You only need to create one set!</p>
  </div>
</section>

<section id="ipad-sizes" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">iPad Screenshot Sizes</h2>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <table class="w-full">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Display Size</th>
          <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dimensions (px)</th>
          <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Devices</th>
          <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Required</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr class="bg-green-50">
          <td class="px-6 py-4 font-semibold text-gray-900">12.9" Liquid Retina XDR</td>
          <td class="px-6 py-4 font-mono text-sm">2048 × 2732</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPad Pro 12.9" (all generations)</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Required*</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">11" Liquid Retina</td>
          <td class="px-6 py-4 font-mono text-sm">1668 × 2388</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPad Pro 11", iPad Air (4th+)</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">10.9" Liquid Retina</td>
          <td class="px-6 py-4 font-mono text-sm">1640 × 2360</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPad (10th gen), iPad Air (5th)</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">10.5" Retina</td>
          <td class="px-6 py-4 font-mono text-sm">1668 × 2224</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPad Pro 10.5", iPad Air (3rd)</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">9.7" Retina</td>
          <td class="px-6 py-4 font-mono text-sm">1536 × 2048</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPad (5th-9th gen), iPad Air 2</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-900">8.3" Liquid Retina</td>
          <td class="px-6 py-4 font-mono text-sm">1488 × 2266</td>
          <td class="px-6 py-4 text-sm text-gray-600">iPad mini (6th gen)</td>
          <td class="px-6 py-4"><span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Optional</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
    <p class="text-amber-800 text-sm"><strong>*Note:</strong> iPad screenshots are only required if your app supports iPad. If your app is iPhone-only, you don't need iPad screenshots.</p>
  </div>
</section>

<section id="app-preview" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">App Preview Video Requirements</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Video Specifications</h3>
      <ul class="space-y-3 text-gray-600">
        <li><strong>Format:</strong> H.264, ProRes 422 (HQ recommended)</li>
        <li><strong>Audio:</strong> AAC, 256kbps+</li>
        <li><strong>Duration:</strong> 15-30 seconds</li>
        <li><strong>Frame rate:</strong> 30fps or less</li>
        <li><strong>Resolution:</strong> Same as screenshot sizes</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Video Sizes</h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li><strong>6.7" iPhone:</strong> 1290 × 2796</li>
        <li><strong>6.5" iPhone:</strong> 1284 × 2778</li>
        <li><strong>5.5" iPhone:</strong> 1242 × 2208</li>
        <li><strong>12.9" iPad:</strong> 2048 × 2732</li>
        <li><strong>11" iPad:</strong> 1668 × 2388</li>
      </ul>
    </div>
  </div>

  <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <p class="text-blue-800 text-sm"><strong>Tip:</strong> Record app previews on a real device using QuickTime Player (File → New Movie Recording → select your iPhone). This gives you the exact resolution needed.</p>
  </div>
</section>

<section id="best-practices" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Best Practices for Screenshots</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-green-200 rounded-xl p-6">
      <h3 class="font-semibold text-green-900 mb-4 flex items-center gap-2">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        Do
      </h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Show your app's core value proposition first</li>
        <li>• Use real app content, not mockups</li>
        <li>• Add clear, concise text overlays</li>
        <li>• Highlight key features and benefits</li>
        <li>• Use consistent branding across all screenshots</li>
        <li>• Show the app in action (not just static screens)</li>
        <li>• Include social proof if you have it</li>
      </ul>
    </div>

    <div class="bg-white border border-red-200 rounded-xl p-6">
      <h3 class="font-semibold text-red-900 mb-4 flex items-center gap-2">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
        Don't
      </h3>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• Show features that don't exist in the app</li>
        <li>• Include pricing that might change</li>
        <li>• Use competitor brand names</li>
        <li>• Add excessive text that's hard to read</li>
        <li>• Show personal user data (even fake data)</li>
        <li>• Include status bar if it's not accurate</li>
        <li>• Use low-quality or blurry images</li>
      </ul>
    </div>
  </div>

  <div class="mt-6 grid md:grid-cols-3 gap-4">
    <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
      <h4 class="font-semibold text-gray-900 mb-2">First Screenshot</h4>
      <p class="text-sm text-gray-600">Most important! Show your core value. Users often only see this one in search results.</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
      <h4 class="font-semibold text-gray-900 mb-2">Localization</h4>
      <p class="text-sm text-gray-600">Create localized screenshots for your top markets. This significantly improves conversion.</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
      <h4 class="font-semibold text-gray-900 mb-2">A/B Testing</h4>
      <p class="text-sm text-gray-600">Use App Store Connect's Product Page Optimization to test different screenshot variations.</p>
    </div>
  </div>
</section>

<section id="tools" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Tools & Resources</h2>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Screenshot Design Tools</h3>
      <ul class="space-y-3">
        <li class="flex items-start gap-3">
          <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span class="text-purple-600 font-bold text-xs">F</span>
          </div>
          <div>
            <div class="font-medium text-gray-900">Figma</div>
            <div class="text-sm text-gray-600">Free, collaborative, great templates available</div>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span class="text-blue-600 font-bold text-xs">S</span>
          </div>
          <div>
            <div class="font-medium text-gray-900">Sketch</div>
            <div class="text-sm text-gray-600">Mac-only, excellent for app design</div>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span class="text-pink-600 font-bold text-xs">C</span>
          </div>
          <div>
            <div class="font-medium text-gray-900">Canva</div>
            <div class="text-sm text-gray-600">Easy to use, has App Store templates</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-4">Specialized Tools</h3>
      <ul class="space-y-3">
        <li class="flex items-start gap-3">
          <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span class="text-green-600 font-bold text-xs">A</span>
          </div>
          <div>
            <div class="font-medium text-gray-900">AppMockUp</div>
            <div class="text-sm text-gray-600">Quick screenshot generator with device frames</div>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span class="text-orange-600 font-bold text-xs">S</span>
          </div>
          <div>
            <div class="font-medium text-gray-900">Shotbot</div>
            <div class="text-sm text-gray-600">AI-powered screenshot optimization</div>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span class="text-indigo-600 font-bold text-xs">R</span>
          </div>
          <div>
            <div class="font-medium text-gray-900">RapidWeaver</div>
            <div class="text-sm text-gray-600">Screenshot automation from designs</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

<section id="faq" class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

  <div class="space-y-4">
    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Do I need to provide screenshots for every device size?</h3>
      <p class="text-gray-600">No. Upload screenshots for 6.7" iPhone (and 12.9" iPad if you support iPad), and App Store Connect will offer to use them for smaller sizes. You only need multiple sizes if you want device-specific screenshots.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Can I use device frames around my screenshots?</h3>
      <p class="text-gray-600">Yes, but it's optional. Device frames can look professional, but many successful apps use full-bleed screenshots without frames. What matters most is clearly showing your app's value.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">What happens if my screenshots don't match the app?</h3>
      <p class="text-gray-600">Apple may reject your app under Guideline 2.3 (Accurate Metadata). Your screenshots must reflect the actual app experience. Showing features that don't exist is grounds for rejection.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Can I change screenshots after my app is live?</h3>
      <p class="text-gray-600">Yes! You can update screenshots anytime without submitting a new binary. Go to App Store Connect → Your App → App Store tab → scroll to Screenshots, make changes, and save.</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-6">
      <h3 class="font-semibold text-gray-900 mb-2">Portrait or landscape screenshots?</h3>
      <p class="text-gray-600">Most apps use portrait (vertical) screenshots. Use landscape only if your app is primarily used in landscape mode (like games or video apps). You can't mix orientations for the same device size.</p>
    </div>
  </div>
</section>

<!-- Related Guides Section -->
<section class="mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
  <div class="grid md:grid-cols-3 gap-4">
    <a href="/app-store-metadata-best-practices" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">Metadata Best Practices</h3>
      <p class="text-sm text-gray-600">Optimize your app name, description, and keywords alongside screenshots.</p>
    </a>
    <a href="/guideline-4-2-minimum-functionality" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">Guideline 4.2: Design</h3>
      <p class="text-sm text-gray-600">Ensure your app meets Apple's design and functionality standards.</p>
    </a>
    <a href="/app-store-review-time-2025" class="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all">
      <h3 class="font-semibold text-gray-900 group-hover:text-green-600 mb-2">Review Times 2025</h3>
      <p class="text-sm text-gray-600">Current wait times and what to expect after submitting.</p>
    </a>
  </div>
</section>

<!-- CTA Section -->
<section class="mb-12">
  <div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
    <div class="max-w-2xl">
      <h2 class="text-2xl font-bold mb-4">Ready to Submit Your App?</h2>
      <p class="text-white/90 mb-6">Screenshots are just one part of the puzzle. Our AI review tool checks your entire submission against App Store guidelines before you submit.</p>
      <a href="/ai-review" class="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
        Check Your App First
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>
`
};

async function main() {
  console.log('Seeding Screenshots Guide article...');

  await prisma.article.upsert({
    where: { slug: screenshotsArticle.slug },
    update: {
      title: screenshotsArticle.title,
      description: screenshotsArticle.description,
      content: screenshotsArticle.content,
      category: screenshotsArticle.category,
      metaKeywords: screenshotsArticle.metaKeywords,
      isHub: screenshotsArticle.isHub,
      toc: screenshotsArticle.toc,
      updatedAt: new Date(),
    },
    create: screenshotsArticle,
  });

  console.log('✓ Screenshots Guide article created/updated');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

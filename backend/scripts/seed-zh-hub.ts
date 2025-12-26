import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Chinese Hub article...')

  const content = `
    <!-- Hero Section -->
    <section id="intro" class="mb-16 max-w-3xl">
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-apple-dark dark:text-white font-sans">如何通过 Apple App Store 审核流程（2025 指南）</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Apple 维护着严格的应用审核流程，以确保 App Store 上的每个应用都符合高质量、安全性和合规性标准。在任何 iOS 应用发布之前，它必须通过 Apple 的审核，检查是否遵守 <strong>App Store 审核指南</strong>。
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40 rounded-2xl p-6">
            <h3 class="text-blue-900 dark:text-blue-300 font-semibold mb-2">为什么这很重要</h3>
            <p class="text-blue-800/80 dark:text-blue-400 text-sm leading-relaxed">
                被拒绝的应用可能会延迟您的发布并浪费宝贵的时间。通过了解 Apple 的审核要点并相应地准备您的应用，您可以避免"拒绝循环"，首次提交就获得批准。使用以下最佳实践，自信地发布您的 iOS 应用。
            </p>
        </div>
    </section>

    <hr class="border-gray-100 dark:border-gray-800 mb-16">

    <!-- Pre-Submission Checklist -->
    <section id="pre-submission" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark dark:text-white font-sans">提交前检查清单</h2>
        </div>
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">在点击"提交审核"之前，请检查此清单以发现可能导致立即被拒绝的问题。</p>

        <div class="grid gap-6 md:grid-cols-2">
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">1. 测试崩溃和错误</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">在真实设备和模拟器上进行严格测试。在 Apple 审核期间崩溃的应用将被直接拒绝。使用测试用例覆盖核心功能、边缘情况和低网络条件。</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">2. 完成所有元数据</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">确保应用名称、描述、类别、关键词、截图和隐私政策 URL 准确无误。误导性元数据（声称您没有的功能）会导致拒绝。</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">3. 更新联系信息</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">确保 App Store Connect 中的开发者联系信息是最新的。如果 Apple 需要联系您进行澄清，过时的信息可能会延迟您的审核。</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">4. 提供演示账户</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">如果您的应用需要登录，请在"App 审核备注"中提供功能完整的演示账户。如果需要特定硬件（如蓝牙配件），请提供视频演示。</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">5. 后端服务</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">在审核期间保持服务器在线并可测试。在干净的设备上使用"全新安装"测试您的应用，以模拟首次用户访问您的后端。</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">6. 审核备注和合规性</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">使用备注解释隐藏功能或特殊配置。验证您遵循人机界面指南以及 Apple Pay 或 HealthKit 等框架的技术规则。</p>
            </div>
        </div>
    </section>

    <!-- 1. Safety -->
    <section id="safety" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">重点关注领域 1</span>
        <h2 class="text-3xl font-bold text-apple-dark dark:text-white mb-6 font-sans">安全性</h2>
        <div class="prose prose-gray dark:prose-invert max-w-3xl text-gray-600 dark:text-gray-400">
            <p>用户安全和适当的内容是首要任务。指南涵盖内容、数据处理和设备风险。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">不当内容</h3>
            <p>应用不得包含令人反感、令人不安或有害的内容。这包括色情、图形暴力、仇恨言论、非法药物引用或诽谤。内容必须适合您的目标年龄评级。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">用户生成内容 (UGC) 要求</h3>
            <p>如果您的应用允许用户发布内容（评论、照片、个人资料），您<strong>必须</strong>包含：</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li>过滤不当内容的方法（脏话过滤器、图像审核）。</li>
                <li>用户举报滥用内容的机制。</li>
                <li>屏蔽滥用用户的功能。</li>
                <li>应用内联系信息，以便用户联系开发者。</li>
            </ul>
        </div>
    </section>

    <!-- 2. Performance -->
    <section id="performance" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">重点关注领域 2</span>
        <h2 class="text-3xl font-bold text-apple-dark dark:text-white mb-6 font-sans">性能</h2>
        <div class="prose prose-gray dark:prose-invert max-w-3xl text-gray-600 dark:text-gray-400">
            <p>应用必须稳定、快速响应且功能完整。常见的性能相关拒绝原因：</p>

            <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-800/40 my-4">
                <h4 class="text-red-900 dark:text-red-300 font-semibold mb-2">准则 2.1：应用完整性</h4>
                <p class="text-red-800/80 dark:text-red-400 text-sm">崩溃、错误或空白屏幕 = 立即拒绝。Apple 对 Alpha、Beta 或演示版本零容忍。在提交之前修复所有已知问题。</p>
            </div>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">技术规则</h3>
            <p>遵循 Apple 关于 API 使用、后台执行和资源消耗的规则。确保您没有使用私有 API 或覆盖系统 UI 元素。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">最低功能要求</h3>
            <p>您的应用必须提供超越简单网站所能提供的最低功能价值。仅仅是网站的简单包装版本可能会被拒绝。添加原生功能来证明独立应用的合理性。</p>
        </div>
    </section>

    <!-- 3. Business -->
    <section id="business" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">重点关注领域 3</span>
        <h2 class="text-3xl font-bold text-apple-dark dark:text-white mb-6 font-sans">商业</h2>
        <div class="prose prose-gray dark:prose-invert max-w-3xl text-gray-600 dark:text-gray-400">
            <p>Apple 对货币化有严格的规则，特别是应用内购买和订阅。</p>

            <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-800/40 my-4">
                <h4 class="text-amber-900 dark:text-amber-300 font-semibold mb-2">准则 3.1：应用内购买</h4>
                <p class="text-amber-800/80 dark:text-amber-400 text-sm">在应用内解锁的数字内容/服务<strong>必须</strong>使用 Apple 的应用内购买系统。试图绕过此规则（链接到外部网站进行支付）将导致拒绝。</p>
            </div>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">订阅透明度</h3>
            <p>如果您使用订阅模式，清楚地解释用户获得的内容、成本以及订阅期限。使取消订阅变得容易——误导性的订阅条款可能导致应用被移除。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">跨平台支付</h3>
            <p>如果用户在 Android 或 Web 上购买内容，您可以在 iOS 上解锁该内容——但您不能在应用内宣传替代支付方式或引导用户到外部购买链接。</p>
        </div>
    </section>

    <!-- 4. Design -->
    <section id="design" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">重点关注领域 4</span>
        <h2 class="text-3xl font-bold text-apple-dark dark:text-white mb-6 font-sans">设计</h2>
        <div class="prose prose-gray dark:prose-invert max-w-3xl text-gray-600 dark:text-gray-400">
            <p>Apple 重视用户体验。遵循<strong>人机界面指南 (HIG)</strong>以满足设计期望。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">UI 一致性</h3>
            <p>使用与 iOS 设计语言相匹配的标准 UIKit/SwiftUI 组件。避免使不熟悉的导航模式使用户困惑。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">复制其他应用</h3>
            <p>不要模仿其他流行应用的 UI 或功能过于接近。应用必须具有独特性；一般的克隆或垃圾应用会被拒绝。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">硬件兼容性</h3>
            <p>您的应用应该在所有支持的设备尺寸上都能良好运行。测试各种屏幕尺寸：iPhone SE、iPhone 15 Pro Max、不同 iPad 等。</p>
        </div>
    </section>

    <!-- 5. Legal -->
    <section id="legal" class="mb-20 scroll-mt-24">
        <span class="text-apple-blue font-bold tracking-wider text-xs uppercase mb-2 block">重点关注领域 5</span>
        <h2 class="text-3xl font-bold text-apple-dark dark:text-white mb-6 font-sans">法律</h2>
        <div class="prose prose-gray dark:prose-invert max-w-3xl text-gray-600 dark:text-gray-400">
            <p>确保遵守法律——这些问题可能导致严重后果，不仅仅是拒绝。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">隐私政策</h3>
            <p>每个应用都需要一个<strong>可访问的隐私政策</strong>——链接必须在 App Store 列表中可用。如果您收集任何用户数据（包括匿名分析），您必须披露这一点。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">App 跟踪透明度 (ATT)</h3>
            <p>如果您跟踪用户（用于广告或分析目的跨应用/网站），您必须实现 ATT 提示。不这样做是一个常见的拒绝原因。</p>

            <h3 class="text-gray-900 dark:text-white font-semibold text-lg mt-6 mb-2">数据收集合规性</h3>
            <p>遵循 GDPR、CCPA 等。向用户提供删除其数据的方法，并诚实地说明收集了什么以及原因。</p>
        </div>
    </section>

    <!-- Store Listing -->
    <section id="listing" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-green-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark dark:text-white font-sans">商店列表最佳实践</h2>
        </div>
        <div class="prose prose-gray dark:prose-invert max-w-3xl text-gray-600 dark:text-gray-400">
            <p>您的应用商店列表会影响转化率和审核结果。关键提示：</p>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>截图应该是真实的</strong> — 展示真实的应用界面，而不是营销图形。</li>
                <li><strong>应用名称要准确</strong> — 不要在名称中堆砌关键词或发表虚假声明。</li>
                <li><strong>评级准确性</strong> — 选择适当的年龄评级。如果您低估了内容成熟度，Apple 可能会更改它或拒绝您的应用。</li>
                <li><strong>描述要诚实</strong> — 只宣传实际存在于应用中的功能。</li>
            </ul>
        </div>
    </section>

    <!-- Review Process -->
    <section id="process" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-purple-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark dark:text-white font-sans">审核流程</h2>
        </div>
        <div class="prose prose-gray dark:prose-invert max-w-3xl text-gray-600 dark:text-gray-400">
            <p>提交后，Apple 的审核流程如下：</p>
            <ol class="list-decimal pl-5 space-y-2">
                <li><strong>等待审核</strong> — 您的应用进入队列。大多数应用在 24-48 小时内开始审核。</li>
                <li><strong>进行中</strong> — Apple 人工审核员（不仅仅是自动化工具）会测试您的应用。</li>
                <li><strong>批准或拒绝</strong> — 如果批准，您可以选择立即发布或安排发布日期。如果拒绝，您将收到说明原因的理由。</li>
            </ol>
            <p class="mt-4">如果被拒绝，仔细阅读反馈，解决问题，然后重新提交。如果您认为拒绝是错误的，可以通过 App Store Connect 的解决中心提出申诉。</p>
        </div>
    </section>

    <!-- Common Rejections -->
    <section id="rejection" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-red-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark dark:text-white font-sans">常见拒绝原因</h2>
        </div>
        <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-800/40">
                <h3 class="font-semibold text-red-900 dark:text-red-300 mb-2">崩溃和性能问题</h3>
                <p class="text-sm text-red-800/80 dark:text-red-400">在审核期间崩溃、冻结或表现异常的应用会被直接拒绝。</p>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-800/40">
                <h3 class="font-semibold text-red-900 dark:text-red-300 mb-2">元数据问题</h3>
                <p class="text-sm text-red-800/80 dark:text-red-400">误导性截图、不完整的描述、缺少隐私政策 URL。</p>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-800/40">
                <h3 class="font-semibold text-red-900 dark:text-red-300 mb-2">应用内购买违规</h3>
                <p class="text-sm text-red-800/80 dark:text-red-400">对数字商品使用外部支付或未正确实现 StoreKit。</p>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-800/40">
                <h3 class="font-semibold text-red-900 dark:text-red-300 mb-2">隐私违规</h3>
                <p class="text-sm text-red-800/80 dark:text-red-400">跟踪而没有 ATT 许可，或数据收集实践与隐私标签不匹配。</p>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-800/40">
                <h3 class="font-semibold text-red-900 dark:text-red-300 mb-2">最低功能要求</h3>
                <p class="text-sm text-red-800/80 dark:text-red-400">功能过于有限或只是网站包装的应用。</p>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-800/40">
                <h3 class="font-semibold text-red-900 dark:text-red-300 mb-2">设计指南违规</h3>
                <p class="text-sm text-red-800/80 dark:text-red-400">不遵循 HIG，使用非标准 UI，或复制其他应用的设计。</p>
            </div>
        </div>
    </section>

    <!-- Deep Dives -->
    <section id="deep-dives" class="mb-20 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark dark:text-white font-sans">深度指南</h2>
        </div>
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">深入了解特定主题，获取关于 App Store 提交各个方面的详细指导。</p>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a href="/zh/rejection-guide" class="block p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-apple-blue dark:hover:border-apple-blue transition-colors group">
                <h3 class="font-bold text-apple-dark dark:text-white group-hover:text-apple-blue mb-2">常见拒绝原因</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">了解最常见的拒绝原因以及如何避免它们。</p>
            </a>
            <a href="/zh/guideline-2-1-app-crashes" class="block p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-apple-blue dark:hover:border-apple-blue transition-colors group">
                <h3 class="font-bold text-apple-dark dark:text-white group-hover:text-apple-blue mb-2">准则 2.1：应用崩溃</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">修复导致拒绝的崩溃和性能问题。</p>
            </a>
            <a href="/zh/guideline-3-1-in-app-purchase" class="block p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-apple-blue dark:hover:border-apple-blue transition-colors group">
                <h3 class="font-bold text-apple-dark dark:text-white group-hover:text-apple-blue mb-2">准则 3.1：应用内购买</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">正确实现 StoreKit 和应用内购买。</p>
            </a>
            <a href="/zh/guideline-4-2-minimum-functionality" class="block p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-apple-blue dark:hover:border-apple-blue transition-colors group">
                <h3 class="font-bold text-apple-dark dark:text-white group-hover:text-apple-blue mb-2">准则 4.2：最低功能</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">添加足够的价值以通过功能要求。</p>
            </a>
            <a href="/zh/app-store-privacy-policy-requirements" class="block p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-apple-blue dark:hover:border-apple-blue transition-colors group">
                <h3 class="font-bold text-apple-dark dark:text-white group-hover:text-apple-blue mb-2">隐私政策要求</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">创建符合 Apple 要求的隐私政策。</p>
            </a>
            <a href="/zh/app-store-review-time-2025" class="block p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-apple-blue dark:hover:border-apple-blue transition-colors group">
                <h3 class="font-bold text-apple-dark dark:text-white group-hover:text-apple-blue mb-2">审核时间 2025</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">了解当前审核时间和如何加快流程。</p>
            </a>
        </div>
    </section>

    <!-- References -->
    <section id="references" class="mb-10 scroll-mt-24">
        <div class="flex items-center gap-5 mb-10">
            <div class="w-14 h-14 rounded-2xl bg-gray-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-gray-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
            </div>
            <h2 class="text-3xl font-bold text-apple-dark dark:text-white font-sans">参考资料</h2>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <ul class="space-y-3">
                <li>
                    <a href="https://developer.apple.com/app-store/review/guidelines/" target="_blank" rel="noopener noreferrer" class="text-apple-blue hover:underline font-medium">App Store 审核指南（官方）</a>
                    <p class="text-sm text-gray-600 dark:text-gray-400">来自 Apple 的完整官方指南。</p>
                </li>
                <li>
                    <a href="https://developer.apple.com/design/human-interface-guidelines/" target="_blank" rel="noopener noreferrer" class="text-apple-blue hover:underline font-medium">人机界面指南</a>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Apple 的设计标准和最佳实践。</p>
                </li>
                <li>
                    <a href="https://developer.apple.com/app-store-connect/" target="_blank" rel="noopener noreferrer" class="text-apple-blue hover:underline font-medium">App Store Connect</a>
                    <p class="text-sm text-gray-600 dark:text-gray-400">管理您的应用、测试版本和提交。</p>
                </li>
            </ul>
        </div>
    </section>
  `

  const toc = {
    title: 'iOS 提交指南',
    sections: [
      {
        section: null,
        items: [
          { href: '/zh/#intro', label: '简介' },
          { href: '/zh/#pre-submission', label: '提交前清单' }
        ]
      },
      {
        section: '重点关注领域',
        items: [
          { href: '/zh/#safety', label: '1. 安全性' },
          { href: '/zh/#performance', label: '2. 性能' },
          { href: '/zh/#business', label: '3. 商业' },
          { href: '/zh/#design', label: '4. 设计' },
          { href: '/zh/#legal', label: '5. 法律' }
        ]
      },
      {
        section: '提交流程',
        items: [
          { href: '/zh/#listing', label: '商店列表' },
          { href: '/zh/#process', label: '审核流程' },
          { href: '/zh/#rejection', label: '常见拒绝' }
        ]
      },
      {
        section: null,
        items: [
          { href: '/zh/#deep-dives', label: '深度指南' },
          { href: '/zh/#references', label: '参考资料' }
        ]
      }
    ]
  }

  await prisma.article.upsert({
    where: { slug_language: { slug: 'app-store-guide', language: 'zh' } },
    update: {
      title: '如何通过 Apple App Store 审核流程（2025 指南）',
      description: '完整的 iOS 应用提交和 App Store 审核通过指南。涵盖安全性、性能、商业、设计和法律要求。',
      content,
      category: '指南',
      metaKeywords: ['App Store 审核', 'iOS 提交', 'Apple 指南', '应用拒绝', '应用审核'],
      isHub: true,
      toc
    },
    create: {
      slug: 'app-store-guide',
      language: 'zh',
      title: '如何通过 Apple App Store 审核流程（2025 指南）',
      description: '完整的 iOS 应用提交和 App Store 审核通过指南。涵盖安全性、性能、商业、设计和法律要求。',
      content,
      category: '指南',
      metaKeywords: ['App Store 审核', 'iOS 提交', 'Apple 指南', '应用拒绝', '应用审核'],
      isHub: true,
      toc
    }
  })

  console.log('Chinese Hub article seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const receiptSha256Article = {
  slug: 'app-store-receipt-validation-sha256-migration',
  title: 'App Store Receipt Validation: SHA-256 Migration Guide (Deadline January 2025)',
  description: 'Apple is deprecating verifyReceipt. Learn how to migrate to SHA-256 receipt validation before the January 24, 2025 deadline to avoid app breakage.',
  content: `
<div class="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-2xl">
  <div class="flex items-start gap-3">
    <div class="w-8 h-8 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    </div>
    <div>
      <h3 class="font-bold text-red-800 dark:text-red-300 mb-1">Urgent Deadline: January 24, 2025</h3>
      <p class="text-red-700 dark:text-red-400 text-sm mb-0">Apple's verifyReceipt endpoint changes take effect on this date. If your app still relies on the old validation method, in-app purchases could break for users.</p>
    </div>
  </div>
</div>

<p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
If you've ever validated App Store receipts, you probably have code calling Apple's <code>verifyReceipt</code> endpoint. That endpoint is going away. Here's what's happening and exactly how to fix it before your IAP breaks.
</p>

<div class="bg-apple-light dark:bg-gray-800 rounded-2xl p-6 mb-12">
  <h3 class="font-bold text-apple-dark dark:text-white mb-3 flex items-center gap-2">
    <span class="text-xl">📋</span> TL;DR - What You Need to Know
  </h3>
  <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-0">
    <li>• Apple deprecated <code>verifyReceipt</code> - stop sending receipts to Apple's servers</li>
    <li>• New method: Validate receipts locally using SHA-256 hash comparison</li>
    <li>• Server-side: Use App Store Server API for subscription status</li>
    <li>• StoreKit 2 handles most of this automatically on iOS 15+</li>
    <li>• January 24, 2025 is when verifyReceipt behavior changes</li>
  </ul>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">Why Apple Made This Change</h2>

<p>
Let me explain what happened, because the announcement was buried in WWDC sessions and technical notes that most developers missed.
</p>

<p>
For years, the "correct" way to validate receipts was:
</p>

<ol class="list-decimal pl-6 mb-6 space-y-2">
  <li>App receives receipt from StoreKit</li>
  <li>App sends receipt to your server</li>
  <li>Your server sends receipt to Apple's <code>verifyReceipt</code> endpoint</li>
  <li>Apple returns validation result</li>
</ol>

<p>
This worked, but it had problems. The endpoint was slow (sometimes taking seconds to respond), it was a single point of failure, and it created unnecessary server-to-server traffic for what should be a simple cryptographic verification.
</p>

<p>
Apple's new approach is more elegant: receipts are signed using Apple's certificate chain. You can validate them locally by checking the signature, without calling any Apple servers. For subscription status and purchase history, there's a separate App Store Server API.
</p>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">What Breaks If You Don't Migrate</h2>

<p>
Here's the timeline:
</p>

<div class="overflow-x-auto mb-8">
  <table class="w-full border-collapse">
    <thead>
      <tr class="bg-gray-100 dark:bg-gray-800">
        <th class="px-4 py-3 text-left text-sm font-bold text-apple-dark dark:text-white border border-gray-200 dark:border-gray-700">Date</th>
        <th class="px-4 py-3 text-left text-sm font-bold text-apple-dark dark:text-white border border-gray-200 dark:border-gray-700">What Happens</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono text-sm">Now</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">verifyReceipt still works but is deprecated</td>
      </tr>
      <tr class="bg-gray-50 dark:bg-gray-800/50">
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono text-sm">Jan 24, 2025</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">verifyReceipt stops returning receipt data for new purchases</td>
      </tr>
      <tr>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono text-sm">Mid 2025</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">verifyReceipt endpoint fully retired</td>
      </tr>
    </tbody>
  </table>
</div>

<p>
If your app relies on verifyReceipt after January 24, 2025:
</p>

<ul class="list-disc pl-6 mb-8 space-y-2">
  <li>New purchases won't validate correctly</li>
  <li>Subscription renewals might not be recognized</li>
  <li>Users who bought premium features see them locked</li>
  <li>Support tickets will flood in</li>
</ul>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">The Migration Path</h2>

<p>
Your migration depends on your current setup. Let me break this down by scenario.
</p>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-12 mb-4">Scenario 1: Using StoreKit 2 (iOS 15+)</h3>

<p>
Good news - you're mostly set. StoreKit 2 uses JWS (JSON Web Signature) transactions that are automatically validated. The receipt file at <code>Bundle.main.appStoreReceiptURL</code> is deprecated in StoreKit 2.
</p>

<p>
What you should be doing:
</p>

<pre class="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-6"><code class="language-swift">// StoreKit 2 - transactions are self-validating
for await result in Transaction.currentEntitlements {
    switch result {
    case .verified(let transaction):
        // Transaction is already verified by StoreKit 2
        // Grant access based on transaction.productID
        await updateEntitlements(for: transaction)
    case .unverified(let transaction, let error):
        // Handle verification failure
        Logger.iap.error("Unverified transaction: \\(error)")
    }
}
</code></pre>

<p>
For server-side validation with StoreKit 2, send the <code>originalTransactionId</code> and <code>signedTransactionInfo</code> to your server, then use the App Store Server API to get full purchase history.
</p>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-12 mb-4">Scenario 2: Still on StoreKit 1 (Original API)</h3>

<p>
This is where most developers need to make changes. You have two options:
</p>

<h4 class="text-xl font-bold text-apple-dark dark:text-white mt-8 mb-4">Option A: Migrate to StoreKit 2</h4>

<p>
This is the recommended long-term solution. StoreKit 2 has better APIs and automatic validation. The catch is it requires iOS 15+, so you might need to drop support for older devices.
</p>

<h4 class="text-xl font-bold text-apple-dark dark:text-white mt-8 mb-4">Option B: Local Receipt Validation</h4>

<p>
If you need to support iOS 14 and earlier, implement local receipt validation. This involves:
</p>

<ol class="list-decimal pl-6 mb-6 space-y-2">
  <li>Read the receipt from disk</li>
  <li>Parse the PKCS#7 container</li>
  <li>Verify the signature against Apple's root certificate</li>
  <li>Extract and validate the receipt fields</li>
</ol>

<p>
Here's a simplified overview (the full implementation requires OpenSSL or similar):
</p>

<pre class="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-6"><code class="language-swift">import Foundation
import CryptoKit

class LocalReceiptValidator {

    // Apple's root certificate (bundled in your app)
    private let appleRootCertificate: SecCertificate

    func validateReceipt() throws -> Receipt {
        // 1. Get receipt data
        guard let receiptURL = Bundle.main.appStoreReceiptURL,
              let receiptData = try? Data(contentsOf: receiptURL) else {
            throw ReceiptError.notFound
        }

        // 2. Verify PKCS#7 signature
        // This requires OpenSSL or a similar crypto library
        let isSignatureValid = try verifyPKCS7Signature(
            data: receiptData,
            rootCertificate: appleRootCertificate
        )

        guard isSignatureValid else {
            throw ReceiptError.invalidSignature
        }

        // 3. Extract and parse receipt payload
        let receipt = try parseReceiptPayload(receiptData)

        // 4. Verify bundle ID matches your app
        guard receipt.bundleId == Bundle.main.bundleIdentifier else {
            throw ReceiptError.bundleMismatch
        }

        // 5. Verify receipt hash (SHA-256)
        try verifyReceiptHash(receipt: receipt)

        return receipt
    }

    private func verifyReceiptHash(receipt: Receipt) throws {
        // Get device identifier
        let deviceId = getDeviceIdentifier()

        // Compute expected hash
        var dataToHash = Data()
        dataToHash.append(deviceId)
        dataToHash.append(receipt.opaqueValue)
        dataToHash.append(receipt.bundleIdData)

        let computedHash = SHA256.hash(data: dataToHash)

        guard computedHash == receipt.sha256Hash else {
            throw ReceiptError.hashMismatch
        }
    }
}
</code></pre>

<div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl p-6 mb-8">
  <h4 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Important: SHA-256 Hash Verification</h4>
  <p class="text-amber-700 dark:text-amber-400 text-sm mb-0">
    The receipt contains a SHA-256 hash computed from the device GUID, opaque value, and bundle ID. You must verify this hash matches to ensure the receipt belongs to this device and wasn't copied from another device.
  </p>
</div>

<h3 class="text-2xl font-bold text-apple-dark dark:text-white mt-12 mb-4">Scenario 3: Server-Side Subscription Management</h3>

<p>
For subscriptions, you should use the App Store Server API instead of verifyReceipt:
</p>

<pre class="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-6"><code class="language-javascript">// Node.js example using App Store Server API
import { AppStoreServerAPIClient, Environment } from '@apple/app-store-server-library';

const client = new AppStoreServerAPIClient(
    signingKey,          // Your private key (.p8 file)
    keyId,               // Key ID from App Store Connect
    issuerId,            // Issuer ID from App Store Connect
    bundleId,
    Environment.PRODUCTION
);

async function getSubscriptionStatus(originalTransactionId: string) {
    try {
        const response = await client.getAllSubscriptionStatuses(originalTransactionId);

        for (const subscription of response.data) {
            const status = subscription.lastTransactions[0]?.status;
            // 1 = Active, 2 = Expired, 3 = Billing Retry, 4 = Grace Period, 5 = Revoked
            console.log(\`Subscription status: \${status}\`);
        }

        return response;
    } catch (error) {
        console.error('Failed to get subscription status:', error);
        throw error;
    }
}
</code></pre>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">Step-by-Step Migration Checklist</h2>

<div class="space-y-4 mb-8">
  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Audit your current implementation</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Search your codebase for "verifyReceipt", "buy.itunes.apple.com", and "sandbox.itunes.apple.com"</p>
    </div>
  </div>

  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Decide your minimum iOS version</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">iOS 15+ allows StoreKit 2 (easier). iOS 14 and below require local validation (harder).</p>
    </div>
  </div>

  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Set up App Store Server API (for subscriptions)</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Generate API keys in App Store Connect under Users and Access → Keys → In-App Purchase</p>
    </div>
  </div>

  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Implement server-side notifications (optional but recommended)</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">App Store Server Notifications V2 push subscription events to your server in real-time</p>
    </div>
  </div>

  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Test in sandbox environment</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Create sandbox testers in App Store Connect and test all purchase flows</p>
    </div>
  </div>

  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Deploy server changes first</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Your server should support both old and new validation during transition</p>
    </div>
  </div>

  <div class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
    <div class="w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">7</div>
    <div>
      <h4 class="font-bold text-apple-dark dark:text-white">Submit app update</h4>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-0">Push the update well before January 24, 2025 to account for review time</p>
    </div>
  </div>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">Libraries That Help</h2>

<p>
You don't have to implement receipt validation from scratch. Here are battle-tested options:
</p>

<div class="overflow-x-auto mb-8">
  <table class="w-full border-collapse">
    <thead>
      <tr class="bg-gray-100 dark:bg-gray-800">
        <th class="px-4 py-3 text-left text-sm font-bold text-apple-dark dark:text-white border border-gray-200 dark:border-gray-700">Library</th>
        <th class="px-4 py-3 text-left text-sm font-bold text-apple-dark dark:text-white border border-gray-200 dark:border-gray-700">Platform</th>
        <th class="px-4 py-3 text-left text-sm font-bold text-apple-dark dark:text-white border border-gray-200 dark:border-gray-700">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono text-sm">RevenueCat</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">iOS, Android, Web</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Full-service subscription management. Handles migration automatically.</td>
      </tr>
      <tr class="bg-gray-50 dark:bg-gray-800/50">
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono text-sm">app-store-server-library</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Node.js, Python, Java, Swift</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Apple's official libraries for App Store Server API</td>
      </tr>
      <tr>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono text-sm">TPInAppReceipt</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">iOS (Swift)</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Pure Swift local receipt validation, no OpenSSL dependency</td>
      </tr>
      <tr class="bg-gray-50 dark:bg-gray-800/50">
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono text-sm">Qonversion</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">iOS, Android</td>
        <td class="px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Alternative to RevenueCat with analytics focus</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">Common Mistakes to Avoid</h2>

<div class="space-y-4 mb-8">
  <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl">
    <h4 class="font-bold text-red-800 dark:text-red-300 mb-2">❌ Hardcoding Apple's root certificate</h4>
    <p class="text-red-700 dark:text-red-400 text-sm mb-0">Apple's certificate has an expiration date. Bundle it in a way that allows updates, or fetch from a known URL during validation.</p>
  </div>

  <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl">
    <h4 class="font-bold text-red-800 dark:text-red-300 mb-2">❌ Trusting originalTransactionId from the client</h4>
    <p class="text-red-700 dark:text-red-400 text-sm mb-0">Always verify on your server. Clients can send any transaction ID. Use signed data or the App Store Server API to confirm.</p>
  </div>

  <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl">
    <h4 class="font-bold text-red-800 dark:text-red-300 mb-2">❌ Not handling the sandbox/production split</h4>
    <p class="text-red-700 dark:text-red-400 text-sm mb-0">App Store Server API has separate URLs for sandbox and production. Auto-detect based on receipt environment.</p>
  </div>

  <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl">
    <h4 class="font-bold text-red-800 dark:text-red-300 mb-2">❌ Waiting until the deadline</h4>
    <p class="text-red-700 dark:text-red-400 text-sm mb-0">App Review takes time. Submit your update at least 2 weeks before January 24, 2025.</p>
  </div>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">Testing Your Migration</h2>

<p>
Before submitting, verify these scenarios work:
</p>

<ul class="list-disc pl-6 mb-8 space-y-2">
  <li><strong>New purchase:</strong> User buys a product for the first time</li>
  <li><strong>Restore purchases:</strong> User reinstalls app and restores</li>
  <li><strong>Subscription renewal:</strong> Sandbox subscriptions renew every few minutes</li>
  <li><strong>Subscription expiration:</strong> Let a sandbox subscription lapse</li>
  <li><strong>Upgrade/downgrade:</strong> User changes subscription tier</li>
  <li><strong>Refund:</strong> Simulate via App Store Connect sandbox</li>
  <li><strong>Family sharing:</strong> If enabled for your products</li>
</ul>

<div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-2xl p-6 mb-8">
  <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">Pro Tip: Test with StoreKit Configuration Files</h4>
  <p class="text-green-700 dark:text-green-400 text-sm mb-0">
    Xcode 14+ lets you create StoreKit configuration files for local testing without needing App Store Connect. This speeds up development significantly. Go to File → New → File → StoreKit Configuration File.
  </p>
</div>

<h2 class="text-3xl font-bold text-apple-dark dark:text-white mt-16 mb-6">FAQ</h2>

<div class="space-y-6 mb-8">
  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">What if I'm using a third-party SDK like RevenueCat?</h4>
    <p class="text-gray-600 dark:text-gray-400">Update to their latest SDK version. They've already migrated away from verifyReceipt. Check their documentation for any additional steps.</p>
  </div>

  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Do I need to migrate if I only have consumable IAPs (no subscriptions)?</h4>
    <p class="text-gray-600 dark:text-gray-400">Yes. The verifyReceipt deprecation affects all receipt validation, not just subscriptions. Local validation or StoreKit 2 applies to consumables too.</p>
  </div>

  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Can I still support iOS 13/14 users?</h4>
    <p class="text-gray-600 dark:text-gray-400">Yes, using local receipt validation. StoreKit 2 is iOS 15+ only, but the original StoreKit with local validation works on older versions.</p>
  </div>

  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">What's the difference between App Store Server API and verifyReceipt?</h4>
    <p class="text-gray-600 dark:text-gray-400">verifyReceipt took a receipt and returned validation info. App Store Server API takes a transaction ID and returns subscription status, transaction history, etc. It's more granular and efficient.</p>
  </div>

  <div>
    <h4 class="font-bold text-apple-dark dark:text-white mb-2">Will my existing users be affected?</h4>
    <p class="text-gray-600 dark:text-gray-400">Only if they make a new purchase or renewal after January 24, 2025, and they're on an old app version that uses verifyReceipt. Push the update ASAP to minimize this window.</p>
  </div>
</div>

<div class="mt-16 p-8 bg-gradient-to-br from-apple-blue/5 to-blue-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-apple-blue/10 dark:border-blue-800/40">
  <h3 class="text-2xl font-bold text-apple-dark dark:text-white mb-4">Need Help With IAP Compliance?</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">
    Our AI Review Toolkit includes prompts specifically designed to audit your in-app purchase implementation. Get the toolkit and ensure your IAP code meets Apple's requirements before you submit.
  </p>
  <a href="/ai-review" class="inline-flex items-center gap-2 px-6 py-3 bg-apple-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
    Get the AI Toolkit
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </a>
</div>
`,
  category: 'Technical',
  isHub: false,
  metaKeywords: ['receipt validation', 'verifyReceipt', 'SHA-256', 'StoreKit 2', 'App Store Server API', 'in-app purchase', 'subscription validation', 'ITMS-90035', 'verifyReceipt deprecated', 'receipt validation migration'],
  toc: {
    title: "Receipt Migration Guide",
    backLink: "/",
    sections: [
      {
        section: null,
        items: [
          { href: "#why-changed", label: "Why Apple Made This Change" },
          { href: "#what-breaks", label: "What Breaks" },
          { href: "#migration", label: "The Migration Path" }
        ]
      },
      {
        section: "Implementation",
        items: [
          { href: "#checklist", label: "Migration Checklist" },
          { href: "#libraries", label: "Libraries That Help" },
          { href: "#testing", label: "Testing" },
          { href: "#faq", label: "FAQ" }
        ]
      }
    ]
  }
};

async function main() {
  console.log('Seeding Receipt SHA-256 Migration article...');

  await prisma.article.upsert({
    where: { slug: receiptSha256Article.slug },
    update: {
      title: receiptSha256Article.title,
      description: receiptSha256Article.description,
      content: receiptSha256Article.content,
      category: receiptSha256Article.category,
      metaKeywords: receiptSha256Article.metaKeywords,
      isHub: receiptSha256Article.isHub,
      toc: receiptSha256Article.toc,
      updatedAt: new Date(),
    },
    create: receiptSha256Article,
  });

  console.log('Receipt SHA-256 Migration article seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

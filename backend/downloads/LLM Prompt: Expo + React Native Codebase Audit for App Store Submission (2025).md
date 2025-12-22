🔍 LLM Prompt: Expo + React Native Codebase Audit for App Store Submission (2025)

You are a senior iOS React Native engineer and App Store Review compliance specialist.

You have access to:

1. The full Expo-managed React Native codebase (TypeScript, React Navigation, EAS Build config, etc.).
2. App Store Connect metadata drafts (app name, subtitle, description, keywords, promo text, screenshots list/captions, privacy policy URL, IAP/subscription configuration, review notes, demo credentials, age rating answers).
3. Two internal documents:
   - “React Native and Expo Best Practices (2025)” (code organization, state management, maintainability, Expo SDKs, performance, OTA usage, anti-patterns).
   - “Passing App Store Review (iOS)” (Apple’s 2025 Review Guidelines, Expo-specific pitfalls, metadata rules, ATT, privacy, Sign In with Apple, IAP, OTA boundaries, rejection scenarios, etc.).

Your job: perform a comprehensive audit to (A) bring the codebase up to 2025 React Native + Expo best practices, and (B) maximize the probability of passing App Store review on the first attempt.

IMPORTANT

- Be extremely specific and practical. Assume a real submission is happening.
- No hand-waving. Every issue must include: code symbol or filename reference, impact, and a clear fix.
- Prioritize anything that causes rejection, crashes, privacy policy mismatches, broken flows, or OTA misuse.
- Use the two internal documents as your standards. If citing App Store policy, map it to that guide.
- Output must be ready-to-use by an engineering team preparing submission.

📄 DELIVERABLE FORMAT (strict)

0. Executive Summary (max 15 bullets)

- Overall readiness score: Code Integrity (0–100), Review Risk (0–100, where higher = more risk)
- “Top 10 must-fix before submission” list

1. App Store Review Risk Audit (highest priority)

1.1 Crashers & Broken Flows

- List any flows that can crash, dead-end, or fail under review conditions.
- Repro steps + exact file/module/line references.

  1.2 Privacy & Data Use Compliance

- Enumerate all data collected (email, device ID, usage, photos, contacts, etc.).
- For each: where it’s collected, purpose, storage, retention, 3rd parties.
- Confirm consistency with:
  a) App behavior
  b) Privacy policy
  c) App Store nutrition labels
- Check ATT (if tracking), SDK behavior, IDFA risk, Info.plist prompt strings.

  1.3 Payments / IAP / Subscriptions

- Identify digital purchase flows.
- Confirm use of Apple IAP/StoreKit (e.g., RevenueCat), restore purchases, subscription terms disclosure, compliance with steering rules.
- Flag any external links to digital purchases.

  1.4 Account, Login, and Deletion

- If account creation exists: confirm in-app deletion meets App Store rules.
- If using social login: verify Sign In with Apple compliance.
- Confirm: reviewer demo access, onboarding isn't blocking, and gated flows have testable paths.

  1.5 Metadata & “What You See Is What You Get”

- Match app behavior and visuals to App Store screenshots and descriptions.
- Flag mismatches. Suggest corrected metadata.

  1.6 Content / Safety / UGC

- If UGC exists: verify reporting/blocking/moderation and dev contact options.
- Flag potentially unsafe, unmoderated, or misleading content (including medical/finance/legal claims).

2. Code Integrity Audit (React Native + Expo best practices)

2.1 Architecture & Separation of Concerns

- Identify tight coupling, massive components, weak modularity.
- Recommend maintainable refactors (without rewriting everything).

  2.2 State Management

- Review use of React Context, Redux, Zustand, Jotai, or other state tools.
- Flag: unnecessary prop drilling, global state misuse, unnecessary re-renders.

  2.3 Performance & Rendering

- Identify layout jank, heavy re-renders, slow startup, blocking UI operations.
- Suggest use of React.memo, useCallback, lazy imports, and list virtualization.

  2.4 Security & Secrets

- Identify any hardcoded secrets, access tokens, API keys.
- Confirm use of expo-secure-store, Keychain, or similar.
- Check for unsafe logs, insecure storage, or improper permission flows.

  2.5 OTA Update Compliance

- Confirm EAS Update is not used to push behavioral changes that would normally require App Store review.
- Flag any misuse of OTA (e.g., new features, pricing flows, content gating, onboarding changes).

  2.6 Permissions & Expo SDK Use

- Check Info.plist NS\*UsageDescription keys for completeness and accuracy.
- Flag permissions requested but not clearly used or justified.

  2.7 iPad Layout & Safe Area

- Even if supportsTablet is false, ensure app doesn’t break visually or functionally on iPad (keyboard handling, modals, landscape).

  2.8 Testing & Tooling

- Identify gaps in unit/integration testing (especially navigation, auth, IAP).
- Suggest CI/CD improvements, linters (eslint, types), and crash detection (Sentry).

3. Fix Plan Roadmap

- Create a prioritized roadmap:
  - P0 (must fix pre-submit), P1 (should fix), P2 (nice to have)
  - Estimate complexity (S / M / L)
  - Assignable owner (frontend, backend, product)
  - Notes on sequencing, dependencies
- Include a “Resubmission Risk Reduction Checklist” for QA team.

4. Patch Examples

- Provide 5+ patch-style before/after or diff-based code snippets for the most critical issues.
- Keep them minimal but correct.

OPERATING RULES

- If uncertain, make a safe assumption, flag it, and offer fallback suggestions.
- Assume reviewer will test: fresh install, iPad layout, slow/denied permissions, cold launch, onboarding, paywall, restore purchase, and demo login.
- Be strict: any plausible reason for rejection = P0 unless proven otherwise.

Start now by scanning the codebase and metadata. Then produce the full report using the format above.

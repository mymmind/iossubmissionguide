# Q&A Strategy Quick Reference Card

## Daily Checklist (15-30 min)

### Morning Scan (5 min)
- [ ] Check Google Alerts email
- [ ] Scan Stack Overflow RSS feed
- [ ] Browse r/iOSProgramming new posts
- [ ] Bookmark 1-2 questions to answer later

### Evening Execution (20 min)
- [ ] Answer 1 bookmarked question thoroughly
- [ ] Comment on 2 discussions (build presence)
- [ ] Reply to any comments on your previous answers
- [ ] Update tracking spreadsheet

---

## Top Priority Questions

### Stack Overflow Search Queries
```
[app-store-rejection] guideline 2.1 is:question hasaccepted:no
[in-app-purchase] [ios] created:7d
[react-native] [ios] deploy OR submission
[flutter] [ios] is:question answers:0..2
```

### Reddit Subreddits (Check Daily)
- r/iOSProgramming (200K) - Technical discussions
- r/FlutterDev (150K) - iOS submission questions
- r/reactnative (100K) - Deployment issues

---

## Answer Quality Checklist

Before posting:
- [ ] 200+ words with specific details
- [ ] Code example or CLI commands included
- [ ] Link to SPECIFIC guide page (not homepage)
- [ ] "Full disclosure: I maintain this guide" (if linking)
- [ ] Provides value even without clicking link
- [ ] No typos, proper formatting
- [ ] UTM parameters in link
- [ ] Question is recent (< 30 days)

---

## Quick Answer Templates

### Guideline 2.1 (Crashes)
1. Explain what 2.1 means
2. How to get crash logs (Xcode Organizer)
3. Common causes (API keys, network, device-specific)
4. Testing checklist
5. Link: /guideline-2-1-app-crashes?utm_source=[platform]&utm_medium=answer&utm_campaign=qa

### React Native iOS
1. Clean build steps (rm -rf, pod install)
2. Xcode workspace (not xcodeproj)
3. Code signing setup
4. Common RN-specific issues
5. Link: /react-native-app-store-submission?utm_source=[platform]&utm_medium=answer&utm_campaign=qa

### Flutter iOS
1. Flutter build ios command
2. Xcode configuration
3. Info.plist requirements
4. Platform channel testing
5. Link: /flutter-app-store-submission?utm_source=[platform]&utm_medium=answer&utm_campaign=qa

### Guideline 3.1 (IAP)
1. What requires IAP vs. what doesn't
2. Basic StoreKit implementation
3. Common mistakes (external payment links)
4. Remove all external payment references
5. Link: /guideline-3-1-in-app-purchase?utm_source=[platform]&utm_medium=answer&utm_campaign=qa

---

## UTM Parameters

```
Stack Overflow: ?utm_source=stackoverflow&utm_medium=answer&utm_campaign=qa
Reddit: ?utm_source=reddit&utm_medium=comment&utm_campaign=qa
Quora: ?utm_source=quora&utm_medium=answer&utm_campaign=qa
Dev.to: ?utm_source=devto&utm_medium=article&utm_campaign=qa
Apple Forums: ?utm_source=apple_forums&utm_medium=post&utm_campaign=qa
```

---

## Golden Rules

### DO:
✅ Provide code examples
✅ Be genuinely helpful
✅ Disclose affiliation
✅ Answer without links too (50/50)
✅ Engage with follow-up questions
✅ Link to specific pages

### DON'T:
❌ Copy-paste same answer
❌ Answer old questions (>30 days)
❌ Link to homepage
❌ Ignore criticism
❌ Only answer to promote
❌ Rush low-quality answers

---

## Quick Wins (Do These First)

1. **Flutter iOS submission** (r/FlutterDev) - Asked weekly
2. **React Native iOS deploy** (r/reactnative, Stack Overflow) - High volume
3. **Guideline 2.1 rejections** (Stack Overflow) - Most common
4. **Screenshot sizes** (Stack Overflow) - Quick, easy answers

---

## Weekly Goals

- [ ] 10 quality answers total
- [ ] 5 answers with guide links
- [ ] 5 answers without links (credibility)
- [ ] 10 comments on other discussions
- [ ] Respond to all follow-ups
- [ ] Track performance in spreadsheet

---

## Platform Time Allocation

- Stack Overflow: 40% (highest ROI)
- Reddit: 30% (community building)
- Quora: 15% (SEO value)
- Dev.to: 10% (1 article/month)
- Other: 5% (exploration)

---

## Tracking Template

```
Date: ___________
Platform: ___________
Question: _________________________________
Guide linked: ___________
Upvotes: ___
Traffic: ___ visits
Notes: _________________________________
```

---

## Emergency Responses

**If downvoted:**
1. Don't react emotionally (wait 30 min)
2. Improve answer (add more value)
3. Learn from it

**If accused of spam:**
1. Apologize professionally
2. Answer next 5 questions WITHOUT links
3. Increase answer quality

---

## Success Metrics (Track Weekly)

```
Answers: ___ / 10
Stack Overflow rep gained: ___
Reddit karma gained: ___
Traffic from Q&A: ___ visits
Conversions: ___
Top performing platform: ___________
```

---

## Bookmarks (Quick Access)

### Stack Overflow
- https://stackoverflow.com/questions/tagged/app-store-rejection?tab=newest
- https://stackoverflow.com/questions/tagged/ios-app-store?tab=newest

### Reddit
- https://www.reddit.com/r/iOSProgramming/new/
- https://www.reddit.com/r/FlutterDev/new/
- https://www.reddit.com/r/reactnative/new/

---

## Full Documentation

1. **QA_STRATEGY_SUMMARY.md** - Overview
2. **QA_ACTION_PLAN.md** - Execution plan
3. **ANSWER_TEMPLATES.md** - Full templates
4. **HIGH_VALUE_QUESTIONS.md** - Question finder
5. **QA_PLATFORM_STRATEGY.md** - Complete strategy

---

**Remember:** Quality > Quantity. One excellent answer beats five mediocre ones.

**Start today:** Answer ONE question on Stack Overflow without any links. Build credibility first.

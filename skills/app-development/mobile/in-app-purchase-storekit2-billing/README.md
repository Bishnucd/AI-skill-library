# In App Purchase Storekit2 Billing

## Description
Implements native subscriptions and consumable in-app purchases using Apple StoreKit 2 and Google Play Billing. Use when monetizing mobile apps with native subscriptions and purchases.

## Purpose
Mobile platforms require strict compliance with native app store billing APIs. Modern implementations use StoreKit 2 and Play Billing with server-side JWS cryptographic receipt validation.

## When to Use
- When executing in app purchase storekit2 billing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (StoreKit 2 (iOS), Google Play Billing (Android)) cannot be provisioned.

## Supported Technologies
- StoreKit 2 (iOS)
- Google Play Billing (Android)
- RevenueCat
- Swift / Kotlin

## Example Use Cases
### Freemium Subscription Paywalls
Unlocking premium feature tiers upon successful auto-renewable subscription confirmation.

### Consumable Coin/Credit Purchases
Crediting user balances for in-game currency or AI inference generation tokens.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (StoreKit 2 (iOS)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.apple.com/documentation/storekit/in-app_purchase
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

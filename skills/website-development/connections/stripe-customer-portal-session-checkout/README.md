# Stripe Customer Portal Session Checkout

## Description
Integrates Stripe Customer Portal sessions for self-service subscription management and billing updates. Use when allowing SaaS customers to manage invoices, cards, and tier upgrades.

## Purpose
Building custom subscription management UIs (updating credit cards, downloading PDF invoices, switching plans) takes weeks. Stripe Customer Portal provides a secure, hosted self-service portal.

## When to Use
- When executing stripe customer portal session checkout in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Stripe Billing, Customer Portal) cannot be provisioned.

## Supported Technologies
- Stripe Billing
- Customer Portal
- Stripe API
- SaaS Subscriptions

## Example Use Cases
### SaaS Self-Service Billing Management
Enabling users to upgrade plans, update expiring credit cards, and download VAT receipts with zero custom UI.

### Subscription Cancellation and Proration Flow
Allowing customers to cancel subscriptions or switch from monthly to annual billing seamlessly.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Stripe Billing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://stripe.com/docs/billing/subscriptions/integrating-customer-portal
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

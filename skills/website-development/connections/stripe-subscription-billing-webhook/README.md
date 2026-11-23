# Stripe Subscription Billing Webhook

## Description
Manages recurring Stripe subscription lifecycles, prorated upgrades, and failed payment dunning webhooks. Use when implementing SaaS recurring billing and subscription management.

## Purpose
SaaS billing requires handling trials, upgrades, cancellations, and payment failures. Integrating Stripe Subscriptions and listening to customer.subscription.* webhooks automates tenant access.

## When to Use
- When executing stripe subscription billing webhook in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Stripe API, Stripe Billing) cannot be provisioned.

## Supported Technologies
- Stripe API
- Stripe Billing
- Node.js / Python
- Webhooks

## Example Use Cases
### SaaS Recurring Billing
Automating monthly and annual subscription plan provisioning for software customers.

### Self-Serve Customer Portal
Allowing customers to upgrade, downgrade, or update credit cards via Stripe Portal.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Stripe API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.stripe.com/billing/subscriptions/overview
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

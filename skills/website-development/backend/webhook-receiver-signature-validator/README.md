# Webhook Receiver Signature Validator

## Description
Validates cryptographic HMAC-SHA256 signatures and timestamps on incoming third-party webhooks. Use when securely processing webhooks from Stripe, GitHub, or Shopify.

## Purpose
Unverified webhook endpoints leave servers vulnerable to forged requests and replay attacks. Computing HMAC-SHA256 signatures over raw request bodies verifies authentic origins.

## When to Use
- When executing webhook receiver signature validator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HMAC-SHA256, Node.js / Python) cannot be provisioned.

## Supported Technologies
- HMAC-SHA256
- Node.js / Python
- Webhooks
- Express / FastAPI

## Example Use Cases
### Stripe Payment Webhook Ingestion
Securely fulfilling customer purchases only upon verified payment_intent.succeeded webhooks.

### GitHub CI Webhook Automation
Triggering internal deployment workflows upon verified GitHub push events.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HMAC-SHA256) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.stripe.com/webhooks#verify-signatures
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

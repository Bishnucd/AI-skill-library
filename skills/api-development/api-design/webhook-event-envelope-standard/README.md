# Webhook Event Envelope Standard

## Description
Designs secure webhook event payloads with standardized metadata, UUIDs, and event type namespaces. Use when architecting outward-bound webhook notification systems.

## Purpose
Inconsistent webhook formats burden external integrators. The Standard Webhooks specification defines uniform envelope structure (id, type, timestamp, data) and HMAC signing conventions.

## When to Use
- When executing webhook event envelope standard in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (JSON, Standard Webhooks Spec) cannot be provisioned.

## Supported Technologies
- JSON
- Standard Webhooks Spec
- HMAC
- TypeScript

## Example Use Cases
### SaaS Platform Webhook Outbox
Publishing account activity events to customer Zapier or webhook endpoints.

### E-commerce Order Notifications
Broadcasting order.created and payment.refunded events to merchant integrations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (JSON) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.standardwebhooks.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

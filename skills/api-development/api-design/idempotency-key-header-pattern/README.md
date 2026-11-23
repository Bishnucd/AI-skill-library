# Idempotency Key Header Pattern

## Description
Implements safe HTTP mutation retries using Idempotency-Key headers backed by Redis transaction locks. Use when preventing duplicate charges or duplicate resource creations in APIs.

## Purpose
Network drops during POST requests cause clients to retry, risking duplicate payments or records. Idempotency keys allow clients to pass unique UUIDs that servers cache alongside original responses.

## When to Use
- When executing idempotency key header pattern in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (IETF Draft, Redis) cannot be provisioned.

## Supported Technologies
- IETF Draft
- Redis
- Node.js / Go
- HTTP Headers

## Example Use Cases
### Payment Processing Gateway
Preventing double charging when a customer clicks "Pay Now" during mobile network blips.

### Webhook Delivery Retries
Allowing webhooks to safely retry deliveries without creating duplicate fulfillment orders.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (IETF Draft) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-03
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Bounce Handling Automated Suppression List

## Description
Processes hard and soft email bounce webhooks to maintain real-time recipient suppression lists. Use when protecting domain reputation by preventing deliveries to invalid addresses.

## Purpose
Repeatedly sending emails to invalid addresses destroys domain sender reputation. Processing RFC 3463 bounce status codes (5.1.1 unknown user) automatically suppresses invalid recipients.

## When to Use
- When executing bounce handling automated suppression list in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RFC 3463 Enhanced Mail Status, Webhooks) cannot be provisioned.

## Supported Technologies
- RFC 3463 Enhanced Mail Status
- Webhooks
- Redis / SQL
- Deliverability

## Example Use Cases
### Domain Reputation Protection
Preventing blacklisting by keeping mailbox bounce rates strictly below 2%.

### Mail Queue Optimization
Dropping unsendable messages immediately to save API quotas and compute.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RFC 3463 Enhanced Mail Status) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc3463
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

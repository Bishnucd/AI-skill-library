# Postmark Message Stream Routing

## Description
Segregates transactional messages from promotional broadcasts using Postmark Message Streams and distinct IPs. Use when safeguarding critical password reset delivery rates.

## Purpose
Sending marketing newsletters from the same IP as password resets risks delaying critical logins when marketing blasts cause throttling. Postmark message streams physically isolate traffic.

## When to Use
- When executing postmark message stream routing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Postmark API, Message Streams) cannot be provisioned.

## Supported Technologies
- Postmark API
- Message Streams
- REST
- Deliverability

## Example Use Cases
### Password Reset Latency Protection
Guaranteeing password reset emails arrive within 3 seconds even during huge marketing blasts.

### Reputation Isolation
Ensuring a marketing campaign spam complaint never degrades transactional receipt delivery.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Postmark API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://postmarkapp.com/developer/user-guide/message-streams
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Email Unsubscribe Header Manager

## Description
Implements RFC 8058 one-click List-Unsubscribe headers and automated unsubscribe processing endpoints. Use when complying with CAN-SPAM, GDPR, and modern inbox sender guidelines.

## Purpose
Google and Yahoo require one-click List-Unsubscribe headers for bulk senders. Implementing List-Unsubscribe-Post with cryptographic HMAC tokens ensures compliant opt-out flows.

## When to Use
- When executing email unsubscribe header manager in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HTTP / REST, RFC 8058) cannot be provisioned.

## Supported Technologies
- HTTP / REST
- RFC 8058
- Cryptographic HMAC
- SQL

## Example Use Cases
### Inbox Sender Compliance
Meeting Google and Yahoo mandatory requirements for marketing and digest senders.

### Reputation Management
Reducing spam complaints by offering clear, instant one-click unsubscribe links.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HTTP / REST) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc8058
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Intercom Messenger Identity Verification

## Description
Integrates Intercom Messenger with HMAC-SHA256 user identity verification to prevent impersonation. Use when embedding secure customer support chat into web applications.

## Purpose
Without identity verification, a malicious user could spoof another customer user_id in the Intercom JavaScript snippet. HMAC-SHA256 signing on the backend proves user authenticity.

## When to Use
- When executing intercom messenger identity verification in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Intercom Messenger, HMAC-SHA256) cannot be provisioned.

## Supported Technologies
- Intercom Messenger
- HMAC-SHA256
- Identity Verification
- Customer Support

## Example Use Cases
### Secure Banking In-App Customer Support Chat
Preventing malicious actors from viewing another customer chat history or impersonating account owners.

### SaaS In-App Support Chat Widget Deployment
Deploying Intercom Messenger with authenticated customer tier and subscription metadata.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Intercom Messenger) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.intercom.com/help/en/articles/183-enable-identity-verification-in-intercom-for-web
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

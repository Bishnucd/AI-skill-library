# Security Txt Disclosure Policy Authoring

## Description
Authors and publishes standard RFC 9116 security.txt files defining vulnerability disclosure and PGP reporting policies. Use when establishing authorized, responsible vulnerability reporting channels.

## Purpose
Security researchers need a direct, authorized path to report vulnerabilities before public disclosure. RFC 9116 standardizes Contact, Encryption, and Policy URLs at /.well-known/security.txt.

## When to Use
- When executing security txt disclosure policy authoring in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RFC 9116 security.txt, PGP / GPG) cannot be provisioned.

## Supported Technologies
- RFC 9116 security.txt
- PGP / GPG
- Vulnerability Disclosure
- HTTP

## Example Use Cases
### Responsible Disclosure Enablement
Providing white-hat security researchers with an official reporting channel.

### Corporate Security Posture Proof
Demonstrating security maturity during client enterprise procurement audits.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RFC 9116 security.txt) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.rfc-editor.org/rfc/rfc9116
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

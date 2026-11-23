# Content Security Policy Csp Nonce Meta

## Description
Enforces strict Content Security Policy (CSP) with cryptographic script nonces to prevent Cross-Site Scripting (XSS). Use when hardening modern web applications against code injection.

## Purpose
Allowing unsafe-inline in CSP leaves websites vulnerable to stored and reflected XSS. Generating a unique cryptographic random nonce per request ensures browsers only execute authorized scripts.

## When to Use
- When executing content security policy csp nonce meta in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Content Security Policy (CSP), Cryptographic Nonces) cannot be provisioned.

## Supported Technologies
- Content Security Policy (CSP)
- Cryptographic Nonces
- XSS Mitigation
- Web Security

## Example Use Cases
### Banking Web Application XSS Protection
Blocking all third-party script injection attacks using strict nonce-based CSP policies.

### Next.js Strict CSP Header Implementation
Configuring Next.js middleware to generate per-request nonces passed to framework script tags.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Content Security Policy (CSP)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

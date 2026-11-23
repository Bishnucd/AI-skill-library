# Csp Nonce Content Security Policy

## Description
Configures strict Content Security Policy (CSP) headers with cryptographic per-request nonces and trusted types. Use when neutralizing Cross-Site Scripting (XSS) in modern web applications.

## Purpose
Traditional domain whitelist CSPs are easily bypassed via CDN script gadgets. Strict nonce-based CSP allows only script tags bearing a cryptographically random, per-request base64 nonce token.

## When to Use
- When executing csp nonce content security policy in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Content Security Policy (CSP), Cryptographic Nonces) cannot be provisioned.

## Supported Technologies
- Content Security Policy (CSP)
- Cryptographic Nonces
- DOMPurify
- HTTP

## Example Use Cases
### Zero-Tolerance XSS Defense
Neutralizing stored and reflected Cross-Site Scripting attacks on customer financial portals.

### Third-Party Script Containment
Preventing compromised marketing trackers from injecting unauthorized cryptocurrency miners.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Content Security Policy (CSP)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

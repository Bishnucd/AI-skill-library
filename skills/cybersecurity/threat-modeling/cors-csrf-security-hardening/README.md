# Cors Csrf Security Hardening

## Description
Configures secure Cross-Origin Resource Sharing (CORS) headers and SameSite CSRF defense tokens. Use when hardening web applications against cross-site request forgery and data exfiltration.

## Purpose
Wildcard CORS origins and missing CSRF tokens allow malicious websites to hijack authenticated user sessions. Strict header configurations protect user data.

## When to Use
- When executing cors csrf security hardening in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HTTP Headers, SameSite Cookies) cannot be provisioned.

## Supported Technologies
- HTTP Headers
- SameSite Cookies
- CSRF Tokens
- Express / Django

## Example Use Cases
### Fintech Application Hardening
Preventing malicious sites from executing unauthorized fund transfers on behalf of logged-in users.

### SaaS Multi-Tenant Defense
Ensuring cross-origin requests between tenant portals and API gateways remain strictly segregated.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HTTP Headers) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

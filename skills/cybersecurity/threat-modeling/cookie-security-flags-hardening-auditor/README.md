# Cookie Security Flags Hardening Auditor

## Description
Audits HTTP session cookies for Secure, HttpOnly, SameSite, and __Host- prefix security attributes. Use when protecting browser sessions from cross-site theft and man-in-the-middle attacks.

## Purpose
Missing cookie flags allow malicious scripts to read session tokens (XSS) or transmit cookies across domains (CSRF). Enforcing __Host- prefixes and SameSite=Lax locks cookies to secure origins.

## When to Use
- When executing cookie security flags hardening auditor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HTTP Cookie Flags, SameSite) cannot be provisioned.

## Supported Technologies
- HTTP Cookie Flags
- SameSite
- __Host- Prefix
- Express / Django

## Example Use Cases
### Session Hijacking Defense
Preventing attackers from stealing logged-in session cookies even if an XSS flaw exists.

### Cross-Site Request Forgery Mitigation
Blocking unauthorized third-party sites from triggering authenticated state mutations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HTTP Cookie Flags) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

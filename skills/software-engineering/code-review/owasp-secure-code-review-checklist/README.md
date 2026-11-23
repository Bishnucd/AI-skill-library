# Owasp Secure Code Review Checklist

## Description
Audits pull requests against the OWASP Top 10 vulnerabilities (injection, XSS, SSRF, broken auth). Use when conducting security-focused code reviews before merging to production.

## Purpose
Functional code reviews often overlook security vulnerabilities. The OWASP code review methodology systematically verifies input sanitization, authorization checks, and secret handling.

## When to Use
- When executing owasp secure code review checklist in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OWASP Code Review, AppSec) cannot be provisioned.

## Supported Technologies
- OWASP Code Review
- AppSec
- Vulnerability Assessment
- Secure Coding

## Example Use Cases
### Pre-Deployment Security Clearance
Auditing a new customer billing integration for IDOR vulnerabilities and sensitive cardholder data exposure.

### Third-Party Integration Code Review
Verifying that external webhook payloads are strictly validated against cryptographic HMAC signatures.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OWASP Code Review) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://owasp.org/www-project-code-review-guide/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

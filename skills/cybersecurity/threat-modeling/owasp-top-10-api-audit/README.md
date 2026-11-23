# Owasp Top 10 Api Audit

## Description
Audits API architecture and implementation against OWASP Top 10 API Security Risks (BOLA, Broken Auth, SSRF). Use when conducting comprehensive security reviews of web and mobile backend APIs.

## Purpose
API attacks bypass traditional network perimeters by exploiting business logic flaws like Broken Object Level Authorization (BOLA). A structured audit verifies defenses against top 10 vectors.

## When to Use
- When executing owasp top 10 api audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OWASP API Security, REST APIs) cannot be provisioned.

## Supported Technologies
- OWASP API Security
- REST APIs
- Postman / Burp Suite
- Markdown

## Example Use Cases
### API Pre-Launch Security Audit
Evaluating new customer-facing endpoints against OWASP standards before release.

### Third-Party Penetration Prep
Eliminating common security vulnerabilities prior to hiring external penetration testers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OWASP API Security) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://owasp.org/API-Security/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

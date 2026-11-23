# Ssrf Server Side Request Forgery Defense

## Description
Validates outbound HTTP requests, restricts DNS rebinding, and isolates cloud metadata IP endpoints (169.254.169.254). Use when protecting services that fetch user-supplied URLs from SSRF.

## Purpose
Services that fetch user URLs (webhooks, image unfurling) risk SSRF attacks targeting cloud metadata (AWS IMDS) or internal network databases. Strict IP validation and network egress controls block access.

## When to Use
- When executing ssrf server side request forgery defense in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OWASP SSRF Cheat Sheet, DNS Rebinding Defense) cannot be provisioned.

## Supported Technologies
- OWASP SSRF Cheat Sheet
- DNS Rebinding Defense
- Network Egress
- Python / Go

## Example Use Cases
### Webhook Verification Gateway
Preventing malicious users from submitting internal Redis URLs as webhook targets.

### Cloud Metadata Theft Defense
Blocking attackers from extracting AWS EC2 IAM role credentials via URL preview tools.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OWASP SSRF Cheat Sheet) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

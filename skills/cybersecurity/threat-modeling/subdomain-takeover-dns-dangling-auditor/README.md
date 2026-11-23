# Subdomain Takeover Dns Dangling Auditor

## Description
Scans DNS records for dangling CNAME pointers to decommissioned cloud services (S3, GitHub Pages, Heroku). Use when preventing subdomain takeover attacks.

## Purpose
When developers decommission an S3 bucket or Heroku app but leave the DNS CNAME record active, attackers can register the abandoned cloud bucket name and hijack the corporate subdomain.

## When to Use
- When executing subdomain takeover dns dangling auditor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Subdomain Takeover, DNS Auditing) cannot be provisioned.

## Supported Technologies
- Subdomain Takeover
- DNS Auditing
- Python / Go
- Cloudflare DNS

## Example Use Cases
### Corporate Domain Fleet Auditing
Auditing 500+ legacy DNS records to eliminate hijacked promotional subdomains.

### Cookie Scope Hijacking Prevention
Preventing attackers from capturing sensitive session cookies shared across wildcard subdomains.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Subdomain Takeover) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Subdomain_Takeover_Cheat_Sheet.md
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

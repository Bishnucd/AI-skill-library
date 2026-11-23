# Osint Domain Whois Dns Infrastructure Audit

## Description
Investigates domain ownership, historical WHOIS, DNS records, and SSL certificates using Open Source Intelligence (OSINT). Use when tracing corporate digital footprints and malicious infrastructure.

## Purpose
Digital infrastructure leaves permanent public footprints. Analyzing historical WHOIS records, passive DNS databases, and Certificate Transparency (CT) logs reveals hidden parent companies and infrastructure.

## When to Use
- When executing osint domain whois dns infrastructure audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OSINT, WHOIS History) cannot be provisioned.

## Supported Technologies
- OSINT
- WHOIS History
- DNS Reconnaissance
- SecurityTrails / crt.sh

## Example Use Cases
### Competitor Unreleased Product Leak Discovery
Discovering unreleased stealth product subdomains registered in public Certificate Transparency logs.

### Phishing Campaign Infrastructure Attribution
Connecting 15 fraudulent banking domains to a single malicious bulletproof hosting ASN.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OSINT) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.securitytrails.com/corp/api
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

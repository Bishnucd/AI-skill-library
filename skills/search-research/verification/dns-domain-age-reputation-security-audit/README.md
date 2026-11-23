# Dns Domain Age Reputation Security Audit

## Description
Audits domain age, registrar history, and DNSBL blacklist status to detect newly registered phishing infrastructure. Use when evaluating suspicious partner links and email sender legitimacy.

## Purpose
Phishing and scam operations register domains days before launching campaigns. Auditing domain registration age and querying major DNS Blackhole Lists (Spamhaus, SURBL) exposes malicious sites.

## When to Use
- When executing dns domain age reputation security audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Domain Age Verification, DNSBL Blacklists) cannot be provisioned.

## Supported Technologies
- Domain Age Verification
- DNSBL Blacklists
- SecurityTrails / VirusTotal
- Cybersecurity

## Example Use Cases
### Inbound Wire Transfer Email Verification
Detecting that an urgent invoice email originated from a look-alike domain registered 48 hours ago.

### Partner Affiliate Link Safety Audit
Screening 1,000 marketing affiliate website links to eliminate malicious redirected domains.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Domain Age Verification) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/DNSBL
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

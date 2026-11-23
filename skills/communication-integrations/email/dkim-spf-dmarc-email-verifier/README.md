# Dkim Spf Dmarc Email Verifier

## Description
Inspects and validates SPF, DKIM, and DMARC DNS records to ensure high email deliverability and spoof defense. Use when configuring or diagnosing email deliverability and domain authentication.

## Purpose
Modern email providers reject or spam-folder messages lacking valid authentication. Verifying SPF include directives, DKIM 2048-bit keys, and DMARC enforcement policies guarantees delivery.

## When to Use
- When executing dkim spf dmarc email verifier in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (DNS, SPF) cannot be provisioned.

## Supported Technologies
- DNS
- SPF
- DKIM
- DMARC
- dig / nslookup

## Example Use Cases
### Deliverability Optimization
Preventing transactional invoices from dropping into customer spam folders.

### Anti-Phishing Hardening
Enforcing strict DMARC reject policies to block domain spoofing attacks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (DNS) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://dmarc.org/overview/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

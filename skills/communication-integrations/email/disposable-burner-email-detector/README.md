# Disposable Burner Email Detector

## Description
Validates and rejects temporary, disposable "throwaway" email domains during user signup. Use when preventing fraud, duplicate trial accounts, and fake user registrations.

## Purpose
Fraudsters use disposable email services (10MinuteMail, GuerrillaMail) to abuse free trials and create spam accounts. Checking signup domains against verified blocklists blocks burner addresses.

## When to Use
- When executing disposable burner email detector in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Disposable Email Blocklist, DNS MX Lookup) cannot be provisioned.

## Supported Technologies
- Disposable Email Blocklist
- DNS MX Lookup
- Regex
- Node.js / Python

## Example Use Cases
### Free Trial Abuse Prevention
Blocking automated bots from churning free SaaS trials using throwaway email domains.

### User Account Quality Enhancement
Ensuring registered users provide genuine contact addresses for critical notifications.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Disposable Email Blocklist) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/disposable-email-domains/disposable-email-domains
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

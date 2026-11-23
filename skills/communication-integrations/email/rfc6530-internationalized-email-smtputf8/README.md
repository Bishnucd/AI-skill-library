# Rfc6530 Internationalized Email Smtputf8

## Description
Implements SMTPUTF8 and internationalized domain name (IDN) punycode handling per RFC 6530. Use when supporting non-Latin foreign language email addresses and character sets.

## Purpose
Standard legacy SMTP rejects non-ASCII email addresses. Implementing SMTPUTF8 and IDN punycode conversions ensures global users with accented, Cyrillic, Chinese, or Arabic emails can register.

## When to Use
- When executing rfc6530 internationalized email smtputf8 in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RFC 6530 / RFC 6531, Punycode) cannot be provisioned.

## Supported Technologies
- RFC 6530 / RFC 6531
- Punycode
- SMTPUTF8
- Unicode

## Example Use Cases
### Global User Registration
Allowing European and Asian users with localized characters in their email to sign up.

### Non-English Email Routing
Routing international customer support inquiries without character encoding corruption.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RFC 6530 / RFC 6531) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc6530
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

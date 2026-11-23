# Bimi Brand Indicator Svg Setup

## Description
Configures Brand Indicators for Message Identification (BIMI) with Verified Mark Certificates (VMC). Use when displaying verified brand logos directly beside emails in mobile inboxes.

## Purpose
BIMI allows verified organizations to display official brand logos in Gmail, Apple Mail, and Yahoo inboxes. Implementing strict DMARC, SVG Tiny 1.2 logos, and VMC certificates builds brand trust.

## When to Use
- When executing bimi brand indicator svg setup in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (BIMI, VMC (Verified Mark Certificate)) cannot be provisioned.

## Supported Technologies
- BIMI
- VMC (Verified Mark Certificate)
- SVG Tiny 1.2
- DNS

## Example Use Cases
### Inbox Brand Recognition
Displaying official full-color company logos next to transactional emails in Gmail.

### Phishing Defense Validation
Reassuring customers that security notices are authentic and from the genuine brand.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (BIMI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://bimigroup.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Email Spam Score Spamassassin Testing

## Description
Scans outbound email templates and headers against Apache SpamAssassin scoring rules. Use when eliminating spam filter triggers before launching customer campaigns.

## Purpose
Trigger words, poor HTML-to-text ratios, or broken MIME boundaries land emails in junk folders. Scoring emails against SpamAssassin rules flags problem areas before messages are sent.

## When to Use
- When executing email spam score spamassassin testing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Apache SpamAssassin, Spam Score Rules) cannot be provisioned.

## Supported Technologies
- Apache SpamAssassin
- Spam Score Rules
- MIME
- Python

## Example Use Cases
### Marketing Campaign Preflight
Auditing promotional newsletter templates to guarantee maximum primary inbox placement.

### Automated Deliverability CI Gate
Failing automated template tests in CI if an edit triggers spam filter rules.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Apache SpamAssassin) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://spamassassin.apache.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

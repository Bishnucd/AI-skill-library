# Smtp Transactional Email Template

## Description
Designs responsive HTML email templates with plain-text fallbacks and inline CSS for transactional alerts. Use when sending transactional notifications across diverse email clients.

## Purpose
Email clients (Outlook, Gmail, Apple Mail) render HTML with inconsistent legacy engines. Utilizing table-based layouts or MJML compilation ensures consistent rendering across all devices.

## When to Use
- When executing smtp transactional email template in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HTML Email, Inline CSS) cannot be provisioned.

## Supported Technologies
- HTML Email
- Inline CSS
- MJML
- Nodemailer / SendGrid

## Example Use Cases
### Password Reset Notification
Sending clean, accessible account recovery links that render reliably everywhere.

### Order Confirmation Receipts
Delivering branded purchase receipts with itemized order detail tables.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HTML Email) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.caniemail.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

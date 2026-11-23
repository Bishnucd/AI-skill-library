# Sendgrid Dynamic Template Mailer

## Description
Dispatches transactional emails populated with dynamic handlebars JSON payloads via SendGrid Mail API. Use when sending transactional product emails without hosting email server infrastructure.

## Purpose
Decoupling email template design from backend code allows designers to edit email layouts in SendGrid UI while backend code merely transmits template IDs and JSON dynamic data payloads.

## When to Use
- When executing sendgrid dynamic template mailer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SendGrid API, Handlebars) cannot be provisioned.

## Supported Technologies
- SendGrid API
- Handlebars
- Node.js / Python
- REST

## Example Use Cases
### User Account Verification
Sending branded email verification links immediately upon user signup.

### Order Confirmation Dispatch
Transmitting purchase receipts populated with line items, tax, and order numbers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SendGrid API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-templates
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

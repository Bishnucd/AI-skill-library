# Postmark Inbound Email Webhook Parser

## Description
Parses incoming MIME email messages, attachments, and headers using Postmark inbound webhooks. Use when converting inbound emails into customer support tickets and app replies.

## Purpose
Parsing raw SMTP MIME emails is complex. Postmark Inbound receives incoming emails, parses sender, subject, text, HTML, and base64 attachments, and POSTs structured JSON payloads to your API.

## When to Use
- When executing postmark inbound email webhook parser in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Postmark, Inbound Email Parsing) cannot be provisioned.

## Supported Technologies
- Postmark
- Inbound Email Parsing
- Webhooks
- MIME Processing

## Example Use Cases
### Reply-by-Email Support Ticket System
Allowing customers to reply directly to email notifications to update their support ticket thread.

### Email-to-Task Project Management Integration
Creating new project management tasks automatically when emails are forwarded to tasks@myproject.com.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Postmark) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://postmarkapp.com/developer/user-guide/inbound
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

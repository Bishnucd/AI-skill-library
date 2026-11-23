# Mailgun Inbound Routing Webhook Parser

## Description
Configures Mailgun inbound email routing, MIME parsing, and attachment uploading webhooks. Use when building email-to-app customer support and task creation workflows.

## Purpose
Receiving inbound emails requires MX record configuration and multipart MIME decoding. Mailgun parses incoming emails into clean JSON webhook payloads with automatic spam filtering.

## When to Use
- When executing mailgun inbound routing webhook parser in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Mailgun API, Webhooks) cannot be provisioned.

## Supported Technologies
- Mailgun API
- Webhooks
- Multipart MIME
- Express / Django

## Example Use Cases
### Helpdesk Email Reply Ingestion
Parsing customer email replies and appending them directly to active support tickets.

### Email-to-Task Productivity Tool
Allowing users to forward emails to an inbox that auto-creates tasks in their project tracker.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Mailgun API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://documentation.mailgun.com/docs/mailgun/user-manual/receiving-forwarding-messages/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

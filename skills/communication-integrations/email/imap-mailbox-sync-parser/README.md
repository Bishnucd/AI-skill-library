# Imap Mailbox Sync Parser

## Description
Parses incoming email streams via IMAP IDLE connections and extracts message bodies, headers, and attachments. Use when building automated email ingestion, ticket creation, or CRM synchronization.

## Purpose
Automated email ingestion requires persistent IMAP connections, real-time push notifications via IMAP IDLE, MIME multipart boundary parsing, and safe attachment extraction.

## When to Use
- When executing imap mailbox sync parser in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Node.js / Python, IMAP Protocol) cannot be provisioned.

## Supported Technologies
- Node.js / Python
- IMAP Protocol
- Mailparser
- MIME

## Example Use Cases
### Helpdesk Ticket Ingestion
Converting inbound customer support emails into internal ticketing records.

### Automated Invoice Processing
Extracting PDF invoices directly from dedicated billing mailboxes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Node.js / Python) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc3501
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

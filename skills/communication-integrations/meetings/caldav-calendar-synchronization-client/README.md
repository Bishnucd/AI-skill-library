# Caldav Calendar Synchronization Client

## Description
Synchronizes calendar events across Apple iCloud, Nextcloud, and Google Calendar using the CalDAV protocol (RFC 4791). Use when building cross-platform calendar synchronization engines.

## Purpose
Proprietary calendar APIs create vendor lock-in. CalDAV is the open internet standard for calendar synchronization, using WebDAV XML queries (REPORT, PROPFIND) to fetch and mutate events.

## When to Use
- When executing caldav calendar synchronization client in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CalDAV (RFC 4791), WebDAV) cannot be provisioned.

## Supported Technologies
- CalDAV (RFC 4791)
- WebDAV
- caldav-client
- Python / Node.js

## Example Use Cases
### Open-Source Calendar Integration
Connecting AI scheduling assistants to Nextcloud and self-hosted CalDAV servers.

### Multi-Calendar Free-Busy Aggregation
Aggregating free-busy availability across Apple iCloud and Google Calendar accounts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CalDAV (RFC 4791)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc4791
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

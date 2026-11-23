# Email Thread Reference Header Stitcher

## Description
Stitches email conversations into threaded conversation trees using Message-ID, In-Reply-To, and References. Use when reconstructing conversational email threads in CRM and ticketing tools.

## Purpose
Email clients group messages by inspecting In-Reply-To and References header hashes. Parsing these headers builds clean conversational trees even when users alter email subject lines.

## When to Use
- When executing email thread reference header stitcher in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RFC 2822 Threading, Message-ID) cannot be provisioned.

## Supported Technologies
- RFC 2822 Threading
- Message-ID
- Directed Acyclic Graphs (DAG)
- Python

## Example Use Cases
### CRM Conversation History
Displaying complete sales email chains chronologically in customer timeline views.

### Support Ticket Threading
Preventing customer replies from creating duplicate new tickets instead of updating existing ones.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RFC 2822 Threading) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc2822#section-3.6.4
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

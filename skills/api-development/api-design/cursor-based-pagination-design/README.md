# Cursor Based Pagination Design

## Description
Designs opaque cursor-based API pagination using base64-encoded record pointers and limit bounds. Use when paginating high-velocity or real-time datasets without page-drift bugs.

## Purpose
Offset-based pagination (page=5) degrades linearly on large tables and skips or duplicates records when new items are inserted. Cursor pagination uses stable indexed pointers for O(1) performance.

## When to Use
- When executing cursor based pagination design in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SQL Window Functions, Base64) cannot be provisioned.

## Supported Technologies
- SQL Window Functions
- Base64
- REST
- TypeScript

## Example Use Cases
### Social Media Activity Feeds
Scrolling endlessly through real-time post streams without duplicate entries.

### High-Volume Data Export APIs
Paginating through millions of transaction records with zero database query degradation.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SQL Window Functions) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://slack.engineering/evolving-api-pagination-at-slack/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

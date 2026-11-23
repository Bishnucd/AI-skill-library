# Postal Open Source Mail Server Setup

## Description
Configures Postal open-source transactional mail server with incoming route rules and IP pools. Use when hosting private transactional email infrastructure on self-managed servers.

## Purpose
Commercial email services become extremely costly at high volume. Postal is a complete open-source mail delivery platform providing web UI, API, reputation tracking, and IP pool management.

## When to Use
- When executing postal open source mail server setup in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Postal Mail Server, Docker) cannot be provisioned.

## Supported Technologies
- Postal Mail Server
- Docker
- SMTP
- Linux

## Example Use Cases
### Self-Hosted High-Volume Email
Sending millions of transactional emails monthly with zero per-email vendor costs.

### Data Sovereignty Compliance
Ensuring sensitive customer emails never pass through third-party cloud aggregators.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Postal Mail Server) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/postalserver/postal
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

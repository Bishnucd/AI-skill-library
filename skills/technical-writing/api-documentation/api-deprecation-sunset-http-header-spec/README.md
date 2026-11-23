# Api Deprecation Sunset Http Header Spec

## Description
Documents and configures RFC 8594 Sunset and Deprecation HTTP response headers with migration timelines. Use when deprecating legacy endpoints transparently for external developers.

## Purpose
Silently turning off APIs damages customer trust. RFC 8594 defines standard Sunset: <date> and Deprecation: @<timestamp> HTTP response headers to inform API consumers programmatically.

## When to Use
- When executing api deprecation sunset http header spec in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RFC 8594 Sunset Header, Deprecation Header) cannot be provisioned.

## Supported Technologies
- RFC 8594 Sunset Header
- Deprecation Header
- API Lifecycle
- HTTP Standards

## Example Use Cases
### Legacy REST Endpoint Deprecation Warning
Emitting Sunset headers to alert enterprise customers to migrate to REST v2 before year-end.

### Automated Client SDK Deprecation Logging
SDKs reading Sunset headers in responses and logging warnings in developer application consoles.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RFC 8594 Sunset Header) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc8594
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

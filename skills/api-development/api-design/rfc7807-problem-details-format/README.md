# Rfc7807 Problem Details Format

## Description
Structures API error responses following RFC 7807 / RFC 9457 Problem Details for HTTP APIs. Use when providing machine-readable, standardized error envelopes across REST services.

## Purpose
Inconsistent error formats confuse API consumers. RFC 9457 defines standard fields (type, title, status, detail, instance) alongside domain-specific extension members for actionable errors.

## When to Use
- When executing rfc7807 problem details format in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RFC 9457, JSON) cannot be provisioned.

## Supported Technologies
- RFC 9457
- JSON
- HTTP Status Codes
- TypeScript

## Example Use Cases
### Uniform Error Handling in Clients
Enabling SDKs to parse error details consistently regardless of backend service.

### Actionable Form Validation Feedback
Returning exact field pointers (e.g. /data/attributes/email) for client UI highlighting.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RFC 9457) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc9457
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

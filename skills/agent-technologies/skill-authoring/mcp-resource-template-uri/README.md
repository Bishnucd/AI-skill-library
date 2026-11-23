# Mcp Resource Template Uri

## Description
Defines dynamic URI templates (RFC 6570) to expose parameterized data resources to agents via MCP. Use when exposing queryable database records or files to AI agents.

## Purpose
Resource templates allow agents to read dynamic, parameterized content (such as customer records or file paths) using structured URI schemes (e.g. postgres://db/customers/{id}).

## When to Use
- When executing mcp resource template uri in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Model Context Protocol, RFC 6570 URI Templates) cannot be provisioned.

## Supported Technologies
- Model Context Protocol
- RFC 6570 URI Templates
- Zod
- TypeScript

## Example Use Cases
### Database Record Exposing
Allowing AI agents to read customer CRM records on demand via uniform URIs.

### Dynamic Log File Inspection
Streaming server log files to agents via parameterized file URIs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Model Context Protocol) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://modelcontextprotocol.io/docs/concepts/resources
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

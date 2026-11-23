# Mcp Tool Definition Authoring

## Description
Authors standardized Model Context Protocol (MCP) tool, resource, and prompt definitions. Use when designing custom MCP servers to expose tools and context to AI agents.

## Purpose
The Model Context Protocol establishes an open standard for connecting AI agents to external tools and data sources. Proper server authoring requires structured capability negotiation.

## When to Use
- When executing mcp tool definition authoring in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (TypeScript, Model Context Protocol SDK) cannot be provisioned.

## Supported Technologies
- TypeScript
- Model Context Protocol SDK
- Node.js 18+
- Zod

## Example Use Cases
### Enterprise Tool Integration
Exposing internal database queries or microservice endpoints to AI IDEs.

### MCP App Development
Authoring interactive tool handlers that render generative UI components.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (TypeScript) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://modelcontextprotocol.io/introduction
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

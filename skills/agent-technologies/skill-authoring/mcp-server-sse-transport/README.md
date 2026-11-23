# Mcp Server Sse Transport

## Description
Configures Server-Sent Events (SSE) and HTTP POST transports for remote Model Context Protocol servers. Use when deploying centralized MCP tool servers in cloud environments.

## Purpose
SSE transport allows web and cloud AI clients to connect to remote MCP servers over HTTP, establishing a persistent unidirectional event stream for server messages with POST endpoints for client requests.

## When to Use
- When executing mcp server sse transport in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Model Context Protocol SDK, SSE) cannot be provisioned.

## Supported Technologies
- Model Context Protocol SDK
- SSE
- Express / FastAPI
- TypeScript

## Example Use Cases
### Cloud Tool Microservices
Hosting centralized enterprise tools accessible across distributed developer agents.

### Multi-Tenant Agent Gateways
Routing tool calls from multiple users to isolated backend tenant environments.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Model Context Protocol SDK) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://modelcontextprotocol.io/docs/concepts/transports
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

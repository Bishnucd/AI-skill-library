# Grpc Metadata Context Propagation

## Description
Propagates distributed tracing headers, authentication tokens, and tenant IDs across gRPC call contexts. Use when passing request metadata through microservice call chains.

## Purpose
gRPC metadata provides key-value pairs (analogous to HTTP headers) passed alongside RPC invocations, enabling cross-cutting concerns like tracing and authorization to travel seamlessly.

## When to Use
- When executing grpc metadata context propagation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (gRPC, Protocol Buffers) cannot be provisioned.

## Supported Technologies
- gRPC
- Protocol Buffers
- Go / Java / Python
- Context

## Example Use Cases
### Microservice Context Flow
Passing user session IDs across 6 internal backend services without modifying method arguments.

### Distributed Deadline Enforcement
Canceling downstream database queries when an upstream client HTTP request aborts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (gRPC) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://grpc.io/docs/guides/metadata/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

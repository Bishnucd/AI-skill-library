# Graphql Schema Stitching Federation

## Description
Designs federated GraphQL schemas using Apollo Federation v2 directives for distributed subgraphs. Use when architecting scalable GraphQL APIs across multiple backend microservices.

## Purpose
Apollo Federation allows multiple engineering teams to compose disparate subgraph services into a unified, high-performance GraphQL schema using @key, @shareable, and @external directives.

## When to Use
- When executing graphql schema stitching federation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GraphQL, Apollo Federation v2) cannot be provisioned.

## Supported Technologies
- GraphQL
- Apollo Federation v2
- TypeScript
- Node.js

## Example Use Cases
### Federated Supergraph Architecture
Unifying user, billing, and inventory microservices under one GraphQL gateway.

### Subgraph Schema Migration
Safely deprecating fields and transferring entity ownership across team subgraphs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GraphQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.apollographql.com/docs/federation/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Graphql Apollo Subgraph Federation

## Description
Designs modular Apollo Federation v2 subgraphs with @key and @shareable entity directives. Use when scaling GraphQL backends across multiple autonomous engineering teams.

## Purpose
Monolithic GraphQL schemas create deployment bottlenecks. Apollo Federation allows independent services to define subgraphs that compose into a unified supergraph gateway router.

## When to Use
- When executing graphql apollo subgraph federation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Apollo Federation v2, GraphQL Subgraphs) cannot be provisioned.

## Supported Technologies
- Apollo Federation v2
- GraphQL Subgraphs
- Entity Directives
- Microservices

## Example Use Cases
### Enterprise E-Commerce Supergraph
Composing Products, Inventory, Reviews, and Checkout subgraphs into a unified client GraphQL API.

### Independent Multi-Team Service Deployment
Allowing the billing team to ship schema updates without touching core identity services.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Apollo Federation v2) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.apollographql.com/docs/federation/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

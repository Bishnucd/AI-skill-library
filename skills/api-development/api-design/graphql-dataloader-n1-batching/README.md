# Graphql Dataloader N1 Batching

## Description
Eliminates GraphQL N+1 database query waterfalls using DataLoader batching and per-request caching. Use when optimizing nested GraphQL resolver performance.

## Purpose
Nested GraphQL queries naively execute separate database queries for every child entity, causing hundreds of SQL calls. DataLoader coalesces individual loads into single SQL WHERE IN queries.

## When to Use
- When executing graphql dataloader n1 batching in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GraphQL, DataLoader) cannot be provisioned.

## Supported Technologies
- GraphQL
- DataLoader
- Node.js
- PostgreSQL

## Example Use Cases
### E-commerce Product Feed Resolver
Fetching authors and reviews for 50 products in 2 database queries instead of 101.

### Social Network Feed Optimization
Resolving user profile avatars and relationship statuses across dense timeline feeds.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GraphQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/graphql/dataloader
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

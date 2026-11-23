# Database Query N1 Detection Bullet

## Description
Detects N+1 database queries in ORM models and serializers using Bullet and query listeners. Use when eliminating database query explosions in pull requests.

## Purpose
N+1 queries occur when an ORM queries a parent record and then executes a separate query for each child item in a loop. Tooling detects un-eager-loaded relationships before code deploys.

## When to Use
- When executing database query n1 detection bullet in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (N+1 Detection, Bullet) cannot be provisioned.

## Supported Technologies
- N+1 Detection
- Bullet
- ORM Optimization
- SQL Profiling

## Example Use Cases
### E-Commerce Order History Endpoint Speedup
Replacing 100 individual SQL item queries with a single batch join query, cutting latency by 90%.

### GraphQL Serializer N+1 Elimination
Using DataLoader batching to prevent GraphQL resolvers from executing individual database lookups.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (N+1 Detection) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/flyerhzm/bullet
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Graphql Complexity Depth Limiting

## Description
Calculates query complexity scores and restricts AST depth in GraphQL servers to prevent denial-of-service. Use when protecting public GraphQL APIs from malicious recursive queries.

## Purpose
Malicious clients can submit deeply nested recursive queries (e.g. author -> books -> author -> books) that exhaust server CPU and memory. Static AST analysis blocks abusive queries before execution.

## When to Use
- When executing graphql complexity depth limiting in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GraphQL, AST Validation) cannot be provisioned.

## Supported Technologies
- GraphQL
- AST Validation
- Node.js
- TypeScript

## Example Use Cases
### Public GraphQL Gateway Defense
Preventing external attackers from causing server out-of-memory crashes with cyclic queries.

### Resource Quota Management
Enforcing query complexity budgets based on consumer subscription tier.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GraphQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/slicknode/graphql-query-complexity
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

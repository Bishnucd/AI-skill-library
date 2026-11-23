# Openapi Mock Server Generation

## Description
Spins up automated mock API servers with synthetic schema responses directly from OpenAPI contracts. Use when enabling frontend teams to develop against API contracts before backend completion.

## Purpose
Frontend development often stalls waiting for backend APIs. Mock servers parse OpenAPI specifications and instantly serve realistic, schema-validated mock responses with latency simulation.

## When to Use
- When executing openapi mock server generation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Prism CLI, OpenAPI 3.1) cannot be provisioned.

## Supported Technologies
- Prism CLI
- OpenAPI 3.1
- Node.js
- Docker

## Example Use Cases
### Contract-First Parallel Development
Allowing web and mobile engineers to build screens against mocks while backend engineers write SQL.

### Automated Frontend Integration Tests
Running reliable E2E tests against local mock servers in isolated CI runners.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Prism CLI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://stoplight.io/open-source/prism
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

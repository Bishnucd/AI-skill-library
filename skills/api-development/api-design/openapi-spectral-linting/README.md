# Openapi Spectral Linting

## Description
Enforces corporate API style guides and OAS best practices using Spectral rulesets. Use when linting OpenAPI specifications for naming conventions, tags, and status codes.

## Purpose
Inconsistent API design across teams creates developer friction. Spectral automates linting rules for URL casings, error responses, description presence, and tag taxonomies.

## When to Use
- When executing openapi spectral linting in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Spectral CLI, OpenAPI 3.1) cannot be provisioned.

## Supported Technologies
- Spectral CLI
- OpenAPI 3.1
- Node.js
- YAML

## Example Use Cases
### API Style Governance
Ensuring 50+ microservice teams adhere to identical URL naming and error response conventions.

### Contract Quality Gate
Failing CI pipelines when an engineer forgets description text on new API fields.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Spectral CLI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://stoplight.io/open-source/spectral
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

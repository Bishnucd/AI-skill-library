# Spectral Openapi Custom Ruleset Authoring

## Description
Authors custom enterprise API style guides and linting rules using Stoplight Spectral. Use when enforcing consistent naming, description, and status code rules across API specs.

## Purpose
Inconsistent API specs lead to fragmented developer experiences. Spectral enables teams to define automated linting rules using JSONPath expressions to enforce corporate API style guides in CI.

## When to Use
- When executing spectral openapi custom ruleset authoring in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Spectral, API Linting) cannot be provisioned.

## Supported Technologies
- Spectral
- API Linting
- JSONPath
- OpenAPI Governance

## Example Use Cases
### Corporate API Description Enforcement
Failing CI if any API endpoint or request parameter is missing an English description string.

### Standardized Error Response Format Validation
Ensuring all 4xx/5xx responses reference the corporate RFC 7807 Problem Details schema.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Spectral) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.stoplight.io/docs/spectral/674b27b261c38-overview
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

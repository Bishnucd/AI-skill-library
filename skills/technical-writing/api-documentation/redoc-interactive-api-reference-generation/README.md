# Redoc Interactive Api Reference Generation

## Description
Generates clean, responsive three-panel API documentation references from OpenAPI files using Redoc. Use when building standalone, zero-maintenance API reference pages.

## Purpose
Redoc renders OpenAPI definitions into an elegant three-panel layout (navigation, documentation, code examples) with search, responsive mobile views, and zero backend server dependencies.

## When to Use
- When executing redoc interactive api reference generation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Redoc, OpenAPI Reference) cannot be provisioned.

## Supported Technologies
- Redoc
- OpenAPI Reference
- Three-Panel Layout
- API Docs

## Example Use Cases
### Microservice Internal API Documentation
Generating self-hosted API references automatically during microservice Docker container builds.

### Public Partner API Reference Portal
Providing enterprise partners with clean, printable reference documentation for all REST endpoints.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Redoc) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://redocly.com/docs/redoc/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

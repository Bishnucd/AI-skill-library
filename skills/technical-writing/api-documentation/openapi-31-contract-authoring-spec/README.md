# Openapi 31 Contract Authoring Spec

## Description
Authors comprehensive OpenAPI 3.1 specifications with complete JSON Schema, examples, and security schemes. Use when establishing design-first API contracts for developer portals.

## Purpose
OpenAPI 3.1 aligns fully with JSON Schema 2020-12, allowing complete modeling of complex types, webhooks, polymorphic schemas (oneOf, anyOf), and OAuth2/mTLS authentication schemes.

## When to Use
- When executing openapi 31 contract authoring spec in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OpenAPI 3.1, JSON Schema 2020-12) cannot be provisioned.

## Supported Technologies
- OpenAPI 3.1
- JSON Schema 2020-12
- API Design
- Documentation

## Example Use Cases
### Design-First API Contract Standardization
Authoring canonical API contracts to generate mock servers, SDKs, and developer documentation.

### Webhooks Event Payload Documentation
Documenting asynchronous outbound webhook events using OpenAPI 3.1 webhooks top-level objects.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OpenAPI 3.1) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://spec.openapis.org/oas/v3.1.0
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

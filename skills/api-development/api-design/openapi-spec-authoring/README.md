# OpenAPI Spec Authoring

## Description
Comprehensive guide and skill for designing, structuring, and validating OpenAPI 3.1 specifications.

## Purpose
Enables teams and AI agents to author production-ready REST API contracts adhering to RESTful standards, RFC 7807 problem details, and modern schema constraints.

## When to Use
- Starting a greenfield REST API project using contract-first engineering.
- Documenting existing endpoints to enable client SDK generation or mock servers.
- Establishing formal API contracts between frontend and backend engineering teams.

## When NOT to Use
- Designing GraphQL schemas or gRPC protocol buffer definitions.
- Quick internal scripts that do not require external integration contracts.

## Supported Technologies
- OpenAPI Specification 3.1 / 3.0
- Tooling: Redocly CLI, Spectral, Swagger UI, Prism Mock Server

## Dependencies
- Node.js or Python environment with `@stoplight/spectral-cli` or `redocly` installed.

## Example Use Cases
### Use Case 1: Core E-Commerce API Design
Defining the checkout and payment intent workflow with strict currency validation, idempotency key headers, and schema typing.

### Use Case 2: Multi-Tenant SaaS Contract
Modeling organization-scoped resources with RBAC scopes in OpenAPI `securitySchemes`.

## Usage Instructions
1. Establish base OpenAPI YAML metadata with servers and security schemes.
2. Draft paths with required path parameters, query parameters, and requestBody schemas.
3. Reference reusable entities in `components/schemas`.
4. Lint the resulting specification using `spectral lint openapi.yaml`.

## Limitations
- Does not automatically write the backend server implementation code.
- Highly dynamic, non-deterministic payload shapes require complex `oneOf` or `anyOf` declarations.

## Source and Attribution
- **Original Source:** OpenAPI Initiative & Stoplight Spectral Standard Rulesets
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

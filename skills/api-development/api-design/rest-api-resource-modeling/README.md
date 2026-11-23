# Rest Api Resource Modeling

## Description
Models RESTful resources, URL hierarchies, HTTP methods, and status codes following Richardson Maturity Level 2/3. Use when designing clean, predictable REST APIs for web services.

## Purpose
Predictable REST APIs rely on noun-based hierarchical resources, proper HTTP verbs (GET, POST, PUT, PATCH, DELETE), idempotent mutations, and consistent error envelopes.

## When to Use
- When executing rest api resource modeling in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (REST, HTTP/1.1 & HTTP/2) cannot be provisioned.

## Supported Technologies
- REST
- HTTP/1.1 & HTTP/2
- JSON API Spec
- OpenAPI 3.1

## Example Use Cases
### Microservice API Design
Defining clean, standard resource endpoints for new distributed backend services.

### Legacy API Normalization
Refactoring RPC-style URLs into standardized RESTful resource paths.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (REST) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://restfulapi.net/resource-naming/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

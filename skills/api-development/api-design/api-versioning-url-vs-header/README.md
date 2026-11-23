# Api Versioning Url Vs Header

## Description
Implements and transitions API versioning strategies across URL path, query parameter, and accept header variants. Use when managing lifecycle deprecation and breaking changes in APIs.

## Purpose
Evolving APIs without breaking existing mobile and third-party consumers requires deliberate versioning architecture, deprecation headers (Sunset, Deprecation), and migration pathways.

## When to Use
- When executing api versioning url vs header in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HTTP Headers, Routing Middleware) cannot be provisioned.

## Supported Technologies
- HTTP Headers
- Routing Middleware
- SemVer
- Express / FastAPI

## Example Use Cases
### Breaking Schema Evolution
Altering database representations while maintaining backwards compatibility for existing apps.

### Phased Endpoint Retirement
Broadcasting automated deprecation timelines to external developers via HTTP headers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HTTP Headers) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#versioning-a-restful-web-api
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Api Gateway Request Transformation

## Description
Configures API gateway header rewrites, path transformations, and query sanitization rules. Use when decoupling public client interfaces from internal microservice endpoints.

## Purpose
API gateways shield internal microservices by stripping sensitive client headers, injecting internal tenant metadata, and rewriting legacy URL paths to clean modern routes.

## When to Use
- When executing api gateway request transformation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (API Gateways (Kong, Envoy, Traefik), Lua / YAML) cannot be provisioned.

## Supported Technologies
- API Gateways (Kong, Envoy, Traefik)
- Lua / YAML
- HTTP

## Example Use Cases
### Microservice Internal Isolation
Ensuring internal microservices only trust cryptographic headers injected by the gateway.

### Legacy URL Routing Migration
Seamlessly redirecting legacy endpoint paths to modern microservice endpoints.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (API Gateways (Kong, Envoy, Traefik)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.konghq.com/hub/kong-inc/request-transformer/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

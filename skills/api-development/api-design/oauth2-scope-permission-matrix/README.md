# Oauth2 Scope Permission Matrix

## Description
Designs granular OAuth 2.0 resource scopes and role-based access control (RBAC) permission matrices. Use when securing API endpoints with least-privilege token access.

## Purpose
Monolithic API permissions allow compromised tokens to access all data. Granular scopes structured as resource:action (e.g. orders:read, billing:write) restrict tokens to specific capabilities.

## When to Use
- When executing oauth2 scope permission matrix in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OAuth 2.0, JWT Scopes) cannot be provisioned.

## Supported Technologies
- OAuth 2.0
- JWT Scopes
- RBAC
- JSON

## Example Use Cases
### Third-Party Developer Apps
Allowing partner apps to read customer analytics without granting permission to alter billing.

### Machine-to-Machine Token Security
Restricting automated microservice tokens strictly to their own operational domains.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OAuth 2.0) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://datatracker.ietf.org/doc/html/rfc6749#section-3.3
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

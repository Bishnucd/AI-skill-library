# Api Broken Object Level Authorization Bola Audit

## Description
Audits API endpoints for Broken Object Level Authorization (BOLA/IDOR) by testing access with cross-tenant IDs. Use when detecting unauthorized data access vulnerabilities in APIs.

## Purpose
BOLA occurs when endpoints accept an ID parameter (e.g. /api/orders/1234) without validating whether the authenticated user owns that record, allowing users to view other tenants' private data.

## When to Use
- When executing api broken object level authorization bola audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OWASP API1:2023, IDOR Testing) cannot be provisioned.

## Supported Technologies
- OWASP API1:2023
- IDOR Testing
- Burp Suite / Python
- REST

## Example Use Cases
### Multi-Tenant Data Leakage Prevention
Guaranteeing that enterprise customer A can never view records belonging to customer B.

### Pre-Deployment Authorization Audits
Automating multi-account regression tests in CI to verify ownership checks on all endpoints.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OWASP API1:2023) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

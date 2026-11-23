# Error Code Troubleshooting Guide Authoring

## Description
Writes structured HTTP error code catalogs with root cause explanations and exact remediation steps. Use when reducing developer support ticket volume for failed API requests.

## Purpose
Vague error messages ("Bad Request") waste developer hours. A comprehensive error catalog documents machine-readable error codes, root causes, sample error payloads, and step-by-step fixes.

## When to Use
- When executing error code troubleshooting guide authoring in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Error Documentation, Troubleshooting Guides) cannot be provisioned.

## Supported Technologies
- Error Documentation
- Troubleshooting Guides
- Developer Support
- RFC 7807

## Example Use Cases
### Payment Gateway Error Troubleshooting Portal
Explaining bank decline codes (insufficient funds, expired card, fraud trigger) with customer advice.

### OAuth2 Authentication Error Catalog
Documenting invalid_grant and unauthorized_client errors with exact token renewal steps.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Error Documentation) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

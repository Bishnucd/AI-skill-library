# Swagger Ui Customization Docker Deploy

## Description
Deploys and themes interactive Swagger UI API explorers with OAuth2 sandbox authentication. Use when embedding branded, self-hosted API testing consoles in developer portals.

## Purpose
Swagger UI renders OpenAPI specs into interactive web consoles where developers can authorize with OAuth2 and execute live API calls. Custom CSS theming aligns it with corporate branding.

## When to Use
- When executing swagger ui customization docker deploy in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Swagger UI, Docker) cannot be provisioned.

## Supported Technologies
- Swagger UI
- Docker
- OAuth2 Sandbox
- Branded Docs

## Example Use Cases
### Self-Hosted Corporate API Explorer
Deploying an authenticated Swagger UI explorer on an internal developer portal behind SSO.

### Branded SaaS API Sandbox Console
Theming Swagger UI to match company brand colors for external customer API exploration.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Swagger UI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://swagger.io/tools/swagger-ui/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

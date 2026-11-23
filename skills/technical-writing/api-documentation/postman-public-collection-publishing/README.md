# Postman Public Collection Publishing

## Description
Publishes interactive, forkable public Postman API collections with pre-configured environments. Use when allowing developers to explore APIs in their local Postman client with one click.

## Purpose
A "Run in Postman" button imports a pre-configured collection and environment into a developer Postman app, letting them start firing authenticated API requests in 30 seconds.

## When to Use
- When executing postman public collection publishing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Postman Collections, Public Workspaces) cannot be provisioned.

## Supported Technologies
- Postman Collections
- Public Workspaces
- Run in Postman Button
- Developer Tools

## Example Use Cases
### API Product Launch Enablement
Enabling 10,000 hackathon developers to test an API instantly by clicking a Run in Postman button.

### Partner Integration Sandbox Testing
Sharing a pre-configured collection containing test payment scenarios and mock credentials.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Postman Collections) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://learning.postman.com/docs/publishing-your-api/documenting-your-api/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

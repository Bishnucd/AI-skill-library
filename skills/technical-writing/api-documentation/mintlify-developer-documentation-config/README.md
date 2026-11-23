# Mintlify Developer Documentation Config

## Description
Configures interactive developer documentation with modern navigation and API playgrounds with Mintlify. Use when building developer documentation with built-in API testing consoles.

## Purpose
Mintlify provides a modern documentation platform featuring interactive API playgrounds, OpenAPI auto-sync, analytics, and responsive navigation out of the box via mint.json.

## When to Use
- When executing mintlify developer documentation config in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Mintlify, API Playground) cannot be provisioned.

## Supported Technologies
- Mintlify
- API Playground
- Developer Docs
- MDX

## Example Use Cases
### Fintech API Documentation Platform
Providing financial developers with live sandbox API consoles to test payment charges directly in docs.

### AI Developer Platform Getting Started Docs
Publishing quickstart guides with interactive Python and TypeScript code snippets and visual cards.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Mintlify) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://mintlify.com/docs
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

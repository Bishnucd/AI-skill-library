# Skill Input Schema Validation

## Description
Defines and validates rigorous JSON Schema specifications for agent tool parameters and skill invocations. Use when authoring tool interfaces to guarantee deterministic parameter passing.

## Purpose
Agent skills fail silently or hallucinate arguments when parameter boundaries are ambiguous. Formal JSON Schema definitions with strict typing and regex constraints ensure reliable model calling.

## When to Use
- When executing skill input schema validation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (JSON Schema 2020-12, Pydantic V2) cannot be provisioned.

## Supported Technologies
- JSON Schema 2020-12
- Pydantic V2
- Ajv
- TypeScript

## Example Use Cases
### Tool Schema Standardization
Publishing uniform tool schemas across heterogeneous agent platforms.

### Type-Safe Agent Execution
Validating inbound tool call payloads before invoking host environment binaries.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (JSON Schema 2020-12) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://json-schema.org/draft/2020-12/release-notes
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

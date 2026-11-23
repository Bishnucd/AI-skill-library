# Env Config Schema Validation Pydantic

## Description
Validates environment variables and application configurations at startup using Pydantic Settings and Zod. Use when preventing runtime crashes caused by missing configuration variables.

## Purpose
Applications crashing in production due to a typo in an environment variable name waste engineering time. Validating configuration schemas at process boot halts startup immediately if variables are missing.

## When to Use
- When executing env config schema validation pydantic in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Pydantic Settings, Zod) cannot be provisioned.

## Supported Technologies
- Pydantic Settings
- Zod
- Environment Validation
- Fail-Fast

## Example Use Cases
### Production Container Boot Fail-Fast Guard
Halting Docker container deployment instantly if DATABASE_URL or JWT_SECRET are absent.

### Type-Safe Application Settings Access
Providing IDE autocomplete and strict typing for all configuration variables across the codebase.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Pydantic Settings) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.pydantic.dev/latest/concepts/pydantic_settings/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

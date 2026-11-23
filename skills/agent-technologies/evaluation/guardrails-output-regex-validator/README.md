# Guardrails Output Regex Validator

## Description
Validates and enforces structured formatting, PII absence, and regex schema rules using Guardrails AI. Use when preventing malformed or policy-violating agent responses.

## Purpose
Guardrails AI provides runtime validation for LLM outputs, verifying structural constraints, checking PII sanitization, and triggering automatic re-asking on validation failure.

## When to Use
- When executing guardrails output regex validator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Guardrails AI, Python 3.10+) cannot be provisioned.

## Supported Technologies
- Guardrails AI
- Python 3.10+
- Pydantic
- Regex

## Example Use Cases
### PII Leakage Prevention
Scrubbing social security numbers and API keys from agent responses before emission.

### Strict Output Enforcement
Guaranteeing emitted JSON complies with downstream relational database constraints.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Guardrails AI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/guardrails-ai/guardrails
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

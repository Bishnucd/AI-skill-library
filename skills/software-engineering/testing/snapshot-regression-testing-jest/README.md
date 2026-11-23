# Snapshot Regression Testing Jest

## Description
Captures and verifies serialized JSON, API, and DOM output stability using Jest and Vitest snapshot assertions. Use when preventing unintended regressions in complex serialized objects.

## Purpose
Snapshot tests serialize data structures into human-readable files, comparing future test runs against the stored baseline to instantly detect accidental structural or textual regressions.

## When to Use
- When executing snapshot regression testing jest in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Snapshot Testing, Jest / Vitest) cannot be provisioned.

## Supported Technologies
- Snapshot Testing
- Jest / Vitest
- DOM Regression
- Serialization

## Example Use Cases
### GraphQL API Response Schema Stability
Ensuring that complex nested GraphQL query responses maintain exact JSON structure across updates.

### Markdown AST Parser Output Verification
Verifying that a Markdown parsing engine produces identical Abstract Syntax Trees across versions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Snapshot Testing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://jestjs.io/docs/snapshot-testing
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

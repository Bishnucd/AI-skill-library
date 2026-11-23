# Property Based Testing Hypothesis

## Description
Generates thousands of randomized edge-case inputs to test invariant mathematical properties using Hypothesis or fast-check. Use when testing algorithms and data parsers against extreme inputs.

## Purpose
Example-based tests only verify inputs the developer thought of. Property-based testing generates hundreds of randomized edge cases (empty strings, unicode, max integers) to prove invariants hold.

## When to Use
- When executing property based testing hypothesis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python Hypothesis, TypeScript fast-check) cannot be provisioned.

## Supported Technologies
- Python Hypothesis
- TypeScript fast-check
- Property-Based Testing

## Example Use Cases
### Parser & Serialization Testing
Verifying that custom JSON/binary serializers handle every conceivable byte input without crashing.

### Cryptographic Function Verification
Proving mathematical invariants hold true across all arbitrary input key spaces.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python Hypothesis) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://hypothesis.readthedocs.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

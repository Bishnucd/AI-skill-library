# Hypothesis Property Based Testing Python

## Description
Generates thousands of edge-case test inputs automatically using property-based testing with Hypothesis. Use when testing algorithmic correctness against unexpected boundary conditions.

## Purpose
Example-based tests only verify inputs the developer thought of. Hypothesis generates thousands of diverse inputs (extreme values, Unicode, empty lists) and shrinks failing cases to the minimal bug.

## When to Use
- When executing hypothesis property based testing python in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Hypothesis, Property-Based Testing) cannot be provisioned.

## Supported Technologies
- Hypothesis
- Property-Based Testing
- Fuzzing
- Python

## Example Use Cases
### Data Compression Codec Invariant Testing
Verifying that compressing and decompressing arbitrary byte sequences always returns identical output.

### Financial Currency Conversion Exchange Invariant
Proving that currency conversions never produce fractional penny rounding leakages across all amounts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Hypothesis) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://hypothesis.readthedocs.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

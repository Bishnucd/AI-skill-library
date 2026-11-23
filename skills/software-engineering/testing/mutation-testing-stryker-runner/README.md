# Mutation Testing Stryker Runner

## Description
Evaluates test suite effectiveness by injecting deliberate code mutations and checking if test suites detect them. Use when validating that high code coverage actually catches real bugs.

## Purpose
100% line coverage means nothing if assertions are weak or missing. Mutation testing mutates code (+ to -, > to <) and measures the percentage of mutations caught ("killed") by tests.

## When to Use
- When executing mutation testing stryker runner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Stryker Mutator, TypeScript / JavaScript) cannot be provisioned.

## Supported Technologies
- Stryker Mutator
- TypeScript / JavaScript
- Jest
- Mutation Score

## Example Use Cases
### High-Stakes Financial Algorithm Verification
Verifying test suite resilience for interest calculation and currency conversion logic.

### Assertion Quality Auditing
Exposing useless tests that execute code lines but lack assertions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Stryker Mutator) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://stryker-mutator.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

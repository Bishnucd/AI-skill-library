# Stryker Mutation Testing Runner

## Description
Measures test suite thoroughness by mutating source code syntax trees and asserting mutant kills with Stryker. Use when verifying that test assertions actually catch bugs.

## Purpose
Code coverage only proves lines were executed, not that assertions verified correctness. Stryker modifies code (inverts booleans, changes operators) to verify that tests fail and kill mutants.

## When to Use
- When executing stryker mutation testing runner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Stryker Mutator, Mutation Testing) cannot be provisioned.

## Supported Technologies
- Stryker Mutator
- Mutation Testing
- Test Quality
- JavaScript / TypeScript

## Example Use Cases
### Critical Billing Engine Test Verification
Ensuring that discount calculation logic has a 95%+ mutation score so tax errors are caught.

### Medical Device Software Test Thoroughness
Proving that software safety assertions fail immediately if algorithmic boundary conditions change.

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

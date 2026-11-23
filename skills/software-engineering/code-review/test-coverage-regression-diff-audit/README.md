# Test Coverage Regression Diff Audit

## Description
Enforces that new lines of code in pull requests meet minimum 80% branch coverage using Codecov diffs. Use when preventing test coverage degradation over time.

## Purpose
Total project coverage metrics mask regressions because adding 1,000 untested lines only drops overall coverage by 0.5%. Diff coverage measures exclusively the lines changed in the pull request.

## When to Use
- When executing test coverage regression diff audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Codecov, Diff Coverage) cannot be provisioned.

## Supported Technologies
- Codecov
- Diff Coverage
- Branch Coverage
- CI/CD Gate

## Example Use Cases
### Continuous Test Culture Enforcement
Preventing developers from shipping complex new feature code without accompanying unit and integration tests.

### Legacy Codebase Incremental Hardening
Gradually improving a 30% legacy test codebase by requiring 90% test coverage on all newly submitted PRs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Codecov) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.codecov.com/docs/commit-status
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

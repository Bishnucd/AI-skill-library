# Test Pyramid Coverage Assessment

## Description
Audits test suite composition across unit, integration, and end-to-end layers to maintain healthy test pyramid ratios. Use when rebalancing slow, fragile test suites toward fast unit tests.

## Purpose
Over-relying on slow, brittle E2E tests creates frustrating CI bottlenecks. Evaluating the test pyramid ensures 70% unit tests, 20% integration tests, and 10% E2E tests for fast, reliable feedback.

## When to Use
- When executing test pyramid coverage assessment in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Test Pyramid, Coverage Tools (Istanbul, Coverage.py)) cannot be provisioned.

## Supported Technologies
- Test Pyramid
- Coverage Tools (Istanbul, Coverage.py)
- Markdown

## Example Use Cases
### CI Pipeline Acceleration
Slashing 45-minute CI build times down to 8 minutes by shifting tests to unit layers.

### Flaky Test Elimination
Replacing unreliable browser automation tests with deterministic API integration tests.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Test Pyramid) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://martinfowler.com/articles/practical-test-pyramid.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

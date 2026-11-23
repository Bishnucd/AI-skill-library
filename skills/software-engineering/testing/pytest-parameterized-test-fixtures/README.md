# Pytest Parameterized Test Fixtures

## Description
Writes DRY, expressive parameterized tests across complex input-output matrices using Pytest fixtures. Use when testing algorithms with diverse data scenarios without code duplication.

## Purpose
Writing separate test functions for every input variant creates massive code duplication. @pytest.mark.parametrize runs a single test function across a matrix of input-output tuples.

## When to Use
- When executing pytest parameterized test fixtures in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Pytest, Parameterized Testing) cannot be provisioned.

## Supported Technologies
- Pytest
- Parameterized Testing
- Fixtures
- Python

## Example Use Cases
### Email Address Regex Validation Suite
Testing 50 valid and invalid RFC email formats in a single concise 10-line test function.

### Financial Tax Rate Bracket Testing
Validating income tax bracket calculations across 20 distinct income levels and filing statuses.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Pytest) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.pytest.org/en/stable/how-to/parametrize.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

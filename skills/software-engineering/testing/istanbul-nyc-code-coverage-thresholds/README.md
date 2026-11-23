# Istanbul Nyc Code Coverage Thresholds

## Description
Measures line, branch, and statement test coverage and enforces CI thresholds with NYC/Istanbul. Use when setting automated code coverage minimums across JavaScript test suites.

## Purpose
Istanbul instruments JavaScript source code with execution counters, generating detailed HTML and terminal coverage reports that measure line, function, statement, and branch coverage.

## When to Use
- When executing istanbul nyc code coverage thresholds in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Istanbul / NYC, Code Coverage) cannot be provisioned.

## Supported Technologies
- Istanbul / NYC
- Code Coverage
- CI Thresholds
- JavaScript / Node.js

## Example Use Cases
### Open-Source Library Release Quality Gate
Enforcing 90% branch coverage on all pull requests to maintain rock-solid open-source reliability.

### Enterprise Test Coverage Tracking
Generating LCOV reports uploaded to SonarQube to monitor team testing health trends.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Istanbul / NYC) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://istanbul.js.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

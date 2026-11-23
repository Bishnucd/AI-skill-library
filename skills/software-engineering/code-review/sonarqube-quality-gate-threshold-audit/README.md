# Sonarqube Quality Gate Threshold Audit

## Description
Enforces static code analysis, security hotspots, and code smell quality gates with SonarQube in PRs. Use when automating quality gates and preventing technical debt in CI.

## Purpose
SonarQube inspects source code pull requests for security vulnerabilities, bugs, and technical debt, blocking merges when new code fails coverage, duplication, or security thresholds.

## When to Use
- When executing sonarqube quality gate threshold audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SonarQube, Static Code Analysis) cannot be provisioned.

## Supported Technologies
- SonarQube
- Static Code Analysis
- Quality Gates
- CI/CD

## Example Use Cases
### Automated PR Security Gate
Catching SQL injection risks and hardcoded credentials in pull requests before human review.

### Technical Debt Prevention
Enforcing that developers refactor complex code smells whenever submitting new feature branches.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SonarQube) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.sonarsource.com/sonarqube/latest/user-guide/quality-gates/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

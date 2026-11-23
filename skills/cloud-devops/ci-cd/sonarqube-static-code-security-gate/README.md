# Sonarqube Static Code Security Gate

## Description
Integrates automated static code analysis, security vulnerability scanning, and quality gates in CI using SonarQube. Use when blocking pull requests that introduce security flaws or technical debt.

## Purpose
SonarQube inspects source code for security vulnerabilities, bugs, and maintainability issues. Configuring strict Quality Gates in CI automatically blocks merging PRs with critical issues.

## When to Use
- When executing sonarqube static code security gate in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SonarQube / SonarCloud, SonarScanner CLI) cannot be provisioned.

## Supported Technologies
- SonarQube / SonarCloud
- SonarScanner CLI
- SAST
- GitHub Actions

## Example Use Cases
### Automated Code Review Quality Gate
Ensuring junior developer PRs meet strict corporate security and maintainability standards.

### Technical Debt Tracking
Tracking and driving down legacy codebase debt through measurable remediation milestones.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SonarQube / SonarCloud) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.sonarsource.com/sonarqube/latest/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

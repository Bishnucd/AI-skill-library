# Openssf Scorecard Security Auditing

## Description
Audits open-source repositories against OpenSSF Scorecard supply chain security criteria (branch protection, pin-dependencies). Use when assessing third-party dependency security posture.

## Purpose
OpenSSF Scorecard runs automated checks on open-source repositories, rating security hygiene (branch protection, code reviews, fuzzing, dangerous workflow patterns) on a 0-10 scale.

## When to Use
- When executing openssf scorecard security auditing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OpenSSF Scorecard, Supply Chain Security) cannot be provisioned.

## Supported Technologies
- OpenSSF Scorecard
- Supply Chain Security
- SLSA
- GitHub API

## Example Use Cases
### Third-Party Dependency Vetting
Evaluating whether a newly proposed open-source library meets corporate security standards.

### Internal Repository Hardening
Scoring all internal company repositories against OpenSSF best practices in CI.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OpenSSF Scorecard) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/ossf/scorecard
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

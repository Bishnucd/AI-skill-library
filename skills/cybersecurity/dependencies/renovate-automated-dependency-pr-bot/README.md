# Renovate Automated Dependency Pr Bot

## Description
Configures Renovate Bot for automated, grouped dependency updates with automerge and vulnerability patching. Use when keeping dependencies current and eliminating stale package rot.

## Purpose
Unmaintained dependencies accumulate security CVEs over time. Renovate creates pull requests for new package releases, running CI tests and auto-merging safe patch updates automatically.

## When to Use
- When executing renovate automated dependency pr bot in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Renovate Bot, JSON / JSON5) cannot be provisioned.

## Supported Technologies
- Renovate Bot
- JSON / JSON5
- GitHub / GitLab
- Semantic Versioning

## Example Use Cases
### Automated Security Patching
Opening and merging security patch PRs within hours of upstream library disclosures.

### Developer Maintenance Offloading
Eliminating manual weekly package upgrade chores through automated CI testing.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Renovate Bot) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.renovatebot.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

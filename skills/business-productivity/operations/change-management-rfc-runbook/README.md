# Change Management Rfc Runbook

## Description
Structures Request for Change (RFC) documents detailing risk impact, rollback plans, and maintenance windows. Use when proposing and approving production infrastructure changes.

## Purpose
Uncontrolled production changes cause over 70% of enterprise outages. An RFC requires engineers to specify exact commands, impact radius, peer reviewers, and verified rollback procedures.

## When to Use
- When executing change management rfc runbook in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ITIL v4, Change Advisory Board (CAB)) cannot be provisioned.

## Supported Technologies
- ITIL v4
- Change Advisory Board (CAB)
- Runbooks
- Markdown

## Example Use Cases
### Production Database Upgrades
Securing Change Advisory Board approval for major database engine version upgrades.

### Core Network Switch Cutover
Executing zero-downtime router replacements with pre-tested rollback steps.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ITIL v4) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://itil-docs.com/blogs/change-management/itil-change-management-process
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

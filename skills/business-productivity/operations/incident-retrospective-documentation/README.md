# Incident Retrospective Documentation

## Description
Structures blameless incident post-mortem and retrospective reports with root cause analyses (5 Whys). Use when analyzing operational outages to prevent recurrence.

## Purpose
Blameless post-mortems foster operational resilience. A structured retrospective captures incident timeline, user impact, root causes, what went well, what went poorly, and corrective action items.

## When to Use
- When executing incident retrospective documentation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Markdown, SRE Best Practices) cannot be provisioned.

## Supported Technologies
- Markdown
- SRE Best Practices
- Jira / Linear
- Git

## Example Use Cases
### Production Outage Post-Mortem
Documenting database failover incidents and communicating findings to leadership.

### Compliance Incident Tracking
Fulfilling SOC2 and ISO27001 requirements for operational incident reporting.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Markdown) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://sre.google/sre-book/postmortem-culture/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

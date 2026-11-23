# Business Continuity Disaster Plan

## Description
Authors business continuity and disaster recovery (BCDR) runbooks with recovery time/point objectives (RTO/RPO). Use when preparing operational contingency plans for critical business systems.

## Purpose
Disaster recovery runbooks define actionable protocols for sustaining essential operations during cloud region failures, ransomware attacks, or infrastructure blackouts.

## When to Use
- When executing business continuity disaster plan in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Markdown, ISO 22301) cannot be provisioned.

## Supported Technologies
- Markdown
- ISO 22301
- Cloud Architecture
- Runbooks

## Example Use Cases
### Multi-Region Failover Runbook
Guiding engineering teams during unplanned cloud datacenter outages.

### Enterprise Audit Readiness
Satisfying regulatory requirements for operational resiliency and DR testing.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Markdown) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.ready.gov/business-continuity-plan
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

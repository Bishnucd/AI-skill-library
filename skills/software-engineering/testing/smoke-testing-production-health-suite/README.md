# Smoke Testing Production Health Suite

## Description
Executes post-deployment smoke test suites against live production endpoints to verify critical user journeys. Use when validating zero-downtime deployments before routing full traffic.

## Purpose
Smoke tests run a minimal set of critical end-to-end checks against freshly deployed production instances, verifying database connectivity, auth flows, and core payment paths before traffic cutover.

## When to Use
- When executing smoke testing production health suite in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Smoke Testing, Post-Deployment Verification) cannot be provisioned.

## Supported Technologies
- Smoke Testing
- Post-Deployment Verification
- Synthetic Monitoring
- Health Checks

## Example Use Cases
### Blue-Green Deployment Validation Gate
Verifying green cluster health with synthetic transactions before switching production DNS router.

### Continuous Synthetic Production Monitoring
Running smoke tests every 5 minutes from 10 global regions to verify external uptime.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Smoke Testing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Smoke_testing_(software)
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Health Check Liveness Readiness Probes

## Description
Designs Kubernetes-compliant /healthz and /readyz endpoints with deep database and cache dependency probes. Use when ensuring zero-downtime rolling deployments in container orchestrators.

## Purpose
Liveness probes check if a process is frozen (requiring restart). Readiness probes check if dependencies (database, Redis) are reachable (ready to accept traffic). Confusing them causes cascading outages.

## When to Use
- When executing health check liveness readiness probes in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Health Checks, Liveness / Readiness Probes) cannot be provisioned.

## Supported Technologies
- Health Checks
- Liveness / Readiness Probes
- Kubernetes
- High Availability

## Example Use Cases
### Zero-Downtime Rolling Update Orchestration
Ensuring Kubernetes only routes live traffic to new pods after database migrations and caches are warmed.

### Deadlock Process Auto-Recovery
Automatically restarting frozen Node.js worker containers when event loop lag causes liveness probes to fail.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Health Checks) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

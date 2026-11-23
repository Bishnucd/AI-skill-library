# Service Catalog Slm Contract Spec

## Description
Defines internal IT and engineering service catalog entries with explicit SLA, SLO, and SLI contracts. Use when establishing service level management between internal enterprise teams.

## Purpose
Internal teams suffer from conflicting expectations without formal agreements. A service catalog documents service ownership, API interfaces, availability targets (SLOs), and support escalation tiers.

## When to Use
- When executing service catalog slm contract spec in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Google SRE Framework, SLI/SLO/SLA) cannot be provisioned.

## Supported Technologies
- Google SRE Framework
- SLI/SLO/SLA
- Service Catalog
- Markdown

## Example Use Cases
### Internal Platform Engineering
Publishing formal availability guarantees for an internal Kubernetes cluster service.

### Microservice Ownership Registry
Ensuring every microservice has an identified owning team and on-call escalation path.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Google SRE Framework) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://sre.google/sre-book/service-level-objectives/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

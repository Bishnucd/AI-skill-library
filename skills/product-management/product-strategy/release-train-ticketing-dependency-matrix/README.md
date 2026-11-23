# Release Train Ticketing Dependency Matrix

## Description
Coordinates cross-team architectural dependencies and delivery sequencing using Agile Release Train dependency matrices. Use when orchestrating synchronized releases across multi-team programs.

## Purpose
Multi-team software initiatives fail when Team A blocks Team B on uncommunicated API changes. Dependency matrices identify cross-team requirements early to sequence sprints without blocking.

## When to Use
- When executing release train ticketing dependency matrix in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Agile Release Train (ART), Dependency Mapping) cannot be provisioned.

## Supported Technologies
- Agile Release Train (ART)
- Dependency Mapping
- Program Management
- SAFe

## Example Use Cases
### Fintech Mobile and Core Banking Release Coordination
Aligning mobile frontend squad releases with core backend ledger database schema deployments.

### Cloud Platform Microservice Migration
Coordinating 8 engineering teams migrating from legacy monolith to distributed Kubernetes microservices.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Agile Release Train (ART)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://scaledagileframework.com/agile-release-train/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

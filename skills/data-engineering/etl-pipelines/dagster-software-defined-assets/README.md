# Dagster Software Defined Assets

## Description
Builds declarative data platforms based on Software-Defined Assets and partition schedules using Dagster. Use when structuring data pipelines around assets rather than monolithic tasks.

## Purpose
Dagster rethinks data orchestration by treating data assets (tables, ML models, files) as the primary abstraction, tracking lineage, compute dependencies, and freshness policies.

## When to Use
- When executing dagster software defined assets in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Dagster, Python) cannot be provisioned.

## Supported Technologies
- Dagster
- Python
- Asset-Oriented Orchestration
- Data Mesh

## Example Use Cases
### Enterprise Data Warehouse Asset Lineage
Tracking end-to-end lineage from raw staging tables to executive BI reporting marts.

### Partitioned Historical Backfills
Backfilling 3 years of daily aggregated revenue partitions across a distributed cluster.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Dagster) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.dagster.io/concepts/assets/software-defined-assets
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

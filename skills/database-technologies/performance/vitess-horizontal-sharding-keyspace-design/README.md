# Vitess Horizontal Sharding Keyspace Design

## Description
Designs Vitess keyspaces and VSchema sharding keys to scale MySQL horizontally across distributed clusters. Use when scaling MySQL beyond single-server write capacity.

## Purpose
Vitess powers massive MySQL deployments by distributing database rows across multiple shard instances using VSchema routing rules and distributed VTGate proxies.

## When to Use
- When executing vitess horizontal sharding keyspace design in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Vitess, MySQL Sharding) cannot be provisioned.

## Supported Technologies
- Vitess
- MySQL Sharding
- VSchema
- Horizontal Scaling

## Example Use Cases
### Hyper-Growth Fintech MySQL Scaling
Sharding a monolithic 15TB MySQL database across 16 database shards with zero application query rewrites.

### Multi-Tenant Data Isolation
Routing high-volume enterprise customer data to dedicated physical database shards.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Vitess) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://vitess.io/docs/concepts/sharding/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

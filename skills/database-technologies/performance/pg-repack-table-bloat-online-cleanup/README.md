# Pg Repack Table Bloat Online Cleanup

## Description
Removes table and index bloat in PostgreSQL without exclusive table locks using pg_repack. Use when reclaiming disk space and restoring sequential scan performance on active databases.

## Purpose
Standard VACUUM FULL locks tables completely. pg_repack creates a temporary table, copies live tuples, applies incremental changes via triggers, and swaps tables in a millisecond lock.

## When to Use
- When executing pg repack table bloat online cleanup in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PostgreSQL, pg_repack) cannot be provisioned.

## Supported Technologies
- PostgreSQL
- pg_repack
- Bloat Cleanup
- Zero Downtime Maintenance

## Example Use Cases
### Reclaiming 200GB Bloat from High-Churn Table
Compacting heavily updated queue and session tables without interrupting active user traffic.

### B-Tree Index Physical Defragmentation
Rebuilding degraded primary key indexes to restore index-scan locality and cache efficiency.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PostgreSQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://reorg.github.io/pg_repack/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

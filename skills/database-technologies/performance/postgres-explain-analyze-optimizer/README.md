# Postgres Explain Analyze Optimizer

## Description
Analyzes query execution plans using PostgreSQL EXPLAIN (ANALYZE, BUFFERS) to eliminate sequential scans and expensive joins. Use when diagnosing slow relational database queries.

## Purpose
Slow queries often stem from missing indexes, inaccurate table statistics, or catastrophic nested loop joins. Analyzing EXPLAIN BUFFERS execution plans identifies exact disk I/O bottlenecks.

## When to Use
- When executing postgres explain analyze optimizer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PostgreSQL, EXPLAIN ANALYZE) cannot be provisioned.

## Supported Technologies
- PostgreSQL
- EXPLAIN ANALYZE
- pg_stat_statements
- SQL

## Example Use Cases
### Slow Query Remediation
Optimizing high-traffic endpoints whose response times are dominated by slow SQL queries.

### Index Effectiveness Auditing
Removing unused or duplicate indexes that waste disk space and slow down write operations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PostgreSQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.postgresql.org/docs/current/using-explain.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Pg Stat Statements Slow Query Audit

## Description
Identifies performance bottlenecks and expensive queries in PostgreSQL using pg_stat_statements. Use when auditing slow database queries and optimizing cache hit ratios.

## Purpose
pg_stat_statements tracks execution statistics of all SQL queries executed against a PostgreSQL server, revealing queries consuming the most cumulative CPU, I/O, and buffer time.

## When to Use
- When executing pg stat statements slow query audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PostgreSQL, pg_stat_statements) cannot be provisioned.

## Supported Technologies
- PostgreSQL
- pg_stat_statements
- Query Optimization
- Database Performance

## Example Use Cases
### Production PostgreSQL Bottleneck Audit
Isolating the top 5 queries responsible for 80% of database CPU utilization.

### Index Effectiveness Verification
Confirming that a newly deployed index reduced average query execution time from 400ms to 2ms.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PostgreSQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.postgresql.org/docs/current/pgstatstatements.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

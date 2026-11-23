# Sql Window Functions Running Aggregates

## Description
Calculates rolling moving averages, cumulative year-to-date totals, and rankings using SQL window functions. Use when authoring analytical SQL transformations without self-joins.

## Purpose
Self-joins for calculating running totals are slow and unreadable. SQL window functions (SUM() OVER (...), LAG(), DENSE_RANK()) compute moving averages and row comparisons in a single efficient pass.

## When to Use
- When executing sql window functions running aggregates in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SQL Window Functions, OVER (PARTITION BY ... ORDER BY ...)) cannot be provisioned.

## Supported Technologies
- SQL Window Functions
- OVER (PARTITION BY ... ORDER BY ...)
- PostgreSQL
- BigQuery

## Example Use Cases
### Daily Revenue Moving Averages
Smoothing out weekly revenue seasonality with clean 7-day rolling average calculations.

### Leaderboard Ranking Queries
Ranking top 3 sales reps within each regional territory in a single SQL query.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SQL Window Functions) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.postgresql.org/docs/current/tutorial-window.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

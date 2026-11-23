# query-performance-tuning

## What it does

Diagnoses slow SQL by reading an actual execution plan, locating the dominant cost, and testing
one hypothesis at a time. Distinguishes missing indexes from bad statistics, sort spills,
N+1 patterns, and lock contention, and verifies each fix against the original result set and
under concurrency.

## Why it exists

"Add an index" is the default response to a slow query, and it frequently does nothing —
because the real problem is a row-estimate error, a function wrapping an indexed column, or 400
queries issued in a loop. Reading `actual rows` against estimated rows finds the cause in
minutes and avoids accumulating indexes that slow down every write.

## When to use

- A query or endpoint exceeds its latency budget.
- A plan shows a sequential scan on a large table.
- An index was added with no improvement.
- Performance degraded after data growth.

## When not to use

- Application-level caching strategy or capacity planning.
- Schema design from scratch.
- Queries on a dataset too small to show realistic plans.

## Requirements

- Database access with permission to run `EXPLAIN ANALYZE`.
- Realistic parameter values and a production-shaped dataset.
- The application code path that issues the query.

## How to use

1. Provide the exact SQL and its parameters.
2. The agent captures the plan with buffers and identifies the dominant node.
3. It states one hypothesis and proposes one change.
4. It re-measures and keeps the change only if it helps.
5. It reports before/after, verification, and write-path impact.

## Example

```
Use query-performance-tuning on this dashboard query — 4.2s p95 on Postgres 16.
```

Result: an expression index replacing a function-wrapped predicate, 4.2s → 38ms, identical
result set, and a measured 3% insert cost.

## Limitations

- Advice is engine-specific; the skill asks for the engine and version first.
- Cannot reproduce production concurrency from a single session.
- Does not redesign the data model; it flags when a summary table is the real answer.
- Plan estimates can mislead on highly skewed data; the skill reports both plans.

## Source and attribution

Originally authored for Community List. Plan-reading terminology follows PostgreSQL
`EXPLAIN` documentation; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).

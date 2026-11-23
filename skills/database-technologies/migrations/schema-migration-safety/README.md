# schema-migration-safety

## What it does

Plans schema changes as a sequence of independently deployable steps, with a lock analysis per
statement, a batched and resumable backfill, an explicit rollback for each step, and a
verification query set. Handles renames, type changes, new constraints, and drops without
taking the table offline.

## Why it exists

Most migration incidents are not syntax errors. They are a `CREATE INDEX` that blocks writes
for four minutes, a rename that breaks the previous app version still running on other pods, or
a backfill that locks the table for an hour. Expand-and-contract plus explicit lock reasoning
turns those into planned, reversible steps.

## When to use

- Any schema change on a table serving live traffic.
- Renaming, retyping, or dropping a column.
- Adding a constraint or index to a populated table.
- Reviewing a migration in a pull request.

## When not to use

- Greenfield databases with no data and no live clients.
- Purely additive changes on a small, low-traffic table.
- Data-only corrections that do not change schema.

## Requirements

- Database engine and version.
- Table row count and approximate write rate.
- Deployment model (rolling, blue-green, or stop-the-world).
- A production-shaped copy for timing.

## How to use

1. Describe the change and the table's size and traffic.
2. The agent classifies the risk and proposes the step sequence.
3. It names the lock and estimated duration for each statement.
4. It writes the backfill loop, the rollback, and verification queries.
5. It recommends a rehearsal on a production-shaped copy before deploy.

## Example

```
Use schema-migration-safety to rename users.name to full_name on Postgres 16, 12M rows, rolling deploys.
```

Result: five deploys (expand, dual-write, backfill, switch reads, contract), `lock_timeout`
set, batched backfill with a progress query, and a rollback per step.

## Limitations

- Lock behaviour is engine- and version-specific; estimates are not guarantees.
- Cannot measure real timing without a production-shaped copy.
- Does not write application dual-write code, only the migration plan and SQL.
- Rollback for a dropped column requires a backup; the skill states the data-loss window.

## Source and attribution

Originally authored for Community List. Expand-and-contract is a widely used zero-downtime
pattern; lock-mode details follow PostgreSQL documentation conventions. No third-party skill
content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).

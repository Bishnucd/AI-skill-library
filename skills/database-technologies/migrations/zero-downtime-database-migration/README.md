# Zero Downtime Database Migration

## Description
Executes expand-and-contract zero-downtime database schema migrations for relational databases. Use when altering database columns or tables without locking tables or taking downtime.

## Purpose
Direct column renames or removals lock tables and break running application code. The expand-contract pattern creates new columns, writes to both during a transition phase, backfills data, and prunes old columns.

## When to Use
- When executing zero downtime database migration in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PostgreSQL / MySQL, Flyway / Liquibase) cannot be provisioned.

## Supported Technologies
- PostgreSQL / MySQL
- Flyway / Liquibase
- SQL
- Python

## Example Use Cases
### High-Volume Production Migrations
Renaming critical columns in tables with 100M+ rows without acquiring exclusive table locks.

### Continuous Delivery Deployments
Ensuring blue-green application rollouts never crash due to mismatched schema versions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PostgreSQL / MySQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://martinfowler.com/bliki/ParallelRun.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

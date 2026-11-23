# Cockroachdb Online Schema Change Pipeline

## Description
Executes distributed, non-blocking online schema changes on CockroachDB clusters. Use when adding columns, indexes, and constraints to distributed SQL databases without table locks.

## Purpose
CockroachDB runs schema changes asynchronously across distributed nodes using multi-version concurrency control (MVCC), guaranteeing non-blocking reads and writes throughout the migration.

## When to Use
- When executing cockroachdb online schema change pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CockroachDB, Distributed SQL) cannot be provisioned.

## Supported Technologies
- CockroachDB
- Distributed SQL
- Online Schema Changes
- Multi-Region

## Example Use Cases
### Global Multi-Region Distributed Index Creation
Building secondary indexes on multi-region tables without pausing global customer transactions.

### Non-Blocking Foreign Key Addition
Adding foreign key validation constraints across partitioned distributed tables.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CockroachDB) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.cockroachlabs.com/docs/stable/online-schema-changes
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

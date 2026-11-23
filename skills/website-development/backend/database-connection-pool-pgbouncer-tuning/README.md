# Database Connection Pool Pgbouncer Tuning

## Description
Tunes PgBouncer transaction pooling, pool modes, and max client connections for PostgreSQL. Use when scaling PostgreSQL to thousands of concurrent application connections.

## Purpose
PostgreSQL forks a heavy OS process for every direct client connection, exhausting memory at 500 connections. PgBouncer sits in front, multiplexing 10,000 clients over a pool of 50 DB connections.

## When to Use
- When executing database connection pool pgbouncer tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PgBouncer, PostgreSQL) cannot be provisioned.

## Supported Technologies
- PgBouncer
- PostgreSQL
- Connection Pooling
- Backend Infrastructure

## Example Use Cases
### Serverless Lambda Connection Exhaustion Prevention
Preventing 1,000 ephemeral AWS Lambda functions from overwhelming PostgreSQL with connection storms.

### High-Concurrency Web App Scaling
Allowing 5,000 concurrent web client connections while keeping database memory utilization flat.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PgBouncer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.pgbouncer.org/config.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

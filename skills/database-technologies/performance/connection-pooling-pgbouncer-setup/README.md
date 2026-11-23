# Connection Pooling Pgbouncer Setup

## Description
Configures PgBouncer connection pooling in transaction mode to manage thousands of client connections to PostgreSQL. Use when preventing connection exhaustion on PostgreSQL databases.

## Purpose
PostgreSQL forks a new operating system process per connection, consuming ~10MB memory each. PgBouncer multiplexes thousands of incoming client connections onto a small pool of backend connections.

## When to Use
- When executing connection pooling pgbouncer setup in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PgBouncer, PostgreSQL) cannot be provisioned.

## Supported Technologies
- PgBouncer
- PostgreSQL
- TCP / Unix Sockets
- Linux

## Example Use Cases
### Serverless Database Scaling
Allowing thousands of concurrent AWS Lambda functions to connect to PostgreSQL safely.

### Database CPU Load Reduction
Eliminating CPU overhead caused by high connection churn in web applications.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PgBouncer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.pgbouncer.org/usage.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

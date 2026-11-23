# Trino Distributed Sql Federation

## Description
Executes federated ANSI SQL queries across heterogeneous data stores using Trino. Use when joining tables across S3 object storage, PostgreSQL, and MySQL in a single SQL query.

## Purpose
Trino is an MPP distributed SQL query engine that queries data where it lives without data movement, joining tables across disparate data lakes, relational databases, and NoSQL engines.

## When to Use
- When executing trino distributed sql federation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Trino, Distributed SQL) cannot be provisioned.

## Supported Technologies
- Trino
- Distributed SQL
- Federated Queries
- Data Virtualization

## Example Use Cases
### Cross-Database Customer 360 Query
Joining historical S3 transaction logs with live PostgreSQL customer profile tables.

### Data Lake Migration Validation
Running automated reconciliation queries comparing legacy Oracle data against new Delta tables.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Trino) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://trino.io/docs/current/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

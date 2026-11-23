# Duckdb Analytical Aggregation

## Description
Executes high-performance in-process columnar SQL queries directly against Parquet and CSV files using DuckDB. Use when querying analytical datasets without deploying heavyweight data warehouses.

## Purpose
DuckDB is an embedded columnar analytical engine that queries gigabytes of Parquet files in seconds on local memory, eliminating the latency and cost of spinning up cloud data warehouses.

## When to Use
- When executing duckdb analytical aggregation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (DuckDB, Python / Node.js) cannot be provisioned.

## Supported Technologies
- DuckDB
- Python / Node.js
- Parquet
- SQL

## Example Use Cases
### Serverless Data Pipelines
Running complex analytical aggregations inside ephemeral AWS Lambda functions.

### Local Data Exploration
Querying 50GB Parquet datasets interactively on a developer laptop in seconds.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (DuckDB) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://duckdb.org/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

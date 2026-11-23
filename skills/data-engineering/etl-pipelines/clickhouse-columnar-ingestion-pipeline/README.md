# Clickhouse Columnar Ingestion Pipeline

## Description
Configures high-throughput batch vector ingestion into ClickHouse columnar MergeTree engines. Use when ingesting millions of event telemetry records per second with real-time analytics.

## Purpose
ClickHouse is a columnar DBMS capable of processing billions of rows per second. Proper ingestion leverages batching, buffer tables, and optimized primary key ordering in MergeTree tables.

## When to Use
- When executing clickhouse columnar ingestion pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ClickHouse, Columnar Database) cannot be provisioned.

## Supported Technologies
- ClickHouse
- Columnar Database
- MergeTree Engine
- High-Throughput Ingestion

## Example Use Cases
### Ad-Tech Real-Time Impression Analytics
Ingesting 500,000 ad impression events per second with sub-100ms analytics query latency.

### Application Telemetry APM Storage
Storing billions of distributed tracing spans with massive column-level compression ratios.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ClickHouse) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Apache Iceberg Table Compaction

## Description
Manages Apache Iceberg lakehouse table maintenance: small file compaction, snapshot expiration, and metadata cleanup. Use when maintaining high-performance analytical lakehouse tables.

## Purpose
Streaming ingestion into lakehouses creates thousands of tiny Parquet files, degrading query performance. Regular table compaction merges small files and cleans orphaned snapshots.

## When to Use
- When executing apache iceberg table compaction in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Apache Iceberg, Apache Spark / Trino) cannot be provisioned.

## Supported Technologies
- Apache Iceberg
- Apache Spark / Trino
- Parquet
- AWS S3

## Example Use Cases
### Lakehouse Performance Tuning
Restoring fast scan speeds on tables degraded by frequent streaming inserts.

### Cloud Storage Cost Reduction
Reclaiming terabytes of obsolete snapshot storage in cloud S3 buckets.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Apache Iceberg) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://iceberg.apache.org/docs/latest/maintenance/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

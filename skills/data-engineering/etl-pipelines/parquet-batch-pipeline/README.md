# Parquet Batch Pipeline

## Description
Production instructions and operational patterns for transforming raw batch data into partitioned, compressed Apache Parquet datasets.

## Purpose
Enables data engineers and autonomous agents to build reproducible, memory-bounded ETL pipelines that feed modern data warehouses and query engines.

## When to Use
- Converting transactional row-based data (CSV, JSON, NDJSON) into columnar format for analytical querying.
- Preparing datasets for DuckDB, Snowflake, ClickHouse, Apache Spark, or AWS Athena.
- Optimizing storage costs and query scan speeds via columnar compression (Snappy/ZSTD).

## When NOT to Use
- Real-time streaming applications with sub-second latency requirements (use Kafka or event streaming).
- Frequently updated transactional rows requiring random single-record lookups (use transactional OLTP engines).

## Supported Technologies
- Storage Format: Apache Parquet, Apache Arrow
- Libraries: PyArrow, Polars, DuckDB, Pandas
- Storage: Local filesystem, Amazon S3, Google Cloud Storage, Azure Data Lake

## Dependencies
- Python 3.9+ with `pyarrow` or `polars` installed.

## Example Use Cases
### Use Case 1: Ingesting Web Analytics Logs
Reading 50GB of daily compressed JSON server logs, normalizing IP addresses and timestamps, and writing clean daily Parquet files partitioned by `date` and `country`.

### Use Case 2: Financial Transaction Archival
Converting historical ledger CSVs into ZSTD-compressed Parquet archives with strict decimal precision.

## Usage Instructions
1. Define explicit target schema with PyArrow fields.
2. Ingest input data in streaming chunks.
3. Apply validations and transformations in memory.
4. Export partitioned Parquet datasets using Snappy compression.

## Limitations
- Parquet files are immutable; updates require full file rewrites or Delta/Iceberg table management layers.

## Source and Attribution
- **Original Source:** Apache Arrow and Apache Parquet Technical Standards
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

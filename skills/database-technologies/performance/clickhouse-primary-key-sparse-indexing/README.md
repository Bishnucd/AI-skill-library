# Clickhouse Primary Key Sparse Indexing

## Description
Optimizes ClickHouse sparse primary key ordering and index granularity for high-speed columnar filtering. Use when designing high-speed analytical queries over billions of rows.

## Purpose
ClickHouse creates sparse primary index marks every 8,192 rows (index_granularity). Designing ORDER BY tuples from lowest to highest cardinality enables massive granule skipping.

## When to Use
- When executing clickhouse primary key sparse indexing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ClickHouse, Sparse Indexing) cannot be provisioned.

## Supported Technologies
- ClickHouse
- Sparse Indexing
- MergeTree
- Columnar Performance

## Example Use Cases
### Web Analytics Granule Skipping Optimization
Configuring ORDER BY (site_id, date, page_path) to skip 99% of disk blocks when querying single sites.

### Network Flow Log Range Filtering
Designing primary keys allowing instant time-range and protocol filtering across terabytes of flow logs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ClickHouse) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://clickhouse.com/docs/en/optimize/sparse-primary-indexes
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

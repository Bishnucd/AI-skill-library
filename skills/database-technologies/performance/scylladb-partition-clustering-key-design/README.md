# Scylladb Partition Clustering Key Design

## Description
Designs optimal partition keys and clustering columns for ScyllaDB and Apache Cassandra. Use when eliminating hot spots and tombstone warnings in high-write NoSQL systems.

## Purpose
ScyllaDB achieves millions of IOPS per node when data is evenly distributed. Proper partition key design avoids node hotspots, while clustering keys organize data on disk for fast range queries.

## When to Use
- When executing scylladb partition clustering key design in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ScyllaDB, Apache Cassandra) cannot be provisioned.

## Supported Technologies
- ScyllaDB
- Apache Cassandra
- Data Modeling
- NoSQL Performance

## Example Use Cases
### IoT Telemetry NoSQL Architecture
Designing device telemetry tables that ingest 100,000 events/sec without hot partition throttling.

### Chat Message History Storage
Structuring room_id partition keys with message_id clustering keys for instant paging.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ScyllaDB) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.scylladb.com/stable/architecture/architecture-glossary.html#partition-key
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

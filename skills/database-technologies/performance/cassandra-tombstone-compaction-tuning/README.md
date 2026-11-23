# Cassandra Tombstone Compaction Tuning

## Description
Manages Cassandra and ScyllaDB tombstone thresholds and compaction strategies to eliminate read timeouts. Use when handling high delete volumes in distributed column families.

## Purpose
Deletes in Cassandra write tombstone markers. Scanning thousands of tombstones during reads triggers ReadFailureException. Proper compaction strategies purge tombstones aggressively.

## When to Use
- When executing cassandra tombstone compaction tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Apache Cassandra, ScyllaDB) cannot be provisioned.

## Supported Technologies
- Apache Cassandra
- ScyllaDB
- Compaction Strategies
- Tombstone Management

## Example Use Cases
### Expiring Time-to-Live (TTL) Session Data
Applying TimeWindowCompactionStrategy on TTL-expiring token tables to drop entire SSTables at once.

### Preventing Tombstone Read Failures
Tuning compaction on message queue tables receiving 50,000 deletes per minute to avoid query timeouts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Apache Cassandra) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://cassandra.apache.org/doc/latest/cassandra/operating/compaction/index.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

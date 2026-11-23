# Cockroachdb Follower Reads Latency Tuning

## Description
Tunes distributed CockroachDB read latency using Follower Reads with bounded staleness. Use when serving low-latency global reads without routing traffic to the Raft leaseholder.

## Purpose
In distributed SQL, routing all reads to the Raft range leaseholder incurs cross-region network latency. Follower reads let local replicas serve reads at AS OF SYSTEM TIME with bounded staleness.

## When to Use
- When executing cockroachdb follower reads latency tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CockroachDB, Follower Reads) cannot be provisioned.

## Supported Technologies
- CockroachDB
- Follower Reads
- Distributed SQL
- Latency Optimization

## Example Use Cases
### Global E-Commerce Product Catalog
Serving product page details from local European replicas while database master resides in US East.

### Real-Time Leaderboard Read Distribution
Relieving leaseholder bottleneck on high-traffic public gaming leaderboards.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CockroachDB) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.cockroachlabs.com/docs/stable/follower-reads
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

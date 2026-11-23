# Elasticsearch Shard Sizing Index Lifecycle

## Description
Configures Elasticsearch and OpenSearch primary shard sizing and Index Lifecycle Management (ILM). Use when optimizing cluster stability, search speed, and storage utilization.

## Purpose
Oversharding wastes JVM heap memory while undersharding causes search bottlenecks. Optimal setups maintain shard sizes between 20GB and 50GB and automate rollover via ILM policies.

## When to Use
- When executing elasticsearch shard sizing index lifecycle in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Elasticsearch, OpenSearch) cannot be provisioned.

## Supported Technologies
- Elasticsearch
- OpenSearch
- Index Lifecycle Management (ILM)
- Cluster Architecture

## Example Use Cases
### Enterprise Logging Cluster Stabilization
Preventing JVM OutOfMemory crashes across a 50-node logging cluster by eliminating 10,000 micro-shards.

### Cost-Optimized Cold Log Archival
Automatically freezing 90-day-old indices into cold snapshot-backed storage tier.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Elasticsearch) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.elastic.co/guide/en/elasticsearch/reference/current/size-your-shards.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

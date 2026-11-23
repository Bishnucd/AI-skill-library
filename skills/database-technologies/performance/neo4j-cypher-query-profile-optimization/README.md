# Neo4j Cypher Query Profile Optimization

## Description
Profiles and tunes Cypher graph database queries using PROFILE and EXPLAIN in Neo4j. Use when eliminating Cartesian products and reducing db hits in complex graph traversals.

## Purpose
Graph queries can inadvertently trigger exponential traversals. Running PROFILE inspects the exact Cypher execution plan, revealing NodeByLabelScan, Expand(All), and excessive db hits.

## When to Use
- When executing neo4j cypher query profile optimization in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Neo4j, Cypher Query Language) cannot be provisioned.

## Supported Technologies
- Neo4j
- Cypher Query Language
- Graph Database
- Query Profiling

## Example Use Cases
### Fraud Ring Graph Traversal Optimization
Optimizing 6-degree circular transaction detection from 12 seconds down to 45 milliseconds.

### Social Recommendation Feed Speedup
Tuning friend-of-friend recommendation queries by replacing full graph scans with indexed lookups.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Neo4j) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://neo4j.com/docs/cypher-manual/current/query-tuning/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

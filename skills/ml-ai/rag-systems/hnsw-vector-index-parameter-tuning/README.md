# Hnsw Vector Index Parameter Tuning

## Description
Tunes Hierarchical Navigable Small World (HNSW) index graph parameters (M, efConstruction, efSearch) for optimal recall vs latency. Use when configuring production vector databases.

## Purpose
HNSW builds multi-layer proximity graphs. Tuning M (connections per element), efConstruction (build depth), and efSearch (query search scope) achieves >98% recall with sub-5ms latency.

## When to Use
- When executing hnsw vector index parameter tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HNSW, Vector Search) cannot be provisioned.

## Supported Technologies
- HNSW
- Vector Search
- ANN Benchmarks
- Qdrant / Milvus / pgvector

## Example Use Cases
### High-Concurrency E-Commerce Product Search
Tuning efSearch to deliver 2,000 QPS at under 3ms p95 latency across 10 million vector items.

### High-Accuracy Medical Research Literature Search
Maximizing efConstruction and efSearch to achieve 99.5% Recall@10 on critical clinical trials.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HNSW) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/nmslib/hnswlib
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

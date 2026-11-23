# Reciprocal Rank Fusion Hybrid Search

## Description
Combines sparse BM25 and dense vector search results using the Reciprocal Rank Fusion (RRF) algorithm. Use when blending lexical and semantic rankings without manual score normalization.

## Purpose
Dense cosine distances and sparse BM25 scores operate on incompatible scales. RRF scores documents based purely on their reciprocal ranking positions across both retrieval passes.

## When to Use
- When executing reciprocal rank fusion hybrid search in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Reciprocal Rank Fusion (RRF), Hybrid Search) cannot be provisioned.

## Supported Technologies
- Reciprocal Rank Fusion (RRF)
- Hybrid Search
- BM25 + Vector
- Information Retrieval

## Example Use Cases
### Enterprise Wiki Search Engine
Retrieving relevant pages matching both technical jargon terms and broad natural language queries.

### Customer Support Knowledge Base Retrieval
Blending exact error code matches with semantic troubleshooting descriptions seamlessly.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Reciprocal Rank Fusion (RRF)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking#reciprocal-rank-fusion-rrf
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

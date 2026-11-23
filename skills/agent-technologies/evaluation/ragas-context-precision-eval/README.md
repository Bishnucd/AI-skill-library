# Ragas Context Precision Eval

## Description
Calculates Context Precision and Context Recall metrics using Ragas to isolate retrieval failure points. Use when optimizing vector search chunking and retrieval parameters.

## Purpose
Context Precision evaluates whether all ground-truth relevant items in the retrieved context are ranked at the top. Measuring it isolates whether RAG issues are caused by retrieval ranking.

## When to Use
- When executing ragas context precision eval in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Ragas) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Ragas
- LangChain
- NumPy

## Example Use Cases
### Vector Store Chunk Size Optimization
Experimenting with 256 vs 512 vs 1024 token chunk sizes to maximize context precision.

### Reranker Quality Verification
Proving that adding a cross-encoder reranker improves top-3 retrieval precision.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/explodinggradients/ragas
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

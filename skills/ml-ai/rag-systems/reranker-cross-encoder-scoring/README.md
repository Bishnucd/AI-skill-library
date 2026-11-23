# Reranker Cross Encoder Scoring

## Description
Scores and reorders candidate retrieval chunks using a cross-encoder reranking model (e.g. BGE-Reranker, Cohere). Use when improving precision of top-k chunks passed to LLM generation.

## Purpose
Bi-encoder vector search computes cosine distance on compressed embeddings, losing fine token interactions. Cross-encoder rerankers jointly encode query and chunk pairs, yielding vastly superior relevance scores.

## When to Use
- When executing reranker cross encoder scoring in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, CrossEncoder) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- CrossEncoder
- Sentence-Transformers
- HuggingFace

## Example Use Cases
### Legal Case Law Retrieval
Distinguishing subtle legal precedents that dense vector search ranks too low in candidate pools.

### Token Window Optimization
Maximizing the information density of LLM context windows by passing only top-relevance chunks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://huggingface.co/BAAI/bge-reranker-large
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

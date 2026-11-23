# Contextual Compression Llm Reranking

## Description
Extracts only query-relevant sentences from retrieved passages using contextual compression and LLM reranking. Use when reducing prompt token clutter and eliminating distracting noise.

## Purpose
Retrieved 1,000-token chunks often contain only 50 tokens of relevant information. Contextual compression prunes irrelevant sentences and reranks passages before prompt construction.

## When to Use
- When executing contextual compression llm reranking in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Contextual Compression, LLM Reranker) cannot be provisioned.

## Supported Technologies
- Contextual Compression
- LLM Reranker
- Token Pruning
- LangChain

## Example Use Cases
### Long-Form Legal Contract Analysis
Extracting only the two relevant sentences from a 40-page indemnification clause.

### Medical Case History Summarization
Isolating specific medication dosage history from multi-page clinical hospital visit notes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Contextual Compression) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://python.langchain.com/docs/how_to/contextual_compression/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

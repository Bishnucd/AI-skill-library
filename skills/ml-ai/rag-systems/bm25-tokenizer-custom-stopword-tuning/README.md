# Bm25 Tokenizer Custom Stopword Tuning

## Description
Configures BM25 sparse keyword retrieval with domain-specific tokenization, stemmers, and stopword lists. Use when fine-tuning sparse lexical search engines in hybrid RAG systems.

## Purpose
Dense vector search often fails on exact acronyms, part numbers, and code tokens. BM25 sparse retrieval provides exact lexical matching weighted by term frequency and inverse document frequency.

## When to Use
- When executing bm25 tokenizer custom stopword tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Rank-BM25, NLTK / SpaCy) cannot be provisioned.

## Supported Technologies
- Rank-BM25
- NLTK / SpaCy
- Lexical Search
- Tokenization

## Example Use Cases
### Hardware Part Catalog Part Number Search
Retrieving precise resistor and IC part numbers (e.g., LM317T) where dense embeddings drift.

### Internal Medical Acronym Search
Matching exact clinical acronyms (e.g., COPD, CHF) without semantic fuzzy confusion.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Rank-BM25) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/dorianbrown/rank_bm25
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

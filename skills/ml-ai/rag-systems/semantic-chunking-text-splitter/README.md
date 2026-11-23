# Semantic Chunking Text Splitter

## Description
Partitions documents into semantically coherent chunks based on embedding similarity distance between adjacent sentences. Use when preparing unstructured text documents for vector search indexing.

## Purpose
Fixed-character chunking splits sentences in half and tears paragraphs apart. Semantic chunking computes embedding distance between adjacent sentences and splits text only at natural topic transitions.

## When to Use
- When executing semantic chunking text splitter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, LangChain) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- LangChain
- Sentence-Transformers
- NumPy

## Example Use Cases
### Technical Manual Ingestion
Preserving complete step-by-step troubleshooting procedures within single vector chunks.

### Contract Clause Segmentation
Ensuring entire legal indemnification clauses remain intact without arbitrary character splits.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://python.langchain.com/docs/modules/data_connection/document_transformers/semantic-chunker/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

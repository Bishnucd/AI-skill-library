# Hallucination Factual Consistency Eval

## Description
Measures factual consistency and citation faithfulness between source documents and agent-generated claims. Use when verifying factual accuracy and source alignment in document analysis workflows.

## Purpose
Factual consistency evaluation decomposes generated answers into atomic factual claims and verifies whether each claim is entailed by the retrieved source context chunks.

## When to Use
- When executing hallucination factual consistency eval in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Ragas) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Ragas
- NLTK
- Spacy

## Example Use Cases
### Legal & Medical Verification
Ensuring summarization agents never inject unsupported assertions into high-stakes reports.

### RAG Faithfulness Scoring
Monitoring retrieval-augmented generation pipelines for ungrounded hallucination drift.

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

# Ragas Synthetic Evaluation Metrics

## Description
Evaluates RAG retrieval and generation quality using Ragas metrics (Faithfulness, Answer Relevance, Context Recall). Use when benchmarking and tuning RAG retrieval and generation accuracy.

## Purpose
Ragas provides reference-free evaluation metrics for RAG architectures. It quantifies hallucination (faithfulness), query alignment (answer relevance), and retrieval recall (context precision).

## When to Use
- When executing ragas synthetic evaluation metrics in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Ragas) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Ragas
- LangChain / LlamaIndex
- OpenAI

## Example Use Cases
### RAG Pipeline Regression Testing
Verifying that changing an embedding model does not degrade context recall.

### Hallucination Benchmark Auditing
Scoring production response faithfulness to ensure zero fabricated medical or legal statements.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.ragas.io/en/latest/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

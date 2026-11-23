# Trulens Feedback Evaluator

## Description
Evaluates the RAG triad (groundedness, answer relevance, context relevance) using TruLens feedback functions. Use when measuring hallucination and retrieval relevance in agents.

## Purpose
TruLens instruments agent applications with feedback functions that objectively measure the RAG triad to isolate whether failures occur during retrieval or generation.

## When to Use
- When executing trulens feedback evaluator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, TruLens) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- TruLens
- LangChain / LlamaIndex
- SQLite / Postgres

## Example Use Cases
### RAG Triad Auditing
Identifying whether agent inaccuracies stem from poor vector retrieval or model hallucination.

### Real-Time Telemetry Logging
Logging production feedback scores to database backends for continuous monitoring.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/truera/trulens
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

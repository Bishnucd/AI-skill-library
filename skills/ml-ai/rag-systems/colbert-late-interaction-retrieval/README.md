# Colbert Late Interaction Retrieval

## Description
Indexes and searches documents using ColBERT token-level late interaction algorithms via PLAID engine. Use when maximizing search precision without the high latency of cross-encoders.

## Purpose
ColBERT produces token-level contextual embeddings and evaluates similarity using MaxSim operators, achieving the precision of cross-encoders with the speed of vector ANN indexes.

## When to Use
- When executing colbert late interaction retrieval in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ColBERTv2, PLAID Engine) cannot be provisioned.

## Supported Technologies
- ColBERTv2
- PLAID Engine
- Late Interaction
- Token Embeddings

## Example Use Cases
### Fine-Grained Legal Document Retrieval
Matching specific legal clauses where single keywords invert legal liability meaning.

### Technical API Documentation Search
Differentiating between similar programming language method signatures with exact token matching.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ColBERTv2) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/stanford-futuredata/ColBERT
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

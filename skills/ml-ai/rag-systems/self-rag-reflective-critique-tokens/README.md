# Self Rag Reflective Critique Tokens

## Description
Implements Self-RAG reflection tokens ([Retrieve], [IsRel], [IsSup], [IsUse]) for autonomous self-correcting RAG. Use when preventing hallucinations through adaptive retrieval and critique.

## Purpose
Self-RAG trains models to generate special reflection tokens to decide dynamically whether retrieval is needed, judge retrieved passage relevance, and critique factual consistency.

## When to Use
- When executing self rag reflective critique tokens in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Self-RAG, Reflection Tokens) cannot be provisioned.

## Supported Technologies
- Self-RAG
- Reflection Tokens
- Adaptive Retrieval
- Hallucination Mitigation

## Example Use Cases
### Hallucination-Resistant Financial Advisory Chatbot
Validating that every emitted financial claim is explicitly supported by retrieved quarterly reports.

### Adaptive Search Query Optimizer
Bypassing slow external vector queries when the LLM already contains certain parametric knowledge.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Self-RAG) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/AkariAsai/self-rag
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

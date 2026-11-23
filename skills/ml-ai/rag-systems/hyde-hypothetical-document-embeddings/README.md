# Hyde Hypothetical Document Embeddings

## Description
Generates hypothetical answer passages using an LLM to dramatically improve zero-shot dense vector retrieval. Use when user queries are short, ambiguous, or question-phrased.

## Purpose
Short questions often lack semantic overlap with long, detailed document passages. HyDE prompts an LLM to hallucinate a hypothetical answer, embedding that passage to retrieve actual matching documents.

## When to Use
- When executing hyde hypothetical document embeddings in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HyDE, Dense Retrieval) cannot be provisioned.

## Supported Technologies
- HyDE
- Dense Retrieval
- Query Expansion
- LangChain / LlamaIndex

## Example Use Cases
### Complex Diagnostic Troubleshooting Search
Retrieving deep server troubleshooting runbooks from brief error symptom user queries.

### Legal Case Law Precedent Discovery
Matching short layperson legal questions with dense, formal court decision passages.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HyDE) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://arxiv.org/abs/2212.10496
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

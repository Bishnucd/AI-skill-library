# Parent Child Hierarchical Chunk Retrieval

## Description
Indexes small, precise child text chunks for retrieval while feeding broad parent sections to the LLM context. Use when balancing retrieval precision with rich contextual synthesis.

## Purpose
Small chunks yield tight vector search matches but lack context for generation. Hierarchical chunking indexes granular child chunks (e.g., 100 tokens) linked to parent blocks (e.g., 1000 tokens).

## When to Use
- When executing parent child hierarchical chunk retrieval in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Hierarchical Chunking, Parent-Child Node Parser) cannot be provisioned.

## Supported Technologies
- Hierarchical Chunking
- Parent-Child Node Parser
- LlamaIndex
- Vector Search

## Example Use Cases
### Regulatory Compliance Manual Q&A
Retrieving specific sub-paragraph rule clauses while passing the full overarching section to the model.

### Long-Form Narrative Book Analysis
Finding specific quotes while supplying the entire chapter scene to preserve character context.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Hierarchical Chunking) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.llamaindex.ai/en/stable/examples/node_postprocessor/HierarchicalNodeParser/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

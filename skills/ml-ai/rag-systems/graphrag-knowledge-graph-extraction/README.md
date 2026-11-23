# Graphrag Knowledge Graph Extraction

## Description
Extracts entities, relationships, and hierarchical community summaries from text corpora using Microsoft GraphRAG. Use when answering complex holistic questions across large document sets.

## Purpose
Microsoft GraphRAG combines LLM-driven knowledge graph extraction with hierarchical graph clustering algorithms to synthesize broad corpus-level themes that vector similarity search misses.

## When to Use
- When executing graphrag knowledge graph extraction in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Microsoft GraphRAG, Knowledge Graphs) cannot be provisioned.

## Supported Technologies
- Microsoft GraphRAG
- Knowledge Graphs
- Hierarchical Summarization
- Python

## Example Use Cases
### Corporate Merger Due Diligence Synthesis
Answering comprehensive questions regarding litigation risks across 5,000 scanned legal contracts.

### Scientific Domain Literature Survey
Summarizing competing scientific hypotheses across 20 years of published immunology research.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Microsoft GraphRAG) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://microsoft.github.io/graphrag/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Agentic Rag Adaptive Query Routing

## Description
Routes user queries dynamically between vector databases, SQL data warehouses, and web search using LLM tool routing. Use when queries require diverse data sources or multi-step logic.

## Purpose
Static RAG always queries the same vector store. Agentic RAG analyzes query intent to decide whether to query a vector store, execute a SQL aggregate query, or trigger live web searches.

## When to Use
- When executing agentic rag adaptive query routing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Agentic RAG, Router Query Engine) cannot be provisioned.

## Supported Technologies
- Agentic RAG
- Router Query Engine
- Tool Calling
- LangGraph / LlamaIndex

## Example Use Cases
### Executive Operations Assistant
Answering questions comparing quarterly database metrics with qualitative board meeting notes.

### Technical Troubleshooting Agent
Combining internal proprietary bug trackers with live GitHub issue searches on open-source libraries.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Agentic RAG) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.llamaindex.ai/en/stable/examples/agent/agentic_rag/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

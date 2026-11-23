# Llamaindex Function Tool Spec

## Description
Builds modular FunctionTool and ToolSpec components for LlamaIndex query agents. Use when connecting data index queries and retrieval engines as callable agent tools.

## Purpose
LlamaIndex bridges data indexes and language agents. Wrapping QueryEngine instances as FunctionTool objects enables agents to decide when and how to query domain data stores.

## When to Use
- When executing llamaindex function tool spec in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (LlamaIndex, Python 3.10+) cannot be provisioned.

## Supported Technologies
- LlamaIndex
- Python 3.10+
- QueryEngine
- FunctionTool

## Example Use Cases
### Multi-Document Query Routing
Allowing an agent to route questions to financial, legal, or technical document indexes.

### SQL & Vector Hybrid Querying
Equipping agents with both relational database query tools and semantic search tools.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (LlamaIndex) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.llamaindex.ai/en/stable/module_guides/deploying/agents/tools/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

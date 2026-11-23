# Arize Phoenix Llm Tracer

## Description
Traces agent tool execution, retrieval spans, and latency bottlenecks using OpenTelemetry and Arize Phoenix. Use when debugging complex multi-agent execution graphs.

## Purpose
Arize Phoenix is an open-source AI observability platform providing execution graph visualization, vector clustering, and evaluation analysis for agent workflows.

## When to Use
- When executing arize phoenix llm tracer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Arize Phoenix, OpenTelemetry) cannot be provisioned.

## Supported Technologies
- Arize Phoenix
- OpenTelemetry
- Python 3.10+
- FastAPI

## Example Use Cases
### Agent Graph Debugging
Visualizing exact decision branches taken by autonomous multi-agent systems.

### Latency Profiling
Identifying slow external tool calls in multi-step agent execution chains.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Arize Phoenix) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/Arize-ai/phoenix
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

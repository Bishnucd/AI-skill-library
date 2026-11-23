# Tool Call Trajectory Eval

## Description
Evaluates agent multi-step tool call execution trajectories for efficiency, parameter correctness, and unnecessary invocations. Use when auditing autonomous tool-using agents for execution precision.

## Purpose
Autonomous agents frequently suffer from redundant tool calls, invalid parameter payloads, or cyclic execution loops. Trajectory evaluation scores each decision step against optimal execution graphs.

## When to Use
- When executing tool call trajectory eval in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, LangChain / LangSmith) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- LangChain / LangSmith
- JSON Schema
- Pytest

## Example Use Cases
### Agent Efficiency Profiling
Identifying wasteful search or file-read loops in autonomous coding agents.

### Tool Schema Compliance
Detecting schema hallucinations or malformed JSON payloads prior to tool dispatch.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/langchain-ai/langchain
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

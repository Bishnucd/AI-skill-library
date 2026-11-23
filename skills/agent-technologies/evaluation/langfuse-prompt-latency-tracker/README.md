# Langfuse Prompt Latency Tracker

## Description
Monitors LLM generation latency, token counts, and cost metrics across production sessions using Langfuse. Use when profiling production agent performance and user feedback.

## Purpose
Langfuse is an open-source LLM engineering platform offering tracing, prompt management, evaluation, and fine-grained token/cost analytics for production AI applications.

## When to Use
- When executing langfuse prompt latency tracker in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Langfuse SDK, TypeScript / Python) cannot be provisioned.

## Supported Technologies
- Langfuse SDK
- TypeScript / Python
- Postgres
- Docker

## Example Use Cases
### Production Cost Monitoring
Allocating generative AI API costs accurately across internal business units.

### User Feedback Correlation
Pinpointing which prompt variations receive the highest customer satisfaction ratings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Langfuse SDK) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/langfuse/langfuse
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

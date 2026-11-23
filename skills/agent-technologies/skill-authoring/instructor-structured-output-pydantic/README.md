# Instructor Structured Output Pydantic

## Description
Extracts type-safe, validated Pydantic models from LLM responses with automatic retry loops using Instructor. Use when enforcing strict response typing in Python agent pipelines.

## Purpose
Instructor patches LLM clients to enforce structured output schemas via function calling and response_format, automatically triggering retry prompts when Pydantic validators fail.

## When to Use
- When executing instructor structured output pydantic in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Instructor) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Instructor
- Pydantic V2
- OpenAI / Anthropic

## Example Use Cases
### Entity Extraction from Text
Extracting structured user contacts, addresses, and dates from conversational transcripts.

### Strict JSON API Ingestion
Ensuring LLM-generated payloads conform 100% to backend database models.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/jxnl/instructor
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Deepeval Unit Test Harness

## Description
Implements automated unit test suites for LLM applications and agents using DeepEval. Use when running continuous integration regression tests on agent output quality.

## Purpose
DeepEval brings standard software unit testing discipline to LLM evaluation, running deterministic assertions and G-Eval metrics directly within Pytest pipelines.

## When to Use
- When executing deepeval unit test harness in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, DeepEval) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- DeepEval
- Pytest
- OpenAI

## Example Use Cases
### CI Regression Gate
Failing GitHub Actions builds if agent output quality drops below 0.85 threshold.

### Prompt Iteration Benchmarking
Comparing pass rates across different system prompt iterations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/confident-ai/deepeval
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

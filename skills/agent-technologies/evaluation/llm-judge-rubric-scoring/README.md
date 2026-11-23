# Llm Judge Rubric Scoring

## Description
Implements an automated LLM-as-a-judge evaluation harness using structured rubrics and calibration test sets. Use when evaluating generative agent response quality, safety, and coherence at scale.

## Purpose
Automated evaluation using a secondary high-capacity language model as a judge requires deterministic rubric scoring, multi-turn reasoning calibration, and score normalization to prevent self-enhancement bias.

## When to Use
- When executing llm judge rubric scoring in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, OpenAI API / Anthropic API) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- OpenAI API / Anthropic API
- Pydantic
- Pandas

## Example Use Cases
### Response Quality Auditing
Systematically grading conversational agent responses against domain correctness rubrics.

### Model Regression Testing
Validating that prompt adjustments or model upgrades do not degrade performance on edge-case benchmarks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/huggingface/lighteval
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

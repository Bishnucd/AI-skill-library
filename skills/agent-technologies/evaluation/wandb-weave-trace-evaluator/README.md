# Wandb Weave Trace Evaluator

## Description
Traces and evaluates LLM application pipelines, prompts, and datasets using Weights & Biases Weave. Use when tracking agent iterations and scoring evaluation datasets in team workflows.

## Purpose
Weave provides lightweight, type-safe tracking and evaluation for LLM applications, logging function calls with zero configuration and visualizing evaluation score distributions.

## When to Use
- When executing wandb weave trace evaluator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (W&B Weave, Python 3.10+) cannot be provisioned.

## Supported Technologies
- W&B Weave
- Python 3.10+
- Weights & Biases
- OpenAI

## Example Use Cases
### Prompt Engineering Versioning
Visualizing evaluation metric shifts across multiple prompt versions on a shared team canvas.

### Production Incident Tracing
Investigating customer-reported agent errors by replaying exact trace inputs and outputs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (W&B Weave) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/wandb/weave
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

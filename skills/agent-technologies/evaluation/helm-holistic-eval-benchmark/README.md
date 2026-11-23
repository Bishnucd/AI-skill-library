# Helm Holistic Eval Benchmark

## Description
Measures multi-metric transparency and model capabilities using Stanford Holistic Evaluation of Language Models (HELM). Use when conducting comprehensive model audits across fairness, bias, and accuracy.

## Purpose
HELM evaluates language models across a multi-dimensional taxonomy including accuracy, calibration, robustness, fairness, bias, toxicity, and efficiency across standardized scenarios.

## When to Use
- When executing helm holistic eval benchmark in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Stanford HELM, Python 3.10+) cannot be provisioned.

## Supported Technologies
- Stanford HELM
- Python 3.10+
- Pandas
- Jupyter

## Example Use Cases
### Algorithmic Fairness Audit
Auditing enterprise customer support models for demographic parity and bias.

### Comprehensive Model Assessment
Evaluating full spectrum capability before signing multi-year enterprise LLM contracts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Stanford HELM) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/stanford-crfm/helm
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

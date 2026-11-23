# Neptune Ai Experiment Tracker

## Description
Logs hyperparameters, loss curves, and evaluation scorecards for LLM fine-tuning using Neptune.ai. Use when managing machine learning experiment tracking and model registry artifacts.

## Purpose
Neptune provides centralized experiment tracking for machine learning teams, organizing runs, metrics, hardware utilization, and model artifacts with full reproducibility.

## When to Use
- When executing neptune ai experiment tracker in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Neptune.ai, Python 3.10+) cannot be provisioned.

## Supported Technologies
- Neptune.ai
- Python 3.10+
- PyTorch
- HuggingFace

## Example Use Cases
### Fine-Tuning Experiment Comparison
Comparing 20 fine-tuning runs with different learning rates and rank dimensions.

### Team Knowledge Sharing
Sharing interactive training dashboard URLs with distributed data science colleagues.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Neptune.ai) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/neptune-ai/neptune-client
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

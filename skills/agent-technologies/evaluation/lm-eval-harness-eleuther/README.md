# Lm Eval Harness Eleuther

## Description
Benchmarks foundational language models across standard academic datasets using EleutherAI LM Evaluation Harness. Use when evaluating base model reasoning capabilities.

## Purpose
The EleutherAI LM Evaluation Harness is the gold standard benchmark suite for evaluating language models on MMLU, GSM8K, HellaSwag, and ARC reasoning tasks.

## When to Use
- When executing lm eval harness eleuther in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, lm-eval CLI) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- lm-eval CLI
- PyTorch
- HuggingFace

## Example Use Cases
### Model Selection Auditing
Objectively comparing open-source weights (Llama 3, Mistral) against proprietary APIs.

### Post-Fine-Tuning Verification
Verifying that specialized fine-tuning did not cause catastrophic forgetting of core reasoning.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/EleutherAI/lm-evaluation-harness
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

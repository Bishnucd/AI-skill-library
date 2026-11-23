# Guidance Constrained Grammar

## Description
Authors interleaved generation and constraint templates for language models using the Guidance framework. Use when controlling complex generation flows with precise token boundaries.

## Purpose
Guidance combines prompt generation and structured constraints into single executable programs, interleaving static strings, regex selections, and model sampling seamlessly.

## When to Use
- When executing guidance constrained grammar in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Guidance, Python 3.10+) cannot be provisioned.

## Supported Technologies
- Guidance
- Python 3.10+
- Llama.cpp / Transformers
- Grammar

## Example Use Cases
### Deterministic Form Filling
Guiding models through multi-field questionnaires where certain options are restricted.

### Accelerated Template Filling
Skipping inference compute on repetitive boilerplate text in generated documents.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Guidance) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/guidance-ai/guidance
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

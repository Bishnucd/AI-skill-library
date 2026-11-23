# Inspect Eval Uk Safety Institute

## Description
Executes frontier model capability and safety evaluations using the UK AI Safety Institute Inspect framework. Use when evaluating agent autonomous capabilities and safety boundaries.

## Purpose
Inspect is an open-source evaluation framework created by the UK AI Safety Institute for evaluating model reasoning, coding agent autonomy, and cyber capabilities in sandboxes.

## When to Use
- When executing inspect eval uk safety institute in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Inspect AI, Python 3.10+) cannot be provisioned.

## Supported Technologies
- Inspect AI
- Python 3.10+
- Sandboxed Docker
- JSON Schema

## Example Use Cases
### Autonomous Coding Evaluation
Testing whether agents can resolve complex GitHub pull request issues independently.

### Cyber Defense Benchmarking
Evaluating model capability to analyze vulnerability reports safely in isolated sandboxes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Inspect AI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/UKGovernmentBEIS/inspect_ai
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Agent Prompt Few Shot Crafting

## Description
Designs high-leverage few-shot prompt exemplars that guide agent reasoning and tool usage patterns. Use when tuning system prompts to improve agent task completion rates.

## Purpose
Few-shot demonstration exemplars provide inductive bias that guides agent reasoning chains, tool selection logic, and error recovery behavior far more reliably than abstract instructions.

## When to Use
- When executing agent prompt few shot crafting in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Markdown, Prompt Engineering) cannot be provisioned.

## Supported Technologies
- Markdown
- Prompt Engineering
- YAML
- Jinja2

## Example Use Cases
### Complex Workflow Guidance
Teaching agents multi-step git operations or branching conventions via concrete examples.

### Tool Selection Disambiguation
Differentiating between similar tools (e.g., search vs grep vs find) in tricky scenarios.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Markdown) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://arxiv.org/abs/2201.11903
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

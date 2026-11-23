# Promptfoo Red Team Scanner

## Description
Runs automated adversarial penetration and red-teaming scans against LLM applications using promptfoo. Use when scanning agent interfaces for prompt injection and jailbreak vulnerabilities.

## Purpose
promptfoo is a battle-tested CLI tool for evaluating LLM outputs and red-teaming against OWASP Top 10 vulnerabilities, harmful content, and prompt injection attempts.

## When to Use
- When executing promptfoo red team scanner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (promptfoo CLI, Node.js) cannot be provisioned.

## Supported Technologies
- promptfoo CLI
- Node.js
- OWASP LLM Top 10
- YAML

## Example Use Cases
### Security Pre-Release Audit
Running 500+ automated adversarial test attacks before opening agent endpoints to users.

### Vendor Model Security Comparison
Auditing jailbreak resistance across competing foundational models.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (promptfoo CLI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/promptfoo/promptfoo
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

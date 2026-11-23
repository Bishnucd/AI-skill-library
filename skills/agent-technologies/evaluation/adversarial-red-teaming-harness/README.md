# Adversarial Red Teaming Harness

## Description
Executes automated adversarial jailbreak, prompt injection, and boundary tests against agent conversational interfaces. Use when hardening AI agents against malicious inputs and prompt injection exploits.

## Purpose
LLM agents require systematic red-teaming against prompt injections, system prompt extraction, indirect injection payloads, and goal hijacking before deployment to production environments.

## When to Use
- When executing adversarial red teaming harness in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.11+, Garak) cannot be provisioned.

## Supported Technologies
- Python 3.11+
- Garak
- OWASP Top 10 LLM
- Pytest

## Example Use Cases
### Pre-Deployment Security Gate
Running automated red-team suites in CI/CD pipelines before releasing agent versions.

### Indirect Injection Auditing
Testing whether web-browsing agents succumb to invisible prompt injection tags on target web pages.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.11+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/leondz/garak
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

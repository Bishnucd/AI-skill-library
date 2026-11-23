# Semgrep Custom Security Ruleset Authoring

## Description
Authors custom semantic static analysis rules using Semgrep to detect dangerous code patterns and vulnerable APIs. Use when enforcing organization-specific security guardrails in codebases.

## Purpose
Regex search produces false positives because it ignores code syntax. Semgrep searches abstract syntax trees, allowing developers to author rules matching dangerous patterns (e.g. exec(user_input)).

## When to Use
- When executing semgrep custom security ruleset authoring in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Semgrep CLI, AST Matching) cannot be provisioned.

## Supported Technologies
- Semgrep CLI
- AST Matching
- YAML
- SAST

## Example Use Cases
### Banned Function Enforcement
Preventing developers from using insecure functions like eval() or Math.random() for crypto.

### Custom API Security Rules
Ensuring all database queries invoke parameterized helper wrappers rather than raw strings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Semgrep CLI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://semgrep.dev/docs/writing-rules/overview/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

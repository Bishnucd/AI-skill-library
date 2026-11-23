# Security Sensitive Function Ast Grepping

## Description
Scans pull requests for dangerous sink functions (eval, exec, dangerouslySetInnerHTML) via Semgrep. Use when establishing automated guardrails against dangerous language APIs.

## Purpose
Regex grep misses code context. Semgrep understands programming language ASTs, allowing security teams to write lightweight rules that catch dangerous sinks regardless of whitespace or line wraps.

## When to Use
- When executing security sensitive function ast grepping in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Semgrep, AST Pattern Matching) cannot be provisioned.

## Supported Technologies
- Semgrep
- AST Pattern Matching
- Static Analysis
- AppSec

## Example Use Cases
### Command Injection Prevention Rule
Blocking any pull request that passes unsanitized user variables into shell execution functions.

### React XSS Prevention Guardrail
Enforcing that dangerouslySetInnerHTML usage requires explicit security team review approval.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Semgrep) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://semgrep.dev/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

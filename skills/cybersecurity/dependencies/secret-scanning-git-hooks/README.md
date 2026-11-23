# Secret Scanning Git Hooks

## Description
Installs pre-commit Git hooks and CI scanners to prevent hardcoded API keys, tokens, and secrets from entering repos. Use when safeguarding source code repositories from credential leakage.

## Purpose
Accidental secret commits cause severe cloud account compromises. Pre-commit hooks run regex and entropy checks locally before commits are saved, blocking leaked credentials.

## When to Use
- When executing secret scanning git hooks in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Gitleaks, Git Hooks) cannot be provisioned.

## Supported Technologies
- Gitleaks
- Git Hooks
- Regex
- GitHub Actions

## Example Use Cases
### Developer Workstation Defense
Blocking developers from accidentally committing production .env files.

### CI Pull Request Auditing
Rejecting pull requests that introduce potential plaintext secret tokens.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Gitleaks) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/gitleaks/gitleaks
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

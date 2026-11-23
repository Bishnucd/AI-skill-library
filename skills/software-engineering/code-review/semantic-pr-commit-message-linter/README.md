# Semantic Pr Commit Message Linter

## Description
Enforces Conventional Commits specification and semantic versioning rules in pull requests using commitlint. Use when automating changelog generation and release notes.

## Purpose
Inconsistent commit messages break automated release tooling. commitlint validates that commit messages follow the type(scope): description format for automatic changelog compilation.

## When to Use
- When executing semantic pr commit message linter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (commitlint, Conventional Commits) cannot be provisioned.

## Supported Technologies
- commitlint
- Conventional Commits
- Semantic Versioning
- Git Hooks

## Example Use Cases
### Automated SemVer Release Pipeline
Bumping patch, minor, or major versions automatically based on fix:, feat:, or BREAKING CHANGE commits.

### Monorepo PR Title Consistency
Enforcing package scope tags like feat(auth): add PKCE support across large multi-package repos.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (commitlint) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://commitlint.js.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

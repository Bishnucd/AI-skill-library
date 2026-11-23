# Pr Semantic Commit Message Linter

## Description
Enforces Conventional Commits specification and PR description completeness in code review workflows. Use when maintaining clean, machine-readable git histories and automated changelogs.

## Purpose
Sloppy git commit messages obscure repository history. Enforcing Conventional Commits (feat:, fix:, chore:, docs:) powers automated semantic versioning and changelog generation.

## When to Use
- When executing pr semantic commit message linter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (commitlint, Git Hooks) cannot be provisioned.

## Supported Technologies
- commitlint
- Git Hooks
- GitHub Actions
- Regex

## Example Use Cases
### Automated Semantic Release
Determining semver version bumps (patch, minor, major) automatically from commit types.

### Monorepo History Hygiene
Standardizing commit conventions across hundreds of microservices in a single repository.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (commitlint) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.conventionalcommits.org/en/v1.0.0/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

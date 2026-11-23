# Github Actions Caching Dependency Optimizer

## Description
Implements smart dependency and build caching in GitHub Actions using actions/cache with lockfile hash keys. Use when slashing CI workflow duration by avoiding re-downloading packages.

## Purpose
Re-installing npm modules, pip wheels, or Cargo crates on every CI run wastes minutes of developer time. Hash-key based caching restores dependencies instantly when lockfiles have not changed.

## When to Use
- When executing github actions caching dependency optimizer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GitHub Actions, actions/cache) cannot be provisioned.

## Supported Technologies
- GitHub Actions
- actions/cache
- Node.js / Python / Rust
- CI/CD

## Example Use Cases
### CI Build Speedup
Reducing pull request check times from 8 minutes down to 90 seconds.

### Cargo & Go Build Caching
Caching compiled Rust dependency target directories to avoid re-compilation.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GitHub Actions) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/actions/cache
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Unpinned Dependency Drift Detector

## Description
Scans package manifests for unpinned caret (^) and tilde (~) dependencies and unpinned GitHub Actions. Use when enforcing strict deterministic reproducibility in build pipelines.

## Purpose
Floating version tags (^1.2.0 or actions/checkout@v3) silently pull in upstream changes during builds, risking supply chain attacks. Pinning packages to exact versions and commit SHAs guarantees stability.

## When to Use
- When executing unpinned dependency drift detector in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Dependency Pinning, Regex Linters) cannot be provisioned.

## Supported Technologies
- Dependency Pinning
- Regex Linters
- GitHub Actions
- YAML

## Example Use Cases
### Deterministic Build Reproducibility
Guaranteeing that rebuilding a release 3 years later compiles the exact same dependency bytes.

### Third-Party Action Tamper Defense
Preventing compromised upstream GitHub Action tags from running malicious scripts in CI.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Dependency Pinning) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

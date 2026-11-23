# Package Lock Integrity Hash Auditor

## Description
Audits package-lock.json and yarn.lock files for missing integrity hashes, git URLs, and registry poisoning. Use when preventing lockfile injection and dependency confusion attacks.

## Purpose
Malicious pull requests can silently alter package-lock.json URLs to point to compromised private servers. Verifying subresource integrity hashes (integrity: sha512) and registries prevents poisoning.

## When to Use
- When executing package lock integrity hash auditor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Lockfile Auditing, SHA-512 SRI) cannot be provisioned.

## Supported Technologies
- Lockfile Auditing
- SHA-512 SRI
- Python / Node.js
- Supply Chain

## Example Use Cases
### Lockfile Tampering Prevention
Blocking malicious PRs that attempt to redirect package downloads to hostile servers.

### Registry URL Governance
Ensuring developers never bypass internal enterprise artifact proxies.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Lockfile Auditing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

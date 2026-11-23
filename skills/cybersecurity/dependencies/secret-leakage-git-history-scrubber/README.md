# Secret Leakage Git History Scrubber

## Description
Permanently purges committed credentials, API keys, and large blobs from git repository history using git-filter-repo. Use when remediating committed secrets across all historical commits.

## Purpose
Simply committing a deletion leaves secrets visible in git history. git-filter-repo rewrites historical commits, removing sensitive files and replacing compromised keys with dummy strings.

## When to Use
- When executing secret leakage git history scrubber in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (git-filter-repo, Git Internals) cannot be provisioned.

## Supported Technologies
- git-filter-repo
- Git Internals
- Secret Remediation
- Python

## Example Use Cases
### Emergency Secret Revocation Remediation
Completely wiping a leaked AWS secret key from 5 years of git commit history.

### Open-Source Project Cleansing
Sanitizing proprietary tokens from internal repositories before making them public.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (git-filter-repo) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/newren/git-filter-repo
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

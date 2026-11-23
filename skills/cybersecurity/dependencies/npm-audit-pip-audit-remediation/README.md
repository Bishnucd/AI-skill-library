# Npm Audit Pip Audit Remediation

## Description
Runs language-native dependency vulnerability audits and automated security fix commands (npm audit, pip-audit). Use when identifying and patching vulnerabilities in project package manifests.

## Purpose
Native package managers integrate security advisory checking. Running automated audit tools scans lockfile trees and calculates minimal dependency version upgrades that resolve CVEs without breaking builds.

## When to Use
- When executing npm audit pip audit remediation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (npm audit, pip-audit) cannot be provisioned.

## Supported Technologies
- npm audit
- pip-audit
- Node.js / Python
- PyPI Advisory DB

## Example Use Cases
### Local Pre-Commit Vulnerability Check
Catching vulnerable packages before pushing code to team pull requests.

### Python Packaging Security Gate
Auditing requirements.txt in Python CI workflows against PyPA security databases.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (npm audit) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/pypa/pip-audit
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

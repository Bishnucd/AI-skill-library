# Employee Offboarding Access Revocation

## Description
Automates immediate, audit-logged credential and access revocation workflows for departing employees. Use when executing secure employee departures to prevent insider data leakage.

## Purpose
Orphaned accounts of departed employees are primary vectors for security breaches. A standardized offboarding runbook revokes SSO access, invalidates API keys, and reclaims company assets on departure.

## When to Use
- When executing employee offboarding access revocation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (NIST SP 800-53 AC-2, Okta / Azure AD) cannot be provisioned.

## Supported Technologies
- NIST SP 800-53 AC-2
- Okta / Azure AD
- GitHub API
- Markdown Checklists

## Example Use Cases
### Same-Day Security Offboarding
Guaranteeing all enterprise access is terminated within 30 minutes of employee departure.

### SOC 2 Access Audit Proof
Demonstrating to auditors that former employee accounts were disabled promptly upon exit.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (NIST SP 800-53 AC-2) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

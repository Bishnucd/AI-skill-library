# Cloud Iam Least Privilege Analyzer

## Description
Audits AWS IAM policies and GCP IAM bindings for wildcard (*) permissions, privilege escalation paths, and unused credentials. Use when hardening cloud identity access management.

## Purpose
Over-permissive IAM roles are the leading vector in cloud breaches. Analyzing policies for dangerous wildcard actions (iam:PassRole, s3:*) and latent escalation paths prevents account takeover.

## When to Use
- When executing cloud iam least privilege analyzer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (AWS IAM Access Analyzer, PMapper) cannot be provisioned.

## Supported Technologies
- AWS IAM Access Analyzer
- PMapper
- Cloud Security
- JSON

## Example Use Cases
### Cloud Account Hardening
Eliminating admin privileges from application microservices before production rollout.

### Privilege Escalation Path Removal
Removing latent paths where an unprivileged developer could assume root cloud roles.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (AWS IAM Access Analyzer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-overview.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Git Signed Commits Gpg Ssh Enforcement

## Description
Configures GPG or SSH cryptographic commit signing and branch protection rules requiring verified commits. Use when preventing commit author spoofing and identity impersonation in git.

## Purpose
Anyone can configure git config user.email to impersonate any author. Enforcing cryptographic GPG or SSH commit signatures guarantees that commits originated from authorized team members.

## When to Use
- When executing git signed commits gpg ssh enforcement in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SSH Commit Signing, GPG Signing) cannot be provisioned.

## Supported Technologies
- SSH Commit Signing
- GPG Signing
- GitHub Branch Protection
- Git

## Example Use Cases
### Commit Author Spoofing Defense
Preventing rogue actors from pushing malicious commits disguised as senior engineering leads.

### Regulatory Audit Trail Security
Proving cryptographic author provenance for all production code changes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SSH Commit Signing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

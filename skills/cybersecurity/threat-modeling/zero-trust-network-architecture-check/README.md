# Zero Trust Network Architecture Check

## Description
Assesses network topology and access controls against NIST SP 800-207 Zero Trust Architecture principles. Use when evaluating enterprise security posture and microsegmentation.

## Purpose
Zero Trust assumes network perimeters are breached. Every access request must be explicitly verified, granted least-privilege access, and continuously inspected.

## When to Use
- When executing zero trust network architecture check in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (NIST 800-207, mTLS) cannot be provisioned.

## Supported Technologies
- NIST 800-207
- mTLS
- IAM
- Cloud Security

## Example Use Cases
### Enterprise Cloud Modernization
Transitioning legacy VPN perimeter architectures to modern Zero Trust access.

### Auditing Microservice Security
Verifying that internal service-to-service calls require authenticated cryptographic tokens.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (NIST 800-207) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://csrc.nist.gov/publications/detail/sp/800-207/final
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

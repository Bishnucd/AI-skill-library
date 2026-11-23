# Cosign Sigstore Image Signing

## Description
Cryptographically signs and verifies container images using Sigstore Cosign with keyless OIDC identity tokens. Use when guaranteeing container supply chain provenance and integrity.

## Purpose
Untrusted container images risk tampering between CI build and Kubernetes deployment. Cosign signs images using GitHub Actions OIDC tokens, recording signatures in the public Rekor transparency ledger.

## When to Use
- When executing cosign sigstore image signing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Sigstore Cosign, OIDC Keyless Signing) cannot be provisioned.

## Supported Technologies
- Sigstore Cosign
- OIDC Keyless Signing
- Rekor Transparency Log
- Docker

## Example Use Cases
### Kubernetes Supply Chain Gate
Preventing pods from launching in production if images lack verified developer signatures.

### Tamper-Evident Image Verification
Proving that production container images were produced exclusively by approved CI workflows.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Sigstore Cosign) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.sigstore.dev/cosign/overview/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

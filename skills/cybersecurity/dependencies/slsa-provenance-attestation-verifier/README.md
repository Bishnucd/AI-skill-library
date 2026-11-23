# Slsa Provenance Attestation Verifier

## Description
Generates and verifies Supply-chain Levels for Software Artifacts (SLSA) Level 3 build provenance attestations. Use when proving build integrity using cryptographic provenance assertions.

## Purpose
SLSA Level 3 guarantees that build artifacts were compiled on non-falsifiable cloud runners from verified git commits. Verifying provenance JSON attestations proves binary pedigree.

## When to Use
- When executing slsa provenance attestation verifier in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SLSA v1.0, slsa-github-generator) cannot be provisioned.

## Supported Technologies
- SLSA v1.0
- slsa-github-generator
- in-toto
- GitHub Actions

## Example Use Cases
### Zero-Trust Software Releases
Proving to enterprise clients that released binaries were not tampered with during build.

### Executive Order 14028 Compliance
Satisfying US federal government standards for software supply chain security.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SLSA v1.0) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://slsa.dev/spec/v1.0/provenance
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

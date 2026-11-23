# Pdf Digital Signature Cryptographic Verifier

## Description
Inspects and cryptographically verifies X.509 digital PKI signatures and timestamps in PDF documents. Use when auditing signed legal contracts and government filing documents.

## Purpose
Verifying signed PDFs requires checking cryptographic digital signature blocks (ByteRange, /Contents), validating certificate chains against trust roots, and checking for post-signing tampering.

## When to Use
- When executing pdf digital signature cryptographic verifier in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (pyHanko, PKI / X.509) cannot be provisioned.

## Supported Technologies
- pyHanko
- PKI / X.509
- Cryptography
- Python

## Example Use Cases
### Contract Execution Compliance
Verifying that vendor contracts were signed with valid, untampered DocuSign certificates.

### Automated Regulatory Audit
Confirming financial compliance filings bear legitimate executive cryptographic signatures.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (pyHanko) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/pyHanko/pyHanko
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

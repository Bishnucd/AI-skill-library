# Document Redaction Pii Scrubber

## Description
Applies permanent vector redaction to remove social security numbers, credit cards, and PII from PDF files. Use when sanitizing confidential legal disclosures and FOIA records.

## Purpose
Drawing a black rectangle over text leaves the underlying text searchable in the PDF. True redaction physically strips character bytes from the document tree and draws opaque rectangles.

## When to Use
- When executing document redaction pii scrubber in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PyMuPDF (fitz), Regex PII Detectors) cannot be provisioned.

## Supported Technologies
- PyMuPDF (fitz)
- Regex PII Detectors
- PDF Sanitization
- Python

## Example Use Cases
### Legal Discovery Redaction
Permanently removing sensitive attorney-client privileged text before court production.

### FOIA Public Record Releases
Redacting citizen personal identifiers from public government document releases.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PyMuPDF (fitz)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pymupdf.readthedocs.io/en/latest/redactions.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

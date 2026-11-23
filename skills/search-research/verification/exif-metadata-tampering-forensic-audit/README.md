# Exif Metadata Tampering Forensic Audit

## Description
Audits image and document metadata timestamps, GPS discrepancies, and software edit history for forensic tampering. Use when authenticating digital photographic evidence.

## Purpose
Digital photos store internal timestamps, camera serials, and thumbnail caches. Forensic audits compare EXIF creation times against file system timestamps and software edit tags to detect forgery.

## When to Use
- When executing exif metadata tampering forensic audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (EXIF Forensics, ExifTool) cannot be provisioned.

## Supported Technologies
- EXIF Forensics
- ExifTool
- Timestamp Audit
- Image Forensics

## Example Use Cases
### Insurance Claim Damage Photo Authentication
Verifying that submitted car accident photos were taken on the claimed accident date and not 6 months prior.

### Whistleblower Document Provenance Verification
Analyzing internal PDF creation metadata to confirm authentic corporate origin and author identity.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (EXIF Forensics) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Digital_image_forensics
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

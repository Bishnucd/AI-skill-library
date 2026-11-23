# Media Manipulation Metadata Audit

## Description
Inspects image and video EXIF/XMP metadata, compression artifacts, and reverse visual search traces for manipulation. Use when authenticating digital media assets and verifying photo origins.

## Purpose
Digital media can be misattributed, AI-generated, or edited. Auditing camera EXIF metadata, GPS timestamps, and Error Level Analysis (ELA) identifies digital alteration and original publication dates.

## When to Use
- When executing media manipulation metadata audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ExifTool, Reverse Image Search) cannot be provisioned.

## Supported Technologies
- ExifTool
- Reverse Image Search
- Error Level Analysis (ELA)
- Python

## Example Use Cases
### Journalistic Verification
Confirming whether breaking news conflict photos are genuine or recycled stock images.

### Insurance Claim Fraud Detection
Verifying that photos of property damage were captured at the insured time and location.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ExifTool) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://exiftool.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

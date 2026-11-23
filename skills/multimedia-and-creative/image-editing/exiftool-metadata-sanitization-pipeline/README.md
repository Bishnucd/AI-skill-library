# Exiftool Metadata Sanitization Pipeline

## Description
Strips sensitive GPS locations, device serial numbers, and thumbnail caches from image batches using ExifTool. Use when sanitizing media files prior to public web publication.

## Purpose
Images taken by smartphones embed precise GPS home coordinates, facial recognition tags, and unique camera hardware IDs. ExifTool strips all personal data while preserving color profiles.

## When to Use
- When executing exiftool metadata sanitization pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ExifTool, Privacy Protection) cannot be provisioned.

## Supported Technologies
- ExifTool
- Privacy Protection
- EXIF Sanitization
- CLI Automation

## Example Use Cases
### Social Media User Upload Privacy Gate
Automatically stripping geolocation metadata from user-uploaded forum avatar and profile photos.

### Investigative Journalism Source Protection
Scrubbing camera serial numbers and timestamps from whistleblower photographic evidence.

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

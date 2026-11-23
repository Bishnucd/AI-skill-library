# Pdf Page Reordering Splitter Merger

## Description
Splits, merges, rotates, and reorders PDF page sequences with zero visual degradation using pypdf. Use when organizing multi-page PDF document bundles and legal closing binders.

## Purpose
Scanning documents often yields misordered, upside-down, or fragmented PDF files. Fast page-level manipulation re-arranges page trees and rotates orientations without rasterizing content.

## When to Use
- When executing pdf page reordering splitter merger in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (pypdf, PyMuPDF (fitz)) cannot be provisioned.

## Supported Technologies
- pypdf
- PyMuPDF (fitz)
- Python
- PDF

## Example Use Cases
### Loan Closing Binder Assembly
Merging title deeds, appraisal reports, and signed disclosures into a single binder.

### Orientation Correction for Scans
Detecting and rotating upside-down scanned contract pages automatically.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (pypdf) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pypdf.readthedocs.io/en/stable/user/merging-pdfs.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

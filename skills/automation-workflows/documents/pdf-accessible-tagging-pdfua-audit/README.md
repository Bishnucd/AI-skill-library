# Pdf Accessible Tagging Pdfua Audit

## Description
Audits and applies PDF/UA (Universal Accessibility) tags, reading orders, and alternate text to PDF documents. Use when ensuring government and legal PDF document accessibility compliance.

## Purpose
Untagged PDFs are unreadable by screen readers. PDF/UA standardizes document structure trees (<H1>, <P>, <Table>), logical reading order, and alt text for all embedded figures.

## When to Use
- When executing pdf accessible tagging pdfua audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PDF/UA, ISO 14289-1) cannot be provisioned.

## Supported Technologies
- PDF/UA
- ISO 14289-1
- VeraPDF / PAC
- Accessibility

## Example Use Cases
### Government Regulatory Compliance
Meeting Section 508 accessibility mandates for all public agency PDF downloads.

### University Course Material Auditing
Ensuring digital textbooks and course syllabi are fully accessible to blind students.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PDF/UA) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.pdfa.org/resource/pdfua-in-a-nutshell/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

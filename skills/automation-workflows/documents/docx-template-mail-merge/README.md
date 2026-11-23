# Docx Template Mail Merge

## Description
Populates Word DOCX templates with dynamic structured data, tables, and images using python-docx. Use when automating the generation of personalized contracts, offers, and certificates.

## Purpose
Manual contract generation is slow and error-prone. Document templates containing Jinja2 placeholder tags enable programmatic generation of styled DOCX files from database records.

## When to Use
- When executing docx template mail merge in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, python-docx-template) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- python-docx-template
- Jinja2
- Office Open XML

## Example Use Cases
### Sales Contract Generation
Auto-generating client service agreements and NDA documents upon CRM deal close.

### Certificate Generation
Issuing personalized completion certificates with embedded student names and dates.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://python-docx.readthedocs.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

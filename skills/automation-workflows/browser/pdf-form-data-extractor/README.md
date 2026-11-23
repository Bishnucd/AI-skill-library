# Pdf Form Data Extractor

## Description
Extracts structured key-value data, tables, and form fields from fillable and scanned PDF documents. Use when automating data extraction from invoices, statements, and tax forms.

## Purpose
Automating business operations requires extracting unstructured and semi-structured fields from PDF files. Coordinate layout analysis, text extraction, and bounding box grouping.

## When to Use
- When executing pdf form data extractor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, pdfminer.six) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- pdfminer.six
- pdfplumber
- Pydantic

## Example Use Cases
### Accounts Payable Automation
Extracting invoice numbers, line items, and totals from vendor PDF invoices.

### Compliance Document Ingestion
Normalizing government filing forms into structured database records.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pdfminersix.readthedocs.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Pdf Table Extraction Camelot

## Description
Extracts tabular structures from PDF reports into clean Pandas DataFrames using lattice and stream parsing. Use when parsing financial tables and multi-column tabular documents.

## Purpose
Tables in PDFs lack structural HTML tags and exist merely as positioned text and lines. Camelot isolates table cells using lattice (grid-line detection) or stream (whitespace clustering) algorithms.

## When to Use
- When executing pdf table extraction camelot in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Camelot) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Camelot
- OpenCV
- Pandas

## Example Use Cases
### Financial Statement Parsing
Extracting balance sheets and cash flow tables from quarterly PDF investor reports.

### Scientific Data Harvesting
Harvesting numerical measurement tables from published academic paper PDFs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://camelot-py.readthedocs.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

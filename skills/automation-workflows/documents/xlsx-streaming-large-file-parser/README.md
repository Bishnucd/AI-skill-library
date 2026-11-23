# Xlsx Streaming Large File Parser

## Description
Streams and parses multi-gigabyte Excel XLSX files without memory exhaustion using openpyxl or exceljs. Use when ingesting massive spreadsheet datasets in automated pipelines.

## Purpose
Loading giant Excel workbooks with standard DOM parsers consumes gigabytes of RAM and crashes processes. Streaming parsers read XML row by row, keeping memory usage constant (< 50MB).

## When to Use
- When executing xlsx streaming large file parser in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (openpyxl (read_only), exceljs) cannot be provisioned.

## Supported Technologies
- openpyxl (read_only)
- exceljs
- Python / Node.js
- XLSX

## Example Use Cases
### Enterprise Inventory Import
Parsing 500,000-row warehouse inventory spreadsheets without server memory crashes.

### Financial Ledger Reconciliation
Streaming multi-sheet quarterly banking exports into analytical database tables.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (openpyxl (read_only)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://openpyxl.readthedocs.io/en/stable/optimized.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

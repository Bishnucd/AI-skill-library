# Csv Delimiter Encoding Sniffer

## Description
Detects character encoding (UTF-8, Latin-1, Shift-JIS) and dialect delimiters (comma, tab, semicolon) in raw CSVs. Use when building robust, fault-tolerant CSV ingestion pipelines.

## Purpose
User-submitted CSV files frequently use unexpected delimiters (semicolons in Europe, tabs) or non-UTF8 encodings. Sniffing byte samples detects dialects automatically before parsing.

## When to Use
- When executing csv delimiter encoding sniffer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python csv.Sniffer, chardet / charset-normalizer) cannot be provisioned.

## Supported Technologies
- Python csv.Sniffer
- chardet / charset-normalizer
- CSV
- Encoding

## Example Use Cases
### Global User File Ingestion
Allowing European customers to upload semicolon-delimited CSVs exported from Excel.

### Legacy Data Encoding Normalization
Handling Shift-JIS Japanese and Windows-1252 legacy encoding without mojibake errors.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python csv.Sniffer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.python.org/3/library/csv.html#csv.Sniffer
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

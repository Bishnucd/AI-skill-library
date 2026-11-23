# Pandoc Universal Document Converter

## Description
Converts documents across Markdown, DOCX, LaTeX, HTML, and RST formats with filter extensions using Pandoc. Use when converting document formats in automated publishing pipelines.

## Purpose
Pandoc is the Swiss-army knife of document conversion. Its abstract syntax tree (AST) intermediate representation enables lossless translation across dozens of document formats.

## When to Use
- When executing pandoc universal document converter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Pandoc CLI, Lua Filters) cannot be provisioned.

## Supported Technologies
- Pandoc CLI
- Lua Filters
- Markdown / LaTeX
- DOCX

## Example Use Cases
### Academic Paper Formatting
Converting Markdown draft notes into compliant LaTeX IEEE conference templates.

### Documentation Multi-Publishing
Exporting single-source Markdown documentation into HTML web pages and Word documents.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Pandoc CLI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pandoc.org/MANUAL.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

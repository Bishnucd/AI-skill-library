# Svg Sparkline Inline Metrics

## Description
Renders ultra-lightweight inline SVG sparklines for compact metric trend visualization without runtime libraries. Use when displaying inline trends in data tables and email digests.

## Purpose
Sparklines are intense, simple, word-sized graphics that summarize historical trends. Generating native SVG path strings provides zero-overhead visualizations for dense tables.

## When to Use
- When executing svg sparkline inline metrics in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SVG, Vanilla JS / HTML) cannot be provisioned.

## Supported Technologies
- SVG
- Vanilla JS / HTML
- Data Tables
- Zero Dependency

## Example Use Cases
### Financial Portfolio Performance Table
Embedding 30-day stock price sparklines next to ticker symbols in tabular rows.

### Weekly SaaS Health Email Digest
Including 7-day user signup velocity sparklines in automated executive email summaries.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SVG) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Sparkline
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

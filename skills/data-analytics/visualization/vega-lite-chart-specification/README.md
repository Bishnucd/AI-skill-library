# Vega Lite Chart Specification

## Description
Authors declarative, interactive data visualization specifications in Vega-Lite JSON format. Use when creating portable, responsive charts and interactive dashboards for web applications.

## Purpose
Vega-Lite provides a high-level grammar of interactive graphics. Declarative JSON specs define data sources, mark types (bar, line, point), encodings, and interactive selection filters.

## When to Use
- When executing vega lite chart specification in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Vega-Lite, Vega) cannot be provisioned.

## Supported Technologies
- Vega-Lite
- Vega
- JSON
- D3.js

## Example Use Cases
### Embedded Analytics Dashboards
Rendering interactive charts inside web SaaS applications without custom SVG code.

### Automated Report Visualizations
Generating declarative charts dynamically from SQL query result sets.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Vega-Lite) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://vega.github.io/vega-lite/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

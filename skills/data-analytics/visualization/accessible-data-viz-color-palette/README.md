# Accessible Data Viz Color Palette

## Description
Generates WCAG 2.2 AA compliant, colorblind-safe color palettes for statistical data visualizations. Use when designing accessible charts for color vision deficient audiences.

## Purpose
Standard chart palettes (red/green) alienate the 8% of male users with color vision deficiencies. Safe palettes (Viridis, ColorBrewer) guarantee perceptual uniformity and high contrast.

## When to Use
- When executing accessible data viz color palette in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ColorBrewer, Chroma.js) cannot be provisioned.

## Supported Technologies
- ColorBrewer
- Chroma.js
- WCAG 2.2
- CSS

## Example Use Cases
### Public Health Dashboard
Ensuring government COVID infection rate heatmaps are readable by all citizens.

### Corporate Reporting Standards
Publishing enterprise chart theme guidelines that satisfy accessibility compliance.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ColorBrewer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://colorbrewer2.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

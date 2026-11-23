# Seaborn Statistical Distribution Faceting

## Description
Generates publication-quality statistical distributions and facet grids using Python Seaborn. Use when exploring multidimensional variance, regressions, and distributions.

## Purpose
Seaborn provides a high-level Python interface for drawing statistical graphics integrated with Pandas DataFrames, supporting KDE distributions, violin plots, and multi-facet grids.

## When to Use
- When executing seaborn statistical distribution faceting in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Seaborn, Matplotlib) cannot be provisioned.

## Supported Technologies
- Seaborn
- Matplotlib
- Pandas
- Statistical Graphics

## Example Use Cases
### Clinical Trial Biomarker Distribution
Comparing treatment vs control patient blood pressure distributions faceted by age bracket.

### E-Commerce Basket Size Regression
Plotting linear regression trends of checkout value against customer tenure across categories.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Seaborn) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://seaborn.pydata.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

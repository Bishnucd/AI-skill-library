# Heatmap Correlation Matrix Viz

## Description
Renders statistical correlation heatmaps with diverging color scales and hierarchical clustering dendrograms. Use when analyzing multivariate feature correlation in datasets.

## Purpose
Multivariate exploratory data analysis requires spotting collinearity across dozens of variables. Correlation heatmaps visualize Pearson/Spearman coefficients with diverging color gradients.

## When to Use
- When executing heatmap correlation matrix viz in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python / Seaborn / Matplotlib, Plotly) cannot be provisioned.

## Supported Technologies
- Python / Seaborn / Matplotlib
- Plotly
- Pandas
- NumPy

## Example Use Cases
### Machine Learning Feature Selection
Identifying highly correlated redundant features prior to training regression models.

### Financial Asset Correlation
Analyzing portfolio diversification by evaluating asset price correlation matrices.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python / Seaborn / Matplotlib) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://seaborn.pydata.org/generated/seaborn.heatmap.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

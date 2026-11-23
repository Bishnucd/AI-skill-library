# Observable Plot Exploratory Grammar

## Description
Creates expressive exploratory data charts using Observable Plot declarative grammar of graphics. Use when rapidly prototyping statistical charts in web notebooks or web applications.

## Purpose
Observable Plot offers a concise, declarative API for exploratory visual analytics, supporting marks, channels, transforms, and automatic binning without manual D3 scale plumbing.

## When to Use
- When executing observable plot exploratory grammar in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Observable Plot, D3.js) cannot be provisioned.

## Supported Technologies
- Observable Plot
- D3.js
- Grammar of Graphics
- JavaScript

## Example Use Cases
### Exploratory Customer Cohort Distribution
Plotting purchase frequency histograms grouped by signup quarter in 10 lines of code.

### SaaS Feature Usage Correlation
Generating multi-mark scatter plots comparing monthly active sessions against churn risk.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Observable Plot) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://observablehq.com/plot/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

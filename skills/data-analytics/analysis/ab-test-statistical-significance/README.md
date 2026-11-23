# Ab Test Statistical Significance

## Description
Evaluates A/B test experiment results using two-sample hypothesis tests, p-values, and confidence intervals. Use when determining whether feature variations drive statistically significant metrics.

## Purpose
Making product decisions on raw conversion lift risks false positives. Rigorous hypothesis testing (Z-test, T-test) and confidence intervals ensure observed improvements are statistically sound.

## When to Use
- When executing ab test statistical significance in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Scipy) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Scipy
- Statsmodels
- NumPy

## Example Use Cases
### Landing Page Conversion Experiments
Validating whether a redesigned checkout funnel increases conversion with 95% confidence.

### Pricing Plan Experiments
Testing whether adjusted tier pricing yields higher average revenue per user (ARPU).

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.evanmiller.org/how-not-to-run-an-ab-test.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

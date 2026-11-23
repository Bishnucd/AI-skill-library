# Linear Mixed Effects Hierarchical Modeling

## Description
Fits Linear Mixed-Effects Models (LMM) with fixed and random effects for nested, hierarchical data using statsmodels. Use when analyzing clustered or repeated-measures experimental data.

## Purpose
Standard linear regression assumes independent observations. Mixed-effects models account for hierarchical clustering (e.g. students nested within schools, repeated tests on the same patient).

## When to Use
- When executing linear mixed effects hierarchical modeling in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (statsmodels, Python 3.10+) cannot be provisioned.

## Supported Technologies
- statsmodels
- Python 3.10+
- Pandas
- Biostatistics

## Example Use Cases
### Multi-Tenant Product Experimentation
Analyzing feature impact across enterprise accounts while controlling for company-specific variances.

### Clinical Trial Repeated Measures
Measuring patient drug responses over multiple weekly checkups while accounting for subject baseline variations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (statsmodels) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.statsmodels.org/stable/mixed_linear.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

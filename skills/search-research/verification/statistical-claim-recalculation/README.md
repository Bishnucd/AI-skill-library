# Statistical Claim Recalculation

## Description
Recalculates reported statistical metrics (percentages, ratios, p-values) from raw sample data to verify arithmetic accuracy. Use when auditing research findings, financial reports, and survey claims.

## Purpose
Published reports frequently contain simple arithmetic errors, truncated baselines, or exaggerated percentage increases. Recalculating metrics from raw numbers exposes flawed conclusions.

## When to Use
- When executing statistical claim recalculation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Pandas) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Pandas
- SciPy
- Mathematical Verification

## Example Use Cases
### Financial Earning Report Auditing
Verifying that corporate growth metrics match SEC 10-K reported balance sheets.

### Marketing Claim Verification
Checking whether "3x faster" benchmark claims reflect statistically valid test runs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.stat.berkeley.edu/~stark/SticiGui/Text/reasoning.htm
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

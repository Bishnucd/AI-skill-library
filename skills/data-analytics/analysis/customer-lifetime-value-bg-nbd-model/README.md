# Customer Lifetime Value Bg Nbd Model

## Description
Estimates Customer Lifetime Value (CLV) and future purchase frequency using Beta-Geometric/Negative Binomial (BG/NBD) models. Use when forecasting customer revenue and retention cohorts.

## Purpose
Predicting customer value requires modeling transaction recency and frequency. BG/NBD models calculate probability of customer alive status and forecast expected transactions over upcoming months.

## When to Use
- When executing customer lifetime value bg nbd model in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (lifetimes / PyMC, Python 3.10+) cannot be provisioned.

## Supported Technologies
- lifetimes / PyMC
- Python 3.10+
- Pandas
- Predictive Analytics

## Example Use Cases
### High-Value Customer Identification
Isolating top 5% highest projected lifetime value customers for VIP customer success programs.

### Customer Acquisition Payback Modeling
Calibrating marketing ad spend customer acquisition cost (CAC) budgets against predicted CLV.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (lifetimes / PyMC) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://lifetimes.readthedocs.io/en/latest/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

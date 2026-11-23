# Churn Prediction Feature Selection

## Description
Engineers behavioral engagement features and selects predictive variables for customer churn modeling. Use when identifying warning signals of impending customer cancellations.

## Purpose
Predicting churn requires engineering recency, frequency, and monetary (RFM) features and evaluating mutual information scores to isolate high-leverage indicators.

## When to Use
- When executing churn prediction feature selection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Scikit-Learn) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Scikit-Learn
- Pandas
- XGBoost

## Example Use Cases
### Customer Success Alerting
Flagging accounts with dropping feature utilization before annual contract expiration.

### Subscription Health Scoring
Building automated customer health indexes for B2B enterprise software accounts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://scikit-learn.org/stable/modules/feature_selection.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

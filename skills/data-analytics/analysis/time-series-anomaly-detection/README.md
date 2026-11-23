# Time Series Anomaly Detection

## Description
Detects unexpected spikes, drops, and trend shifts in time-series metric streams using rolling statistics and isolation forests. Use when monitoring system health or financial metrics for irregularities.

## Purpose
Operational metrics exhibit seasonality and trends that fool naive threshold alerts. Time-series decomposition isolates seasonal components to detect genuine structural anomalies.

## When to Use
- When executing time series anomaly detection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Statsmodels) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Statsmodels
- Scikit-Learn
- Pandas

## Example Use Cases
### Payment Fraud Detection
Catching sudden atypical spikes in credit card transaction volumes.

### Infrastructure Anomaly Alerting
Detecting subtle CPU and memory usage trend deviations before servers crash.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://otexts.com/fpp3/decomposition.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

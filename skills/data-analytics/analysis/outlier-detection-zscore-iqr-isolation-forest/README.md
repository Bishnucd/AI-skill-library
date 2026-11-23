# Outlier Detection Zscore Iqr Isolation Forest

## Description
Detects univariate and multivariate data outliers using Z-score, Interquartile Range (IQR), and Isolation Forests. Use when cleaning dirty datasets and catching abnormal telemetry readings.

## Purpose
Extreme outliers distort statistical means and machine learning models. Combining robust univariate statistics (IQR filtering) with multivariate Isolation Forests isolates genuinely anomalous observations.

## When to Use
- When executing outlier detection zscore iqr isolation forest in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Scikit-Learn, SciPy) cannot be provisioned.

## Supported Technologies
- Scikit-Learn
- SciPy
- Pandas
- Outlier Detection

## Example Use Cases
### Sensor Telemetry Data Cleansing
Filtering out corrupted sensor spikes before training predictive maintenance models.

### Financial Expense Fraud Detection
Flagging expense submissions that deviate from typical departmental spending patterns.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Scikit-Learn) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://scikit-learn.org/stable/modules/outlier_detection.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

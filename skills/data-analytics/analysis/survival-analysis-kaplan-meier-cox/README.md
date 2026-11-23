# Survival Analysis Kaplan Meier Cox

## Description
Calculates Kaplan-Meier survival curves and Cox Proportional Hazards regression for time-to-event data. Use when analyzing customer churn velocity, machine failure time, or patient outcomes.

## Purpose
Standard regression cannot handle right-censored data (customers who haven't churned yet). Survival analysis models time-to-event curves and estimates hazard ratios across covariate features.

## When to Use
- When executing survival analysis kaplan meier cox in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (lifelines, Python 3.10+) cannot be provisioned.

## Supported Technologies
- lifelines
- Python 3.10+
- Survival Analysis
- Pandas

## Example Use Cases
### SaaS Churn Velocity Analysis
Identifying whether customers who onboard via mobile app churn faster than desktop users.

### Hardware Mean Time to Failure (MTTF)
Predicting industrial component failure timelines while accounting for active operational units.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (lifelines) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://lifelines.readthedocs.io/en/latest/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

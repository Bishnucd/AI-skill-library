# Causal Inference Propensity Score Matching

## Description
Estimates Average Treatment Effects (ATE) from observational data using Propensity Score Matching (PSM) and DoWhy. Use when measuring feature impact without running randomized A/B tests.

## Purpose
Observational data suffers from selection bias (users who enable a feature are already more engaged). Propensity score matching pairs treated users with identical untreated controls to isolate true causal lift.

## When to Use
- When executing causal inference propensity score matching in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (DoWhy / CausalML, Python 3.10+) cannot be provisioned.

## Supported Technologies
- DoWhy / CausalML
- Python 3.10+
- Propensity Score Matching
- Econometrics

## Example Use Cases
### Non-Experimental Feature Impact
Measuring whether using a new dark mode feature causally increases subscription renewals.

### Marketing Campaign Causality
Isolating true revenue lift driven by marketing email campaigns versus organic purchases.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (DoWhy / CausalML) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/py-why/dowhy
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

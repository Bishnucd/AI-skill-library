# Synthetic Control Method Policy Evaluation

## Description
Constructs synthetic control counterfactuals from weighted combinations of unaffected donor units using PySynth. Use when evaluating regional policy interventions or marketing campaigns.

## Purpose
When a policy or campaign rolls out in one region (e.g. California), you cannot run an A/B test. Synthetic control constructs a weighted counterfactual "synthetic California" from other states to measure impact.

## When to Use
- When executing synthetic control method policy evaluation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Synthetic Control Method, Econometrics) cannot be provisioned.

## Supported Technologies
- Synthetic Control Method
- Econometrics
- Python / R
- Optimization

## Example Use Cases
### Regional Advertising Campaign Impact
Measuring true revenue lift of a Texas-only television advertising campaign.

### State Regulatory Impact Evaluation
Quantifying the economic impact of state-level data privacy legislation.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Synthetic Control Method) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://economics.mit.edu/people/faculty/alberto-abadie/synthetic-control-methods
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

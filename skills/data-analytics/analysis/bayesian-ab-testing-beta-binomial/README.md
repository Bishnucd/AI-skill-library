# Bayesian Ab Testing Beta Binomial

## Description
Evaluates A/B test conversion rates using Bayesian Beta-Binomial conjugate models and probability of being best. Use when making rapid experimentation decisions without p-value misconceptions.

## Purpose
Frequentist p-values cannot answer "What is the probability Variation B is better than Variation A?". Bayesian updating models posterior Beta distributions directly, computing expected loss and probability to win.

## When to Use
- When executing bayesian ab testing beta binomial in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PyMC / SciPy, Bayesian Statistics) cannot be provisioned.

## Supported Technologies
- PyMC / SciPy
- Bayesian Statistics
- Beta-Binomial
- Python

## Example Use Cases
### Rapid Growth Experimentation
Stopping underperforming landing page variations early without violating sample size rules.

### Continuous Conversion Optimization
Feeding Bayesian posteriors into multi-armed bandit traffic routing algorithms.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PyMC / SciPy) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pymc.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

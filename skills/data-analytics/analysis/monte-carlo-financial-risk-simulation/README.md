# Monte Carlo Financial Risk Simulation

## Description
Simulates financial portfolio returns and project completion distributions using 10,000+ Monte Carlo iterations. Use when modeling financial risk, project duration, and uncertainty ranges.

## Purpose
Point estimates ("this project takes 4 months") ignore variance. Monte Carlo simulation executes thousands of randomized runs across probability distributions, outputting confidence percentiles (p50, p90).

## When to Use
- When executing monte carlo financial risk simulation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, NumPy) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- NumPy
- SciPy
- Monte Carlo Methods

## Example Use Cases
### Software Project Deadline Confidence
Demonstrating 90% confidence that a complex engineering migration will complete within 14 weeks.

### Financial Runway Modeling
Simulating startup cash runway across varied customer churn and revenue growth distributions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://numpy.org/doc/stable/reference/random/generator.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

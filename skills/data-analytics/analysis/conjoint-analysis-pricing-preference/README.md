# Conjoint Analysis Pricing Preference

## Description
Evaluates customer preference trade-offs and willingness-to-pay for product features using Choice-Based Conjoint (CBC). Use when designing optimal product packaging, feature tiers, and pricing.

## Purpose
Asking customers how much they will pay yields biased answers. Choice-based conjoint presents realistic package options, using multinomial logit regression to determine part-worth utility values.

## When to Use
- When executing conjoint analysis pricing preference in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Conjoint Analysis, Discrete Choice Modeling) cannot be provisioned.

## Supported Technologies
- Conjoint Analysis
- Discrete Choice Modeling
- Python / R
- Stats

## Example Use Cases
### SaaS Tier Packaging Optimization
Determining whether customers value unlimited storage more than dedicated support.

### Price Elasticity Modeling
Simulating market share shifts when raising enterprise subscription pricing by 15%.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Conjoint Analysis) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://sawtoothsoftware.com/resources/technical-papers/conjoint-analysis
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

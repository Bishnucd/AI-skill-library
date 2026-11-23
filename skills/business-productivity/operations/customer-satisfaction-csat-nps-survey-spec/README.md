# Customer Satisfaction Csat Nps Survey Spec

## Description
Designs transactional Customer Satisfaction (CSAT) and Net Promoter Score (NPS) survey programs with closed-loop follow-up. Use when measuring customer sentiment and retention drivers.

## Purpose
Measuring customer sentiment requires structured survey cadences. Combining transactional CSAT after support interactions with periodic relationship NPS measures loyalty and uncovers churn risks.

## When to Use
- When executing customer satisfaction csat nps survey spec in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Bain NPS System, CSAT / CES) cannot be provisioned.

## Supported Technologies
- Bain NPS System
- CSAT / CES
- Survey Design
- Analytics

## Example Use Cases
### Customer Churn Prevention
Intervening with dissatisfied enterprise accounts before contract renewal periods.

### Support Quality Benchmarking
Tracking customer satisfaction trends across different support tiers and regions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Bain NPS System) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.bain.com/consulting-services/customer-strategy-and-marketing/net-promoter-score-system/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

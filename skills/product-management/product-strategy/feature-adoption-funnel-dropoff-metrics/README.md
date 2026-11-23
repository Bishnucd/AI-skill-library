# Feature Adoption Funnel Dropoff Metrics

## Description
Analyzes feature adoption funnels across Exposure, Discovery, Activation, and Retention stages. Use when diagnosing why newly shipped features fail to gain user traction.

## Purpose
Shipping a feature is only the beginning. Tracking the 4-stage funnel (Exposed to UI -> Discovered feature -> Activated core value -> Retained user at Day 30) pinpoints UX adoption friction.

## When to Use
- When executing feature adoption funnel dropoff metrics in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Feature Adoption Funnel, Cohort Analysis) cannot be provisioned.

## Supported Technologies
- Feature Adoption Funnel
- Cohort Analysis
- Mixpanel / PostHog
- Product Analytics

## Example Use Cases
### New Dashboard Widget Adoption Diagnostic
Discovering that 80% of users saw the new widget button, but only 5% clicked due to unclear icon design.

### B2B Workflow Automation Activation Analysis
Identifying that users who configure automation rules within 48 hours exhibit 3x higher 6-month retention.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Feature Adoption Funnel) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://mixpanel.com/blog/feature-adoption/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Statistical Percentage Recalculation Audit

## Description
Recalculates relative percentage increases vs absolute risk deltas to expose misleading statistical headlines. Use when evaluating clinical medical claims and public policy statistics.

## Purpose
Headlines claiming "Drug doubles cancer risk" often hide that risk rose from 1 in 100,000 to 2 in 100,000. Recalculating baseline risk, absolute risk increase, and NNT restores accurate perspective.

## When to Use
- When executing statistical percentage recalculation audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Statistical Audit, Relative vs Absolute Risk) cannot be provisioned.

## Supported Technologies
- Statistical Audit
- Relative vs Absolute Risk
- Number Needed to Treat (NNT)
- Mathematics

## Example Use Cases
### Sensational Health Headline Debunking
Revealing that a "50% increase in heart risk" represented an absolute risk increase of only 0.02%.

### Marketing Software ROI Claim Audit
Recalculating vendor claimed "300% efficiency gain" to reflect actual baseline operational time savings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Statistical Audit) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Absolute_risk_reduction
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

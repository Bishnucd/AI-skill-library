# Van Westendorp Price Sensitivity Meter

## Description
Determines optimal price points and price sensitivity bands using the Van Westendorp Price Sensitivity Meter. Use when pricing new SaaS tiers and consumer subscription products.

## Purpose
Van Westendorp asks 4 price perception questions (Too Cheap, Bargain, Expensive, Too Expensive) to plot cumulative price curves, identifying the Point of Marginal Cheapness and Optimal Price Point.

## When to Use
- When executing van westendorp price sensitivity meter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Van Westendorp PSM, Pricing Strategy) cannot be provisioned.

## Supported Technologies
- Van Westendorp PSM
- Pricing Strategy
- Survey Analysis
- Product Economics

## Example Use Cases
### B2B SaaS Per-Seat Tier Pricing
Determining that $29/seat/month represents the optimal price point with maximum adoption elasticity.

### Consumer Mobile Subscription Pricing
Establishing an acceptable price range between $4.99 and $9.99/month for a premium fitness tracker.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Van Westendorp PSM) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Van_Westendorp%27s_Price_Sensitivity_Meter
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

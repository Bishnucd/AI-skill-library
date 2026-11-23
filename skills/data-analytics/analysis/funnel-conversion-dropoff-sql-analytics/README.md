# Funnel Conversion Dropoff Sql Analytics

## Description
Models multi-step user onboarding and checkout funnels using SQL window functions and dropoff rate calculations. Use when identifying bottleneck friction screens in conversion funnels.

## Purpose
Maximizing revenue requires finding where users abandon funnels. SQL funnel queries track sequential step progression within session timeboxes, calculating step-by-step conversion and abandonment rates.

## When to Use
- When executing funnel conversion dropoff sql analytics in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SQL (Postgres, BigQuery, Snowflake), Window Functions) cannot be provisioned.

## Supported Technologies
- SQL (Postgres, BigQuery, Snowflake)
- Window Functions
- Analytics
- Pandas

## Example Use Cases
### Checkout Funnel Friction Auditing
Discovering that 60% of shopping cart abandonments occur on the shipping calculation screen.

### User Onboarding Optimization
Measuring conversion lift when removing phone number verification from signup flows.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SQL (Postgres, BigQuery, Snowflake)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://mode.com/sql-tutorial/sql-funnel-analysis/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

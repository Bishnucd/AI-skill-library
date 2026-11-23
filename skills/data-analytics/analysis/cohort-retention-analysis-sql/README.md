# Cohort Retention Analysis Sql

## Description
Calculates user acquisition cohort retention curves and churn rates using SQL window functions. Use when analyzing user engagement, product stickiness, and customer lifetime value.

## Purpose
Cohort retention groups users by their acquisition date and tracks subsequent activity over days, weeks, or months to determine product-market fit and retention plateaus.

## When to Use
- When executing cohort retention analysis sql in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SQL (Postgres, BigQuery, Snowflake), Pandas) cannot be provisioned.

## Supported Technologies
- SQL (Postgres, BigQuery, Snowflake)
- Pandas
- Window Functions

## Example Use Cases
### SaaS Product Retention Audits
Determining whether newly shipped onboarding improvements increase Month 1 retention.

### E-commerce Repeat Purchase Analysis
Measuring recurring order frequency across seasonal marketing acquisition cohorts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SQL (Postgres, BigQuery, Snowflake)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://mode.com/sql-tutorial/sql-retention/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

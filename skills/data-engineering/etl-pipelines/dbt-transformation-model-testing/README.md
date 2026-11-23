# Dbt Transformation Model Testing

## Description
Defines modular SQL transformation models and automated schema tests using dbt (data build tool). Use when organizing warehouse transformations into tested, DAG-driven pipelines.

## Purpose
dbt enables analytics engineers to build data warehouse transformations as modular SQL select statements. Integrated tests (unique, not_null, accepted_values) guarantee data reliability.

## When to Use
- When executing dbt transformation model testing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (dbt-core, SQL (Snowflake, BigQuery)) cannot be provisioned.

## Supported Technologies
- dbt-core
- SQL (Snowflake, BigQuery)
- Jinja
- YAML

## Example Use Cases
### Analytics Warehouse Modeling
Transforming raw application database dumps into clean dimensional star schemas.

### Data Quality CI Gates
Failing data pipeline builds in CI when upstream schema changes break downstream models.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (dbt-core) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.getdbt.com/docs/build/models
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

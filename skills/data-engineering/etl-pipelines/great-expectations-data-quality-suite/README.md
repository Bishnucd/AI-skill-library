# Great Expectations Data Quality Suite

## Description
Automates data profiling and pipeline assertions using Great Expectations validation suites. Use when preventing bad data, null spikes, and schema drift from entering downstream analytics.

## Purpose
Great Expectations enables data engineers to define programmatic unit tests for datasets, asserting column presence, non-null guarantees, range checks, and regex patterns with HTML reports.

## When to Use
- When executing great expectations data quality suite in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Great Expectations, Python) cannot be provisioned.

## Supported Technologies
- Great Expectations
- Python
- Data Quality
- CI/CD Pipelines

## Example Use Cases
### Ingestion Pipeline Quality Gate
Failing daily ETL jobs if incoming partner CSV files contain more than 1% null postal codes.

### Schema Drift Detection
Alerting data platform teams when upstream database teams add or modify column datatypes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Great Expectations) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.greatexpectations.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Apache Spark Delta Lake Acid Merge

## Description
Executes ACID upserts and deletes on petabyte-scale lakehouse tables using Apache Spark and Delta Lake. Use when synchronizing change data capture streams into data lake tables.

## Purpose
Delta Lake provides ACID transactions, schema enforcement, and time travel over object storage. Spark Delta MERGE efficiently matches and updates existing records while inserting new ones.

## When to Use
- When executing apache spark delta lake acid merge in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Apache Spark, Delta Lake) cannot be provisioned.

## Supported Technologies
- Apache Spark
- Delta Lake
- PySpark / Scala
- Lakehouse

## Example Use Cases
### CDC Customer Table Lakehouse Synchronization
Applying 500,000 hourly customer profile updates from OLTP database into Delta Lake.

### GDPR Right-to-be-Forgotten Compliance
Executing compliant record deletion passes across historical lakehouse partitions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Apache Spark) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.delta.io/latest/delta-update.html#upsert-into-a-table-using-merge
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

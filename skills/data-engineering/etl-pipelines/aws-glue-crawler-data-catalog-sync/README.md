# Aws Glue Crawler Data Catalog Sync

## Description
Discovers schema structures and synchronizes AWS Glue Data Catalog tables using Glue Crawlers. Use when cataloging new data lake partitions on S3 for Amazon Athena queries.

## Purpose
AWS Glue Crawlers inspect file formats, extract schema definitions, and populate the AWS Glue Data Catalog, enabling serverless SQL queries in Amazon Athena over partitioned S3 data.

## When to Use
- When executing aws glue crawler data catalog sync in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (AWS Glue, S3 Data Lake) cannot be provisioned.

## Supported Technologies
- AWS Glue
- S3 Data Lake
- Amazon Athena
- Schema Discovery

## Example Use Cases
### Automated Daily S3 Partition Cataloging
Automatically registering newly written year/month/day S3 partitions into Glue Catalog.

### Parquet Schema Evolution Synchronization
Updating Glue Catalog table schemas when upstream engineers append new optional fields.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (AWS Glue) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

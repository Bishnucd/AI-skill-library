# Google Cloud Spanner Ddl Schema Updates

## Description
Manages asynchronous, non-blocking DDL schema updates on Google Cloud Spanner instances. Use when rolling out schema updates across globally replicated Spanner databases.

## Purpose
Cloud Spanner executes DDL schema updates in the background without taking databases offline or locking active tables, preserving external consistency and 99.999% SLA.

## When to Use
- When executing google cloud spanner ddl schema updates in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Google Cloud Spanner, Distributed DDL) cannot be provisioned.

## Supported Technologies
- Google Cloud Spanner
- Distributed DDL
- GCP CLI / Terraform
- High Availability

## Example Use Cases
### Globally Distributed Banking Table Schema Updates
Updating account transaction table schemas across 3 continents with zero maintenance windows.

### Interleaved Table Hierarchy Creation
Creating parent-child interleaved tables to physically co-locate related records on storage.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Google Cloud Spanner) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://cloud.google.com/spanner/docs/schema-updates
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

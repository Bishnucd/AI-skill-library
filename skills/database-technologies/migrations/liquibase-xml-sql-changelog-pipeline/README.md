# Liquibase Xml Sql Changelog Pipeline

## Description
Manages enterprise database schema changes across multiple environments using Liquibase change sets. Use when tracking and rolling back database migrations with audit logs.

## Purpose
Liquibase tracks, versions, and deploys database schema modifications across disparate RDBMS engines, maintaining strict execution checksums in DATABASECHANGELOG tracking tables.

## When to Use
- When executing liquibase xml sql changelog pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Liquibase, SQL / XML / YAML) cannot be provisioned.

## Supported Technologies
- Liquibase
- SQL / XML / YAML
- CI/CD Pipeline
- Database Migration

## Example Use Cases
### Enterprise Multi-Environment Schema Sync
Promoting verified schema changes consistently across Dev, QA, UAT, and Production databases.

### Automated Migration Rollback on Failure
Triggering liquibase rollbackCount 1 automatically if post-migration integration tests fail.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Liquibase) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.liquibase.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

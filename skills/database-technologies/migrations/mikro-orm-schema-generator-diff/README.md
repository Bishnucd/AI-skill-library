# Mikro Orm Schema Generator Diff

## Description
Calculates schema diffs and generates clean SQL migration files using MikroORM SchemaGenerator. Use when maintaining DDD entities and database schemas in TypeScript.

## Purpose
MikroORM features an advanced SchemaGenerator that inspects TypeScript entity definitions and database metadata to produce clean, safe SQL migration scripts.

## When to Use
- When executing mikro orm schema generator diff in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (MikroORM, TypeScript) cannot be provisioned.

## Supported Technologies
- MikroORM
- TypeScript
- Domain-Driven Design (DDD)
- SQL Migrations

## Example Use Cases
### Clean Architecture Domain Entity Sync
Keeping PostgreSQL schemas perfectly synchronized with rich TypeScript domain model classes.

### Zero-Overhead Local SQLite Migration Testing
Executing migration suites in memory during unit and integration test runs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (MikroORM) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://mikro-orm.io/docs/migrations
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

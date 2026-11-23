# Typeorm Datasource Migration Runner

## Description
Generates and runs TypeScript database migrations using TypeORM DataSource CLI. Use when synchronizing TypeScript entity models with SQL relational databases.

## Purpose
TypeORM compares declared TypeScript entity classes against the current database schema to automatically generate reversible SQL migration files.

## When to Use
- When executing typeorm datasource migration runner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (TypeORM, TypeScript) cannot be provisioned.

## Supported Technologies
- TypeORM
- TypeScript
- Node.js
- Relational Databases

## Example Use Cases
### NestJS Backend Database Migrations
Running TypeORM migrations on application bootstrap in NestJS production microservices.

### Entity Model Evolution Tracking
Generating precise SQL ALTER statements when adding new columns to TypeORM @Entity classes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (TypeORM) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://typeorm.io/migrations
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

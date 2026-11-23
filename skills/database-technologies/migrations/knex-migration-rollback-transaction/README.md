# Knex Migration Rollback Transaction

## Description
Authors reversible, transactional schema migrations and seeds using Knex.js. Use when managing SQL migrations in Node.js and TypeScript backends.

## Purpose
Knex.js provides a schema builder and migration CLI that executes migrations inside isolated database transactions, ensuring atomic application and clean rollbacks on failure.

## When to Use
- When executing knex migration rollback transaction in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Knex.js, Node.js / TypeScript) cannot be provisioned.

## Supported Technologies
- Knex.js
- Node.js / TypeScript
- SQL Migrations
- Transactions

## Example Use Cases
### TypeScript Monorepo Database Deployment
Executing database migrations automatically during Docker container startup in ECS tasks.

### Local Integration Test Database Seeding
Spinning up fresh test databases, applying migrations, and inserting mock seed data.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Knex.js) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://knexjs.org/guide/migrations.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

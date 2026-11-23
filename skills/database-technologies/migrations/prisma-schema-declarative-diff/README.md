# Prisma Schema Declarative Diff

## Description
Manages type-safe declarative schema modeling and SQL migrations using Prisma ORM. Use when developing TypeScript full-stack applications with PostgreSQL or MySQL.

## Purpose
Prisma Migrate compiles a declarative schema.prisma model file into deterministic SQL migration steps, generating strongly-typed TypeScript database clients automatically.

## When to Use
- When executing prisma schema declarative diff in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Prisma, TypeScript) cannot be provisioned.

## Supported Technologies
- Prisma
- TypeScript
- PostgreSQL
- Node.js

## Example Use Cases
### Next.js Full-Stack Modeling
Rapidly evolving data models for React and Next.js applications with end-to-end type safety.

### Database Introspection & Sync
Generating declarative Prisma models from existing legacy relational databases.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Prisma) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.prisma.io/docs/concepts/components/prisma-migrate
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

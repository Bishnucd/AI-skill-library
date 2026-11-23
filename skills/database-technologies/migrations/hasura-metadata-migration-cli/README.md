# Hasura Metadata Migration Cli

## Description
Manages Hasura GraphQL Engine schema tracking, permissions, and relationships using Hasura CLI migrations. Use when versioning GraphQL schema definitions alongside database DDL.

## Purpose
Hasura decouples raw database DDL from GraphQL metadata (permissions, relationships, remote schemas). Hasura CLI tracks both in synchronization using GitOps workflows.

## When to Use
- When executing hasura metadata migration cli in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Hasura CLI, GraphQL) cannot be provisioned.

## Supported Technologies
- Hasura CLI
- GraphQL
- PostgreSQL
- Metadata Migrations

## Example Use Cases
### Automated GraphQL Permission Deployment
Deploying row-level role permissions from Git branches to staging and production Hasura instances.

### Remote Schema Relationship Versioning
Tracking cross-service GraphQL relationship joins in version-controlled YAML files.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Hasura CLI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://hasura.io/docs/latest/migrations-metadata-seeds/overview/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

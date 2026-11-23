# Alembic Postgresql Schema Sync

## Description
Generates and applies versioned Python SQLAlchemy database migrations using Alembic. Use when synchronizing SQLAlchemy ORM models with PostgreSQL database schemas.

## Purpose
Alembic tracks incremental schema changes as executable Python scripts. It detects differences between SQLAlchemy model declarations and live database catalogs to generate clean upgrade and downgrade steps.

## When to Use
- When executing alembic postgresql schema sync in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Alembic, SQLAlchemy) cannot be provisioned.

## Supported Technologies
- Alembic
- SQLAlchemy
- PostgreSQL
- Python 3.10+

## Example Use Cases
### Backend ORM Evolution
Adding new relationship tables and foreign keys to Python FastAPI and Flask backends.

### Automated Migration CI Verification
Testing upgrade and downgrade cycles against ephemeral Postgres test containers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Alembic) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://alembic.sqlalchemy.org/en/latest/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

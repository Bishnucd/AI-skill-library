# Flyway Versioned Migration Runner

## Description
Executes forward-only, checksum-verified SQL migration scripts using Flyway CLI. Use when managing schema evolution across enterprise Java, Go, or microservice environments.

## Purpose
Flyway enforces deterministic, repeatable schema versioning using immutable SQL scripts named V<version>__<description>.sql. Checksum validation prevents tampered or out-of-order migrations.

## When to Use
- When executing flyway versioned migration runner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Flyway, SQL) cannot be provisioned.

## Supported Technologies
- Flyway
- SQL
- PostgreSQL / Oracle / MySQL
- Docker

## Example Use Cases
### Enterprise SQL Versioning
Managing database schema versioning across dev, test, staging, and production environments.

### Database Rollout Automation
Running migration verification steps during Kubernetes deployment init-containers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Flyway) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://documentation.red-gate.com/fd
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

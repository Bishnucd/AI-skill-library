# Bytebase Database Cicd Review Pipeline

## Description
Automates database change review, risk scoring, and schema deployment pipelines using Bytebase. Use when implementing GitOps-driven schema governance for engineering teams.

## Purpose
Bytebase is an open-source database CI/CD platform providing automated SQL review, change risk assessment, rollouts, and disaster recovery across heterogeneous databases.

## When to Use
- When executing bytebase database cicd review pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Bytebase, Database CI/CD) cannot be provisioned.

## Supported Technologies
- Bytebase
- Database CI/CD
- Schema Governance
- GitOps

## Example Use Cases
### Corporate SQL Review Enforcement
Preventing developers from submitting DDL that adds non-nullable columns without default values.

### Multi-Tenant Database Rollout Orchestration
Deploying approved schema changes sequentially across 50 tenant database instances.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Bytebase) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.bytebase.com/docs/introduction/what-is-bytebase/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

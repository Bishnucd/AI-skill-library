# Database Migration Rollback Automated Test

## Description
Automates CI integration tests that migrate databases up, seed test data, and roll back down cleanly. Use when guaranteeing that database migrations are safely reversible in production.

## Purpose
Many database migrations cannot be safely rolled back because the down() migration was never tested. Automated rollback tests run up, test insertion, run down, and verify clean initial state.

## When to Use
- When executing database migration rollback automated test in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Migration Testing, Rollback Verification) cannot be provisioned.

## Supported Technologies
- Migration Testing
- Rollback Verification
- CI Automation
- Database Reliability

## Example Use Cases
### Production Emergency Rollback Verification
Guaranteeing that a failed midnight production deployment can be safely reverted without manual SQL scripts.

### Column Drop Reversibility Testing
Verifying that rolling back a dropped column migration restores table structure without breaking foreign keys.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Migration Testing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Schema_migration
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

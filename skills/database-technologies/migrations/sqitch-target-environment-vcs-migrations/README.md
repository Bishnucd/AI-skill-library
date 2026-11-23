# Sqitch Target Environment Vcs Migrations

## Description
Manages VCS-native, dependency-ordered database migrations across disparate SQL engines using Sqitch. Use when managing complex migration dependency graphs without sequential numbering.

## Purpose
Sqitch frees database change management from sequential numbering by using dependency graphs, letting developers deploy, revert, and verify changes independently across branches.

## When to Use
- When executing sqitch target environment vcs migrations in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Sqitch, Perl / CLI) cannot be provisioned.

## Supported Technologies
- Sqitch
- Perl / CLI
- Graph Dependencies
- Multi-Database

## Example Use Cases
### Multi-Branch Parallel Schema Development
Allowing multiple development teams to branch schema changes simultaneously without numbering conflicts.

### Strict Verify Script Validation
Running dedicated verify.sql assertions immediately after deploy to confirm structural integrity.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Sqitch) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://sqitch.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

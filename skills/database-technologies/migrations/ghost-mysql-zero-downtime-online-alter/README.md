# Ghost Mysql Zero Downtime Online Alter

## Description
Executes non-blocking, triggerless MySQL schema alterations on production databases using GitHub gh-ost. Use when altering massive multi-terabyte MySQL tables without downtime or locks.

## Purpose
gh-ost alters MySQL tables without triggers by reading the binary log stream, copying historical rows to a ghost table in the background, and performing a microscopic cut-over.

## When to Use
- When executing ghost mysql zero downtime online alter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (gh-ost (GitHub), MySQL) cannot be provisioned.

## Supported Technologies
- gh-ost (GitHub)
- MySQL
- Binlog Replication
- Zero Downtime

## Example Use Cases
### 500GB MySQL Table Index Addition
Adding a composite index to a critical transactions table with zero transaction locks or app downtime.

### Large Table Column Type Expansion
Expanding INT primary keys to BIGINT on tables receiving 10,000 writes per second.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (gh-ost (GitHub)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/github/gh-ost
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

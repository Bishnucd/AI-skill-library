# Pt Online Schema Change Percona Toolkit

## Description
Executes online non-blocking MySQL table alterations using Percona Toolkit pt-online-schema-change. Use when altering schema on production MySQL instances without blocking reads or writes.

## Purpose
pt-online-schema-change creates a duplicate empty table, creates triggers to capture live updates, copies existing rows in micro-batches, and swaps tables atomically.

## When to Use
- When executing pt online schema change percona toolkit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Percona Toolkit, pt-online-schema-change) cannot be provisioned.

## Supported Technologies
- Percona Toolkit
- pt-online-schema-change
- MySQL
- Triggers

## Example Use Cases
### Legacy MySQL Column Deletion
Dropping deprecated columns from a live customer database without triggering table lock errors.

### Production Foreign Key Constraint Updates
Safely updating foreign key relationships on active multi-million row tables.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Percona Toolkit) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.percona.com/percona-toolkit/pt-online-schema-change.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

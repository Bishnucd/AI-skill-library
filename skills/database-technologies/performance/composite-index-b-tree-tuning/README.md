# Composite Index B Tree Tuning

## Description
Designs composite B-Tree indexes adhering to the equality-range-sort rule in relational databases. Use when optimizing multi-column filtering and sorting operations.

## Purpose
Multi-column queries require composite indexes ordered properly. Placing equality columns first, followed by range conditions, followed by sort columns maximizes index scan selectivity.

## When to Use
- When executing composite index b tree tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PostgreSQL / MySQL, B-Tree Indexes) cannot be provisioned.

## Supported Technologies
- PostgreSQL / MySQL
- B-Tree Indexes
- SQL DDL

## Example Use Cases
### E-commerce Search Indexing
Optimizing queries that filter by category_id, status, price range, and sort by created_at.

### Multi-Tenant Query Acceleration
Accelerating tenant-isolated queries by prefixing all composite indexes with tenant_id.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PostgreSQL / MySQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://use-the-index-luke.com/sql/where-clause/searching-for-ranges/greater-less-between-tuning-sql-indexing
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

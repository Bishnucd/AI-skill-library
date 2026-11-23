# Mongodb Compound Index Esr Rule

## Description
Optimizes MongoDB compound indexes using the Equality, Sort, Range (ESR) rule. Use when eliminating in-memory sorting and excessive document scanning in MongoDB queries.

## Purpose
The ESR (Equality, Sort, Range) rule dictates the precise ordering of fields in a MongoDB compound index to ensure index-covered equality matching, sort operations, and range filtering.

## When to Use
- When executing mongodb compound index esr rule in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (MongoDB, ESR Rule) cannot be provisioned.

## Supported Technologies
- MongoDB
- ESR Rule
- Compound Indexes
- Query Optimization

## Example Use Cases
### E-Commerce Filter and Sort Query
Indexing { status: 1, created_at: -1, price: 1 } to allow fast filtering by status and price while sorting by date.

### SaaS Audit Log Search Optimization
Eliminating disk spills on audit log queries filtering by organization_id and sorting by timestamp.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (MongoDB) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.mongodb.com/docs/manual/tutorial/equality-sort-range-rule/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

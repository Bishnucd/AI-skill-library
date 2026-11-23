# Dynamodb Single Table Design Gsi

## Description
Implements DynamoDB single-table architecture using generic partition keys, sort keys, and Global Secondary Indexes (GSIs). Use when building predictable sub-10ms serverless data layers.

## Purpose
DynamoDB single-table design collapses relational entities into one physical table using composite keys (PK, SK), retrieving parent items and child collections in a single Query call.

## When to Use
- When executing dynamodb single table design gsi in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Amazon DynamoDB, Single-Table Design) cannot be provisioned.

## Supported Technologies
- Amazon DynamoDB
- Single-Table Design
- Global Secondary Indexes (GSI)
- Serverless

## Example Use Cases
### Serverless Multi-Tenant SaaS Backend
Retrieving an organization record along with its top 20 active projects in one DynamoDB Query.

### High-Volume Order Lifecycle Tracking
Managing customer orders and line items under a single partition key with zero cross-table joins.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Amazon DynamoDB) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-general-strategy.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

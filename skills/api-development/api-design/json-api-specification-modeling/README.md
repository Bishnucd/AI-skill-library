# Json Api Specification Modeling

## Description
Designs complex relational API payloads following the JSON:API 1.1 standard specification. Use when designing compound documents, sparse fieldsets, and relationship links.

## Purpose
Ad-hoc JSON structures lead to chatty clients and inconsistent relationship modeling. The JSON:API specification standardizes resource objects, compound document inclusion, and pagination links.

## When to Use
- When executing json api specification modeling in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (JSON:API v1.1, JSON) cannot be provisioned.

## Supported Technologies
- JSON:API v1.1
- JSON
- REST
- HTTP

## Example Use Cases
### Mobile Bandwidth Optimization
Permitting smartphone apps to fetch parent records with child items in a single roundtrip.

### Standardized Enterprise API Format
Adopting an industry standard that eliminates debates over response payload structures.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (JSON:API v1.1) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://jsonapi.org/format/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

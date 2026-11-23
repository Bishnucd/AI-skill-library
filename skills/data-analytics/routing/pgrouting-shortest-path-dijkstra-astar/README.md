# Pgrouting Shortest Path Dijkstra Astar

## Description
Executes topological graph routing algorithms (Dijkstra, A*, Driving Distance) directly inside PostgreSQL using pgRouting. Use when querying routing graphs stored in relational databases.

## Purpose
pgRouting adds graph routing capabilities to PostGIS databases, allowing developers to run shortest path queries (pgr_dijkstra, pgr_astar) directly inside SQL queries without external services.

## When to Use
- When executing pgrouting shortest path dijkstra astar in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (pgRouting, PostGIS) cannot be provisioned.

## Supported Technologies
- pgRouting
- PostGIS
- PostgreSQL
- SQL Graph Routing

## Example Use Cases
### Custom Relational Network Routing
Routing utility inspection vehicles across internal private refinery road networks.

### Emergency Road Closure Re-routing
Instantly re-routing traffic when a SQL UPDATE marks a bridge edge as flooded.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (pgRouting) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pgrouting.org/documentation.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

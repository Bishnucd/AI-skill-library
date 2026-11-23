# Postgis Spatial Proximity Query

## Description
Authors optimized spatial queries using PostGIS GiST index operators and ST_DWithin distance functions. Use when querying database records based on geographic radius and proximity.

## Purpose
Calculating geographic distances using Pythagorean formulas fails due to Earth curvature and causes full table scans. PostGIS GiST indexes and spheroid spatial functions provide sub-millisecond lookups.

## When to Use
- When executing postgis spatial proximity query in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PostgreSQL, PostGIS) cannot be provisioned.

## Supported Technologies
- PostgreSQL
- PostGIS
- GiST Indexes
- SQL

## Example Use Cases
### Store Locator Search
Finding the five nearest retail store locations within 10km of a customer coordinate.

### Geofence Breach Detection
Querying whether moving asset coordinates have entered designated restricted geographic zones.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PostgreSQL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://postgis.net/documentation/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

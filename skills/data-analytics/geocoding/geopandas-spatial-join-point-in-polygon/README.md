# Geopandas Spatial Join Point In Polygon

## Description
Executes spatial joins (sjoin) and point-in-polygon containment checks using GeoPandas and Shapely. Use when enriching location data with neighborhood, census, or boundary attributes.

## Purpose
Matching millions of GPS coordinates to geographic zones (census tracts, delivery zones) naively requires quadratic time. GeoPandas uses spatial R-Tree indexing to execute joins in seconds.

## When to Use
- When executing geopandas spatial join point in polygon in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GeoPandas, Shapely / GEOS) cannot be provisioned.

## Supported Technologies
- GeoPandas
- Shapely / GEOS
- Python 3.10+
- R-Tree

## Example Use Cases
### Delivery Zone Assignment
Mapping 100,000 order drop-off coordinates to regional distribution hub zones.

### Demographic Census Enrichment
Attaching census tract median income attributes to customer retail store visits.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GeoPandas) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://geopandas.org/en/stable/docs/user_guide/mergingdata.html#spatial-joins
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

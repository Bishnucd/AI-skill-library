# Voronoi Diagram Spatial Partitioning

## Description
Partitions geographic regions into Voronoi polygons (Thiessen polygons) based on point facility centroids. Use when calculating service catchment zones and closest facility territories.

## Purpose
Voronoi diagrams partition space such that any point within a polygon is closer to that polygon's generating facility than to any other facility, defining natural territorial catchment boundaries.

## When to Use
- When executing voronoi diagram spatial partitioning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SciPy spatial.Voronoi, Shapely) cannot be provisioned.

## Supported Technologies
- SciPy spatial.Voronoi
- Shapely
- GeoPandas
- Computational Geometry

## Example Use Cases
### Emergency Service Catchment Modeling
Delineating primary response territories for fire stations based on geographic proximity.

### Retail Cannibalization Analysis
Mapping customer catchment territories between adjacent franchised store locations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SciPy spatial.Voronoi) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.Voronoi.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

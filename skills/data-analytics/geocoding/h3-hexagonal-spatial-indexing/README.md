# H3 Hexagonal Spatial Indexing

## Description
Indexes geographic points into Uber H3 hierarchical hexagonal spatial cells for aggregation and analysis. Use when performing spatial clustering, heatmapping, and spatial joins at scale.

## Purpose
Hexagons possess equal distance to all neighboring centroids, eliminating directional bias inherent in square grid systems. H3 assigns 64-bit integer index hashes to nested hexagonal cells.

## When to Use
- When executing h3 hexagonal spatial indexing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Uber H3, Python / JavaScript) cannot be provisioned.

## Supported Technologies
- Uber H3
- Python / JavaScript
- GeoPandas
- Folium

## Example Use Cases
### Rideshare Surge Pricing
Calculating localized supply/demand ratios within discrete hexagonal spatial buckets.

### Urban Density Mapping
Aggregating millions of foot-traffic data points into clean spatial heatmaps.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Uber H3) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://h3geo.org/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

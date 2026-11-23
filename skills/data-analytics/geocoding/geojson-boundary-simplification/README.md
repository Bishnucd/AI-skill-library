# Geojson Boundary Simplification

## Description
Simplifies complex GeoJSON polygon boundaries using the Douglas-Peucker algorithm while preserving topology. Use when optimizing large geographic boundary files for web mapping.

## Purpose
High-resolution geographic boundaries contain millions of vertices, causing massive file sizes and sluggish web rendering. Topological simplification reduces polygon coordinates by up to 90%.

## When to Use
- When executing geojson boundary simplification in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GeoJSON, Turf.js) cannot be provisioned.

## Supported Technologies
- GeoJSON
- Turf.js
- TopoJSON
- Douglas-Peucker

## Example Use Cases
### Web Map Performance Optimization
Shrinking 50MB county boundary GeoJSON files down to 2MB for instant client-side map rendering.

### Spatial Filter Pre-Processing
Accelerating point-in-polygon queries by testing against simplified boundary envelopes first.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GeoJSON) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://mapshaper.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

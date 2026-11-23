# Spatial Buffer Envelope Analysis

## Description
Constructs metric distance buffer polygons around points, lines, and geometries using Shapely and pyproj. Use when modeling impact zones, proximity radii, and environmental setbacks.

## Purpose
Buffering in degrees (EPSG:4326) creates distorted ovals due to Earth curvature. Projecting geometries to planar conformal projections (UTM) generates accurate circular buffer zones in meters.

## When to Use
- When executing spatial buffer envelope analysis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Shapely, pyproj) cannot be provisioned.

## Supported Technologies
- Shapely
- pyproj
- EPSG:3857 / UTM
- Python

## Example Use Cases
### School Zone Alcohol Exclusion Buffer
Generating 500-meter statutory exclusion buffers around schools for liquor licensing.

### Pipeline Environmental Impact Zone
Modeling 100-meter hazard corridors along oil and gas pipeline routes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Shapely) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://shapely.readthedocs.io/en/stable/manual.html#object.buffer
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

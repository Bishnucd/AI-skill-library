# Coordinate Reference System Crs Transformation

## Description
Transforms geospatial coordinates across EPSG projections (WGS84, Web Mercator, State Plane, UTM) using GDAL/PROJ. Use when resolving projection mismatches and calculating accurate distances.

## Purpose
Calculating distances or displaying maps with mismatched coordinate reference systems (CRS) causes miles of error. PROJ translates geodetic coordinates across ellipsoids and cartographic projections.

## When to Use
- When executing coordinate reference system crs transformation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PROJ / GDAL, pyproj) cannot be provisioned.

## Supported Technologies
- PROJ / GDAL
- pyproj
- EPSG Projections
- Geodesy

## Example Use Cases
### Engineering Survey Accuracy
Transforming GPS satellite coordinates into local county State Plane feet for construction.

### CAD to GIS Data Conversion
Re-projecting engineering AutoCAD drawings into standard GIS coordinate layers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PROJ / GDAL) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://proj.org/en/9.3/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

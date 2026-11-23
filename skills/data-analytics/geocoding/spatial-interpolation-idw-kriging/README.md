# Spatial Interpolation Idw Kriging

## Description
Interpolates continuous continuous surface raster grids from sparse spatial point measurements using Inverse Distance Weighting (IDW). Use when generating temperature and pollution heatmaps.

## Purpose
Sensor stations provide readings only at specific coordinates. Spatial interpolation algorithms (IDW, Kriging) estimate continuous surface values across regular grid lattices, producing smooth heatmaps.

## When to Use
- When executing spatial interpolation idw kriging in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SciPy griddata, NumPy) cannot be provisioned.

## Supported Technologies
- SciPy griddata
- NumPy
- Spatial Interpolation (IDW)
- GeoTIFF

## Example Use Cases
### Air Quality Pollution Surface Mapping
Generating city-wide smog density heatmaps from 30 air quality monitoring stations.

### Rainfall Precipitation Grids
Estimating regional agricultural rainfall patterns from sparse weather radar gauges.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SciPy griddata) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.griddata.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

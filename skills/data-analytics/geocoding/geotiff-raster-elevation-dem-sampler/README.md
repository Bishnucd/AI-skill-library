# Geotiff Raster Elevation Dem Sampler

## Description
Samples digital elevation models (DEM) and raster imagery at point coordinates using Rasterio and GDAL. Use when extracting terrain elevation, slope, and satellite values for GPS locations.

## Purpose
Drone missions, hiking apps, and civil engineering require elevation data. Rasterio reads georeferenced GeoTIFF elevation rasters (SRTM, Copernicus), extracting terrain height at coordinate points.

## When to Use
- When executing geotiff raster elevation dem sampler in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Rasterio, GDAL) cannot be provisioned.

## Supported Technologies
- Rasterio
- GDAL
- GeoTIFF / DEM
- Python

## Example Use Cases
### Hiking Trail Elevation Profiling
Generating elevation gain and gradient elevation charts along hiking GPS tracklogs.

### Solar Panel Slope Feasibility
Sampling terrain slope and aspect from LIDAR DEM rasters for solar farm planning.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Rasterio) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://rasterio.readthedocs.io/en/stable/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

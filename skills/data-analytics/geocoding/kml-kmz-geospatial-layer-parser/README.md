# Kml Kmz Geospatial Layer Parser

## Description
Extracts placemarks, polygons, styling, and embedded ground overlays from Google Earth KML and KMZ files. Use when ingesting Google Earth spatial layers into modern GIS systems.

## Purpose
Field teams frequently share spatial data in Google Earth KML/KMZ formats. Unzipping KMZ bundles and parsing KML XML translates placemarks, line strings, and extended data into standard GeoJSON.

## When to Use
- When executing kml kmz geospatial layer parser in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (fastkml / pykml, XML / ZIP) cannot be provisioned.

## Supported Technologies
- fastkml / pykml
- XML / ZIP
- GeoJSON
- Python

## Example Use Cases
### Google Earth Field Survey Import
Ingesting environmental field markings recorded in Google Earth into PostgreSQL PostGIS.

### Flight Path KML Conversion
Converting drone flight boundary KML files into interactive web map layers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (fastkml / pykml) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.google.com/kml/documentation
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

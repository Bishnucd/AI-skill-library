# Reverse Geocoding Spatial Lookup

## Description
Converts latitude/longitude coordinates into normalized street addresses and administrative boundaries. Use when enriching location coordinate streams with human-readable address data.

## Purpose
Raw GPS coordinates are unintelligible to human users. Reverse geocoding resolves point coordinates against spatial polygonal boundaries and road networks to produce standardized addresses.

## When to Use
- When executing reverse geocoding spatial lookup in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Nominatim / OpenStreetMap, Python) cannot be provisioned.

## Supported Technologies
- Nominatim / OpenStreetMap
- Python
- Shapely
- GeoPandas

## Example Use Cases
### Delivery Driver Check-In
Translating courier smartphone GPS pings into human-readable customer delivery addresses.

### Photo Metadata Geotagging
Displaying city and venue names on user photo uploads based on EXIF GPS coordinates.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Nominatim / OpenStreetMap) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://nominatim.org/release-docs/latest/api/Reverse/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

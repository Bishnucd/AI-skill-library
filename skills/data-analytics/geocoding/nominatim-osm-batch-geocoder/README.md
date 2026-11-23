# Nominatim Osm Batch Geocoder

## Description
Geocodes address strings into WGS84 coordinates using OpenStreetMap Nominatim with rate-limit compliance. Use when batch-geocoding physical addresses without paid API keys.

## Purpose
OpenStreetMap Nominatim provides free geocoding. Implementing polite 1-second request delays, custom user-agent headers, and local caching satisfies OSM Usage Policies while geocoding datasets.

## When to Use
- When executing nominatim osm batch geocoder in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Nominatim API, OpenStreetMap) cannot be provisioned.

## Supported Technologies
- Nominatim API
- OpenStreetMap
- Python geopy
- WGS84

## Example Use Cases
### Free Address Batch Geocoding
Geocoding 5,000 store location addresses into GPS coordinates for map displays.

### Open Source Map Pinning
Plotting user survey respondents on interactive maps without Google Maps API costs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Nominatim API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://nominatim.org/release-docs/latest/api/Search/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

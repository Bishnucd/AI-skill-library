# Mbtiles Vector Tile Pyramid Bundler

## Description
Packages multi-resolution vector map tiles into compact SQLite MBTiles databases using tippecanoe. Use when serving offline mobile maps and fast web vector tile layers.

## Purpose
Serving individual map tile files creates millions of tiny files. MBTiles packages vector tile pyramids (Z/X/Y) into a single optimized SQLite database file for blazing-fast mobile and web hosting.

## When to Use
- When executing mbtiles vector tile pyramid bundler in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (tippecanoe, MBTiles) cannot be provisioned.

## Supported Technologies
- tippecanoe
- MBTiles
- Mapbox Vector Tiles (MVT)
- SQLite

## Example Use Cases
### Offline Vector Mobile Maps
Embedding complete city street map data inside mobile apps in a single 50MB MBTiles file.

### High-Performance Web Map Layers
Serving custom parcel boundary vector layers with sub-millisecond database tile lookups.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (tippecanoe) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/felt/tippecanoe
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Isochrone Travel Time Mapping

## Description
Generates reachable travel time polygon isochrones based on multimodal road networks and transit schedules. Use when analyzing geographic accessibility, catchment areas, and service radius.

## Purpose
Circular Euclidean radius filters are misleading because terrain and highways dictate actual reachability. Isochrones compute exact polygonal areas reachable within 15, 30, or 60 minutes.

## When to Use
- When executing isochrone travel time mapping in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OpenRouteService API / Valhalla, GeoJSON) cannot be provisioned.

## Supported Technologies
- OpenRouteService API / Valhalla
- GeoJSON
- Leaflet
- Python

## Example Use Cases
### Real Estate Commute Analysis
Finding homes within a guaranteed 30-minute public transit commute to city center.

### Emergency Service Coverage
Auditing hospital ambulance catchment coverage within 10-minute drive times.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OpenRouteService API / Valhalla) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://openrouteservice.org/dev/#/api-docs/v2/isochrones
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

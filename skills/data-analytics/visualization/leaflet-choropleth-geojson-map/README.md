# Leaflet Choropleth Geojson Map

## Description
Renders thematic choropleth maps by binding GeoJSON boundary polygons to statistical indicators using Leaflet. Use when mapping regional demographic, census, or sales metrics.

## Purpose
Choropleth mapping visualizes regional quantitative statistics by shading geographic zones according to classified data breaks. Leaflet provides lightweight mobile-friendly mapping layers.

## When to Use
- When executing leaflet choropleth geojson map in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Leaflet.js, GeoJSON) cannot be provisioned.

## Supported Technologies
- Leaflet.js
- GeoJSON
- ColorBrewer
- Choropleth Mapping

## Example Use Cases
### Election Results by Electoral District
Visualizing voter turnouts and party margins across state legislative boundaries.

### Regional Epidemiological Infection Rates
Displaying per-capita health clinic incident rates across national province polygons.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Leaflet.js) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://leafletjs.com/examples/choropleth/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

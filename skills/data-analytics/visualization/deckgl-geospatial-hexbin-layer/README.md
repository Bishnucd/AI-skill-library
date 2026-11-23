# Deckgl Geospatial Hexbin Layer

## Description
Renders GPU-powered hexagonal binning layers over high-density spatial datasets using Deck.gl. Use when aggregating millions of GPS coordinates into interactive heatmaps.

## Purpose
Deck.gl binds directly to WebGL vertex buffers to aggregate millions of raw point telemetry coordinates into dynamic 3D extruded hexagonal prisms on interactive basemaps.

## When to Use
- When executing deckgl geospatial hexbin layer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Deck.gl, Uber H3) cannot be provisioned.

## Supported Technologies
- Deck.gl
- Uber H3
- WebGL2
- MapLibre / Mapbox

## Example Use Cases
### Urban Ride-Hail Demand Aggregation
Visualizing 2 million vehicle pickup events clustered into 200m hexagonal heat columns.

### Maritime Vessel Density Heatmap
Mapping global shipping lane choke points from historical AIS transponder telemetry.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Deck.gl) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://deck.gl/docs/api-reference/aggregation-layers/hexagon-layer
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

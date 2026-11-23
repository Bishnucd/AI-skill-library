# S2 Geometry Spherical Indexing

## Description
Indexes geographic points and polygons onto hierarchical Hilbert curve cells using Google S2 Geometry. Use when executing lightning-fast spatial containment and proximity queries.

## Purpose
Google S2 projects the sphere onto a cube, decomposing surfaces into hierarchical quad-tree cells indexed by 64-bit integers along a Hilbert curve, enabling fast 1D B-tree spatial range queries.

## When to Use
- When executing s2 geometry spherical indexing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Google S2 Geometry, C++ / Python / Go) cannot be provisioned.

## Supported Technologies
- Google S2 Geometry
- C++ / Python / Go
- Hilbert Curve
- Spatial Indexing

## Example Use Cases
### High-Volume Spatial Indexing
Indexing billions of mobile telemetry pings into 64-bit integers for instant B-tree queries.

### Polygon Spatial Containment
Testing whether delivery vehicles are inside delivery zones using fast integer interval checks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Google S2 Geometry) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://s2geometry.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

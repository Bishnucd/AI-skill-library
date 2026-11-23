# Delaunay Triangulation Mesh Generation

## Description
Generates planar Delaunay triangulations and Triangulated Irregular Networks (TIN) from point coordinate clouds. Use when constructing terrain surface meshes and proximity networks.

## Purpose
Delaunay triangulation connects points into triangles such that no point lies inside the circumcircle of any triangle, avoiding skinny sliver triangles when modeling 3D terrain surfaces.

## When to Use
- When executing delaunay triangulation mesh generation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SciPy spatial.Delaunay, TIN Meshes) cannot be provisioned.

## Supported Technologies
- SciPy spatial.Delaunay
- TIN Meshes
- Shapely
- Computational Geometry

## Example Use Cases
### Terrain 3D Surface Modeling
Generating lightweight 3D terrain meshes from aerial drone survey elevation points.

### Proximity Network Generation
Creating connected spatial mesh graphs between IoT sensor towers for mesh networking.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SciPy spatial.Delaunay) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.Delaunay.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

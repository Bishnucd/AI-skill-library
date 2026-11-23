# Plotly Interactive 3d Scatter Plot

## Description
Generates hardware-accelerated interactive 3D scatter plots and surface meshes using Plotly. Use when rendering multidimensional datasets with interactive rotation, zoom, and tooltips.

## Purpose
Plotly uses WebGL shaders to render responsive 3D point clouds and topographical surface meshes in web browsers with zero client-side lag across millions of coordinate points.

## When to Use
- When executing plotly interactive 3d scatter plot in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Plotly.js, WebGL) cannot be provisioned.

## Supported Technologies
- Plotly.js
- WebGL
- Python / TypeScript
- Multidimensional Data

## Example Use Cases
### Genomic PCA Embedding Exploration
Visualizing first 3 principal components of single-cell RNA sequencing datasets.

### LiDAR Terrain Elevation Mapping
Rendering drone topographical survey elevation points with interactive pan and zoom.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Plotly.js) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://plotly.com/javascript/3d-scatter-plots/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

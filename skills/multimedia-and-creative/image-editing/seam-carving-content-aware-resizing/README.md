# Seam Carving Content Aware Resizing

## Description
Resizes images non-linearly while protecting key subject features using seam carving and energy gradient maps. Use when reframing wide landscape photography for vertical displays.

## Purpose
Standard cropping loses scene context and stretching distorts subjects. Seam carving finds connected paths of lowest energy (least detail) and removes them iteratively to resize images.

## When to Use
- When executing seam carving content aware resizing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Seam Carving, Content-Aware Scaling) cannot be provisioned.

## Supported Technologies
- Seam Carving
- Content-Aware Scaling
- Dynamic Programming
- NumPy / OpenCV

## Example Use Cases
### Landscape to Mobile Wallpaper Adaptation
Retargeting a 16:9 scenic mountain photo to a 9:16 vertical phone wallpaper without squishing the mountain peak.

### E-Commerce Product Banner Fitting
Extending blank background canvas seamlessly to fit varying responsive web advertising banner slots.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Seam Carving) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Seam_carving
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

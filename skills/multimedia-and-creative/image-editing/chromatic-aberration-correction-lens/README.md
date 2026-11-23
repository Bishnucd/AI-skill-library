# Chromatic Aberration Correction Lens

## Description
Corrects lateral chromatic aberration color fringing around high-contrast edges using radial lens models. Use when cleaning raw camera captures taken with wide-angle lenses.

## Purpose
Camera lenses refract red, green, and blue wavelengths at slightly different angles, causing purple and green fringes at frame edges. Radial scaling of red and blue channels eliminates fringes.

## When to Use
- When executing chromatic aberration correction lens in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Chromatic Aberration, Lens Correction) cannot be provisioned.

## Supported Technologies
- Chromatic Aberration
- Lens Correction
- OpenCV / RawPy
- Color Fringing

## Example Use Cases
### Architectural Photography Window Fringe Removal
Eliminating severe purple fringing around bright window frames taken with wide-angle glass.

### Drone Aerial Survey Image Correction
Aligning color channels on drone camera edges before stitching large orthomosaic maps.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Chromatic Aberration) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Chromatic_aberration
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

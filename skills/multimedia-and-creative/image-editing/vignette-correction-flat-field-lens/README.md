# Vignette Correction Flat Field Lens

## Description
Eliminates lens peripheral darkening and vignetting using radial cosine falloff compensation models. Use when flattening uneven lighting across astrophotography and microscope images.

## Purpose
Camera lenses suffer from natural optical vignetting, where corners receive 30% less light than the center. Multiplying the image by an inverted radial cosine gain mask restores flat lighting.

## When to Use
- When executing vignette correction flat field lens in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Vignette Correction, Flat-Field Correction) cannot be provisioned.

## Supported Technologies
- Vignette Correction
- Flat-Field Correction
- OpenCV / NumPy
- Lens Correction

## Example Use Cases
### Microscope Pathology Slide Flat-Fielding
Eliminating center hotspot lighting on biological tissue slides to ensure accurate automated cell counts.

### Astrophotography Deep Sky Stack Flattening
Removing lens vignetting from long-exposure night sky photos to reveal faint background galaxies.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Vignette Correction) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Vignetting
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

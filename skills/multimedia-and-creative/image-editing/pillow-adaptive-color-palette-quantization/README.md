# Pillow Adaptive Color Palette Quantization

## Description
Quantizes 24-bit RGB images into optimal 8-bit indexed color palettes using Pillow octree and median-cut algorithms. Use when generating lightweight PNGs and retro pixel art.

## Purpose
Quantization maps 16 million colors to a compact 256-color palette while applying Floyd-Steinberg dithering to prevent banding, reducing uncompressed image memory footprints by 66%.

## When to Use
- When executing pillow adaptive color palette quantization in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Pillow (PIL), Color Quantization) cannot be provisioned.

## Supported Technologies
- Pillow (PIL)
- Color Quantization
- Median-Cut / Octree
- Indexed Color

## Example Use Cases
### Mobile Game 2D Sprite Sheet Optimization
Reducing 50MB of 24-bit sprite sheets down to 12MB of indexed 8-bit assets for fast mobile loading.

### Retro Pixel Art Aesthetic Generation
Quantizing modern photographs into 16-color nostalgic video game palettes with dithering.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Pillow (PIL)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pillow.readthedocs.io/en/stable/reference/Image.html#PIL.Image.Image.quantize
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

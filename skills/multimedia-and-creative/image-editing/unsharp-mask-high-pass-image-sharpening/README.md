# Unsharp Mask High Pass Image Sharpening

## Description
Enhances micro-contrast and fine edge definition using unsharp masking and high-pass spatial filters. Use when preparing photos for high-resolution print or web display.

## Purpose
Unsharp masking creates a blurred inverted copy of an image and subtracts it from the original, creating localized contrast halos along edges that make details appear crisper.

## When to Use
- When executing unsharp mask high pass image sharpening in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Unsharp Masking, High-Pass Filter) cannot be provisioned.

## Supported Technologies
- Unsharp Masking
- High-Pass Filter
- Pillow / OpenCV
- Image Sharpening

## Example Use Cases
### E-Commerce Product Detail Zoom Sharpening
Crisping fabric textures and watch dial typography on high-resolution product photography.

### Downscaled Thumbnail Detail Restoration
Restoring crisp edge definition to images softened during multi-octave bicubic downsampling.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Unsharp Masking) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Unsharp_masking
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

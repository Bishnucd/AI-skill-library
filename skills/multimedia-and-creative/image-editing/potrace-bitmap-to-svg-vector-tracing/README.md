# Potrace Bitmap To Svg Vector Tracing

## Description
Transforms black-and-white raster bitmaps into smooth, resolution-independent SVG vector graphics using Potrace. Use when converting scanned logos, signatures, and sketches to SVG.

## Purpose
Potrace decomposes binary bitmap images into smooth mathematical Bézier curves and polygon paths, producing compact SVG vector files that scale infinitely without pixelation.

## When to Use
- When executing potrace bitmap to svg vector tracing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Potrace, Vectorization) cannot be provisioned.

## Supported Technologies
- Potrace
- Vectorization
- SVG Bézier Paths
- Bitmap Tracing

## Example Use Cases
### Scanned Corporate Logo Vectorization
Converting 300px low-resolution scanned legacy company logos into infinite-resolution SVG vectors.

### Executive Handwritten Signature Digitization
Transforming pen signatures into scalable vector paths for legal electronic document signing.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Potrace) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://potrace.sourceforge.net/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

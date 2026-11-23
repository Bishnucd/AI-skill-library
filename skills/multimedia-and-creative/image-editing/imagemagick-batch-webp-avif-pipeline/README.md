# Imagemagick Batch Webp Avif Pipeline

## Description
Converts and compresses image archives into modern WebP and AVIF formats using ImageMagick 7. Use when automating web asset optimization pipelines with high visual quality.

## Purpose
ImageMagick provides a robust CLI engine for image manipulation. Modern web optimization requires converting legacy PNG/JPEG files to next-gen AVIF and WebP with fine quality tuning.

## When to Use
- When executing imagemagick batch webp avif pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ImageMagick 7, WebP / AVIF) cannot be provisioned.

## Supported Technologies
- ImageMagick 7
- WebP / AVIF
- Batch Image Processing
- Compression

## Example Use Cases
### E-Commerce Product Catalog Image Migration
Compressing 500,000 JPEG product photos into AVIF format, reducing CDN bandwidth by 55%.

### Automated CI/CD Asset Optimization
Optimizing static frontend website assets automatically during GitHub Actions deployment.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ImageMagick 7) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://imagemagick.org/script/command-line-processing.php
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

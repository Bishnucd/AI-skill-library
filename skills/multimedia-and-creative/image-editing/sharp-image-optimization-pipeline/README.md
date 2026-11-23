# Sharp Image Optimization Pipeline

## Description
Batches image resizing, WebP/AVIF format transcoding, and metadata stripping using the Node.js Sharp library. Use when optimizing responsive web images for Core Web Vitals.

## Purpose
Heavy JPEG/PNG images cause poor Largest Contentful Paint (LCP) scores. Sharp leverages libvips to resize, compress, and transcode images to modern AVIF/WebP formats up to 5x faster than ImageMagick.

## When to Use
- When executing sharp image optimization pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Node.js, Sharp / libvips) cannot be provisioned.

## Supported Technologies
- Node.js
- Sharp / libvips
- WebP / AVIF
- TypeScript

## Example Use Cases
### Responsive CDN Asset Pipeline
Generating responsive image srcset variants automatically on image upload.

### Web Vital Performance Boost
Slashing page image payload by 70% to achieve sub-second LCP render times.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Node.js) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://sharp.pixelplumbing.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

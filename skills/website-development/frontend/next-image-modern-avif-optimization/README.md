# Next Image Modern Avif Optimization

## Description
Optimizes responsive image delivery with automated AVIF/WebP generation using next/image. Use when achieving 100% Core Web Vitals Largest Contentful Paint (LCP) scores.

## Purpose
Unoptimized hero images crush Core Web Vitals. The Next.js Image component automatically resizes images, converts to AVIF/WebP, prevents cumulative layout shift (CLS), and lazily loads off-screen images.

## When to Use
- When executing next image modern avif optimization in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (next/image, AVIF / WebP) cannot be provisioned.

## Supported Technologies
- next/image
- AVIF / WebP
- Responsive Images
- LCP Optimization

## Example Use Cases
### E-Commerce Product Gallery LCP Optimization
Converting 5MB high-resolution product photos into 80KB responsive AVIF images automatically.

### Zero-CLS Layout Shift Image Loading
Eliminating layout shift by reserving exact aspect ratio bounding boxes before images download.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (next/image) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://nextjs.org/docs/app/api-reference/components/image
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

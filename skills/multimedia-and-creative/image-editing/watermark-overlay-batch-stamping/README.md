# Watermark Overlay Batch Stamping

## Description
Applies semi-transparent vector and text watermark overlays to image collections with configurable opacity. Use when protecting copyright and branding intellectual property on digital imagery.

## Purpose
Protecting digital image assets requires applying non-intrusive yet tamper-evident watermarks. Layering PNG alpha channels over designated image coordinates ensures consistent branding.

## When to Use
- When executing watermark overlay batch stamping in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Pillow) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Pillow
- OpenCV
- PNG Alpha

## Example Use Cases
### Stock Photography Protection
Applying diagonal tiled watermarks to preview images prior to customer licensing.

### Real Estate Listing Branding
Stamping agency logo watermarks on property listing photos.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

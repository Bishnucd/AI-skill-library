# Video Watermark Overlay Transparency Positioning

## Description
Overlays alpha-transparent branded logo watermarks with pixel-exact coordinate offsets using FFmpeg overlay. Use when protecting proprietary video assets and branding broadcast footage.

## Purpose
Watermarking requires compositing transparent PNG logos onto moving video streams with precise anchor positioning (e.g., bottom-right corner with 20px padding) without dropping frame rates.

## When to Use
- When executing video watermark overlay transparency positioning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (FFmpeg overlay, Alpha Transparency) cannot be provisioned.

## Supported Technologies
- FFmpeg overlay
- Alpha Transparency
- Video Watermarking
- Branding

## Example Use Cases
### Stock Footage Video Preview Protection
Burning semi-transparent diagonal grid watermarks across video previews to prevent theft.

### TV Broadcast Network Bug Overlay
Pinning a high-definition translucent channel logo to the bottom right corner of broadcast clips.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (FFmpeg overlay) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#overlay-1
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Video Noise Reduction Hqdn3d Spatial Temporal

## Description
Reduces high-ISO sensor noise and grain from low-light video using 3D spatio-temporal filtering with FFmpeg hqdn3d. Use when cleaning underexposed event and night video captures.

## Purpose
Low-light video exhibits severe dancing chroma and luma noise. hqdn3d averages pixels across both 2D spatial neighbors and consecutive time frames, eliminating grain while keeping moving edges sharp.

## When to Use
- When executing video noise reduction hqdn3d spatial temporal in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (hqdn3d Filter, Spatio-Temporal Denoising) cannot be provisioned.

## Supported Technologies
- hqdn3d Filter
- Spatio-Temporal Denoising
- FFmpeg
- Low-Light Video

## Example Use Cases
### Nighttime Concert Low-Light Video Cleanup
Removing heavy digital sensor grain from smartphone concert clips filmed in dark venues.

### Security Camera Night Vision Denoising
Smoothing noisy infrared night vision camera feeds to improve downstream license plate OCR.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (hqdn3d Filter) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#hqdn3d
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

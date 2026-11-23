# Video Stabilization Vidstab Shaky Footage

## Description
Stabilizes shaky handheld camera footage in two passes using FFmpeg vidstabdetect and vidstabtransform. Use when smoothing jittery smartphone and action camera videos.

## Purpose
Handheld camera shake ruins production value. vid.stab analyzes camera translation, rotation, and zoom motion vectors in pass 1, smoothing camera trajectories in pass 2 with dynamic cropping.

## When to Use
- When executing video stabilization vidstab shaky footage in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (vid.stab, FFmpeg Filters) cannot be provisioned.

## Supported Technologies
- vid.stab
- FFmpeg Filters
- Video Stabilization
- Camera Motion

## Example Use Cases
### Handheld Smartphone Interview Stabilization
Smoothing out distracting micro-jitters from an interview filmed without a tripod or gimbal.

### Mountain Bike Action Cam Smoothing
Smoothing rough trail vibrations on chest-mounted camera footage for clean YouTube presentation.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (vid.stab) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/georgmartius/vid.stab
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Video Speed Ramp Motion Interpolation

## Description
Applies smooth video speed ramps and motion-compensated frame interpolation using FFmpeg minterpolate. Use when creating cinematic slow-motion effects from standard frame-rate footage.

## Purpose
Slowing down 30fps footage to 25% speed results in choppy 7.5fps stuttering. Motion-compensated frame interpolation synthesizes intermediate frames, producing butter-smooth slow motion.

## When to Use
- When executing video speed ramp motion interpolation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (FFmpeg, Motion Vector Interpolation) cannot be provisioned.

## Supported Technologies
- FFmpeg
- Motion Vector Interpolation
- Video Editing

## Example Use Cases
### Action Sports Slow Motion
Creating cinematic slow-motion impact shots from standard 60fps action camera video.

### Product Reveal Speed Ramps
Accelerating transition pans and decelerating on product detail beauty shots.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (FFmpeg) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#minterpolate
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

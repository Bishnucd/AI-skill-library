# Variable Frame Rate To Cfr Conversion

## Description
Transcodes smartphone and screen-recorded Variable Frame Rate (VFR) video into Constant Frame Rate (CFR). Use when eliminating audio desync in professional NLEs like Premiere and DaVinci.

## Purpose
Smartphones record in VFR to save battery, dropping framerates when scenes are static. Non-linear editors (Premiere, DaVinci) expect CFR, causing severe audio desync if imported directly.

## When to Use
- When executing variable frame rate to cfr conversion in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Constant Frame Rate (CFR), FFmpeg -r / -vsync) cannot be provisioned.

## Supported Technologies
- Constant Frame Rate (CFR)
- FFmpeg -r / -vsync
- Video Transcoding
- NLE Prep

## Example Use Cases
### Video Editor Footage Preparation Pipeline
Converting iPhone and OBS gameplay footage to CFR before importing into editing software.

### Automated Multi-Source Video Switching
Standardizing disparate remote Zoom and mobile webcam feeds to unified 30 FPS for live mixing.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Constant Frame Rate (CFR)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://trac.ffmpeg.org/wiki/StreamingGuide#ConstantFrameRate
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

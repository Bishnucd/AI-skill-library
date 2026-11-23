# Ffmpeg Lossless Video Trimmer

## Description
Cuts and splices video clips losslessly at exact keyframes without re-encoding via FFmpeg stream copy. Use when trimming video files instantly without quality loss or CPU overhead.

## Purpose
Re-encoding long videos consumes immense compute and introduces generational compression artifacts. Stream copy (-c copy) splices video streams directly at keyframe boundaries in milliseconds.

## When to Use
- When executing ffmpeg lossless video trimmer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (FFmpeg, H.264 / H.265) cannot be provisioned.

## Supported Technologies
- FFmpeg
- H.264 / H.265
- Bash / PowerShell
- Stream Copy

## Example Use Cases
### Video Stream Clip Extraction
Extracting 30-second highlight clips from a 3-hour gaming livestream instantly.

### Pre-Roll Trimming
Removing countdowns and buffer silence from recorded webinars before publishing.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (FFmpeg) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://trac.ffmpeg.org/wiki/Seeking
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Ffmpeg Loudness Normalization Lufs

## Description
Normalizes audio loudness to standard broadcast targets (-16 LUFS podcast, -14 LUFS streaming) via FFmpeg loudnorm filter. Use when mastering spoken audio for podcast or streaming distribution.

## Purpose
Inconsistent audio loudness annoys listeners and causes platforms to apply jarring automatic gain control. FFmpeg two-pass loudnorm ensures audio strictly meets EBU R128 podcast standards.

## When to Use
- When executing ffmpeg loudness normalization lufs in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (FFmpeg, EBU R128) cannot be provisioned.

## Supported Technologies
- FFmpeg
- EBU R128
- Bash / PowerShell
- LUFS

## Example Use Cases
### Podcast Audio Mastering
Bringing dialogue recordings from multiple remote microphones to a uniform -16 LUFS standard.

### Broadcast Compliance
Mastering video commercial audio tracks to comply with television CALM Act regulations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (FFmpeg) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#loudnorm
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

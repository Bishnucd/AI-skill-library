# Audio Video Sync Drift Correction Pts

## Description
Corrects cumulative audio-video synchronization drift and Presentation Timestamp (PTS) skew using FFmpeg. Use when fixing gradual audio desync in long interview recordings.

## Purpose
Clock drift between separate audio recorders and cameras causes audio to drift out of sync by several seconds over a 2-hour shoot. Rescaling audio timestamps restores perfect lip-sync alignment.

## When to Use
- When executing audio video sync drift correction pts in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (A/V Sync Correction, PTS Manipulation) cannot be provisioned.

## Supported Technologies
- A/V Sync Correction
- PTS Manipulation
- FFmpeg atempo / asetpts
- Video Repair

## Example Use Cases
### Long-Form Podcast Video Lip-Sync Fix
Re-aligning external Zoom audio recorder stems with DSLR camera video after a 3-hour marathon interview.

### Webcam Stream Recording Timestamp Repair
Fixing cumulative audio lag caused by variable frame rate drops during live screen recording.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (A/V Sync Correction) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#asetpts
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

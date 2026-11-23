# Podcast Intro Outro Crossfade Stitching

## Description
Assembles podcast episodes automatically with beat-matched music crossfading and loudness normalization. Use when automating podcast publishing pipelines from raw recorded stems.

## Purpose
Publishing podcasts manually requires repetitive stitching of intro music, episode voice, mid-roll sponsor spots, and outro beds. Automated pipelines align stems with smooth crossfades.

## When to Use
- When executing podcast intro outro crossfade stitching in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Audio Crossfading, Loudness Normalization) cannot be provisioned.

## Supported Technologies
- Audio Crossfading
- Loudness Normalization
- FFmpeg acrossfade
- Python Automation

## Example Use Cases
### Automated Daily News Podcast Assembly
Stitching daily news anchor audio into branded musical intros and sponsor spots in 10 seconds.

### Corporate Internal Audio Newsletter
Generating weekly executive audio updates with consistent intro/outro music beds automatically.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Audio Crossfading) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#acrossfade
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

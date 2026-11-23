# Multiband Audio Compression Mastering

## Description
Balances frequency dynamics across low, mid, and high bands using multiband audio compression. Use when mastering podcasts and music to achieve consistent commercial loudness.

## Purpose
Single-band compressors duck the entire mix when bass peaks occur. Multiband compressors divide the spectrum into isolated frequency bands, controlling dynamics independently.

## When to Use
- When executing multiband audio compression mastering in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Multiband Compressor, FFmpeg Audio Filters) cannot be provisioned.

## Supported Technologies
- Multiband Compressor
- FFmpeg Audio Filters
- Audio Mastering
- DSP

## Example Use Cases
### Podcast Master Track Leveling
Evening out volume discrepancies between deep-voiced and high-pitched speakers on the same track.

### Video Voiceover Music Bed Integration
Controlling voiceover dynamics to cut cleanly through busy background musical accompaniment.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Multiband Compressor) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#asubcut_002c-asubboost_002c-acompressor
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

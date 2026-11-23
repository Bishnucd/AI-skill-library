# Audio Peak Limiter Inter Sample Peaks

## Description
Prevents digital distortion and inter-sample clipping during MP3/AAC encoding using True Peak brickwall limiting. Use when mastering audio to strict streaming platform loudness targets.

## Purpose
Sample-peak limiters miss analog waveform peaks that occur between discrete digital samples. True Peak limiters use 4x oversampling to catch inter-sample peaks, preventing lossy encoder clipping.

## When to Use
- When executing audio peak limiter inter sample peaks in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (True Peak Limiting, EBU R128 / ITU-R BS.1770) cannot be provisioned.

## Supported Technologies
- True Peak Limiting
- EBU R128 / ITU-R BS.1770
- FFmpeg alimiter
- Mastering

## Example Use Cases
### Spotify & Apple Podcasts Delivery Mastering
Mastering podcast episodes to -16 LUFS integrated with a strict -1.0 dBFS True Peak ceiling.

### YouTube Video Dialogue Normalization
Preventing digital clipping when YouTube transcodes uploaded video audio tracks to AAC.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (True Peak Limiting) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Inter-sample_peaks
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

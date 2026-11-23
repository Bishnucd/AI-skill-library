# Highpass Filter Rumble Attenuation

## Description
Attenuates sub-audible mechanical rumble, air conditioning hum, and microphone handling noise using steep high-pass filters. Use when cleaning voice tracks prior to compression.

## Purpose
Frequencies below 80Hz contain HVAC vibrations and handling noise that waste amplifier headroom and trigger compressors prematurely. Steep Butterworth HPFs eliminate sub-bass rumble.

## When to Use
- When executing highpass filter rumble attenuation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (High-Pass Filter (HPF), FFmpeg Audio Filters) cannot be provisioned.

## Supported Technologies
- High-Pass Filter (HPF)
- FFmpeg Audio Filters
- Audio Cleanup
- DSP

## Example Use Cases
### Office HVAC Background Rumble Removal
Cleaning remote Zoom interview recordings contaminated by building air conditioning hum.

### Field Recording Wind Plosive Cleanup
Attenuating low-frequency microphone diaphragm wind buffeting on outdoor news reports.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (High-Pass Filter (HPF)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#highpass
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

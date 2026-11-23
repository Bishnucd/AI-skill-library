# Sidechain Audio Ducking Compression

## Description
Ducks background music volume automatically whenever spoken dialogue occurs using sidechain compression. Use when producing videos, tutorials, and radio broadcasts.

## Purpose
Sidechain ducking feeds dialogue audio into the detector circuit of a compressor placed on the background music track, lowering music volume by 12dB–18dB whenever speech is present.

## When to Use
- When executing sidechain audio ducking compression in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Sidechain Compression, Audio Ducking) cannot be provisioned.

## Supported Technologies
- Sidechain Compression
- Audio Ducking
- FFmpeg sidechaincompress
- Post-Production

## Example Use Cases
### YouTube Tech Tutorial Voiceover Ducking
Automatically lowering background synth music when the host begins demonstrating code.

### Live Streaming Game Commentary
Ducking in-game gunfire and music audio when the streamer speaks into the microphone.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Sidechain Compression) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#sidechaincompress
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Inaudible Acoustic Watermark Embedding

## Description
Embeds robust, inaudible digital acoustic watermarks into audio files for copyright protection and broadcast tracking. Use when protecting proprietary music, voice clones, and sound assets.

## Purpose
Acoustic watermarking uses psychoacoustic masking models to hide cryptographic payload bits below the threshold of human hearing, surviving MP3 compression and microphone acoustic playback.

## When to Use
- When executing inaudible acoustic watermark embedding in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Acoustic Watermarking, Spread Spectrum DSP) cannot be provisioned.

## Supported Technologies
- Acoustic Watermarking
- Spread Spectrum DSP
- Copyright Protection
- Python

## Example Use Cases
### Commercial Music Library Broadcast Monitoring
Tracking automated radio and TV broadcast plays of licensed background music tracks.

### AI Voice Model Provenance Verification
Embedding watermarks into synthetic voice outputs to detect unauthorized deepfake misuse.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Acoustic Watermarking) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Audio_watermark
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

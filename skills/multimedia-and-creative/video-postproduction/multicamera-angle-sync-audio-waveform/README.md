# Multicamera Angle Sync Audio Waveform

## Description
Synchronizes multiple asynchronous camera video angles automatically by cross-correlating camera microphone audio. Use when automating multi-cam video editing preparation.

## Purpose
Manually syncing 3 camera angles and an external audio recorder by looking for claps is tedious. Cross-correlating audio waveforms calculates time lag offsets between all files down to millisecond accuracy.

## When to Use
- When executing multicamera angle sync audio waveform in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Audio Waveform Cross-Correlation, Multi-Camera Sync) cannot be provisioned.

## Supported Technologies
- Audio Waveform Cross-Correlation
- Multi-Camera Sync
- NumPy / SciPy
- Video Editing

## Example Use Cases
### Multi-Cam Podcast Recording Alignment
Aligning 3 DSLR video angles with high-quality studio mixer audio in 5 seconds automatically.

### Live Concert Video Multi-Angle Assembly
Synchronizing 10 fan-shot smartphone concert videos using the live musical audio track.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Audio Waveform Cross-Correlation) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Cross-correlation
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

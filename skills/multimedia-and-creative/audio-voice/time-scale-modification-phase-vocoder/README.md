# Time Scale Modification Phase Vocoder

## Description
Stretches or compresses audio duration without altering pitch using phase vocoder time-scale modification. Use when fitting voiceover tracks into fixed broadcast advertising time slots.

## Purpose
Speeding up audio by resampling raises pitch into "chipmunk" frequencies. Phase vocoders calculate Short-Time Fourier Transforms (STFT), stretching time frames while preserving exact spectral pitch.

## When to Use
- When executing time scale modification phase vocoder in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Phase Vocoder, Time-Scale Modification (TSM)) cannot be provisioned.

## Supported Technologies
- Phase Vocoder
- Time-Scale Modification (TSM)
- Rubberband / SoX
- DSP

## Example Use Cases
### Commercial 30-Second Radio Ad Timing
Compressing a 32-second announcer read down to exactly 30.0 seconds without high-pitch distortion.

### Foreign Dubbing Lip-Sync Timing Match
Speeding up or slowing down translated phrases to match foreign actor lip movements on screen.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Phase Vocoder) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Phase_vocoder
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

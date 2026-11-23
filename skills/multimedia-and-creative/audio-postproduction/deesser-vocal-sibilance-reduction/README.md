# Deesser Vocal Sibilance Reduction

## Description
Attenuates harsh vocal sibilance frequencies (5kHz–8kHz) using dynamic band-split de-essing filters. Use when smoothing piercing vocal recordings for podcasts and voiceovers.

## Purpose
Sibilant consonants ("s", "z", "sh") create piercing high-frequency spikes. De-essers isolate high frequencies with sidechain bandpass filters and compress them dynamically above a threshold.

## When to Use
- When executing deesser vocal sibilance reduction in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (De-Esser, Dynamic EQ) cannot be provisioned.

## Supported Technologies
- De-Esser
- Dynamic EQ
- Audio DSP
- FFmpeg / SoX / Python

## Example Use Cases
### Podcast Host Vocal Polishing
Eliminating sharp microphone sibilance spikes caused by condenser mics without pop filters.

### Audiobook Narration ACX Compliance
Smoothing audiobook dialogue tracks to pass stringent publisher audio quality audits.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (De-Esser) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/De-essing
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Binaural Spatial Audio Headphone Mix

## Description
Renders 3D spatial audio positioning for standard stereo headphones using Head-Related Transfer Functions (HRTF). Use when creating immersive podcast dramas and VR audio experiences.

## Purpose
Binaural rendering filters audio through HRTF models that mimic human ear shape, head shadow, and interaural time delays, creating the illusion of 3D audio positioned in physical space.

## When to Use
- When executing binaural spatial audio headphone mix in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Binaural Audio, HRTF / SOFA Models) cannot be provisioned.

## Supported Technologies
- Binaural Audio
- HRTF / SOFA Models
- FFmpeg sofalizer
- Spatial Audio

## Example Use Cases
### Immersive Narrative Audio Drama
Positioning footsteps approaching behind the listener and whispering in their right ear.

### VR Game Ambient Audio Simulation
Simulating realistic 360-degree positional environmental audio for mobile VR headsets.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Binaural Audio) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#sofalizer
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Convolution Reverb Impulse Response

## Description
Simulates realistic physical acoustic spaces by convolving audio signals with acoustic Impulse Responses (IR). Use when matching dialogue to filmed room acoustics in post-production.

## Purpose
Convolution reverb captures the mathematical acoustic signature of real physical spaces (cathedrals, tiled rooms, cars) by multiplying audio signals with recorded impulse responses.

## When to Use
- When executing convolution reverb impulse response in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Convolution Reverb, Impulse Response (IR)) cannot be provisioned.

## Supported Technologies
- Convolution Reverb
- Impulse Response (IR)
- FFmpeg afir Filter
- Spatial Audio

## Example Use Cases
### Film ADR Dialogue Acoustic Matching
Blending studio-recorded replacement dialogue seamlessly into an outdoor alleyway scene.

### Virtual Concert Hall Simulation
Simulating the acoustic resonance of the Sydney Opera House for solo violin recordings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Convolution Reverb) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Convolution_reverb
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Stereo Widening Mid Side Processing

## Description
Expands spatial stereo width and audits mono compatibility using Mid/Side (M/S) matrix processing. Use when widening broadcast audio without causing phase cancellation in mono.

## Purpose
Mid/Side processing decomposes stereo audio into Mid (L+R, center channel) and Side (L-R, spatial width) signals, allowing independent EQ and gain adjustment without muddying mono playback.

## When to Use
- When executing stereo widening mid side processing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Mid/Side Processing, Phase Metering) cannot be provisioned.

## Supported Technologies
- Mid/Side Processing
- Phase Metering
- FFmpeg
- Audio Engineering

## Example Use Cases
### Cinematic Soundscape Stereo Expansion
Widening ambient background environmental sound effects to envelop headphone listeners.

### Commercial Radio Master Verification
Ensuring wide music masters sound balanced on mono smartphone speakers and kitchen radios.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Mid/Side Processing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Audio_signal_processing#Mid-side_processing
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

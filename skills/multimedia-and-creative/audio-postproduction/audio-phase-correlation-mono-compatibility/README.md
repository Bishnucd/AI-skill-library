# Audio Phase Correlation Mono Compatibility

## Description
Audits stereo phase correlation coefficients (-1 to +1) to detect and eliminate destructive mono cancellation. Use when preparing audio mixes for mobile phones and mono speakers.

## Purpose
Stereo wideners can place left and right channels 180 degrees out of phase. When summed to mono on a smartphone speaker, out-of-phase instruments completely vanish due to phase cancellation.

## When to Use
- When executing audio phase correlation mono compatibility in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Phase Metering, Mono Compatibility) cannot be provisioned.

## Supported Technologies
- Phase Metering
- Mono Compatibility
- FFmpeg aphasemeter
- Mastering

## Example Use Cases
### Smartphone Speaker Mix Verification
Preventing lead vocals and bass guitars from disappearing when played on single-speaker smartphones.

### Club Sound System Mastering
Ensuring dance tracks with wide stereo synths retain punch on mono nightclub subwoofers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Phase Metering) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Phase_correlation
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

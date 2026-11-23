# Noise Reduction Spectral Gating

## Description
Removes stationary background hiss, hum, and fan noise from spoken audio recordings using spectral gating. Use when cleaning vocal dialogue recorded in untreated acoustic environments.

## Purpose
HVAC hum and electrical hiss degrade vocal clarity. Spectral gating captures a noise profile from silent pauses and attenuates those frequencies across the entire recording without muffling speech.

## When to Use
- When executing noise reduction spectral gating in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, noisereduce) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- noisereduce
- SciPy
- WAV Audio

## Example Use Cases
### Remote Podcast Restoration
Cleaning noisy air conditioning hum from remote podcast guest interview recordings.

### Screen Recording Polish
Eliminating computer cooling fan whine from developer video tutorials.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/timsainb/noisereduce
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Voice Cloning Sample Curation

## Description
Curates, denoises, and segments clean vocal audio samples for few-shot AI voice cloning and model adaptation. Use when preparing reference voice recordings for high-fidelity voice synthesis.

## Purpose
Voice cloning quality depends entirely on training audio purity. Reference audio must be dry (zero reverb), free of background noise, emotionally consistent, and segmented into 3-10 second clips.

## When to Use
- When executing voice cloning sample curation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Librosa) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Librosa
- Audacity / FFmpeg
- WAV Audio

## Example Use Cases
### Brand Voice Persona Creation
Building consistent digital brand narrator voices from executive audio recordings.

### Game Character Voice Adaptation
Generating expressive character dialogue from voice actor reference samples.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/coqui-ai/TTS
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

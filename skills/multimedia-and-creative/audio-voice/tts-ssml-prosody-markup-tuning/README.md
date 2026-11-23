# Tts Ssml Prosody Markup Tuning

## Description
Authors Speech Synthesis Markup Language (SSML) tags for controlling pitch, rate, breaks, and phonemes in TTS. Use when producing natural, expressive text-to-speech voice generation.

## Purpose
Raw text fed to TTS voices sounds monotonic and robotic. SSML markup introduces natural breath breaks (<break time="300ms"/>), emphasis tags, pitch contours, and IPA phonetic pronunciations.

## When to Use
- When executing tts ssml prosody markup tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SSML, XML) cannot be provisioned.

## Supported Technologies
- SSML
- XML
- Google Cloud TTS / AWS Polly
- ElevenLabs

## Example Use Cases
### Interactive Voice Response (IVR)
Pronouncing account balances, dates, and customer names cleanly in phone banking trees.

### Audiobook Voice Generation
Injecting expressive pacing and dramatic pauses into AI-narrated audiobooks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SSML) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/TR/speech-synthesis11/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

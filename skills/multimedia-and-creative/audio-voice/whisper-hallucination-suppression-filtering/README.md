# Whisper Hallucination Suppression Filtering

## Description
Suppresses repetitive loop hallucinations and phantom text in Whisper speech transcription using token entropy filtering. Use when transcribing audio containing background music or silence.

## Purpose
Whisper models can enter infinite repetition loops (e.g., repeating "Thank you for watching" during silent background music). Tuning temperature fallbacks and repetition penalties eliminates loops.

## When to Use
- When executing whisper hallucination suppression filtering in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Whisper, Hallucination Mitigation) cannot be provisioned.

## Supported Technologies
- Whisper
- Hallucination Mitigation
- Repetition Penalty
- ASR

## Example Use Cases
### Interview Video Silent Pause Transcription
Preventing Whisper from outputting phantom YouTube subtitle credits during thoughtful silent pauses.

### Background Music Speech Transcription
Accurately transcribing quiet spoken dialogue over loud ambient soundtrack music.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Whisper) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/openai/whisper/discussions/679
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Emotion Tagged Neural Speech Synthesis

## Description
Controls speech emotional expression, pitch contour, and speaking style using SSML emotion tags and neural TTS. Use when directing nuanced voice performances in automated narration.

## Purpose
Modern neural TTS engines support fine-grained emotional expressiveness through SSML tags and voice styling parameters, shifting voice pitch, whisper, and cadence based on narrative context.

## When to Use
- When executing emotion tagged neural speech synthesis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SSML Emotion Tags, Neural TTS) cannot be provisioned.

## Supported Technologies
- SSML Emotion Tags
- Neural TTS
- Prosody Control
- Voice Direction

## Example Use Cases
### Customer Support Bot Empathetic Escalation
Transitioning chatbot voice to a warm, empathetic tone when frustrated customers report issues.

### E-Learning Storytelling Voice Narration
Modulating voice excitement and whisper styles dynamically during educational history lessons.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SSML Emotion Tags) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/TR/speech-synthesis/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

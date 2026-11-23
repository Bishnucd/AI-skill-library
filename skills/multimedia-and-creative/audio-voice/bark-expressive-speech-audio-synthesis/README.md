# Bark Expressive Speech Audio Synthesis

## Description
Generates expressive speech with non-verbal vocalizations (laughter, sighing, pauses) using Suno Bark. Use when synthesizing highly realistic, emotionally dynamic character dialogue.

## Purpose
Bark is a transformer-based text-to-audio model that understands semantic text prompts and generates expressive speech, laughter, gasps, and background music without separate phoneme alignment.

## When to Use
- When executing bark expressive speech audio synthesis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Bark (Suno), Neural Audio Generation) cannot be provisioned.

## Supported Technologies
- Bark (Suno)
- Neural Audio Generation
- EnCodec
- Expressive TTS

## Example Use Cases
### Interactive Video Game NPC Dialogue
Generating spontaneous, emotional NPC reactions that laugh and gasp dynamically during gameplay.

### Humorous Audio Commercial Production
Synthesizing voice actors with authentic conversational chuckles and comedic timing pauses.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Bark (Suno)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/suno-ai/bark
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

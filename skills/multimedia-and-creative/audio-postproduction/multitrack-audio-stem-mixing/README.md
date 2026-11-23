# Multitrack Audio Stem Mixing

## Description
Mixes multi-track spoken dialogue stems with background music ducking and sidechain compression. Use when producing professional podcasts, audiobooks, and video soundtracks.

## Purpose
Multi-speaker shows require separate EQ, level balancing, and automatic music ducking (lowering music volume when speech is present) to ensure speech remains distinct and intelligible.

## When to Use
- When executing multitrack audio stem mixing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SoX, FFmpeg) cannot be provisioned.

## Supported Technologies
- SoX
- FFmpeg
- Audio Mixing
- Sidechain Compression

## Example Use Cases
### Podcast Episode Assembly
Mixing intro music, interview dialogue, and outro sponsorship reads automatically.

### Audiobook Production
Balancing voiceover narration with subtle ambient soundscapes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SoX) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://sox.sourceforge.net/sox.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

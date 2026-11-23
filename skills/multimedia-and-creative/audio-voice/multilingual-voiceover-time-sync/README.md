# Multilingual Voiceover Time Sync

## Description
Aligns translated voiceover audio durations with original video scene cuts and lip movements. Use when localizing video content into multiple languages with synchronized timing.

## Purpose
Translated speech expands or contracts by 15-30% depending on target language (e.g., German expands relative to English). Time synchronization time-stretches audio to match visual video cuts.

## When to Use
- When executing multilingual voiceover time sync in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python, FFmpeg) cannot be provisioned.

## Supported Technologies
- Python
- FFmpeg
- Rubber Band Library
- SRT / VTT

## Example Use Cases
### Product Demo Localization
Translating software tutorial videos into Spanish and French without re-editing video footage.

### Corporate Training Dubbing
Synchronizing multi-language voice tracks with existing executive presentation slides.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/International/questions/qa-text-expansion
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

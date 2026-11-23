# Green Screen Chroma Key Color Spill Suppression

## Description
Extracts green screen foreground actors and suppresses green edge color spill using FFmpeg colorkey and despill. Use when compositing actors onto virtual studio backgrounds.

## Purpose
Chroma keying removes bright green backdrop colors. Green bounce light ("spill") often coats actor shoulders and hair. Applying despill filters neutralizes green edges into natural skin tones.

## When to Use
- When executing green screen chroma key color spill suppression in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Chroma Key, Despill Filter) cannot be provisioned.

## Supported Technologies
- Chroma Key
- Despill Filter
- FFmpeg Compositing
- VFX

## Example Use Cases
### Virtual News Anchor Studio Compositing
Placing a green-screen presenter seamlessly into a high-tech virtual broadcast studio set.

### Gaming Streamer Webcam Cutout
Eliminating the green background behind a streamer chair to float their cutout over gameplay.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Chroma Key) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#colorkey
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# F0 Pitch Contour Intonation Editing

## Description
Edits fundamental frequency (F0) pitch contours and intonation trajectories to turn flat monotone speech into engaging delivery. Use when fine-tuning synthetic speech inflections.

## Purpose
Monotone voice delivery lacks engagement. By decomposing speech into spectral envelope, aperiodicity, and fundamental frequency (F0) using WORLD vocoder, developers can reshape pitch curves.

## When to Use
- When executing f0 pitch contour intonation editing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (F0 Pitch Contour, Intonation Editing) cannot be provisioned.

## Supported Technologies
- F0 Pitch Contour
- Intonation Editing
- PRAAT / PyWorld
- Prosody

## Example Use Cases
### Question Intonation Correction
Adding a natural upward pitch inflection to questions generated flat by default TTS engines.

### Enthusiastic Marketing Voice Tuning
Injecting dynamic pitch variance into commercial announcements to sound energetic and engaging.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (F0 Pitch Contour) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Intonation_(linguistics)
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

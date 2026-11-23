# Frequency Separation Portrait Retouching

## Description
Separates fine skin textures from underlying color tones into high and low frequency layers. Use when performing non-destructive, professional skin retouching and blemish removal.

## Purpose
Traditional blurring destroys natural skin pores. Frequency separation splits images into a Low Frequency layer (color/tone) and a High Frequency layer (pores/wrinkles), allowing independent editing.

## When to Use
- When executing frequency separation portrait retouching in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Frequency Separation, High/Low Frequency Split) cannot be provisioned.

## Supported Technologies
- Frequency Separation
- High/Low Frequency Split
- OpenCV / Photoshop Scripting
- Portrait Retouching

## Example Use Cases
### Editorial Magazine Cover Retouching
Evening out uneven facial skin tones without turning the subject face into plastic-looking blur.

### Commercial Cosmetic Advertising
Eliminating flash glare and facial shadows while keeping authentic high-resolution makeup details.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Frequency Separation) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Frequency_separation
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Multi Subject Regional Prompting Mask

## Description
Directs multiple distinct subjects and styles into separate spatial canvas zones using regional prompting masks. Use when generating complex scenes without prompt attribute bleeding.

## Purpose
When prompting "a woman in a red dress next to a man in a blue suit", colors frequently bleed onto both subjects. Regional prompting isolates attention mechanisms to user-defined bounding boxes.

## When to Use
- When executing multi subject regional prompting mask in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Regional Prompting, Attention Masking) cannot be provisioned.

## Supported Technologies
- Regional Prompting
- Attention Masking
- Multi-Subject Generation
- Diffusers

## Example Use Cases
### Multi-Character Cinematic Dialogue Scene
Rendering two distinct characters with contrasting clothing colors in the same frame without color bleed.

### Split-Screen Before-and-After Concept Art
Generating a scene half in pristine futuristic paradise and half in post-apocalyptic ruins.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Regional Prompting) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/hako-mikan/sd-webui-regional-prompter
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Consistent Character Lora Training

## Description
Trains specialized LoRA adapters on curated character portraits to maintain facial and identity consistency. Use when generating recurrent characters across multi-scene visual narratives.

## Purpose
Generic diffusion models generate different faces on every seed. Training a lightweight LoRA (100MB) on 15-25 diverse character photos locks in facial structure, hairstyle, and identity.

## When to Use
- When executing consistent character lora training in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Kohya-ss, LoRA) cannot be provisioned.

## Supported Technologies
- Kohya-ss
- LoRA
- SDXL
- PyTorch

## Example Use Cases
### Graphic Novel Illustration
Rendering the same comic protagonist across 50 distinct sequential scene pages.

### Virtual Brand Influencer
Producing recurrent marketing imagery featuring a consistent virtual persona.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Kohya-ss) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/kohya-ss/sd-scripts
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

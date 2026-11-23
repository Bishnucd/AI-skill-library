# Stable Diffusion Lora Checkpoint Merging

## Description
Merges Low-Rank Adaptation (LoRA) weights directly into base Stable Diffusion model checkpoints using weighted arithmetic or DARE. Use when baking styles into models for faster inference.

## Purpose
Loading multiple LoRAs at runtime adds inference latency. Merging LoRA delta weights directly into the base model UNet/transformer layers bakes character and style concepts permanently.

## When to Use
- When executing stable diffusion lora checkpoint merging in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Diffusers, LoRA Merging) cannot be provisioned.

## Supported Technologies
- Diffusers
- LoRA Merging
- DARE / Ties-Merging
- PyTorch

## Example Use Cases
### Production Image API Model Optimization
Fusing branded corporate visual styles directly into SDXL checkpoints to reduce API cold-start time.

### Multi-Concept Character and Costume Blending
Merging a character face LoRA with a cyberpunk armor LoRA into a unified asset model.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Diffusers) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/huggingface/diffusers/blob/main/docs/source/en/using-diffusers/merge_loras.md
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

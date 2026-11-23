# Sdxl Inpainting Object Replacement

## Description
Replaces specific image regions seamlessly using SDXL Inpainting models guided by binary alpha masks. Use when adding, removing, or modifying objects in existing photographic assets.

## Purpose
Inpainting modifies designated rectangular or freeform image regions while keeping unmasked areas 100% pixel-identical. Diffusion blending ensures seamless lighting and edge coherence.

## When to Use
- When executing sdxl inpainting object replacement in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Diffusers) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Diffusers
- SDXL Inpainting
- Pillow

## Example Use Cases
### Product Placement Integration
Replacing generic beverage cans on a table with branded client product packaging.

### Visual Blemish Retouching
Erasing unwanted background pedestrians and power lines from travel photographs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://huggingface.co/docs/diffusers/using-diffusers/inpaint
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

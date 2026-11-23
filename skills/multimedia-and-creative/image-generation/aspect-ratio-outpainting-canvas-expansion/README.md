# Aspect Ratio Outpainting Canvas Expansion

## Description
Expands image canvas boundaries into widescreen or panoramic aspect ratios using inpainting models. Use when adapting square photos for horizontal banners or vertical video formats.

## Purpose
Outpainting pads the edges of an existing image with transparent canvas, running an inpainting diffusion model over the padded area to hallucinate seamless environmental extensions.

## When to Use
- When executing aspect ratio outpainting canvas expansion in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Outpainting, Inpainting Pipeline) cannot be provisioned.

## Supported Technologies
- Outpainting
- Inpainting Pipeline
- Canvas Expansion
- Diffusers

## Example Use Cases
### Square Instagram Photo to YouTube Banner
Extending a square portrait horizontally to fill a 2560x1440px YouTube channel banner.

### Museum Art Painting Panoramic Extension
Outpainting classical historic paintings to reveal imagined surrounding landscape vistas.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Outpainting) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://huggingface.co/docs/diffusers/using-diffusers/inpaint
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

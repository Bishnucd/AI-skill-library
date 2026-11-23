# Latent Upscaler Esrgan Hires Fix

## Description
Upscales generated images to 4K resolution while adding photorealistic micro-details using Real-ESRGAN and latent Hi-Res Fix. Use when eliminating blur and artifacts during high-res generation.

## Purpose
Generating directly at high resolutions causes duplicate heads and disjointed bodies. The Hi-Res Fix workflow generates at 512px/1024px, upscales latents, and performs a second denoising pass.

## When to Use
- When executing latent upscaler esrgan hires fix in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Real-ESRGAN, Latent Hi-Res Fix) cannot be provisioned.

## Supported Technologies
- Real-ESRGAN
- Latent Hi-Res Fix
- Super-Resolution
- Diffusion Upscaling

## Example Use Cases
### Fine Art Print Resolution Scaling
Upscaling a concept art piece to 300 DPI 24x36-inch physical poster print quality.

### Video Game 4K Texture Generation
Synthesizing crisp 4096x4096px stone and leather textures for next-gen 3D game engines.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Real-ESRGAN) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/xinntao/Real-ESRGAN
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

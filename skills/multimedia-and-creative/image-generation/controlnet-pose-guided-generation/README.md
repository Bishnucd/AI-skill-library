# Controlnet Pose Guided Generation

## Description
Directs diffusion image generation using ControlNet OpenPose and depth map condition conditioning. Use when requiring precise human postures and compositions in generated art.

## Purpose
Prompting alone cannot guarantee specific human poses or exact object positioning. ControlNet adds spatial structural conditioning (skeleton pose, Canny edges, depth maps) to guide generation.

## When to Use
- When executing controlnet pose guided generation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ControlNet, Stable Diffusion XL) cannot be provisioned.

## Supported Technologies
- ControlNet
- Stable Diffusion XL
- OpenPose
- Python / Diffusers

## Example Use Cases
### Fashion E-commerce Lookbooks
Generating virtual model shots matching exact garment catalog poses.

### Storyboarding Character Actions
Maintaining consistent character poses across sequential visual comic panels.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ControlNet) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/lllyasviel/ControlNet
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

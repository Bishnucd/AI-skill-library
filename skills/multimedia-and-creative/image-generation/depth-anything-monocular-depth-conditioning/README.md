# Depth Anything Monocular Depth Conditioning

## Description
Estimates high-resolution metric depth maps using Depth Anything to control 3D spatial layout in image generation. Use when maintaining realistic foreground-to-background spatial depth.

## Purpose
Depth Anything generates detailed depth maps from single images, capturing fine hair strands, transparent objects, and distant horizons to guide depth-aware diffusion generation.

## When to Use
- When executing depth anything monocular depth conditioning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Depth Anything, Monocular Depth Estimation) cannot be provisioned.

## Supported Technologies
- Depth Anything
- Monocular Depth Estimation
- ControlNet Depth
- Computer Vision

## Example Use Cases
### Scene Environment Season Re-Theming
Transforming a summer park photo into a snowy winter scene while preserving exact tree and bench depth.

### 3D Parallax Photo Effect Generation
Generating clean depth maps to power 2.5D camera zoom animations in mobile applications.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Depth Anything) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/LiheYoung/Depth-Anything
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

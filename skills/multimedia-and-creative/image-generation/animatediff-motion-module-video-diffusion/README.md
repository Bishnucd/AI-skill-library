# Animatediff Motion Module Video Diffusion

## Description
Injects temporal attention motion modules into text-to-image diffusion models using AnimateDiff. Use when transforming static concept checkpoints into animated looping video clips.

## Purpose
AnimateDiff adds temporal self-attention modules across frame sequences, enabling standard 2D Stable Diffusion checkpoints to generate smooth, temporally consistent 16-frame animated videos.

## When to Use
- When executing animatediff motion module video diffusion in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (AnimateDiff, Temporal Attention) cannot be provisioned.

## Supported Technologies
- AnimateDiff
- Temporal Attention
- Video Diffusion
- PyTorch

## Example Use Cases
### Animated Website Hero Graphics
Creating seamless looping 4-second vector-style animations for landing page hero headers.

### Music Visualizer Looping Clips
Generating continuous atmospheric sci-fi landscapes that loop seamlessly to electronic music.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (AnimateDiff) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/guoyww/AnimateDiff
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

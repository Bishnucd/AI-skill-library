# Clip Score Image Text Alignment Eval

## Description
Measures semantic cosine similarity between generated images and prompt descriptions using OpenAI CLIP. Use when automatically scoring and filtering generated image quality in batch pipelines.

## Purpose
Manual inspection cannot scale to thousands of generated images. CLIP Score calculates the cosine similarity between the image embedding and text prompt embedding to flag prompt drift.

## When to Use
- When executing clip score image text alignment eval in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CLIP Score, Image-Text Alignment) cannot be provisioned.

## Supported Technologies
- CLIP Score
- Image-Text Alignment
- PyTorch / TorchMetrics
- Quality Evaluation

## Example Use Cases
### Automated Image Generation Quality Gate
Discarding failed generations in high-volume e-commerce catalog pipelines before human review.

### Prompt Optimization Genetic Search
Using CLIP score as the fitness function in automated prompt evolution algorithms.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CLIP Score) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/openai/CLIP
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

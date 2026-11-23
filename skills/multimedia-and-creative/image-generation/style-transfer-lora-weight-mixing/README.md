# Style Transfer Lora Weight Mixing

## Description
Blends multiple LoRA style models with fine-tuned cross-attention weight ratios. Use when creating hybrid aesthetics combining distinct artistic styles, mediums, and genres.

## Purpose
Loading multiple LoRA models simultaneously with equal weights causes chaotic visual interference. Fine-tuning individual LoRA multipliers (e.g., Watercolor: 0.7, Cyberpunk: 0.4) creates unique styles.

## When to Use
- When executing style transfer lora weight mixing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Style Transfer, LoRA Mixing) cannot be provisioned.

## Supported Technologies
- Style Transfer
- LoRA Mixing
- Cross-Attention Weights
- Generative Art

## Example Use Cases
### Watercolor Sci-Fi Architectural Rendering
Blending traditional Japanese watercolor aesthetics with futuristic hard-surface mecha design.

### Vintage Oil Painting Brand Campaign
Rendering modern tech gadgets in the distinctive style of 17th-century Dutch Baroque oil paintings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Style Transfer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/cloneofsimo/lora
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

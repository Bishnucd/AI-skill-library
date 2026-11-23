# Negative Prompt Token Pruning Curation

## Description
Prunes bloated negative prompt lists and targets specific generation flaws using calibrated negative tokens. Use when improving prompt adherence and eliminating synthetic artifacts.

## Purpose
Pasting generic 50-word negative prompt lists degrades image contrast and restricts model creativity. Targeted negative prompting specifies only the precise artifacts relevant to the specific subject.

## When to Use
- When executing negative prompt token pruning curation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Negative Prompting, Token Weighting) cannot be provisioned.

## Supported Technologies
- Negative Prompting
- Token Weighting
- Diffusion Steering
- Prompt Engineering

## Example Use Cases
### Anatomical Hand and Finger Defect Elimination
Applying targeted negative weights to prevent fused digits and extra limbs in portrait generations.

### Photorealistic Natural Lighting Steering
Using negative prompts like "3D render, cartoon, CGI" to steer models toward authentic analog film look.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Negative Prompting) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://stable-diffusion-art.com/negative-prompt/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

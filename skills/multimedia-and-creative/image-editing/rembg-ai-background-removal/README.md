# Rembg Ai Background Removal

## Description
Isolates foreground subjects and removes complex image backgrounds using neural U2-Net models via rembg. Use when automating e-commerce product cutout workflows.

## Purpose
Manual background cutout with pen tools takes minutes per image. Rembg utilizes U2-Net salient object detection to isolate subjects with hair and fur transparency in under one second.

## When to Use
- When executing rembg ai background removal in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, rembg) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- rembg
- ONNX Runtime
- Pillow

## Example Use Cases
### E-commerce Catalog Processing
Extracting product cutouts from 10,000 marketplace photos and compositing onto white.

### Profile Avatar Generation
Removing cluttered room backgrounds from user selfie uploads for identity badges.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/danielgatis/rembg
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

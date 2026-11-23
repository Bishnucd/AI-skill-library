# Color Grading Lut Application

## Description
Applies 3D Look-Up Tables (.CUBE LUTs) to digital images and video frames to achieve cinematic color grading. Use when enforcing uniform visual aesthetics across creative image assets.

## Purpose
Look-Up Tables (LUTs) map input RGB color coordinates to target graded color values. Applying standardized 33x33x33 3D LUTs guarantees uniform color palettes across diverse photo shoots.

## When to Use
- When executing color grading lut application in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Pillow) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Pillow
- numpy
- 3D LUT (.CUBE)

## Example Use Cases
### Brand Aesthetic Consistency
Applying a signature warm film color grade across all marketing campaign imagery.

### E-commerce Photography Unification
Standardizing white balance and tone curves across photos taken by different vendors.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pillow.readthedocs.io/en/stable/reference/ImageColor.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

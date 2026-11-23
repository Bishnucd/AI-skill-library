# Clahe Contrast Limited Adaptive Histogram

## Description
Enhances local feature contrast in shadowed or hazy imagery using CLAHE algorithms. Use when revealing hidden details in medical X-rays, satellite imagery, and low-light photos.

## Purpose
Global histogram equalization washes out images and amplifies noise. CLAHE operates on localized contextual image tiles and clips histogram peaks to prevent over-amplifying noise.

## When to Use
- When executing clahe contrast limited adaptive histogram in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CLAHE, Histogram Equalization) cannot be provisioned.

## Supported Technologies
- CLAHE
- Histogram Equalization
- OpenCV
- Image Enhancement

## Example Use Cases
### Medical Radiography X-Ray Detail Enhancement
Making subtle hairline bone fractures clearly visible to radiologists without washing out soft tissue.

### Underwater Photography Haze Penetration
Revealing coral reef details and marine life obscured by murky, low-contrast water.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CLAHE) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.opencv.org/4.x/d5/daf/tutorial_py_histogram_equalization.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

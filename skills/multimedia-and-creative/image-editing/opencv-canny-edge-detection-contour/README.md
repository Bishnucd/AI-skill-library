# Opencv Canny Edge Detection Contour

## Description
Extracts object contours and structural boundaries from imagery using OpenCV Canny edge detection. Use when building computer vision preprocessing, segmentation, and vectorization pipelines.

## Purpose
Canny edge detection uses Gaussian blurring, Sobel gradient calculations, non-maximum suppression, and hysteresis thresholding to extract clean, thin single-pixel structural edges.

## When to Use
- When executing opencv canny edge detection contour in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OpenCV, Canny Edge Detection) cannot be provisioned.

## Supported Technologies
- OpenCV
- Canny Edge Detection
- Contour Extraction
- Computer Vision

## Example Use Cases
### Industrial Assembly Part Defect Inspection
Detecting edge fractures and manufacturing burrs on stamped metal parts on conveyor belts.

### ControlNet Edge Guidance Preparation
Generating clean black-and-white line art edge maps to guide Stable Diffusion image generation.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OpenCV) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

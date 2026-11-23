# Perspective Transform Document Deskew

## Description
Detects 4-point polygon document corners and rectifies skewed perspectives using OpenCV homography matrices. Use when flattening photographed receipts, forms, and documents.

## Purpose
Photographs of paper documents taken at an angle suffer from keystone distortion. Finding the 4 document corners and applying getPerspectiveTransform maps the warped quad back to a flat rectangle.

## When to Use
- When executing perspective transform document deskew in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OpenCV, Perspective Transform) cannot be provisioned.

## Supported Technologies
- OpenCV
- Perspective Transform
- Homography
- Document Scanning

## Example Use Cases
### Mobile Expense Receipt Scanner
Straightening angled receipt photos taken on restaurant tables into flat, legible scans for OCR.

### Whiteboard Meeting Note Rectification
De-skewing photos taken from the side of conference rooms into clean digital whiteboard graphics.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OpenCV) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.opencv.org/4.x/da/d6e/tutorial_py_geometric_transformations.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Hdr Bracketed Exposure Fusion Mertens

## Description
Blends multi-exposure bracketed photos into high dynamic range imagery without tonemapping halos using Mertens exposure fusion. Use when capturing high-contrast interior architecture.

## Purpose
Mertens exposure fusion blends multi-exposure brackets (-2EV, 0EV, +2EV) using contrast, saturation, and well-exposedness weight maps, producing natural HDR images without synthetic halos.

## When to Use
- When executing hdr bracketed exposure fusion mertens in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Exposure Fusion, Mertens Algorithm) cannot be provisioned.

## Supported Technologies
- Exposure Fusion
- Mertens Algorithm
- OpenCV
- HDR Photography

## Example Use Cases
### Real Estate Interior Architectural Photography
Balancing dark interior living room corners with brightly sunlit outdoor window views.

### Automotive Nighttime Headlight HDR
Capturing night street scenes showing both illuminated car headlights and dark street details.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Exposure Fusion) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.opencv.org/4.x/d2/df0/tutorial_py_hdr.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

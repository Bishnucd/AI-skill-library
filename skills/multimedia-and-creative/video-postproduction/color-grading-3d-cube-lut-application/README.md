# Color Grading 3d Cube Lut Application

## Description
Applies cinematic 3D .cube color lookup tables (LUTs) to flat Log video footage using FFmpeg lut3d. Use when automating color correction and brand grading in video rendering pipelines.

## Purpose
Flat camera profiles (Sony S-Log, Canon C-Log) require color grading before publishing. 3D LUTs map input RGB coordinates through 3D cubic interpolation lattices for cinematic color tones.

## When to Use
- When executing color grading 3d cube lut application in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (3D LUT (.cube), FFmpeg lut3d Filter) cannot be provisioned.

## Supported Technologies
- 3D LUT (.cube)
- FFmpeg lut3d Filter
- Color Grading
- Log Footage

## Example Use Cases
### Automated YouTube S-Log Video Ingestion
Applying Rec.709 conversion and film LUT automatically during automated video cloud rendering.

### Corporate Video Brand Consistency
Enforcing uniform corporate color palette grading across clips filmed on disparate camera brands.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (3D LUT (.cube)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#lut3d
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

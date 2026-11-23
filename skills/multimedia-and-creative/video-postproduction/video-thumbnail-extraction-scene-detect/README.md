# Video Thumbnail Extraction Scene Detect

## Description
Extracts high-contrast, representative video thumbnail keyframes automatically using scene change detection filters. Use when generating engaging video poster images without human review.

## Purpose
Extracting arbitrary video frames (e.g., at second 5) frequently captures blurry transitions or black screens. Scene change detection evaluates frame luminance deltas to extract sharp, visually rich frames.

## When to Use
- When executing video thumbnail extraction scene detect in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Scene Detection, Thumbnail Extraction) cannot be provisioned.

## Supported Technologies
- Scene Detection
- Thumbnail Extraction
- FFmpeg select Filter
- Automation

## Example Use Cases
### Video On-Demand Platform Thumbnail Pipeline
Automatically extracting 3 compelling preview posters for every uploaded user video.

### E-Learning Course Video Chapter Previews
Extracting clear slide title frames to serve as clickable chapter thumbnail cards.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Scene Detection) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://ffmpeg.org/ffmpeg-filters.html#select_002c-aselect
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

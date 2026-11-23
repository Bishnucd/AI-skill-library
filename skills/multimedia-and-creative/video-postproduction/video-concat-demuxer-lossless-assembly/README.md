# Video Concat Demuxer Lossless Assembly

## Description
Losslessly concatenates segmented MP4/MKV video files without re-encoding using the FFmpeg concat demuxer. Use when assembling video segments instantly with zero generation loss.

## Purpose
Re-encoding video during assembly reduces visual quality and wastes minutes of CPU time. The concat demuxer splices identical video codec streams at packet level with zero re-encoding in milliseconds.

## When to Use
- When executing video concat demuxer lossless assembly in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (FFmpeg Concat Demuxer, Lossless Assembly) cannot be provisioned.

## Supported Technologies
- FFmpeg Concat Demuxer
- Lossless Assembly
- Zero-Transcode
- CLI Automation

## Example Use Cases
### Dashcam Video Segment Merging
Merging twenty 3-minute dashcam MP4 files into a continuous 1-hour trip video in 4 seconds.

### Cloud Video Segment Rendering Pipeline
Assembling parallel-rendered video chunks into a completed video without secondary re-encoding.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (FFmpeg Concat Demuxer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://trac.ffmpeg.org/wiki/Concatenate#demuxer
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

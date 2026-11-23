# Ffmpeg Two Pass Vbr H264 Hevc Encoding

## Description
Encodes video files using two-pass constrained variable bitrate (VBR) H.264/HEVC encoding with FFmpeg. Use when maximizing video compression efficiency for fixed file size budgets.

## Purpose
Single-pass encoding wastes bits on simple static scenes and starves complex motion scenes. Two-pass encoding analyzes scene complexity across the entire video in pass 1, allocating bits optimally in pass 2.

## When to Use
- When executing ffmpeg two pass vbr h264 hevc encoding in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (FFmpeg, Two-Pass VBR) cannot be provisioned.

## Supported Technologies
- FFmpeg
- Two-Pass VBR
- libx264 / libx265
- Video Compression

## Example Use Cases
### Streaming Video Platform Ingestion
Encoding video files to precise bitrates for smooth multi-bitrate HLS streaming ladders.

### Email Video Attachment Size Budgeting
Compressing a 1-minute product demo to fit exactly under a strict 20MB email gateway limit.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (FFmpeg) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://trac.ffmpeg.org/wiki/Encode/H.264#twopass
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

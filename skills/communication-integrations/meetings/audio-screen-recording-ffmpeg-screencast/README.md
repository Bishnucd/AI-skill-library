# Audio Screen Recording Ffmpeg Screencast

## Description
Captures synchronized desktop screen video and microphone audio into lightweight MP4 recordings via FFmpeg. Use when automating meeting recording and demo video capture.

## Purpose
Recording meeting presentations requires low-latency desktop screen capture synchronized with microphone audio. Native OS capture devices (gdigrab, avfoundation) record smoothly without dropping frames.

## When to Use
- When executing audio screen recording ffmpeg screencast in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (FFmpeg, gdigrab (Win) / x11grab (Linux) / avfoundation (Mac)) cannot be provisioned.

## Supported Technologies
- FFmpeg
- gdigrab (Win) / x11grab (Linux) / avfoundation (Mac)
- H.264 / AAC

## Example Use Cases
### Automated Demo Capture
Recording automated browser workflow walkthroughs for team documentation.

### Webinar Archival Recording
Capturing clean desktop video and presenter audio for internal training archives.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (FFmpeg) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://trac.ffmpeg.org/wiki/Capture/Desktop
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Audio Silence Trimmer Vad

## Description
Detects and removes awkward dead air pauses and silences from vocal audio using Voice Activity Detection (VAD). Use when tightening pacing and reducing file duration of raw spoken recordings.

## Purpose
Raw conversational recordings contain prolonged pauses, hesitation breaks, and dead air. Deep learning Voice Activity Detection (VAD) identifies genuine speech segments and trims excess silence.

## When to Use
- When executing audio silence trimmer vad in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Silero VAD) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Silero VAD
- PyTorch
- FFmpeg

## Example Use Cases
### Interview Pacing Optimization
Trimming 15 minutes of dead air and pauses from an hour-long raw recorded interview.

### Voice Note Compression
Removing silent gaps from customer voice memos before dispatching to transcription.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/snakers4/silero-vad
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Whisper Forced Alignment Word Timestamps

## Description
Generates word-level audio alignment timestamps using OpenAI Whisper and CTC forced alignment. Use when generating karaoke-style animated captions and frame-accurate word highlights.

## Purpose
Standard subtitle files provide sentence-level intervals. Forced alignment maps acoustic phonemes directly to individual words, producing millisecond-accurate start and end timestamps.

## When to Use
- When executing whisper forced alignment word timestamps in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (WhisperX, PyTorch) cannot be provisioned.

## Supported Technologies
- WhisperX
- PyTorch
- torchaudio
- JSON / WebVTT

## Example Use Cases
### Dynamic Social Media Captions
Rendering animated word-by-word highlighted text on TikTok and YouTube Shorts.

### Interactive Audio Transcripts
Enabling web users to click any word in a transcript to jump immediately to that audio moment.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (WhisperX) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/m-bain/whisperX
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Whisper Speaker Diarization Pyannote

## Description
Separates and attributes spoken audio segments to distinct speakers using PyAnnote.audio speaker diarization. Use when generating multi-speaker meeting transcripts.

## Purpose
Raw transcription generates an unformatted wall of text. Speaker diarization clusters vocal acoustic embeddings, identifying exactly who spoke each sentence (Speaker 0, Speaker 1).

## When to Use
- When executing whisper speaker diarization pyannote in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (pyannote.audio, OpenAI Whisper) cannot be provisioned.

## Supported Technologies
- pyannote.audio
- OpenAI Whisper
- PyTorch
- Audio Diarization

## Example Use Cases
### Executive Meeting Transcription
Formatting board meeting transcripts with accurate speaker attribution.

### User Interview Analysis
Distinguishing interviewer questions from participant responses in qualitative studies.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (pyannote.audio) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/pyannote/pyannote-audio
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

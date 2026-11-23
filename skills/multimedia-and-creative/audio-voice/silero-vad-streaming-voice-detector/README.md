# Silero Vad Streaming Voice Detector

## Description
Detects human speech segments in real-time audio streams with sub-millisecond latency using Silero VAD. Use when triggering voice recording, speech-to-text, and conversational interruptions.

## Purpose
Energy-based thresholding fails in noisy environments. Silero VAD is an ultra-lightweight neural network that reliably classifies speech vs background noise in 30ms streaming chunks.

## When to Use
- When executing silero vad streaming voice detector in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Silero VAD, Voice Activity Detection) cannot be provisioned.

## Supported Technologies
- Silero VAD
- Voice Activity Detection
- ONNX / PyTorch
- Real-Time Streaming

## Example Use Cases
### Voice Agent Barge-In Interruption Detection
Halting TTS playback instantly when the user begins speaking during an AI voice call.

### Microphone Bandwidth Saver in VoIP
Stopping audio packet transmission during silent pauses to conserve mobile cellular data.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Silero VAD) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/snakers4/silero-vad
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

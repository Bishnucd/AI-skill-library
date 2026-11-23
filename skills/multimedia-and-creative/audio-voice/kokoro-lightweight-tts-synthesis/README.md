# Kokoro Lightweight Tts Synthesis

## Description
Synthesizes natural, high-quality speech with ultra-low latency using lightweight Kokoro 82M models. Use when generating real-time conversational voice agents on local consumer hardware.

## Purpose
Kokoro delivers speech quality comparable to massive cloud TTS models in an ultra-compact 82M parameter footprint, enabling real-time voice streaming on consumer laptops and edge devices.

## When to Use
- When executing kokoro lightweight tts synthesis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Kokoro TTS, StyleTTS2 Architecture) cannot be provisioned.

## Supported Technologies
- Kokoro TTS
- StyleTTS2 Architecture
- ONNX Runtime
- Edge Speech

## Example Use Cases
### Low-Latency Voice AI Assistant
Powering local conversational voice agents with instantaneous sub-200ms spoken replies.

### E-Reader On-Device Book Narration
Reading EPUB books aloud locally on lightweight tablet devices without internet connectivity.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Kokoro TTS) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://huggingface.co/hexgrad/Kokoro-82M
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

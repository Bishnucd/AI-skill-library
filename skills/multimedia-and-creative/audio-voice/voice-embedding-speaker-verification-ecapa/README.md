# Voice Embedding Speaker Verification Ecapa

## Description
Extracts 192-dimensional speaker identity embeddings and verifies speaker identity using ECAPA-TDNN models. Use when authenticating voice biometrics and clustering speakers in multi-speaker audio.

## Purpose
ECAPA-TDNN (Emphasized Channel Attention Time Delay Neural Network) maps speech recordings to speaker identity vectors, enabling high-accuracy speaker recognition invariant to spoken text.

## When to Use
- When executing voice embedding speaker verification ecapa in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ECAPA-TDNN, SpeechBrain) cannot be provisioned.

## Supported Technologies
- ECAPA-TDNN
- SpeechBrain
- Speaker Verification
- Voice Biometrics

## Example Use Cases
### Banking Phone Support Voice Biometrics
Verifying customer identity seamlessly in the first 5 seconds of a support phone call.

### Meeting Audio Speaker Diarization
Clustering and labeling distinct speakers across a 2-hour multi-party executive board meeting.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ECAPA-TDNN) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

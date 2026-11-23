# Audio Denoiser Rnnoise Recurrent Network

## Description
Suppresses complex background noise in real-time audio streams using Mozilla RNNoise recurrent neural networks. Use when eliminating stationary and non-stationary background noise from dialogue.

## Purpose
Traditional spectral subtraction causes musical noise artifacts. RNNoise uses classical signal processing for pitch analysis combined with a deep GRU RNN to suppress background noise cleanly.

## When to Use
- When executing audio denoiser rnnoise recurrent network in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RNNoise (Mozilla/Xiph), Recurrent Neural Networks (GRU)) cannot be provisioned.

## Supported Technologies
- RNNoise (Mozilla/Xiph)
- Recurrent Neural Networks (GRU)
- Audio Denoising
- DSP

## Example Use Cases
### Remote Work Conference Call Denoising
Filtering out mechanical keyboard typing and barking dogs from real-time microphone audio.

### Outdoor Mobile Video Audio Restoration
Removing street traffic roar and windy gusts from interview audio recorded on smartphones.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RNNoise (Mozilla/Xiph)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/xiph/rnnoise
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

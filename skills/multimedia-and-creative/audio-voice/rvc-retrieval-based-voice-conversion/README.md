# Rvc Retrieval Based Voice Conversion

## Description
Converts vocal timbre between speakers using Retrieval-based Voice Conversion (RVC) and HuBERT features. Use when cloning character voices and transforming speech timbre with pitch accuracy.

## Purpose
RVC extracts phonetic representations from audio using HuBERT, retrieves nearest timbre vectors from a target speaker feature index, and synthesizes target voice characteristics.

## When to Use
- When executing rvc retrieval based voice conversion in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RVC, HuBERT) cannot be provisioned.

## Supported Technologies
- RVC
- HuBERT
- PyTorch
- Voice Conversion

## Example Use Cases
### Video Game Character Dialogue Dubbing
Transforming voice actor performances into fantasy monster or robotic character timbres.

### Documentary Anonymous Voice Transformation
Altering whistleblower speech timbre convincingly while preserving emotional gravity and cadence.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RVC) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

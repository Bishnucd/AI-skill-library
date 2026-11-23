# Video Deepfake Artifact Forensic Audit

## Description
Inspects facial boundary warping, unnatural blinking rates, and audio-visual phoneme sync anomalies to detect deepfakes. Use when verifying the authenticity of viral executive and political video clips.

## Purpose
Generative AI deepfakes leave subtle digital fingerprints. Forensic inspection of facial boundaries, unnatural blinking frequencies, earlobe warping, and audio-visual phoneme sync uncovers synthetic tampering.

## When to Use
- When executing video deepfake artifact forensic audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Deepfake Detection, Facial Forensics) cannot be provisioned.

## Supported Technologies
- Deepfake Detection
- Facial Forensics
- Temporal Consistency
- Media Verification

## Example Use Cases
### CEO Video Wire Transfer Fraud Detection
Confirming that an urgent video request from the CEO requesting a wire transfer was a synthetic deepfake.

### Political Campaign Video Authenticity Audit
Verifying whether viral social media video of a candidate making inflammatory remarks was artificially generated.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Deepfake Detection) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Deepfake#Detection
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

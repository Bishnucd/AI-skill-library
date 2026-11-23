# Room Acoustics Rt60 Decay Analysis

## Description
Measures reverberation time (RT60) and frequency decay curves from room impulse responses. Use when analyzing room acoustics and calibrating voiceover recording booths.

## Purpose
RT60 represents the time required for sound reflections to decay by 60 decibels. Schroeder backward integration calculates frequency-dependent decay times to identify room standing waves.

## When to Use
- When executing room acoustics rt60 decay analysis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RT60 Analysis, Schroeder Integration) cannot be provisioned.

## Supported Technologies
- RT60 Analysis
- Schroeder Integration
- Python Librosa / Scipy
- Acoustics

## Example Use Cases
### Home Voiceover Studio Treatment
Diagnosing excessive 500ms mid-range room flutter echo to guide acoustic foam panel placement.

### Conference Room Speech Intelligibility Audit
Verifying that meeting room RT60 is under 0.4 seconds to guarantee crystal-clear hybrid calls.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RT60 Analysis) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Reverberation#RT60
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

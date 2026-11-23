# Audiobook Chapter Boundary Splitter

## Description
Detects narrative chapter boundaries and splits long recordings into ACX-compliant audiobook files. Use when formatting audiobooks to meet Audible and distributor technical standards.

## Purpose
Audiobook platforms like Audible/ACX require separate chapter files, strict room tone silence padding (0.5s head, 1–5s tail), and peak levels below -3dB True Peak. Automated splitters enforce these rules.

## When to Use
- When executing audiobook chapter boundary splitter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ACX Standards, Silence Detection) cannot be provisioned.

## Supported Technologies
- ACX Standards
- Silence Detection
- Audio Splitting
- FFmpeg / Python

## Example Use Cases
### Automated ACX Audiobook Mastering
Splitting an 8-hour continuous recording into 25 certified chapter files ready for Audible distribution.

### Podcast Multi-Part Series Splitting
Segmenting marathon podcast interviews into tidy 45-minute episodic MP3 releases.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ACX Standards) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.acx.com/help/acx-audio-submission-requirements/201456300
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

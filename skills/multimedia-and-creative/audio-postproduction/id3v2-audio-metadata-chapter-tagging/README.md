# Id3v2 Audio Metadata Chapter Tagging

## Description
Embeds ID3v2.4 podcast chapter markers, embedded cover art images, and episode metadata into MP3/AAC files. Use when publishing professional podcast episodes with clickable chapter markers.

## Purpose
ID3v2.4 tags allow podcast players to display clickable chapter markers, timing boundaries, per-chapter artwork, and episode URLs directly within modern podcast applications.

## When to Use
- When executing id3v2 audio metadata chapter tagging in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ID3v2.4, Mutagen (Python)) cannot be provisioned.

## Supported Technologies
- ID3v2.4
- Mutagen (Python)
- FFmpeg
- Podcast Metadata

## Example Use Cases
### Technical Interview Podcast Chaptering
Providing listeners with instant chapter jumps between interview questions and sponsor breaks.

### Audiobook Track Navigation
Embedding chapter numbers and sub-headings into long-form single-file audiobook releases.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ID3v2.4) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://id3.org/id3v2.4.0-structure
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

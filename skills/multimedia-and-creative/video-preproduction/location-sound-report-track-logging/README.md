# Location Sound Report Track Logging

## Description
Logs daily multitrack sound files with scene numbers, take ratings, microphone channels, and timecodes. Use when preparing audio deliverables for post-production sound editors.

## Purpose
Location sound recordists maintain detailed sound reports documenting track channel allocations (boom, lavalier 1, lavalier 2), false takes, room tone tracks, and director preferred takes.

## When to Use
- When executing location sound report track logging in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Sound Report, Multitrack Audio) cannot be provisioned.

## Supported Technologies
- Sound Report
- Multitrack Audio
- Timecode / BWF Metadata
- Location Sound

## Example Use Cases
### Feature Film Production Audio Delivery
Providing picture editors with daily sound reports detailing 8-channel polyphonic WAV recordings.

### Documentary Audio Archival Logging
Documenting specific microphone channel assignments across 50 hours of unscripted reality footage.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Sound Report) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Sound_report
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

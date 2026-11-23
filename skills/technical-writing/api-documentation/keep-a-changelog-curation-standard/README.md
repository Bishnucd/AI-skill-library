# Keep A Changelog Curation Standard

## Description
Curates human-readable release notes categorized into Added, Changed, Deprecated, and Fixed using Keep a Changelog. Use when communicating software updates clearly to developers.

## Purpose
Dumping raw Git commit logs into changelogs alienates users. Keep a Changelog curates updates for humans, categorizing changes into Added, Changed, Deprecated, Removed, Fixed, and Security.

## When to Use
- When executing keep a changelog curation standard in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Keep a Changelog, Release Notes) cannot be provisioned.

## Supported Technologies
- Keep a Changelog
- Release Notes
- Semantic Versioning
- Markdown

## Example Use Cases
### Open-Source Library Release Notes
Publishing clear, structured changelogs for an npm package informing developers of bug fixes and API changes.

### SaaS Platform Monthly Product Updates
Summarizing monthly feature releases and deprecation notices for enterprise system administrators.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Keep a Changelog) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://keepachangelog.com/en/1.1.0/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

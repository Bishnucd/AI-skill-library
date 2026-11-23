# Release Notes Announcement Curation

## Description
Crafts developer-facing release notes highlighting major value updates, deprecations, and upgrade paths. Use when announcing major version upgrades to external developer communities.

## Purpose
Major releases require polished announcement posts that explain why new features matter, demonstrate code migration before/after comparisons, and provide transparent deprecation timelines.

## When to Use
- When executing release notes announcement curation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Release Notes, Developer Marketing) cannot be provisioned.

## Supported Technologies
- Release Notes
- Developer Marketing
- Upgrade Guides
- Technical Communication

## Example Use Cases
### Major SDK v2.0 Release Announcement
Publishing a comprehensive upgrade blog post guiding 5,000 developers from v1 to v2 with codemods.

### Cloud Platform Quarterly Feature Roundup
Highlighting new CLI commands, increased performance quotas, and newly supported cloud regions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Release Notes) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Release_notes
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

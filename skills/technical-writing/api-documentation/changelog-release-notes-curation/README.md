# Changelog Release Notes Curation

## Description
Curates customer-facing changelogs and release notes categorizing features, improvements, and breaking changes. Use when communicating product updates and API migrations to developers.

## Purpose
Raw git commit logs are useless to customers. A curated changelog groups updates into Added, Changed, Deprecated, Removed, Fixed, and Security, with clear upgrade instructions for breaking changes.

## When to Use
- When executing changelog release notes curation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Keep a Changelog, Markdown) cannot be provisioned.

## Supported Technologies
- Keep a Changelog
- Markdown
- Semantic Versioning
- Git

## Example Use Cases
### API Version Release Notes
Publishing clear upgrade notices when deprecating legacy endpoints or parameters.

### Product Launch Announcements
Communicating monthly product improvements to active customers and stakeholders.

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

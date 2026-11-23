# Slack Canvas Meeting Notes Sync

## Description
Creates and updates collaborative Slack Canvases with live agenda items and meeting minutes via the Slack API. Use when embedding shared meeting documentation directly in Slack channels.

## Purpose
Slack Canvases provide persistent rich-text documentation surfaces tied directly to Slack channels. Programmatically writing agendas and notes keeps documentation where team discussions occur.

## When to Use
- When executing slack canvas meeting notes sync in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Slack Web API, Slack Canvases) cannot be provisioned.

## Supported Technologies
- Slack Web API
- Slack Canvases
- Markdown
- TypeScript

## Example Use Cases
### Channel-Bound Standup Notes
Maintaining an updated weekly meeting log embedded directly inside engineering team channels.

### Incident War Room Briefings
Publishing live technical incident updates to dedicated war room Slack Canvases.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Slack Web API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://api.slack.com/methods/canvases.create
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Slack Standup Bot Aggregator

## Description
Collects asynchronous team daily standup updates via interactive Slack modals and posts aggregated team summaries. Use when running asynchronous agile standup workflows in Slack.

## Purpose
Asynchronous standups eliminate scheduling friction across timezones. A Slack bot prompts team members with standard agile prompts and publishes a tidy, summarized digest.

## When to Use
- When executing slack standup bot aggregator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Slack Bolt SDK, Block Kit) cannot be provisioned.

## Supported Technologies
- Slack Bolt SDK
- Block Kit
- Node.js / Python
- Redis

## Example Use Cases
### Distributed Team Standups
Running daily check-ins for teams spanning North America, Europe, and Asia.

### Blocker Escalation
Instantly alerting engineering managers when team members flag active impediments.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Slack Bolt SDK) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://api.slack.com/block-kit
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

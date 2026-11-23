# Github Apps Oauth Installation Flow

## Description
Authors GitHub Apps with organization installation tokens, webhook listeners, and fine-grained permissions. Use when building deep developer tooling integrations with GitHub repositories.

## Purpose
Legacy OAuth apps require broad all-or-nothing repository permissions. GitHub Apps support fine-grained repository access, organization installations, and short-lived 1-hour installation tokens.

## When to Use
- When executing github apps oauth installation flow in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GitHub Apps, Octokit) cannot be provisioned.

## Supported Technologies
- GitHub Apps
- Octokit
- Webhooks
- OAuth2 / App Tokens

## Example Use Cases
### Automated PR Code Review Bot
Building a GitHub App that automatically analyzes opened pull requests and leaves inline code review comments.

### Issue Triage and Auto-Labeling Integration
Listening to issues.opened webhook events to automatically categorize bug reports and assign team tags.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GitHub Apps) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.github.com/en/apps/creating-github-apps
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

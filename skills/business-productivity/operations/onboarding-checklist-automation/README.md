# Onboarding Checklist Automation

## Description
Automates employee and developer onboarding workflows across identity providers, repos, and communication tools. Use when standardizing and streamlining team member onboarding.

## Purpose
Manual onboarding creates security gaps and delays time-to-productivity. Standardized checklists and automated provisioning scripts ensure new hires receive required access on day one.

## When to Use
- When executing onboarding checklist automation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (YAML, GitHub API) cannot be provisioned.

## Supported Technologies
- YAML
- GitHub API
- Slack API
- Google Workspace API

## Example Use Cases
### Engineering Team Onboarding
Getting new developers from zero to their first production commit within 3 days.

### Remote Work Provisioning
Streamlining equipment dispatch and security credential enrollment for remote staff.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (YAML) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/okta/okta-sdk-nodejs
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

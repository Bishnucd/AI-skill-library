# Browser Clipboard Copy Paste Simulation

## Description
Grants OS clipboard permissions and simulates cut, copy, and paste clipboard events in headless browsers. Use when automating and verifying clipboard copying interactions on web pages.

## Purpose
Testing "Copy to Clipboard" buttons requires granting browser clipboard-read and clipboard-write permissions and verifying clipboard contents directly from browser context APIs.

## When to Use
- When executing browser clipboard copy paste simulation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Clipboard API, Playwright) cannot be provisioned.

## Supported Technologies
- Clipboard API
- Playwright
- Permissions
- TypeScript

## Example Use Cases
### API Key Copy Button Verification
Ensuring developer portal copy buttons copy the entire API key without truncation.

### Share Link Generation Testing
Verifying that generated share URLs include correct tracking referral tags.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Clipboard API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/api/class-browsercontext#browser-context-grant-permissions
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

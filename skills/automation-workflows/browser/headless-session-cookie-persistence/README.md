# Headless Session Cookie Persistence

## Description
Persists and restores browser session cookies, local storage, and authentication states across headless Playwright runs. Use when automating authenticated web application sessions.

## Purpose
Authenticating repeatedly during automated scraping or test runs triggers rate limits and CAPTCHAs. Saving authenticated browser storage state allows instances to resume logged-in sessions instantly.

## When to Use
- When executing headless session cookie persistence in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, Node.js) cannot be provisioned.

## Supported Technologies
- Playwright
- Node.js
- JSON
- TypeScript

## Example Use Cases
### Authenticated Web Scraping
Executing periodic data extraction from internal portals without logging in each time.

### Test Suite Acceleration
Eliminating login screen execution from thousands of E2E browser test cases.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/auth
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

# Browser Tab Multi Context Orchestration

## Description
Orchestrates multiple isolated browser contexts and tabs to simulate multi-user collaboration. Use when testing real-time chat, collaborative docs, and multi-party workflows.

## Purpose
Testing collaborative software (e.g. Google Docs, multiplayer tools) requires separate authenticated browser instances. Browser contexts provide lightweight incognito profiles within a single browser.

## When to Use
- When executing browser tab multi context orchestration in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, Multi-Context) cannot be provisioned.

## Supported Technologies
- Playwright
- Multi-Context
- WebSockets
- TypeScript

## Example Use Cases
### Real-Time Collaborative Editing Tests
Verifying concurrent CRDT text editing between two users without race condition locks.

### Buyer-Seller Marketplace Transactions
Simulating a buyer purchasing an item while verifying immediate seller dashboard updates.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/browser-contexts
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

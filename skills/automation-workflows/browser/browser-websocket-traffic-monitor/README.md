# Browser Websocket Traffic Monitor

## Description
Intercepts and inspects bidirectional WebSocket frames in headless browser sessions. Use when debugging real-time WebSocket subscriptions and streaming data protocols.

## Purpose
Modern single-page applications stream financial tickers and notifications over WebSockets rather than HTTP. Monitoring page.on("websocket") frames exposes real-time message payloads.

## When to Use
- When executing browser websocket traffic monitor in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, WebSocket Frames) cannot be provisioned.

## Supported Technologies
- Playwright
- WebSocket Frames
- Node.js
- JSON

## Example Use Cases
### Crypto & Stock Ticker Testing
Asserting that live price ticker widgets update properly when incoming price frames arrive.

### Real-Time Chat E2E Testing
Verifying that chat message JSON payloads adhere to protocol schemas during conversations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/network#websockets
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

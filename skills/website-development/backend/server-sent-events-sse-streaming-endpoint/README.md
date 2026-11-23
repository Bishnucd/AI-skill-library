# Server Sent Events Sse Streaming Endpoint

## Description
Builds scalable, persistent Server-Sent Events (SSE) HTTP streaming endpoints with auto-reconnect. Use when streaming LLM tokens, live notifications, or dashboard tickers to browsers.

## Purpose
WebSockets require custom protocols and fail through corporate HTTP proxies. SSE uses standard HTTP with text/event-stream headers, providing native browser EventSource support and auto-reconnect.

## When to Use
- When executing server sent events sse streaming endpoint in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Server-Sent Events (SSE), HTTP Streaming) cannot be provisioned.

## Supported Technologies
- Server-Sent Events (SSE)
- HTTP Streaming
- FastAPI / Express
- Real-Time

## Example Use Cases
### Generative AI LLM Token Streaming
Streaming word-by-word LLM generation tokens to frontend web chat interfaces in real time.

### Live Order Status Tracker
Pushing delivery driver GPS location updates to customer mobile browsers over standard HTTP.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Server-Sent Events (SSE)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

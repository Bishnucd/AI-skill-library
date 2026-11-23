# Sse Streaming Event Api Design

## Description
Designs real-time Server-Sent Events (SSE) endpoints with event types, IDs, and client reconnection handling. Use when streaming continuous token responses or real-time event updates over HTTP.

## Purpose
SSE provides a lightweight, unidirectional HTTP streaming channel that browser EventSource clients can consume natively with built-in auto-reconnection and event ID tracking.

## When to Use
- When executing sse streaming event api design in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Server-Sent Events (SSE), HTTP/1.1 & HTTP/2) cannot be provisioned.

## Supported Technologies
- Server-Sent Events (SSE)
- HTTP/1.1 & HTTP/2
- Node.js / Python
- Streaming

## Example Use Cases
### LLM Token Streaming
Streaming word-by-word language model responses to web browsers in real time.

### Live Dashboard Metric Feeds
Pushing real-time server telemetry updates to operational monitoring screens.

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

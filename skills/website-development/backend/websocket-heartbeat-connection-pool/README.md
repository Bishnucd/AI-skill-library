# Websocket Heartbeat Connection Pool

## Description
Manages scalable WebSocket connection pools with ping/pong heartbeats and reconnection backoff. Use when maintaining persistent real-time connections to thousands of concurrent clients.

## Purpose
Silent TCP connection drops leave zombie sockets open on servers, wasting memory and missing messages. Periodic ping/pong heartbeats detect dead clients, pruning stale connections proactively.

## When to Use
- When executing websocket heartbeat connection pool in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (WebSockets, Heartbeat Ping/Pong) cannot be provisioned.

## Supported Technologies
- WebSockets
- Heartbeat Ping/Pong
- Connection Pool
- Real-Time

## Example Use Cases
### Collaborative Document Real-Time Sync
Maintaining active WebSocket presence lists for users co-editing canvas documents.

### Mobile Chat Zombie Socket Pruning
Pruning dead WebSocket connections when mobile users enter underground subway tunnels without clean close frames.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (WebSockets) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0

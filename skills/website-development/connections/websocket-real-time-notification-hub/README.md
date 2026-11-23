# Websocket Real Time Notification Hub

## Description
Implements scalable real-time bidirectional WebSocket notification servers with Redis Pub/Sub backplanes. Use when streaming live alerts, chat messages, and updates to web clients.

## Purpose
Polling servers for updates creates wasteful HTTP traffic. WebSockets maintain persistent bidirectional connections, while a Redis Pub/Sub adapter coordinates message delivery across multiple server nodes.

## When to Use
- When executing websocket real time notification hub in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (WebSockets, Socket.io) cannot be provisioned.

## Supported Technologies
- WebSockets
- Socket.io
- Redis Pub/Sub
- Node.js

## Example Use Cases
### In-App Live Notification Bell
Streaming immediate activity notifications to active web users without page refreshes.

### Collaborative Multi-User Sync
Broadcasting live cursor movements and document edits across collaborating users.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (WebSockets) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://socket.io/docs/v4/redis-adapter/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
